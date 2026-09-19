// 盘点建站素材：C:\osmarks 现状 + outbox\current_design + .gdoc 指针内容
const fs = require('fs');

const out = {};

function walk(p, depth, arr) {
  if (depth > 3) return;
  let items;
  try { items = fs.readdirSync(p); } catch (e) { return; }
  for (const it of items) {
    if (it === 'node_modules' || it === '.git') continue;
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

// 1. C:\osmarks 结构
out.osmarksTree = [];
walk('C:/osmarks', 1, out.osmarksTree);

// 2. outbox/current_design 结构
out.currentDesign = [];
walk('G:/我的云端硬盘/osmarks_bridge/outbox/current_design', 1, out.currentDesign);

// 3. .gdoc 指针内容（这些是 JSON 格式的快捷方式）
out.gdocPointers = {};
for (const g of ['index.html.gdoc', 'timesfm.html.gdoc', 'build_and_deploy.ps1.gdoc', 'timesfm_complete_geo.html.gdoc', 'build_geo_keyframes.py.gdoc']) {
  const p = 'G:/我的云端硬盘/osmarks_bridge/inbox/' + g;
  try {
    const c = fs.readFileSync(p, 'utf8');
    out.gdocPointers[g] = c.slice(0, 500);
  } catch (e) {
    out.gdocPointers[g] = 'ERR: ' + e.message;
  }
}

fs.writeFileSync('C:/osmarks/.agent_bus/inventory.json', JSON.stringify(out, null, 2), 'utf8');
console.log('DONE');
