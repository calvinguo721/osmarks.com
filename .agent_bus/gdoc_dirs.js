// 深入查看 .gdoc 目录内容
const fs = require('fs');

const out = {};

function walk(p, depth, arr) {
  if (depth > 4) return;
  let items;
  try { items = fs.readdirSync(p); } catch (e) { arr.push('ERR ' + e.message); return; }
  for (const it of items) {
    const full = p + '/' + it;
    let st;
    try { st = fs.statSync(full); } catch (e) { continue; }
    if (st.isDirectory()) {
      arr.push('[D] ' + full);
      walk(full, depth + 1, arr);
    } else {
      arr.push('[F] ' + full + ' (' + st.size + 'B)');
    }
  }
}

out.dirs = {};
for (const g of ['index.html.gdoc', 'timesfm.html.gdoc', 'build_and_deploy.ps1.gdoc', 'timesfm_complete_geo.html.gdoc', 'build_geo_keyframes.py.gdoc']) {
  const arr = [];
  walk('G:/我的云端硬盘/osmarks_bridge/inbox/' + g, 1, arr);
  out.dirs[g] = arr;
}

fs.writeFileSync('C:/osmarks/.agent_bus/gdoc_dirs.json', JSON.stringify(out, null, 2), 'utf8');
console.log('DONE');
