import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.pl'],
  publicDir: 'public',
  build: {
    assetsInlineLimit: 0,
    commonjsOptions: {
      include: [/tau-prolog/, /node_modules/],
      transformMixedEsModules: true
    },
  },
  optimizeDeps: {
    include: ['tau-prolog'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
}));
