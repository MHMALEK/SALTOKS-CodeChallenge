const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.jsx'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('tailwindcss'),
    require('postcss-preset-env')({
      autoprefixer: {grid: true},
      features: {
        'nesting-rules': true,
      },
    }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
