import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite"; 
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: `${path.resolve(__dirname, "./src/components")}`,
      pages: `${path.resolve(__dirname, "./src/pages")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
    },
  },
  define: {
    "process.env": {},
  },
});
