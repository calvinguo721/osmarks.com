// 移动端 backdrop 渐变减淡，让人像在手机上真正可见
const fs = require('fs');
const f = 'C:/osmarks/dist/index.html';
let idx = fs.readFileSync(f, 'utf8');

const oldG = '.backdrop:before{background:linear-gradient(180deg,rgba(6,16,12,.88),rgba(7,18,14,.78) 54%,var(--bg) 100%)}';
const newG = '.backdrop:before{background:linear-gradient(180deg,rgba(6,16,12,.5),rgba(7,18,14,.38) 40%,var(--bg) 100%)}';

if (idx.includes(oldG)) {
  idx = idx.replace(oldG, newG);
  fs.writeFileSync(f, idx);
  console.log('mobile gradient lightened: .88/.78 -> .5/.38');
} else {
  console.log('ANCHOR NOT FOUND, trying loose match');
  const re = /\.backdrop:before\{background:linear-gradient\(180deg,rgba\(6,16,12,\.8\d\),rgba\(7,18,14,\.7\d\)[^}]*\)\}/;
  if (re.test(idx)) { idx = idx.replace(re, newG); fs.writeFileSync(f, idx); console.log('loose match replaced'); }
  else console.log('STILL NOT FOUND - no change');
}
console.log('verify:', fs.readFileSync(f, 'utf8').includes(newG));
