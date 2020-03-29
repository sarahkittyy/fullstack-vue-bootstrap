module.exports = {
	outputDir: 'build',
	pages: {
		index: {
			entry: 'src/frontend/index.js',
			template: 'src/frontend/index.html',
			title: 'Untitled',
		}
	},
	runtimeCompiler: true,
	devServer: {
		port: '8000',
	}
}