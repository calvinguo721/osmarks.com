// 读取 inbox 任务文件到本地镜像
const fs = require('fs');
const path = 'G:/我的云端硬盘/osmarks_bridge/inbox/task_build_site_003.json';
try {
  const c = fs.readFileSync(path, 'utf8');
  fs.writeFileSync('C:/osmarks/.agent_bus/task_003_content.json', c, 'utf8');
  console.log('LEN', c.length);
} catch (e) {
  console.log('ERR', e.message);
}
