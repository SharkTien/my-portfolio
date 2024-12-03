import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://github.com/ErickKS/vite-deploy

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/"
})

