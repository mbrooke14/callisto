import { defineConfig } from "vite"
import path from "path"

import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
    ],
    resolve: {
        alias: {
            "@":            path.resolve(import.meta.dirname, "./src"),
            "@components":  path.resolve(import.meta.dirname, "./src/components"),
            "@modules":     path.resolve(import.meta.dirname, "./src/modules"),
            "@assets":     path.resolve(import.meta.dirname, "./public/assets")
        }
    }
});
