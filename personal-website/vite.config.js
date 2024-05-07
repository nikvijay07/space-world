import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // resolve: {
  //   alias: {
  //     'three': 'three/build/three.module.js'
  //   }
  // },
  plugins: [react()],
});