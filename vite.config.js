import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// see all documentation here https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build change as your need
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "/@/": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      assets: path.resolve(__dirname, "./src/assets"),
      examples: path.resolve(__dirname, "./src/examples"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      routes: path.resolve(__dirname, "./src/routes"),
      footer: path.resolve(__dirname, "./src/footer"),
    },
  },
  esbuild: {
    loader: "jsx",
    include: ["src/**/*.jsx", "src/**/*.js", "node_modules/**/*.js"],
    exclude: [],
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  base: "./",
});
