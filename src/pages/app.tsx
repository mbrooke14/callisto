import { forwardRef, useEffect, useImperativeHandle, useRef, type RefObject } from "react";
import JsxParser from "react-jsx-parser";
import { marked } from "marked";

import InfoSection from "./data/callisto/info";
import WhySection from "./data/callisto/why";
import ResourcesSection from "./data/callisto/resources";
import EnvSection from "./data/callisto/env";
import PhysioSection from "./data/callisto/physio";
import LogSection from "./data/callisto/log";
import CompareSection from "./data/callisto/compare";
import AdaptSection from "./data/callisto/adapt";

import SolarSystem from "@modules/solar_system";
import Scrollbar from "@/components/scrollbar";
import Section from "@components/section";
import data from "./data/callisto.json";
import Footer from "@/components/footer";

import { titleanim, infoanim, whyanim, resourceanim, envanim, physioanim, loganim } from "./scripts/animations";

const mds = import.meta.glob("./data/callisto/*.md", { query: "?raw", import: "default", eager: true });

interface SectionRef { ref: RefObject<HTMLDivElement>, name: string };
interface App { getSections: () => SectionRef[] };

const App = forwardRef<App>((_, fref) => {
    const modl = useRef<HTMLCanvasElement>(null)
    const html = data.sections.map(v => marked.parse(mds[v.path]));
    const cmps = [<JsxParser jsx={marked.parse(mds[data.sections[0].path]) as string} renderInWrapper={false}/>, <InfoSection />, <WhySection />, <ResourcesSection />, <EnvSection />, <PhysioSection />, <LogSection />, <CompareSection />, <AdaptSection />]
    const refs = Array.from({ length: data.sections.length }, () => useRef<HTMLDivElement>(null));
    const anim = [titleanim, infoanim, whyanim, resourceanim, envanim, physioanim, loganim] as ((sectionref: React.RefObject<HTMLDivElement>) => void)[];
    const back = [] as React.JSX.Element[];

    const sections = data.sections.map((section,i) => (
        <Section ref={refs[i]} className={section.jsx_class} id={section.jsx_id} background={back[i]} key={i}>
            {cmps[i] ?? <JsxParser jsx={html[i] as string} renderInWrapper={false}/>}
        </Section>
    ))

	useImperativeHandle(fref, () => ({
		getSections: () => refs.map((ref,i) => ({
            ref: ref as React.RefObject<HTMLDivElement>,
            name: data.sections[i].id
        }))
	}));

    const solarsystemstyle: React.CSSProperties = {
        position: "fixed",
        inset: "72px 0 0 0",
        zIndex: "-11"
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            anim.forEach((f,i) => f(refs[i] as React.RefObject<HTMLDivElement>))
            if (refs[sections.length-1].current!.getBoundingClientRect().bottom-100<window.innerHeight) {
                modl.current!.style.opacity = "0"
            } else {
                modl.current!.style.opacity = "1"
            }
            refs[8].current!.style.height = "1200px"
        });
    }, []);

	return (<>
        <SolarSystem ref={modl} style={solarsystemstyle} />
        <Scrollbar width={6} height={200} thumbheight={40} padding={24} color="#444444" thumbcolor="#ffffff"/>
        <main>{sections}<Footer /></main>
    </>);
});

export default App;
