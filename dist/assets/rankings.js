(() => {
  'use strict';
  const board = document.body.dataset.board;
  const rising = board === 'rising';
  const db = window.OSMARKS_SCHEMA_V0;
  const list = document.getElementById('ranking-list');
  const state = document.getElementById('ranking-state');
  const search = document.getElementById('ranking-search');
  const category = document.getElementById('ranking-category');
  let english = localStorage.getItem('osmarks.lang') === 'en';
  const copy = () => english ? {
    title:rising?'Rising ranking':'Most starred ranking',
    description:rising?'Find open-source AI projects gaining attention across the latest seven complete days.':'Explore 100 open-source AI projects with the strongest cumulative GitHub attention.',
    home:'Back home',search:'Search project names or uses',all:'All categories',category:'Project category',rank:'Rank',project:'Project',metric:rising?'7-day gain':'Stars',original:'Original',details:'Open setup and calling details',empty:'No matching projects. Try another keyword or category.',unavailable:'This ranking is unavailable. Please try again later.',sample:'This page is using sample data.',partial:'Some project details are still being prepared.',provisional:(ready,total)=>`Star history is currently available for ${ready} of ${total} projects. This page lists those projects first; others will appear as their information is published.`,date:'Updated',projects:'projects',count:(n,total)=>`${n} of ${total} projects`,skip:'Skip to projects',switcher:'Switch ranking',panel:rising?'Rising ranking projects':'Most starred ranking projects',sources:'Sources ',homeAria:'osmarks home',topnav:'Page navigation',langAria:'Switch language'
  } : {
    title:rising?'上升总榜':'星标总榜',
    description:rising?'按最近 7 个完整日新增的 GitHub 星标，帮助发现近期被更多人关注的开源 AI 项目。':'按累计 GitHub 星标展示 100 个开源 AI 项目，帮助快速找到长期获得关注的项目。',
    home:'返回首页',search:'搜索项目名称或用途',all:'全部类别',category:'项目类别',rank:'排名',project:'项目',metric:rising?'七日新增':'星标',original:'原文',details:'进入详情查看安装与调用方式',empty:'没有匹配的项目，试试其他关键词或类别。',unavailable:'当前榜单暂不可用，请稍后再试。',sample:'当前页面使用示例数据。',partial:'部分项目资料仍在整理中。',provisional:(ready,total)=>`目前 ${total} 个项目中，有 ${ready} 个已有完整公开星标历史。本页先展示这些项目，其余项目资料发布后会自动加入。`,date:'更新于',projects:'个项目',count:(n,total)=>`显示 ${n} / ${total} 个项目`,skip:'跳到项目列表',switcher:'切换榜单',panel:rising?'上升总榜项目':'星标总榜项目',sources:'来源 ',homeAria:'osmarks 首页',topnav:'页面导航',langAria:'切换语言'
  };
  const snapshots = Array.isArray(db?.leaderboardSnapshots) ? db.leaderboardSnapshots : [];
  const boardSnapshots = snapshots.filter(item=>item.board===board);
  const byNewest = (a,b) => Date.parse(b.generatedAt||0)-Date.parse(a.generatedAt||0);
  const complete = item => item && item.status === 'ready' && Array.isArray(item.entries) && item.entries.length >= 100;
  const snapshot = boardSnapshots.filter(complete).sort(byNewest)[0] || null;
  const byId = new Map((Array.isArray(db?.tools)?db.tools:[]).map(tool=>[tool.id,tool]));
  const entries = (snapshot?.entries||[]).slice(0,100).map(entry=>({entry,tool:byId.get(entry.toolId)})).filter(({tool})=>tool&&tool.status!=='restricted');
  const categories = ['内容创作','研究与知识','自动化与智能体','开发与数据','工作与经营','生活与家庭'];
  const categoryEnglish = {'内容创作':'Content','研究与知识':'Research & knowledge','自动化与智能体':'Automation & agents','开发与数据':'Development & data','工作与经营':'Work & business','生活与家庭':'Life & family'};
  const categoryUse = {
    '内容创作':['适合写作、图像、视频或音频生产。','For writing, image, video, or audio work.'],
    '研究与知识':['适合检索、阅读、知识库和资料整理。','For search, reading, knowledge bases, and research organization.'],
    '自动化与智能体':['适合工作流、智能体和浏览器任务。','For workflows, agents, and browser tasks.'],
    '开发与数据':['适合代码、部署、本地模型和数据工作。','For code, deployment, local models, and data work.'],
    '工作与经营':['适合销售、运营、金融、求职等具体场景。','For sales, operations, finance, and job workflows.'],
    '生活与家庭':['适合学习、健康和家庭计划。','For learning, health, and family planning.']
  };
  const hasCjk = value => /[\u3400-\u9fff]/.test(String(value||''));
  const descriptionFor = tool => english ? ((tool.descriptionEn&&!hasCjk(tool.descriptionEn)) ? tool.descriptionEn : (tool.description&&!hasCjk(tool.description) ? tool.description : 'English summary will be added soon.')) : (tool.descriptionZh||tool.description||'简介待补充。');
  const useFor = tool => { const key=(tool.categories||[])[0]; const pair=categoryUse[key]; return pair ? pair[english?1:0] : (english?'See the project for its capabilities and use cases.':'查看项目能力和适用场景。'); };
  const safeUrl = value => {try{const url=new URL(value);return /^https?:$/.test(url.protocol)?url.href:null}catch{return null}};
  const element = (tag,className,text) => {const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node};

  function render() {
    const t=copy();
    document.documentElement.lang=english?'en':'zh-CN';
    document.title=t.title+'｜osmarks';
    document.getElementById('page-title').textContent=t.title;
    document.getElementById('page-description').textContent=t.description;
    document.getElementById('back-home').textContent=t.home;
    document.getElementById('footer-home').textContent=t.home;
    document.getElementById('search-label').textContent=t.search;
    document.getElementById('category-label').textContent=t.category;
    document.getElementById('rank-label').textContent=t.rank;
    document.getElementById('project-label').textContent=t.project;
    document.getElementById('metric-label').textContent=t.metric;
    document.getElementById('skip-link').textContent=t.skip;
    document.getElementById('ranking-nav').setAttribute('aria-label',t.switcher);
    document.getElementById('ranking-panel').setAttribute('aria-label',t.panel);
    document.getElementById('footer-sources').childNodes[0].textContent=t.sources;
    document.querySelector('.brand').setAttribute('aria-label',t.homeAria);
    document.querySelector('.topnav').setAttribute('aria-label',t.topnav);
    document.getElementById('lang').setAttribute('aria-label',t.langAria);
    search.placeholder=t.search;
    category.options[0].textContent=t.all;
    categories.forEach((value,index)=>{if(category.options[index+1])category.options[index+1].textContent=english?(categoryEnglish[value]||value):value});
    document.querySelectorAll('.ranking-nav a').forEach((link,index)=>link.textContent=english?(index?'Most starred':'Rising ranking'):(index?'星标总榜':'上升总榜'));
    document.getElementById('lang').textContent=english?'Chinese / EN':'EN / 中文';
    const date=new Date(snapshot?.sourceSnapshotAt||db?.generatedAt||'');
    const time=document.getElementById('snapshot-time');
    time.textContent=Number.isNaN(date.valueOf())?'':t.date+' '+new Intl.DateTimeFormat(english?'en-GB':'zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(date);
    if(!Number.isNaN(date.valueOf()))time.dateTime=date.toISOString();
    document.getElementById('snapshot-count').textContent=entries.length+' '+t.projects;
    const query=search.value.trim().toLocaleLowerCase();
    const filtered=entries.filter(({tool})=>(category.value==='all'||(tool.categories||[]).includes(category.value))&&(!query||[tool.name,tool.descriptionZh,tool.description,tool.source,...(tool.categories||[])].join(' ').toLocaleLowerCase().includes(query)));
    list.replaceChildren();
    filtered.forEach(({entry,tool})=>{
      const item=element('li','ranking-item');
      const rank=element('span','rank',String(entry.rank).padStart(2,'0'));
      const main=element('div','project-main');
      const title=element('a','project-title',tool.name);
      title.href='tool.html?name='+encodeURIComponent(tool.name)+'&board='+encodeURIComponent(board);
      const description=descriptionFor(tool);
      main.append(title,element('p','project-description',description));
      const useNode=element('p','project-use');
      useNode.append(document.createTextNode(useFor(tool)+' '));
      const detail=element('a','project-detail',t.details+' ↗'); detail.href=title.href; detail.setAttribute('aria-label',t.details+' · '+tool.name);
      useNode.append(detail);
      main.append(useNode);
      const meta=element('div','project-meta');
      const sourceUrl=safeUrl(tool.canonicalUrl);
      const sourceName=tool.source==='github'?'GitHub':tool.source==='huggingface'?'Hugging Face':tool.source||'';
      if(sourceUrl){const link=element('a','project-source',sourceName+' · '+t.original+' ↗');link.href=sourceUrl;link.target='_blank';link.rel='noopener noreferrer';meta.append(link)}
      if(tool.categories?.length)meta.append(element('span','project-category',english?(categoryEnglish[tool.categories[0]]||tool.categories[0]):tool.categories[0]));
      main.append(meta);
      item.append(rank,main,element('span','metric',entry.metricLabel||'—'));
      list.append(item);
    });
    state.textContent=!snapshot?t.unavailable:filtered.length?t.count(filtered.length,entries.length):t.empty;
    const notes=[];
    if(db?.sample)notes.push(t.sample);
    if(snapshot?.status==='provisional')notes.push(t.provisional(snapshot?.coverage?.ready||entries.length,snapshot?.coverage?.total||db?.collection?.target||entries.length));
    else if(db?.collection?.status==='partial')notes.push(t.partial);
    const note=document.getElementById('data-note');
    note.hidden=!notes.length;
    note.textContent=notes.join(' ');
  }
  categories.forEach(value=>{const option=element('option','',value);option.value=value;category.append(option)});
  document.getElementById('ranking-filters').addEventListener('submit',event=>event.preventDefault());
  search.addEventListener('input',render);
  category.addEventListener('change',render);
  document.getElementById('lang').addEventListener('click',()=>{english=!english;localStorage.setItem('osmarks.lang',english?'en':'zh');render()});
  render();
})();
