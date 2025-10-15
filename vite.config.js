import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "three",
      "postprocessing",
      "@react-three/postprocessing",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  resolve: {
    alias: {
      three: "three",
    },
  },
  build: {
    target: "esnext", // ensures compatibility with postprocessing's ESM modules
  },
  server: {
    hmr: {
      overlay: true, // optional: keeps the Vite overlay for errors
    },
  },
});
