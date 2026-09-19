// 静态校验：文件存在性 + JSON-LD 有效性 + 文案违禁词扫描（中文文案区的冒号/破折号/双引号/AI八股）
const fs = require('fs');

const out = { checks: [] };

// 1. 文件存在与大小
for (const f of ['index.html', 'timesfm.html']) {
  const p = 'C:/osmarks/dist/' + f;
  const st = fs.statSync(p);
  out.checks.push(`[OK] ${f} ${st.size} bytes`);
}

// 2. JSON-LD 解析
const tf = fs.readFileSync('C:/osmarks/dist/timesfm.html', 'utf8');
const m = tf.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (m) {
  try {
    const j = JSON.parse(m[1]);
    out.jsonldTypes = j['@graph'].map(n => n['@type']).join(', ');
    out.checks.push('[OK] JSON-LD 解析成功 @graph ' + j['@graph'].length + ' 个节点');
  } catch (e) {
    out.checks.push('[FAIL] JSON-LD 解析失败 ' + e.message);
  }
} else {
  out.checks.push('[FAIL] 未找到 JSON-LD 块');
}

// 3. 文案违禁词扫描（扫描 HTML 可见文本行，排除 script/style/pre/code 内容）
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<pre[\s\S]*?<\/pre>/g, '')
    .replace(/<div class="errbox">[\s\S]*?<\/div>/g, '') // 报错现场是代码复现，Python 语法冒号不可篡改
    .replace(/<[^>]+>/g, '\n');
}
const banned = ['说白了', '这意味着', '本质上', '换句话说'];
const files = { 'index.html': fs.readFileSync('C:/osmarks/dist/index.html', 'utf8'), 'timesfm.html': tf };
out.bannedHits = [];
out.punctHits = [];
for (const [name, html] of Object.entries(files)) {
  const text = visibleText(html);
  for (const b of banned) {
    if (text.includes(b)) out.bannedHits.push(`${name}: ${b}`);
  }
  // 中文文案里的半角冒号（排除 URL、纯英文行、代码属性）
  const lines = text.split('\n').map(s => s.trim()).filter(Boolean);
  for (const line of lines) {
    // 行里含中文且含半角冒号（不含 http）
    if (/[\u4e00-\u9fff]/.test(line) && /:/.test(line) && !line.includes('http')) {
      // 排除时间戳、纯数字比例
      if (!/\d:\d/.test(line)) out.punctHits.push(`${name}: ${line.slice(0, 60)}`);
    }
    if (/[\u4e00-\u9fff]/.test(line) && /—/.test(line)) out.punctHits.push(`${name} 破折号: ${line.slice(0, 60)}`);
  }
}

out.checks.push(out.bannedHits.length === 0 ? '[OK] AI 八股词零命中' : '[FAIL] AI 八股词 ' + out.bannedHits.join('; '));
out.checks.push(out.punctHits.length === 0 ? '[OK] 中文文案无半角冒号/破折号' : '[WARN] 标点命中 ' + JSON.stringify(out.punctHits, null, 2));

fs.writeFileSync('C:/osmarks/.agent_bus/validate.json', JSON.stringify(out, null, 2), 'utf8');
console.log('DONE');
