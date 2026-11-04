import { useRef, forwardRef, useImperativeHandle, type RefObject } from "react";

interface View {
    get2D: () => CanvasRenderingContext2D | null,
    getWGL: () => WebGLRenderingContext | null,
    getWGL2: () => WebGL2RenderingContext | null,
    getBMR: () => ImageBitmapRenderingContext | null,
    getCanvas: () => HTMLCanvasElement
};

interface ViewProps extends React.ComponentPropsWithoutRef<"canvas"> {}

const View = forwardRef<View,ViewProps>((props, r) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useImperativeHandle(r, () => ({
        get2D:   () => (ref as RefObject<HTMLCanvasElement>).current.getContext("2d"),
        getWGL:  () => (ref as RefObject<HTMLCanvasElement>).current.getContext("webgl"),
        getWGL2: () => (ref as RefObject<HTMLCanvasElement>).current.getContext("webgl2"),
        getBMR:  () => (ref as RefObject<HTMLCanvasElement>).current.getContext("bitmaprenderer"),
        getCanvas: () => (ref as RefObject<HTMLCanvasElement>).current
    }));

    return <canvas {...props} ref={ref} />;
});

export default View;
