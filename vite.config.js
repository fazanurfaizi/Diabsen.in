import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'
import { dirname, resolve } from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { fileURLToPath } from 'url'

export default defineConfig({
	plugins: [
		vue(),
		svgLoader(),
		vueI18n({
			include: resolve(
				dirname(fileURLToPath(import.meta.url)),
				'./src/locales/**'
			),
			runtimeOnly: false
		}),
		VitePWA({
			mode: "development",
			base: "/",
			srcDir: "src/core/modules",
			filename: "pwa.js",
			includeAssets: ["/favicon.ico"],
			strategies: "injectManifest",
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			manifest: {
				name: "Diabsen.in",
				short_name: "Diabsen.in",
				theme_color: "#ffffff",
				start_url: "/",
				display: "standalone",
				background_color: "#ffffff",
				icons: [
					{
						src: "/favicon.ico",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/favicon.ico",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/favicon.ico",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
})
