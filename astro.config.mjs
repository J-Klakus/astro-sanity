import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [
			tailwindcss(),
		  ],
	},
	site: "https://example.com",
	image: {
		domains: ["cdn.sanity.io"],
	},
	integrations: [
		icon(),
		sitemap(),
		sanity({
			projectId: "cbebllo4",
			dataset: "production",
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
});
