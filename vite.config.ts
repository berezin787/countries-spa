import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { name as base } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${base}`,
  plugins: [react()],
});
