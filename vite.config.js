import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "src", "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, "src/scripts/index.js"),
        sw: resolve(__dirname, "src/scripts/sw.js"), // Include service worker as an entry point
      },
      output: {
        entryFileNames: "[name].bundle.js",
        chunkFileNames: "[name].bundle.js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "scripts/sw.js",
          dest: "",
          rename: "sw.bundle.js",
        },
      ],
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
});
