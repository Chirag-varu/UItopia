import url from '@rollup/plugin-url';

export default {
  input: 'src/main.js',
  output: {
    dir: 'output',
    format: 'esm',
  },
  plugins: [
    url({
      include: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif'],
      limit: 0, // No size limit for assets, include them as a URL
    }),
  ],
};
