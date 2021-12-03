const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    root: './',
    base: "https://pettodavida.github.io/School-Repo/",
    build: {
        outDir: 'dist',
    },
    publicDir: 'public',

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                intressen: resolve(__dirname, 'intressen.html'),
                erfarenheter: resolve(__dirname, 'erfarenheter.html')
            }
        }
    }
})