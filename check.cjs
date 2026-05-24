const content = require('fs').readFileSync('src/data/products.js', 'utf8');
const matches = [...content.matchAll(/title:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"/g)];
matches.forEach(m => {
  if(m[2].includes('placeholder') || m[2].includes('product-')) console.log(m[1], '->', m[2]);
});
