import * as THREE from "three";
import { DDSLoader } from "three/examples/jsm/Addons.js";

const DDS = new DDSLoader();
const loadDDS = (url: string) => new Promise((res, rej) => DDS.load(url, res, undefined, rej));

const titleURL = (kind: string, level: number, col: number, row: number, ext: string) => `${kind}/level${level}/tx_${col}_${row}.${ext}`

interface mkargs {
    path: string;
    level: number;
    col: number;
    row: number;
    cols: number;
    rows: number;
    radius?: number;
}

export async function mktitle({ path, level, col, row, cols, rows, radius = 1 }: mkargs) {
    const phi = (2*Math.PI)/cols;
    const theta = Math.PI/rows;

    const geo = new THREE.SphereGeometry(
        radius, 36, 16,
        col * phi, phi,
        row * theta, theta
    );

    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - uv.getY(i));

    const [map, nrm] = await Promise.all([
        loadDDS(titleURL(`${path}texture`, level, col, row, "dds")),
        loadDDS(titleURL(`${path}normal`, Math.min(level, 2), col, row, "dxt5nm"))
    ]) as THREE.CompressedTexture[];

    // http://localhost:5173/textures/callisto/textures/hires/normal/level0/tx_0_0.dxt5nm

    for (const t of [map, nrm]) {
        t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
        t.anisotropy = 8;
        if (t.mipmaps.length <= 1) t.minFilter = THREE.LinearFilter;
    }

    map.colorSpace = THREE.SRGBColorSpace;

    return new THREE.Mesh(geo, makeMaterial(map, nrm));
};

export function makeMaterial(map: THREE.CompressedTexture, normalMap: THREE.CompressedTexture) {
    const mat = new THREE.MeshPhysicalMaterial({
        map, normalMap, roughness: 0.95, metalness: 0.0, color: 0xc9b199
    })

    mat.onBeforeCompile = (shader) => {
        const patched = THREE.ShaderChunk.normal_fragment_maps.replace(
            "vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",
            `vec4 nm = texture2D( normalMap, vNormalMapUv );
            vec2 nxy = vec2( nm.a, nm.g ) * 2.0 - 1.0;   // DXT5nm: X in alpha, Y in green
            vec3 mapN = vec3( nxy, sqrt( max( 0.0, 1.0 - dot( nxy, nxy ) ) ) );`
        );
        shader.fragmentShader = shader.fragmentShader.replace(
            "#include <normal_fragment_maps>", patched
        );
    };

    mat.customProgramCacheKey = () => "dxt5nm";
    mat.normalScale.set(0.6, 0.6)
        
    return mat;
}

export async function buildLevel(path: string, level: number, radius=1) {
    const cols = 2 ** (level + 1), rows = 2 ** level;
    const group = new THREE.Group();
    const jobs = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            jobs.push(mktitle({path, level, col:c, row:r, cols, rows, radius}).then(m => group.add(m)));
        };
    };

    await Promise.all(jobs);
    return group;
};
