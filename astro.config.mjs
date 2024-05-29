import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    domains: ["cdn.sanity.io"],
  },
  integrations: [
    icon(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: "h2i1t4m1",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    ,
    react(),
  ],
});
