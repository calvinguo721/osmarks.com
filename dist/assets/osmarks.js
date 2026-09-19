/* ==========================================================================
   osmarks.com · 前端体验组
   osmarks.js —— 全站交互（零依赖）
   --------------------------------------------------------------------------
   包含：主题切换、中英切换、命令一键复制、联盟分站名预览、
         首页榜单渲染、榜单页筛选/排序、全站搜索、Tabs、分页展开。
   数据全部来自 window.OSMARKS_*，页面只负责声明容器。
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------------- 主题 ---------------- */
  function initTheme() {
    var t = store.get('osmarks.theme') || 'dark';
    doc.documentElement.setAttribute('data-theme', t);
    var btn = $('#themeToggle');
    if (btn) {
      btn.textContent = t === 'light' ? '极简白' : '暗色';
      btn.addEventListener('click', function () {
        var next = doc.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        doc.documentElement.setAttribute('data-theme', next);
        store.set('osmarks.theme', next);
        btn.textContent = next === 'light' ? '极简白' : '暗色';
      });
    }
  }

  /* ---------------- 中英切换 ---------------- */
  function initLang() {
    var en = store.get('osmarks.lang') === 'en';
    applyLang(en);
    var btn = $('#langToggle');
    if (btn) {
      btn.textContent = en ? '中文' : 'EN';
      btn.addEventListener('click', function () {
        en = !en;
        store.set('osmarks.lang', en ? 'en' : 'zh');
        btn.textContent = en ? '中文' : 'EN';
        applyLang(en);
      });
    }
  }
  function applyLang(en) {
    $$('[data-en]').forEach(function (el) {
      if (!el.hasAttribute('data-zh')) el.setAttribute('data-zh', el.innerHTML);
      var v = en ? el.getAttribute('data-en') : el.getAttribute('data-zh');
      if (v !== null) el.innerHTML = v;
    });
    doc.documentElement.lang = en ? 'en' : 'zh-CN';
  }

  /* ---------------- 复制 ---------------- */
  function initCopy() {
    doc.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-copy]');
      if (!btn) return;
      var target = doc.getElementById(btn.getAttribute('data-copy'));
      if (!target) return;
      var text = target.innerText || target.textContent || '';
      var done = function () {
        var old = btn.textContent;
        btn.textContent = '已复制';
        btn.classList.add('done');
        setTimeout(function () { btn.textContent = old; btn.classList.remove('done'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallback(text, done); });
      } else { fallback(text, done); }
    });
    function fallback(text, done) {
      var ta = doc.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      doc.body.appendChild(ta); ta.select();
      try { doc.execCommand('copy'); done(); } catch (e) {}
      doc.body.removeChild(ta);
    }
  }

  /* ---------------- 联盟分站名预览 ---------------- */
  function initAlly() {
    var input = $('#allyName');
    if (!input) return;
    var out = $('#allyPreview');
    var go = $('#allyGo');
    var clean = function (v) {
      return String(v || '').toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '').slice(0, 32);
    };
    var update = function () {
      var v = clean(input.value);
      if (input.value !== v) input.value = v;
      out.textContent = v ? 'https://' + v + '.osmarks.com' : '输入后这里会显示你的分站地址';
      if (go) go.setAttribute('href', v ? 'about.html#apply' : '#ally');
      if (go) go.textContent = v ? '申领 ' + v + '.osmarks.com' : '申领这个分站';
    };
    input.addEventListener('input', update);
    update();
  }

  /* ---------------- 数据索引 ---------------- */
  function index() {
    var v1 = window.OSMARKS_TOOLS_V1;
    if (!v1 || !v1.tools) return null;
    var byId = {};
    v1.tools.forEach(function (t) { byId[t.id] = t; });
    return { v1: v1, byId: byId };
  }
  function toolHref(t) { return 't/' + t.slug + '.html'; }
  function boardList(name) {
    var ix = index(); if (!ix) return [];
    var raw = (ix.v1.boards && ix.v1.boards[name]) || [];
    return raw.map(function (r) { return ix.byId[r.id]; }).filter(Boolean);
  }
  function nfmt(n) {
    n = Number(n) || 0;
    if (n >= 10000) return (n / 10000).toFixed(n >= 100000 ? 0 : 1) + ' 万';
    return String(n);
  }

  /* ---------------- 首页榜单 ---------------- */
  function renderRow(t, rank, metric, metricLabel) {
    return '<div class="row">' +
      '<span class="rank">' + rank + '</span>' +
      '<span><strong><a href="' + toolHref(t) + '">' + esc(t.name) + '</a></strong>' +
      '<small>' + esc(t.descZh || t.desc || '') + '</small></span>' +
      '<span class="metric" title="' + (metricLabel || '') + '">' + metric + '</span>' +
      '</div>';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderHome() {
    var rising = boardList('historical');
    var hot = boardList('hot7d');
    if (!rising.length) return;
    var put = function (id, html) { var el = doc.getElementById(id); if (el) el.innerHTML = html; };

    // 上升总榜：前 10
    put('rising-rows', rising.slice(0, 10).map(function (t, i) {
      return renderRow(t, i + 1, '↑ ' + nfmt(t.d7) + ' / 7日', '近 7 天新增星标');
    }).join(''));

    // 星标总榜：91-100
    put('starred-rows', rising.slice(90, 100).map(function (t, i) {
      return renderRow(t, i + 91, '★ ' + nfmt(t.stars), '总星标数');
    }).join(''));

    // 最新大热：hot7d 前 3
    put('hot-rows', hot.slice(0, 3).map(function (t, i) {
      return renderRow(t, i + 1, '↑ ' + nfmt(t.d7) + ' / 7日', '近 7 天新增星标');
    }).join(''));

    // 新进榜单：总榜尾部（91–93 名），刚进榜的项目
    var fresh = rising.slice(90, 93);
    if (fresh.length) {
      put('new-rows', fresh.map(function (t, i) {
        return renderRow(t, i + 91, '★ ' + nfmt(t.stars), '总星标数');
      }).join(''));
      var empty = doc.getElementById('new-empty'); if (empty) empty.hidden = true;
    } else {
      var e2 = doc.getElementById('new-empty'); if (e2) e2.hidden = false;
    }
  }

  /* ---------------- 工具卡（认证四件套） ---------------- */
  function craft() { return (window.OSMARKS_CRAFT && window.OSMARKS_CRAFT.items) || {}; }
  function rich() { return (window.OSMARKS_TOOLS_RICH && window.OSMARKS_TOOLS_RICH.items) || {}; }

  function craftCount() { return Object.keys(craft()).length; }

  function toolCard(t, opt) {
    var c = craft()[t.repo] || null;
    var r = rich()[t.slug] || null;
    var verify = c ? c.verify : 'doc_only';
    var badge = verify === 'tested'
      ? '<span class="badge ok">实机跑通</span>'
      : verify === 'broken'
        ? '<span class="badge bad">实测不通</span>'
        : '<span class="badge doc">文档核验</span>';
    var plain = c && c.plain ? c.plain : (t.descZh || t.desc || '');
    var primary = c ? c.run.cmd : (r && r.install ? r.install : null);
    var out = '<article class="toolcard">' +
      '<div class="tt"><h3><a href="' + toolHref(t) + '">' + esc(t.name) + '</a></h3>' + badge + '</div>' +
      '<p class="plain">' + esc(plain) + '</p>' +
      '<div class="metaline">' +
        '<span class="chip"><b>★ ' + nfmt(t.stars) + '</b></span>' +
        '<span class="chip">' + esc((t.cats && t.cats[0]) || '') + '</span>' +
        (r && r.license ? '<span class="chip">' + esc(r.license) + '</span>' : '') +
      '</div>';
    if (primary) {
      out += '<p class="cmd-label">' + (c ? escapeHtml(c.run.label) : escapeHtml((r && r.installLabel) || '安装命令')) + '（复制后在终端执行）</p>' +
        '<div class="cmd" id="cmd-' + t.slug + '">' + esc(primary) +
        '<button class="cmd-copy" type="button" data-copy="cmd-' + t.slug + '">复制</button></div>';
    }
    out += '<div class="acts"><a href="' + toolHref(t) + '">看完整卡片与排雷 →</a>' +
      '<a href="' + esc(t.url) + '" target="_blank" rel="noreferrer noopener">项目原文 ↗</a></div>' +
      '</article>';
    return out;
  }
  function escapeHtml(s) { return esc(s); }

  function renderHomeCards() {
    var host = $('#marksGrid');
    if (!host) return;
    var state = { board: 'historical', shown: 10 };

    function dataset() {
      if (state.board === 'crafted') {
        var cr = craft();
        var ix = index();
        if (!ix) return [];
        return ix.v1.tools.filter(function (t) { return !!cr[t.repo]; });
      }
      return boardList(state.board);
    }
    function draw() {
      var all = dataset();
      var slice = all.slice(0, state.shown);
      host.innerHTML = slice.length ? slice.map(function (t) { return toolCard(t); }).join('') : '';
      var emptyEl = $('#marksEmpty');
      if (emptyEl) emptyEl.hidden = slice.length > 0;
      var more = $('#marksMore');
      if (more) more.hidden = all.length <= state.shown;
      var cnt = $('#marksCount');
      if (cnt) {
        var withCmd = all.filter(function (t) {
          var r = rich()[t.slug];
          return r && r.install;
        }).length;
        cnt.textContent = '共 ' + all.length + ' 个项目，其中 ' + withCmd +
          ' 个已从官方 README 提取到可直接执行的安装命令；' + craftCount() + ' 个已补齐人工四件套。';
      }
    }
    $$('#marksTabs button').forEach(function (b) {
      b.addEventListener('click', function () {
        $$('#marksTabs button').forEach(function (x) { x.setAttribute('aria-selected', 'false'); });
        b.setAttribute('aria-selected', 'true');
        state.board = b.getAttribute('data-board');
        state.shown = 10;
        draw();
      });
    });
    var more = $('#marksMore');
    if (more) more.addEventListener('click', function () { state.shown += 10; draw(); });
    draw();
  }

  /* ---------------- 榜单页（筛选 / 排序 / 搜索） ---------------- */
  function initRankings() {
    var host = $('#rankHost');
    if (!host) return;
    var params = new URLSearchParams(location.search);
    var state = {
      board: params.get('board') === 'hot7d' ? 'hot7d' : 'historical',
      cat: params.get('cat') || 'all',
      q: params.get('q') || '',
      sort: params.get('sort') || 'rank',
      shown: 20
    };
    var cats = ['内容创作', '研究与知识', '自动化与智能体', '开发与数据', '工作与经营'];
    var catHost = $('#rankCats');
    if (catHost) {
      catHost.innerHTML = '<button data-cat="all" aria-pressed="' + (state.cat === 'all') + '">全部类别</button>' +
        cats.map(function (c) {
          return '<button data-cat="' + c + '" aria-pressed="' + (state.cat === c) + '">' + c + '</button>';
        }).join('');
      catHost.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        state.cat = b.getAttribute('data-cat'); state.shown = 20;
        $$('button', catHost).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        draw();
      });
    }
    $$('#rankTabs button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.getAttribute('data-board') === state.board));
      b.addEventListener('click', function () {
        state.board = b.getAttribute('data-board'); state.shown = 20;
        $$('#rankTabs button').forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
        draw();
      });
    });
    var q = $('#rankQ');
    if (q) {
      q.value = state.q;
      var timer = null;
      q.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () { state.q = q.value.trim(); state.shown = 20; draw(); }, 130);
      });
    }
    var sortEl = $('#rankSort');
    if (sortEl) {
      sortEl.value = state.sort;
      sortEl.addEventListener('change', function () { state.sort = sortEl.value; draw(); });
    }
    var moreBtn = $('#rankMore');
    if (moreBtn) moreBtn.addEventListener('click', function () { state.shown += 20; draw(); });

    function draw() {
      var list = boardList(state.board).filter(function (t) {
        if (state.cat !== 'all' && (t.cats || []).indexOf(state.cat) < 0) return false;
        if (state.q) {
          var hay = (t.name + ' ' + t.repo + ' ' + (t.descZh || '') + ' ' + (t.desc || '') + ' ' + (t.topics || []).join(' ')).toLowerCase();
          if (hay.indexOf(state.q.toLowerCase()) < 0) return false;
        }
        return true;
      });
      if (state.sort === 'stars') list = list.slice().sort(function (a, b) { return b.stars - a.stars; });
      if (state.sort === 'd7') list = list.slice().sort(function (a, b) { return b.d7 - a.d7; });
      if (state.sort === 'name') list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
      if (state.sort === 'updated') list = list.slice().sort(function (a, b) { return String(b.pushedAt).localeCompare(String(a.pushedAt)); });

      var slice = list.slice(0, state.shown);
      host.innerHTML = slice.length ? slice.map(function (t, i) {
        return renderRow(t, state.sort === 'rank' ? (i + 1) : '·', '★ ' + nfmt(t.stars) + ' · ↑' + nfmt(t.d7), '星标 / 7日新增');
      }).join('') : '';
      var emptyEl = $('#rankEmpty');
      if (emptyEl) { emptyEl.hidden = slice.length > 0; }
      var stat = $('#rankStat');
      if (stat) stat.textContent = '命中 ' + list.length + ' 个项目，已显示 ' + slice.length + ' 个。';
      if (moreBtn) moreBtn.hidden = list.length <= state.shown;
    }
    draw();
  }

  /* ---------------- 全站搜索 ---------------- */
  function initSearch() {
    var host = $('#searchHost');
    if (!host) return;
    var q = $('#searchQ');
    var params = new URLSearchParams(location.search);
    var state = { q: params.get('q') || '', cat: 'all' };
    if (q) q.value = state.q;

    var catHost = $('#searchCats');
    var cats = ['内容创作', '研究与知识', '自动化与智能体', '开发与数据', '工作与经营'];
    if (catHost) {
      catHost.innerHTML = '<button data-cat="all" aria-pressed="true">全部</button>' +
        cats.map(function (c) { return '<button data-cat="' + c + '" aria-pressed="false">' + c + '</button>'; }).join('');
      catHost.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        state.cat = b.getAttribute('data-cat');
        $$('button', catHost).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        draw();
      });
    }
    if (q) {
      var timer = null;
      q.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () { state.q = q.value.trim(); draw(); }, 140);
      });
    }
    function score(t, needle) {
      var s = 0;
      var n = t.name.toLowerCase(), r = t.repo.toLowerCase(), dz = (t.descZh || '').toLowerCase(),
          d = (t.desc || '').toLowerCase(), tp = (t.topics || []).join(' ').toLowerCase();
      if (n === needle) s += 100;
      if (n.indexOf(needle) === 0) s += 60;
      if (n.indexOf(needle) >= 0) s += 30;
      if (r.indexOf(needle) >= 0) s += 25;
      if (dz.indexOf(needle) >= 0) s += 18;
      if (tp.indexOf(needle) >= 0) s += 10;
      if (d.indexOf(needle) >= 0) s += 6;
      return s;
    }
    function draw() {
      var ix = index(); if (!ix) return;
      var needle = state.q.toLowerCase();
      var list;
      if (!needle) {
        list = boardList('historical').slice(0, 20);
      } else {
        list = ix.v1.tools.map(function (t) { return { t: t, s: score(t, needle) }; })
          .filter(function (x) { return x.s > 0; })
          .sort(function (a, b) { return b.s - a.s; })
          .map(function (x) { return x.t; });
      }
      if (state.cat !== 'all') list = list.filter(function (t) { return (t.cats || []).indexOf(state.cat) >= 0; });
      var slice = list.slice(0, 40);
      host.innerHTML = slice.length ? slice.map(function (t, i) {
        return '<article class="toolcard">' +
          '<div class="tt"><h3><a href="' + toolHref(t) + '">' + esc(t.name) + '</a></h3>' +
          '<span class="badge doc">★ ' + nfmt(t.stars) + '</span></div>' +
          '<p class="plain">' + esc(t.descZh || t.desc || '') + '</p>' +
          '<div class="metaline"><span class="chip">' + esc((t.cats || [])[0] || '') + '</span>' +
          '<span class="chip">' + esc(t.lang || '') + '</span></div>' +
          '<div class="acts"><a href="' + toolHref(t) + '">看卡片 →</a>' +
          '<a href="' + esc(t.url) + '" target="_blank" rel="noreferrer noopener">项目原文 ↗</a></div></article>';
      }).join('') : '';
      var emptyEl = $('#searchEmpty');
      if (emptyEl) emptyEl.hidden = slice.length > 0;
      var stat = $('#searchStat');
      if (stat) stat.textContent = needle ? ('找到 ' + list.length + ' 个匹配项目。') : '还没有输入关键词。下面是历史总榜前 20 名。';
    }
    draw();
  }

  /* ---------------- 导航搜索框 ---------------- */
  function initNavSearch() {
    var f = $('#navSearchForm');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = ($('input', f).value || '').trim();
      location.href = 'search.html' + (v ? '?q=' + encodeURIComponent(v) : '');
    });
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    initTheme(); initLang(); initCopy(); initAlly();
    initNavSearch(); renderHome(); renderHomeCards(); initRankings(); initSearch();
    var snap = $('#dataSnapshot');
    if (snap) {
      var v1 = window.OSMARKS_TOOLS_V1;
      var r = window.OSMARKS_TOOLS_RICH;
      if (v1) {
        snap.textContent = '数据快照 ' + String(v1.sourceSnapshotAt || '').slice(0, 10) +
          '｜收录 ' + v1.total + ' 个项目｜已解析官方 README ' + (r ? r.withReadme : 0) +
          ' 份，提取到可执行安装命令 ' + (r ? r.withInstallCommand : 0) + ' 条。';
      }
    }
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
