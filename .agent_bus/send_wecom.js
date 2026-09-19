// send_wecom.js — 读取 UTF-8 文本文件内容，通过 wecom-cli 以 markdown 消息发给授权人（郭茹胜）
// 用法: node send_wecom.js <内容文件路径>
// 内容文件为 UTF-8 纯文本/markdown，最大 20000 字节。发送结果追加记录到 errors/wecom_send.log
const { execFileSync } = require('child_process');
const fs = require('fs');

const WECOM = 'C:/Users/Administrator/.workbuddy/binaries/node/cli-connector-packages/node_modules/@wecom/cli/bin/wecom.js';
const LOG_DIR = 'C:/osmarks/.agent_bus/errors';
const LOG = LOG_DIR + '/wecom_send.log';

function log(line) {
  try {
    fs.mkdirSync(LOG_DIR, { recursive: true });
    fs.appendFileSync(LOG, new Date().toISOString() + ' ' + line + '\n', 'utf8');
  } catch (e) { /* 日志失败不影响主流程 */ }
}

function runCli(args) {
  return execFileSync(process.execPath, [WECOM].concat(args), {
    encoding: 'utf8', timeout: 60000, windowsHide: true,
  });
}

try {
  const file = process.argv[2];
  if (!file || !fs.existsSync(file)) {
    log('FAIL no input file: ' + file);
    console.log('FAILED: input file missing');
    process.exit(2);
  }
  const content = fs.readFileSync(file, 'utf8').trim();
  if (!content || content.length > 20000) {
    log('FAIL bad content, length=' + (content ? content.length : 0));
    console.log('FAILED: empty or oversized content');
    process.exit(2);
  }

  // 第一步: 实时调用 whoami 取授权人 ID（不使用历史保存的 chat_id）
  const raw = runCli(['identity', 'whoami']);
  let chatId = null;
  const m1 = raw.match(/授权真人用户身份[\s\S]*?ID[：:]\s*(\S+)/);
  if (m1) chatId = m1[1];
  if (!chatId) {
    // 兜底: 取文本中最后一个长 ID（授权人 ID 出现在机器人 ID 之后）
    const ids = [];
    let m2;
    const re = /ID[：:]\s*([A-Za-z0-9_\-]{20,})/g;
    while ((m2 = re.exec(raw)) !== null) ids.push(m2[1]);
    if (ids.length) chatId = ids[ids.length - 1];
  }
  if (!chatId) {
    log('FAIL whoami parse, raw head: ' + String(raw).slice(0, 300));
    console.log('FAILED: cannot resolve authorized human id');
    process.exit(3);
  }

  // 第二步: 发送 markdown（JSON 通过 execFileSync 参数数组传递，无 shell，引号安全）
  const payload = JSON.stringify({ chat_id: chatId, msg_type: 'markdown', markdown: { content: content } });
  const resp = runCli(['message', 'aibot', 'send', '--json', payload]);
  log('OK -> ' + chatId + ' resp: ' + String(resp).slice(0, 200));
  console.log('SENT');
} catch (e) {
  let detail = e.message;
  if (e.stdout) detail += ' | stdout: ' + String(e.stdout).slice(0, 300);
  if (e.stderr) detail += ' | stderr: ' + String(e.stderr).slice(0, 300);
  log('FAIL ' + detail);
  console.log('FAILED: ' + detail.slice(0, 200));
  process.exit(1);
}
