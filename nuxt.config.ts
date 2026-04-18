import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],

	alias: {
		"@": "~",
	},

	vite: {
		plugins: [tailwindcss()],
	},

	modules: ["shadcn-nuxt", "@vueuse/nuxt"],

	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},
});