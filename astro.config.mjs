import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://airhire.ai",
	image: {
		domains: ["cdn.sanity.io"],
	},
	integrations: [
		icon(),
		sitemap(),
		tailwind(),
		sanity({
			projectId: "cbebllo4",
			dataset: "production",
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
		,
	],
});
