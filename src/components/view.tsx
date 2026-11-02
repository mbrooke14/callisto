import { useRef, forwardRef, useImperativeHandle, type RefObject } from "react";

interface View {
    get2D: () => CanvasRenderingContext2D | null,
    getWGL: () => WebGLRenderingContext | null,
    getWGL2: () => WebGL2RenderingContext | null,
    getBMR: () => ImageBitmapRenderingContext | null,
    getCanvas: () => HTMLCanvasElement
};

const View = forwardRef<View>((_, r) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useImperativeHandle(r, () => ({
        get2D:   () => (ref as RefObject<HTMLCanvasElement>).current.getContext("2d"),
        getWGL:  () => (ref as RefObject<HTMLCanvasElement>).current.getContext("webgl"),
        getWGL2: () => (ref as RefObject<HTMLCanvasElement>).current.getContext("webgl2"),
        getBMR:  () => (ref as RefObject<HTMLCanvasElement>).current.getContext("bitmaprenderer"),
        getCanvas: () => (ref as RefObject<HTMLCanvasElement>).current
    }));

    return <canvas ref={ref} />;
});

export default View;
