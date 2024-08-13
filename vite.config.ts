import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgrPlugin(),
        tsconfigPaths(),
        checker({
            overlay: true,
            typescript: true,
        })
    ],
})
