const cfg = require('../tailwind.config.cjs');
console.log('fontSize keys in tailwind.config.cjs:');
if (cfg && cfg.theme && cfg.theme.extend && cfg.theme.extend.fontSize) {
  console.log(Object.keys(cfg.theme.extend.fontSize));
} else {
  console.log('no fontSize found in config');
}
console.log('\ncontent globs:');
console.log(cfg.content);
