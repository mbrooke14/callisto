// import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import Navbar from '@modules/header';
import "@/index.css";

import App from "@/pages/app";
import Bibliography from '@/pages/bibliography';

const elem = document.getElementById("root") as HTMLDivElement;
const root = createRoot(elem);

function checkscroll() {
    if (window.scrollY > window.innerHeight) {
        document.body.setAttribute("style", "background: #111111")
    } else {
        document.body.setAttribute("style", "background: black")
    }

    requestAnimationFrame(checkscroll)
}

checkscroll()

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sources" element={<Bibliography />} />
    </Routes>
  </BrowserRouter>
);
