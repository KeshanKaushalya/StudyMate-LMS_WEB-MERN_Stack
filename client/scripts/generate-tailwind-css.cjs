const fs = require('fs');
const postcss = require('postcss');

async function run() {
  const input = fs.readFileSync('src/index.css', 'utf8');
  // pass the project's tailwind config explicitly so content paths are respected
  const tailwindConfig = require('../tailwind.config.cjs');
  const plugins = [
    require('@tailwindcss/postcss')(tailwindConfig),
    require('autoprefixer')(),
  ];

  try {
    const result = await postcss(plugins).process(input, { from: 'src/index.css' });
    fs.writeFileSync('tmp-tailwind.css', result.css);
    console.log('Wrote tmp-tailwind.css');
  } catch (err) {
    console.error('PostCSS/Tailwind processing failed:', err);
    process.exit(1);
  }
}

run();
