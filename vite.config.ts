import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// If running inside a symlink/junction, normalize process.cwd() to realpath to prevent Rollup/Vite path resolution bugs
if (fs.existsSync(process.cwd())) {
  const realCwd = fs.realpathSync(process.cwd());
  if (path.resolve(realCwd).toLowerCase() !== path.resolve(process.cwd()).toLowerCase()) {
    process.chdir(realCwd);
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
