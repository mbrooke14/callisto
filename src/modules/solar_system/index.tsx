import View from "@components/view";
import { useEffect, useRef } from "react";

// import { WebGPURenderer } from "three/webgpu"
import * as THREE from "three";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
// import { FilmPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

import { buildLevel } from "./celestia";

// distance scale 1u = 10μAU
const d_ƶ = 5.204e5;
const d_κ = 0.0126e5;
const d_c = 2.75;
const r_s = 0.00465047e5;
const r_ƶ = 0.0004779e5;
const r_κ = 0.00001611e5;

let θ_κ = 0.5;
let θ_c = 0;

interface SolarSystemProps extends React.ComponentPropsWithoutRef<"canvas"> {}

export default function SolarSystem(props: SolarSystemProps) {
	const renderer = useRef<THREE.WebGLRenderer>(null);
	const camera = useRef<THREE.PerspectiveCamera>(null);
	const composer = useRef<EffectComposer>(null);
	const scene = useRef<THREE.Scene>(null);
	const ref = useRef<View>(null);

	const body = useRef<THREE.Group>(null);
	const jupiter = useRef<THREE.Mesh>(null);

	const resize = (w: number, h: number) => {
		renderer.current!.setSize(w, h - 72);
		camera.current!.aspect = w / (h - 72);
		camera.current?.updateProjectionMatrix();
	};

	useEffect(() => {
		const canvas = ref.current!.getCanvas();

		renderer.current = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			powerPreference: "high-performance",
			logarithmicDepthBuffer: true,
		});
		renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.current.setSize(window.innerWidth, window.innerHeight);

		renderer.current.outputColorSpace = THREE.SRGBColorSpace;

		scene.current = new THREE.Scene();
		camera.current = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			1,
			d_ƶ + d_κ + d_c,
		);

		camera.current.setViewOffset(
			canvas.width,
			canvas.height,
			-(100/288)*canvas.width,
			0,
			canvas.width,
			canvas.height,
		);

		composer.current = new EffectComposer(renderer.current);

		composer.current.addPass(
			new RenderPass(scene.current!, camera.current!),
		);

        // composer.current.addPass(
        //     new FilmPass(1.0, false)
        // );

		const bloom = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			2.5, // strength
			0.7, // radius
			0.9, // threshold
		);

		composer.current.addPass(bloom);

		async function createBody() {
			const r = renderer.current!;
			// await r.init()

			const callisto = await buildLevel(
				"/textures/callisto/textures/hires/",
				2,
				r_κ,
			);

			const meshes: THREE.Mesh[] = [];
			callisto.traverse((o) => {
				if ((o as THREE.Mesh).isMesh) meshes.push(o as THREE.Mesh);
			});

			for (const m of meshes) {
				const mat = m.material as THREE.MeshStandardMaterial;
				if (mat.map) r.initTexture(mat.map);
				if (mat.normalMap) r.initTexture(mat.normalMap);
				await new Promise((res) => requestAnimationFrame(res));
			}

			// build pipelines/shaders before the first visible frame
			await r.compileAsync(callisto, camera.current!);

			body.current = callisto;
			scene.current!.add(body.current);

			const c = new THREE.Mesh(
				new THREE.SphereGeometry(r_κ, 64, 32),
				new THREE.MeshBasicMaterial({ color: 0xffffff }),
			);

			c.position.z = d_ƶ + d_κ;

			// scene.current!.add(c)
		}

		createBody().catch(console.error);

		(async () => {
			const jupiter_tex = await new THREE.TextureLoader().loadAsync(
				"/textures/jupiter/texture.jpg",
			);

			jupiter_tex.colorSpace = THREE.SRGBColorSpace;

			jupiter.current = new THREE.Mesh(
				new THREE.SphereGeometry(r_ƶ, 128, 64),
				new THREE.MeshStandardMaterial({
					map: jupiter_tex,
					roughness: 1,
				}),
			);

			jupiter.current.position.z = d_ƶ;
			// jupiter.current.position.x = 300

			scene.current!.add(jupiter.current);
		})();

		const sun = new THREE.PointLight(0xffffff, 8e11, 0);
		sun.position.set(0, 0, 0);
        scene.current.add(sun);
        
		const sun_sphere = new THREE.Mesh(
            new THREE.SphereGeometry(r_s, 4, 2),
			new THREE.MeshBasicMaterial({
                color: new THREE.Color().setRGB(10, 10, 10),
				toneMapped: false,
			}),
		);

        setTimeout(() => {
            scene.current!.add(sun_sphere);
        }, 800)

		const fill = new THREE.HemisphereLight(0x35445f, 0x08090d, 0.6);

		scene.current.add(fill);

		renderer.current.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.current.toneMappingExposure = 1;

        renderer.current!.setAnimationLoop((time: number) => {
            θ_κ = time / 20000 + Math.PI;
            // θ_c = (time / 3000) % (7 * Math.PI / 4) + 9 * Math.PI / 8;
            const t = time / 1000
            const d = Math.tanh(t - Math.PI/1.8)/2 + t/10 + 1
            θ_c = (d) % (7 * Math.PI / 4) + 9 * Math.PI / 12;

            camera.current!.position.x =
                0.0 + d_κ * Math.sin(θ_κ) + d_c * Math.sin(θ_c);
            camera.current!.position.z =
                d_ƶ + d_κ * Math.cos(θ_κ) - d_c * Math.cos(θ_c);
            camera.current!.position.y = 1

            camera.current!.rotation.y = Math.PI - θ_c;
            camera.current!.rotation.z = Math.PI / 16

            if (body.current) {
                body.current.rotation.y = θ_κ;
                body.current.position.x = d_κ * Math.sin(θ_κ);
                body.current.position.z = d_ƶ + d_κ * Math.cos(θ_κ);
            }
            if (jupiter.current) jupiter.current.rotation.y = time / 6000;

            // renderer.current!.render(scene.current!, camera.current!);
            composer.current!.render();
        })
        

		const onResize = () => resize(window.innerWidth, window.innerHeight);
		window.addEventListener("resize", onResize);

		resize(window.innerWidth, window.innerHeight);

		return () => {
			window.removeEventListener("resize", onResize);
			renderer.current?.setAnimationLoop(null);
			renderer.current?.dispose();
		};
	}, []);

	return <View ref={ref} {...props} />;
}
