import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/github-actions-demo/",
  server: {
    open: true,
    port: 3001,
  },
});
