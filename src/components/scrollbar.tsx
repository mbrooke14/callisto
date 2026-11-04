import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollbarProps extends React.ComponentPropsWithoutRef<"div"> {
    padding: number,
    width: number,
    height: number,
    color: string,
    thumbheight: number,
    thumbcolor: string
}

export default function Scrollbar({padding=0, ...props}: ScrollbarProps) {
    const thumb = useRef<HTMLDivElement>(null);

    const container_style: React.CSSProperties = {
        position: "fixed",
        inset: `0 ${padding}px 0 auto`,
        display: "flex",
        alignItems: "center"
    }

    const scrollbar_style: React.CSSProperties = {
        width: props.width,
        height: props.height,
        background: props.color,
        borderRadius: `${props.width/2}px`
    }

    const thumb_style: React.CSSProperties = {
        width: props.width,
        height: props.thumbheight,
        background: props.thumbcolor,
        borderRadius: `${props.width/2}px`,
        position: "relative"
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const s = Math.min(window.scrollY/(document.body.scrollHeight - document.body.clientHeight), 1);
            thumb.current!.style.top = `${s*(props.height-props.thumbheight)}px`;
        });
    }, []);

    return <div id="scrollbar-container" style={container_style}>
        <div id="scrollbar" style={scrollbar_style} {...props}>
            <div id="scrollbar-thumb" ref={thumb} style={thumb_style}></div>
        </div>
    </div>
}
