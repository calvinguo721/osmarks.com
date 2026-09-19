const fs = require('fs');
const path = require('path');

const INBOX_G = 'G:/我的云端硬盘/osmarks_bridge/inbox';
const INBOX_L = 'C:/osmarks/.agent_bus/inbox';
const LOG = 'C:/osmarks/.agent_bus/watcher.log';

function log(msg) {
  try { fs.appendFileSync(LOG, new Date().toISOString() + ' ' + msg + '\n', 'utf8'); } catch (e) {}
}
function safeList(dir) {
  try { return fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.json')); }
  catch (e) { return []; }
}
function exists(p) { try { fs.accessSync(p); return true; } catch (e) { return false; } }

const seen = new Set(safeList(INBOX_G));
log('watcher started, baseline tasks: ' + seen.size);

setInterval(() => {
  const current = safeList(INBOX_G);

  // 新任务检测：镜像到本地信箱并记日志
  for (const f of current) {
    if (!seen.has(f)) {
      seen.add(f);
      log('NEW TASK: ' + f);
      try {
        fs.copyFileSync(path.join(INBOX_G, f), path.join(INBOX_L, f));
        log('mirrored to local spool: ' + f);
      } catch (e) {
        log('mirror fail: ' + f + ' ' + e.code);
      }
    }
  }

  // 清理已归档（云端消失）的条目
  for (const f of Array.from(seen)) {
    if (!exists(path.join(INBOX_G, f))) {
      seen.delete(f);
      log('ARCHIVED/REMOVED: ' + f);
    }
  }
}, 10000);
