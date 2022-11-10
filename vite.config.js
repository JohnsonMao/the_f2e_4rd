import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import linaria from '@linaria/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		base: isDev ? '/' : '/example-vite-react/',
		plugins: [
			nodeResolve({
				extensions: ['.jsx', '.js']
			}),
			{
				...linaria({
					include: ['**/*.{js,jsx}'],
					babelOptions: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@linaria'
						]
					}
				}),
				enforce: 'pre'
			},
			svgrPlugin(),
			react({
				babel: {
					plugins: [
						[
							'babel-plugin-styled-components',
							{
								displayName: true,
								fileName: false
							}
						]
					]
				}
			})
		],
		build: {
			outDir: 'dist',
			target: isDev ? 'modules' : 'es2015'
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'@images': fileURLToPath(
					new URL('./src/assets/images', import.meta.url)
				),
				'@styles': fileURLToPath(
					new URL('./src/assets/styles', import.meta.url)
				)
			}
		},
		server: {
			host: '0.0.0.0',
			open: true
		}
	};
});
