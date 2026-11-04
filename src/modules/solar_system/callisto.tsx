import View from "@components/view";
import { useEffect, useRef } from "react";

// import { WebGPURenderer } from "three/webgpu"
import * as THREE from "three";


import { buildLevel } from "./celestia";

// distance scale 1u = 10μAU
const d_c = 2.75;
const r_κ = 0.00001611e5;

// let θ_c = 0;

interface CallistoProps extends React.ComponentPropsWithoutRef<"canvas"> {
    width: number,
    height: number
}

export default function Calliso({width, height, ...props}: CallistoProps) {
	const renderer = useRef<THREE.WebGLRenderer>(null);
	const camera = useRef<THREE.PerspectiveCamera>(null);
	const scene = useRef<THREE.Scene>(null);
	const ref = useRef<View>(null);

	const body = useRef<THREE.Group>(null);

    let rot = [0, 0]

	const resize = (w: number, h: number) => {
		renderer.current!.setSize(w, h);
		camera.current!.aspect = w / h;
		camera.current?.updateProjectionMatrix();
	};

	useEffect(() => {
		const canvas = ref.current!.getCanvas();

		renderer.current = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			powerPreference: "high-performance",
            alpha: true
			// logarithmicDepthBuffer: true,
		});
		renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.current.setSize(width, height);

		renderer.current.outputColorSpace = THREE.SRGBColorSpace;

		scene.current = new THREE.Scene();
		camera.current = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
            100
		);

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
		}

		createBody().catch(console.error);

        const light = new THREE.DirectionalLight(0xffffff, 2.5)
        light.position.set(2,0.5,1)
        scene.current.add(light)

		// const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 2.5);
        // scene.current.add(light);

		renderer.current.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.current.toneMappingExposure = 1;

        renderer.current!.setAnimationLoop(() => {
            // const t = time / 1000
            // // θ_c = t;

            camera.current!.position.z = d_c;

            if (body.current) {
                body.current.rotation.y = rot[0] + window.scrollY / 2000;
                body.current.rotation.x = rot[1];
            }

            renderer.current!.render(scene.current!, camera.current!);
        })

        window.addEventListener("mousemove", (e: MouseEvent) => {
            rot = [e.clientX / 2000, e.clientY / 2000];
        });

		resize(width, height);

		return () => {
			renderer.current?.setAnimationLoop(null);
			renderer.current?.dispose();
		};
	}, []);

	return <View ref={ref} {...props} />;
}
