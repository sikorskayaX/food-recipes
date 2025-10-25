import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { configDotenv } from 'dotenv';

const isLocal = process.env.IS_LOCAL;

configDotenv();
export default defineConfig({
	performance: {
		chunkSplit: {
			strategy: 'all-in-one',
		},
	},
	dev: {
		hmr: true,
	},
	output: {
		target: 'web',
		filename: {
			js: 'index.js',
		},
		distPath: {
			root: './dist',
			js: '.',
		},
		injectStyles: true,
	},
	plugins: [pluginReact(), pluginSass(), pluginSvgr()],
	resolve: {
		alias: {
			app: './src/app',
			pages: './src/pages',
			widgets: './src/widgets',
			features: './src/features',
			entities: './src/entities',
			shared: './src/shared',
		},
	},

	...(!isLocal && {
		tools: {
			rspack: {
				output: {
					library: {
						type: 'es6',
					},
				},
			},
		},
	}),
	html: {
		template: './index.html',
	},
	source: {
		define: {
			'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
		},
	},
});
