import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      
      "@application": path.resolve(__dirname, "./src/application"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
      "@presentation": path.resolve(__dirname, "./src/presentation")
    }
  }
});