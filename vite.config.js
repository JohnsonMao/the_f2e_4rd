import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import linaria from '@linaria/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		base: isDev ? './' : '/the_f2e_4rd/',
		plugins: [
			nodeResolve({
				extensions: ['.jsx', '.js']
			}),
			{
				...linaria({
					include: ['**/*.{js,jsx}'],
					sourceMap: true,
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
				'@': '/src',
				'@images': '/src/assets/images',
				'@styles': '/src/assets/styles'
			}
		},
		server: {
			host: '0.0.0.0',
			open: true
		}
	};
});
