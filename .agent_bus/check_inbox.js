// 巡检云端任务信箱：检查 G 盘挂载 + 列出 inbox 内容
const fs = require('fs');

function checkDir(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

const result = {
  gDriveRoot: checkDir('G:\\我的云端硬盘'),
  bridgeRoot: checkDir('G:\\我的云端硬盘\\osmarks_bridge'),
  inbox: checkDir('G:\\我的云端硬盘\\osmarks_bridge\\inbox'),
  outbox: checkDir('G:\\我的云端硬盘\\osmarks_bridge\\outbox'),
  inboxFiles: [],
  outboxFiles: [],
};

function listDir(p, arr) {
  try {
    const items = fs.readdirSync(p);
    for (const it of items) arr.push(it);
  } catch (e) {
    arr.push('ERROR: ' + e.message);
  }
}

if (result.inbox) listDir('G:\\我的云端硬盘\\osmarks_bridge\\inbox', result.inboxFiles);
if (result.outbox) listDir('G:\\我的云端硬盘\\osmarks_bridge\\outbox', result.outboxFiles);

fs.writeFileSync('C:\\osmarks\\.agent_bus\\check_inbox_result.json', JSON.stringify(result, null, 2), 'utf8');
console.log('DONE');
