import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

import Bibliography from "@/pages/bibliography";
import App from "@/pages/app";

import Navbar from "@modules/header";
import "@/index.css";

const elem = document.getElementById("root") as HTMLDivElement;
const root = createRoot(elem);

function Main() {
    const app = useRef<App>(null)
    let [sectionName, setSectionName] = useState("");

    useEffect(() => {
        const sections = app.current!.getSections();

        function scroll() {
            const y = sections.map(s => s.ref.current.getBoundingClientRect().bottom);
            for (const i in y) {if (y[i] > 0) {var ci = Number(i); break}};

            document.body.style.backgroundColor = ci!+1<=sections.length ? "#000" : "#111";
            setSectionName(sections[ci!].name);
        }

        window.addEventListener("scroll", scroll); scroll();
    }, [])

	return (
		<BrowserRouter>
			<Navbar section={sectionName} />
			<Routes>
				<Route path="/" element={<App ref={app} />} />
				<Route path="/sources" element={<Bibliography />} />
			</Routes>
		</BrowserRouter>
	);
}

root.render(<Main />);
