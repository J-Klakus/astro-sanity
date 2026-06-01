import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Poppins",
            cssVariable: "--font-poppins"
        }]
		},
	image: {
		domains: ["cdn.sanity.io"],
	},
	integrations: [
		icon(),
		sitemap(),
		sanity({
			projectId: "cbebllo4",
			dataset: "production",
			useCdn: false,
			perspective: process.env.NODE_ENV === "development" ? "drafts" : "published",
		}),
	],
});
