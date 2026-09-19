// 加固首页人物图：内嵌 base64 保底图 + 相对路径（线上与本地 file:// 都能出图）
const { execSync } = require('child_process');
const fs = require('fs');

const DIST = 'C:/osmarks/dist';

// 1. 生成轻量预览图
execSync('ffmpeg -y -loglevel error -i ' + DIST + '/assets/img/night-a.jpg -vf scale=900:-2 -q:v 6 ' + DIST + '/assets/img/night-preview.jpg');
const sz = fs.statSync(DIST + '/assets/img/night-preview.jpg').size;
console.log('preview jpg:', (sz / 1024).toFixed(0) + 'KB');

// 2. base64 内嵌进 index.html 的 CSS 保底
const b64 = fs.readFileSync(DIST + '/assets/img/night-preview.jpg').toString('base64');
let idx = fs.readFileSync(DIST + '/index.html', 'utf8');
if (idx.includes("url('/assets/img/night-a.jpg')")) {
  idx = idx.replace("url('/assets/img/night-a.jpg')", "url('data:image/jpeg;base64," + b64 + "')");
  console.log('CSS fallback -> inlined base64');
} else if (idx.includes('data:image/jpeg;base64,')) {
  console.log('CSS fallback already inlined');
} else {
  console.log('WARN: fallback anchor not found');
}

// 3. PERSON 变量改相对路径（file:// 与线上都成立）
idx = idx.replace(/"\/assets\/img\/(morning|noon|night)-a\.jpg"/g, '"assets/img/$1-a.jpg"');
fs.writeFileSync(DIST + '/index.html', idx);

const chk = fs.readFileSync(DIST + '/index.html', 'utf8');
console.log('inline CSS present:', chk.includes('data:image/jpeg;base64,'));
console.log('PERSON NOW:', chk.match(/var PERSON=\{[^}]*\}/)[0]);
console.log('abs img refs left:', (chk.match(/['"]\/assets\/img\//g) || []).length);

// 4. rankings.html 的 data-person 改相对路径
let rk = fs.readFileSync(DIST + '/rankings.html', 'utf8');
rk = rk.replace(/\/assets\/img\/(morning|noon|night)-a\.jpg/g, 'assets/img/$1-a.jpg');
fs.writeFileSync(DIST + '/rankings.html', rk);
const rk2 = fs.readFileSync(DIST + '/rankings.html', 'utf8');
console.log('rankings abs img refs left:', (rk2.match(/['"]\/assets\/img\//g) || []).length);
console.log('rankings data-person:', (rk2.match(/data-person='[^']{0,120}/) || ['NOT FOUND'])[0].slice(0, 140));
console.log('DONE');
