import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    minify: false,
  },
  test: {
    server: {
      deps: {
        inline: ["example-deps"],
      },
    },
  },
});
