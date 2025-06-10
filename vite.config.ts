import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync } from "fs";

export default defineConfig(({ mode }) => {
  const config = {
    base: "/chandan-projects-portfolio/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      {
        name: 'copy-index-to-404',
        closeBundle() {
          const indexHtml = readFileSync('dist/index.html');
          writeFileSync('dist/404.html', indexHtml);
        },
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
  return config;
});
