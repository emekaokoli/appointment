import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server:
    process.env.NODE_ENV === 'development'
      ? {
          port: 3000,
          proxy: {
            '/api': {
              target: 'localhost:9001/',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : {},
  plugins: [react(), tsConfigPaths(), svgrPlugin()],
});
