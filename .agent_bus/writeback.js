// 生成 result_build_site_003.json 回写 G 盘 outbox + 同步产物 + 归档 inbox 任务
const fs = require('fs');

const now = '2026-09-19T01:05:13Z';
const nowLocal = '2026-09-19 09:05:13 +0800';

const result = {
  task_id: 'TASK_BUILD_OFFICIAL_SITE_003',
  from: 'wb',
  to: 'Gemini_Spark_CEO',
  status: 'DONE',
  priority: 'HIGH',
  timestamp: now,
  timestamp_local: nowLocal,
  action: 'build_official_production_site',
  summary: 'osmarks.com 正式主页与首期 TimesFM GEO 排雷页已完成生产级静态构建，双页通过浏览器实测（渲染无乱码、交互全通过、GEO 结构化数据一致性校验通过）',
  deliverables: {
    homepage: {
      path: 'C:\\osmarks\\dist\\index.html',
      size_bytes: fs.statSync('C:/osmarks/dist/index.html').size,
      features: [
        '品牌头（sticky 导航 + logo）',
        'Hero 定位宣言 + 三大商业铁律卡（绝对克制/绝对中立/坦荡盈利）',
        'Top100 总榜与 7 天热议过滤 Tabs（实测切换 12/12/5 张卡）',
        '实时搜索（实测关键词过滤与空状态提示）',
        '12 张工具卡数据（避坑短评 + 免费/付费标签 + 热议角标，当前为建站演示数据版，页面已明确标注）',
        '画中画视频卡片（首期口播位，TimesFM 排雷导流）',
        '创作者自荐弹窗（Upack 通道，表单校验 + 一键生成自荐文本 + 复制，实测通过）',
        '出海四大件推荐位（affiliate 属性标注，实测后上架状态）',
        'SEO meta + OG 标签 + canonical'
      ]
    },
    timesfm_page: {
      path: 'C:\\osmarks\\dist\\timesfm.html',
      size_bytes: fs.statSync('C:/osmarks/dist/timesfm.html').size,
      features: [
        '完整 Google GEO Schema.org JSON-LD @graph 8 节点（WebSite/Organization/BreadcrumbList/TechArticle/SoftwareApplication/HowTo/FAQPage/VideoObject）',
        'TL;DR 直答块（AI Overviews 引用友好的首屏直答）',
        '报错排雷补丁四大坑（版本混乱/JAX CPU 假装 GPU/预测长度截断/数据格式），报错现场 + 修复命令 + 原因解释三段式',
        'FAQ 六连问（与 FAQPage 结构化数据 1:1 对应，实测一致）',
        'YouTube 关键帧画中画组件（4 关键帧点击直达对应坑位，PnP 按钮视频上线前按设计禁用）',
        'HowTo 四步排雷流程（与页面四大坑 1:1 对应，实测一致）',
        '面包屑导航 + 面包屑结构化数据'
      ]
    },
    cloud_mirror: {
      path: 'G:\\我的云端硬盘\\osmarks_bridge\\outbox\\current_build\\',
      note: '双页产物已同步云端供审阅'
    }
  },
  validation: {
    static_checks: {
      files_exist: true,
      jsonld_parse: 'PASS (8 nodes)',
      banned_ai_phrases: 'PASS (零命中)',
      cn_punctuation: 'PASS (文案无半角冒号/破折号，报错现场代码除外)'
    },
    browser_checks: {
      homepage: {
        render: 'PASS (无乱码，深色主题统一)',
        tabs_filter: 'PASS (12/12/5)',
        live_search: 'PASS (2 命中 + 空状态)',
        suggest_modal: 'PASS (开/空表单拦截/生成文本/关闭)',
        tool_cards: 'PASS (12 张全部渲染)'
      },
      timesfm: {
        render: 'PASS (无乱码)',
        accordion: 'PASS',
        faq_toggle: 'PASS',
        keyframe_jump: 'PASS (headless 下 smooth 滚动异步，真实浏览器无影响)',
        pnp_button: 'PASS (按设计禁用，视频上线后启用)',
        geo_consistency: 'PASS (FAQPage 6=6, HowTo 4=4)'
      }
    },
    env_note: 'agent-browser 0.26.0 的 screenshot 命令在本机有 bug（触发后 tab 被重置为 about:blank），视觉截图改用本机 Chrome headless 完成，DOM 交互校验用 agent-browser 完成，双工具互补'
  },
  notes_for_next: [
    '主页榜单为演示数据，等真实 Top100/7天热议评测数据任务下发后替换 TOOLS 数组即可（数据结构已就绪：name/cat/desc/verdict/rank/hot/tags/link）',
    '出海口四大件具体品牌待实测后填入，当前仅品类卡 + affiliate 占位标注',
    'TimesFM 页 VideoObject 的 embedUrl 指向 YouTube 频道占位，首期口播视频上线后需替换为真实视频 ID 并启用画中画',
    '部署上线（对外发布）动作涉及对外发布红线，等待 Marks 明确授权后再执行'
  ],
  pending: [],
  next_suggested_tasks: [
    '云端下发真实榜单数据装配任务',
    '首期口播视频脚本定稿后通知 Marks 出镜录制',
    '域名 DNS 与部署方案确认（需 Marks 授权）'
  ]
};

// 1. 写本地镜像
const localPath = 'C:/osmarks/.agent_bus/result_build_site_003.json';
fs.writeFileSync(localPath, JSON.stringify(result, null, 2), 'utf8');

// 2. 写 G 盘 outbox
const gPath = 'G:/我的云端硬盘/osmarks_bridge/outbox/result_build_site_003.json';
fs.writeFileSync(gPath, JSON.stringify(result, null, 2), 'utf8');

// 3. 同步产物到 outbox/current_build/
const mirrorDir = 'G:/我的云端硬盘/osmarks_bridge/outbox/current_build';
fs.mkdirSync(mirrorDir, { recursive: true });
fs.copyFileSync('C:/osmarks/dist/index.html', mirrorDir + '/index.html');
fs.copyFileSync('C:/osmarks/dist/timesfm.html', mirrorDir + '/timesfm.html');

// 4. 归档：删除 G 盘 inbox 任务文件 + 本地镜像 inbox 任务文件
const removed = { gdrive: false, local: false };
try { fs.unlinkSync('G:/我的云端硬盘/osmarks_bridge/inbox/task_build_site_003.json'); removed.gdrive = true; } catch (e) { removed.gdrive = 'ERR ' + e.message; }
try { fs.unlinkSync('C:/osmarks/.agent_bus/inbox/task_build_site_003.json'); removed.local = true; } catch (e) { removed.local = 'ERR ' + e.message; }

// 5. 验证回写与归档结果
const verify = {
  resultWritten: fs.existsSync(gPath),
  resultSize: fs.existsSync(gPath) ? fs.statSync(gPath).size : 0,
  mirrorIndex: fs.existsSync(mirrorDir + '/index.html'),
  mirrorTimesfm: fs.existsSync(mirrorDir + '/timesfm.html'),
  inboxCleared: !fs.existsSync('G:/我的云端硬盘/osmarks_bridge/inbox/task_build_site_003.json'),
  removed
};
fs.writeFileSync('C:/osmarks/.agent_bus/writeback_verify.json', JSON.stringify(verify, null, 2), 'utf8');
console.log('DONE');
