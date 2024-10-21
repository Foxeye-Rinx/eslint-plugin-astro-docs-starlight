// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'eslint-plugin-astro',
			logo: {
				src: './src/assets/astro-logo.svg',
			},
			social: {
				github: 'https://github.com/ota-meshi/eslint-plugin-astro',
			},
            customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'User Guide', slug: 'guides/user-guide' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
    output: 'server',
    adapter: netlify({
        edgeMiddleware: true
    }),
});
