import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/landingPage/",
  plugins: [react()],
  server: {
    port: 4000,
  },
});
