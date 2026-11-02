// import { useEffect, useRef } from "react"
import Section from "@components/section"
// import SectionHeader from "@/components/section_header"
// import Navbar from "@modules/header"
import SolarSystem from "@modules/solar_system"

// import Scrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// Scrollbar.use(OverscrollPlugin);

export default function App() {
//     const main = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const scrollbar = Scrollbar.init(main.current!, {
//             damping: 0.07, // Lower = smoother and more momentum
//             plugins: {
//                 overscroll: {
//                     effect: 'bounce', // Enables rubber-band effect
//                     damping: 0.2,
//                     maxOverscroll: 150,
//                     onScroll({ y }: {y:number}) {
//     // y is the current overscroll in px; apply a resistance curve
//     const max = 300;
//     const resisted = max * (1 - Math.exp(-Math.abs(y) / max)) * Math.sign(y);
//     main.current!.style.transform = `translate3d(0, ${-resisted}px, 0)`;
//   },
//                 },
//             },
//         });
//     }, [])

    return <>
        <main>
            {/* @ts-ignore */}
            <Section background={<SolarSystem />} id="title-card">
                <p>Rapport d'habitabilité</p>
                <h1>Callisto</h1>
            </Section>

            {/* @ts-ignore */}
            <Section id="second-card">
                <h2>Section 1</h2>
                <h1>Infos générales</h1>
                <h3>Paramètres lunaires</h3>
                <ul>
                    <li>Radius: 2410.3 km (~2.64 R_⊕)</li>
                    <li>Demi-grande axe: 1882.7 * 10^3 km (eccentricité: 0.007)</li>
                    <li>Masse: 1075.9 * 10^20 kg</li>
                    <li>Période orbitale: 16.689 journées</li>
                </ul>
            </Section>

            {/* @ts-ignore */}
            <Section id="third-card">
                <h2>Section 2</h2>
                <h1>Composition</h1>
                <h3>Eau</h3>
                <ul>
                    <li>Radius: 2410.3 km (~2.64 R_⊕)</li>
                    <li>Demi-grande axe: 1882.7 * 10^3 km (eccentricité: 0.007)</li>
                    <li>Masse: 1075.9 * 10^20 kg</li>
                    <li>Période orbitale: 16.689 journées</li>
                </ul>
            </Section>
        </main>
    </>
}
