import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     visualizer({
      filename: './dist/stats.html', // path to the generated file
      open: true,                    // open automatically in browser
      gzipSize: true,               // show gzip sizes
      brotliSize: true,             // show brotli sizes
      template: 'treemap'           // other options: 'sunburst', 'network'
    })
  ],
})



