import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Pablo-codedioni.github.io/rickAndMorty/",
  plugins: [react()]
})
