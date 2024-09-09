import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      optipng: {
        optimizationLevel: 9,
      },
      mozjpeg: {
        quality: 20,
      },

      pngquant: {
        quality: [0.6, 0.8],
      },
      webp: {
        quality: 20,
      },
    }),
  ],
});
