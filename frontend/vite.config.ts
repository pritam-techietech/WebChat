import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      "/api":{
        target: "http://localhost:5000",
      }
    },
    host: '0.0.0.0', // Listen on all network interfaces
    port: 3000,      // Change this to the port you are using if different
  }
})
