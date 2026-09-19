(function (root, document) {
  "use strict";
  var data = root.OSMARKS_SCHEMA_V0;
  if (!data || !document) return;
  var params = new URLSearchParams(root.location.search);
  var query = decodeURIComponent(params.get("name") || "").trim();
  var boardParam = params.get("board") || "";
  var board = boardParam === "rising" ? "rising" : (boardParam === "attention" || boardParam === "starred") ? "attention" : "";
  var normalized = query.toLowerCase();
  var tools = Array.isArray(data.tools) ? data.tools : [];
  var tool = tools.find(function (item) {
    return [item.id, item.name, item.slug, item.sourceId].some(function (value) { return String(value || "").toLowerCase() === normalized; });
  });
  var english = root.localStorage && root.localStorage.getItem("osmarks.lang") === "en";
  var categoryEnglish = {"内容创作":"Content","研究与知识":"Research & knowledge","自动化与智能体":"Automation & agents","开发与数据":"Development & data","工作与经营":"Work & business","生活与家庭":"Life & family"};
  var categoryInfo = {
    "内容创作": {zhCapability:"帮助你制作、整理或改写文字、图像、音频和视频内容。", zhFit:"适合创作者、营销与媒体团队，以及需要稳定产出内容的人。", enCapability:"Supports making, organizing, or transforming text, images, audio, and video.", enFit:"A fit for creators, marketing and media teams, and anyone producing content regularly."},
    "研究与知识": {zhCapability:"帮助你检索资料、阅读文档、整理知识并形成可复用的结论。", zhFit:"适合研究、学习、分析和需要处理大量资料的人。", enCapability:"Supports finding sources, reading documents, organizing knowledge, and forming reusable conclusions.", enFit:"A fit for research, learning, analysis, and work that involves substantial reading."},
    "自动化与智能体": {zhCapability:"帮助你把多个步骤串成工作流，让智能体执行重复任务和工具调用。", zhFit:"适合希望减少重复操作、连接多个服务或搭建智能工作流的人。", enCapability:"Connects steps into workflows so agents can handle repeat tasks and tool calls.", enFit:"A fit for people who want fewer repetitive actions, connected services, or agent workflows."},
    "开发与数据": {zhCapability:"帮助你写代码、调试、处理数据或把模型接入已有系统。", zhFit:"适合开发者、数据团队，以及需要自托管或二次开发的人。", enCapability:"Supports coding, debugging, data work, or connecting models to existing systems.", enFit:"A fit for developers, data teams, and people who need self-hosting or further development."},
    "工作与经营": {zhCapability:"帮助你处理业务流程、客户沟通、分析和日常运营工作。", zhFit:"适合小团队、经营者和希望提高工作效率的人。", enCapability:"Supports business processes, customer communication, analysis, and daily operations.", enFit:"A fit for small teams, operators, and anyone looking to improve daily work."},
    "生活与家庭": {zhCapability:"帮助你处理个人安排、家庭事务、学习和日常生活中的信息。", zhFit:"适合希望把个人时间和生活安排得更轻松的人。", enCapability:"Supports personal planning, household tasks, learning, and everyday information.", enFit:"A fit for people who want lighter planning and more capable everyday support."}
  };
  var categoryUse = {
    "内容创作": {zh:"内容生产、编辑和分发", en:"content production, editing, and publishing"},
    "研究与知识": {zh:"资料检索、阅读和知识整理", en:"source finding, reading, and knowledge organization"},
    "自动化与智能体": {zh:"模型、工具和步骤的连接", en:"connecting models, tools, and workflow steps"},
    "开发与数据": {zh:"代码、模型和数据工作", en:"coding, model integration, and data work"},
    "工作与经营": {zh:"业务流程、客户沟通和日常运营", en:"business processes, customer communication, and operations"},
    "生活与家庭": {zh:"个人安排、家庭事务和日常学习", en:"personal planning, household tasks, and everyday learning"}
  };
  var curatedSamples = {
    "heygen-com/hyperframes": {
      image:{src:"https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/public/images/hyperframes-logo-motion-1280-trimmed.webp",source:"https://github.com/heygen-com/hyperframes/blob/main/README.md#L24-L26",altZh:"HyperFrames 演示：左侧 HTML 代码转换为右侧渲染视频",altEn:"HyperFrames demo: HTML code on the left transforms into a rendered video on the right",captionZh:"HyperFrames 是把 HTML、CSS、媒体和可寻址动画转换为确定性 MP4 的开源框架，可通过本地 CLI、AI 编程代理技能或托管工作流使用。",captionEn:"HyperFrames is an open-source framework for turning HTML, CSS, media, and seekable animations into deterministic MP4 videos. Use it locally with the CLI, from AI coding agents with skills, or as the rendering core behind hosted authoring workflows.",analysisZh:"画面展示：左侧 HTML 代码变成右侧成片；这正对应它的网页到视频渲染路径。",analysisEn:"The visual shows HTML code on the left becoming a rendered video on the right, matching HyperFrames' web-to-video rendering path."},
      capability:{zh:"把 HTML、CSS、图片、视频、音频和可寻址动画组织成可重复渲染的 MP4；可以从本地 CLI、AI 编程代理技能或托管工作流使用。",en:"Turns HTML, CSS, media, and seekable animation into repeatable MP4 renders through a local CLI, AI coding-agent skills, or hosted workflows."},
      difference:{zh:"它坚持 HTML 原生，不要求 React 或专用时间线；同一输入追求一致的帧结果，并提供 GSAP、CSS、Lottie、Three.js、Anime.js、WAAPI 等动画适配器。项目采用 Apache 2.0 许可证。",en:"It stays HTML-native, needs no React or proprietary timeline, aims for the same frames from the same input, and supports GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, and other adapters. The project uses the Apache 2.0 license."},
      fit:{zh:"适合产品发布视频、PR 演示、数据可视化、社交媒体短片、文档转视频，以及需要可重复渲染的自动化流程。",en:"A fit for product launch videos, PR walkthroughs, data visualizations, social clips, docs-to-video, and repeatable rendering pipelines."},
      highlights:[
        {zhTitle:"核心路径",enTitle:"Core path",zh:"用网页技术写画面，再把每一帧稳定地渲染成视频。",en:"Author the scene with web technologies, then render each frame consistently into video."},
        {zhTitle:"开始条件",enTitle:"Starting conditions",zh:"需要 Node.js 22+ 与 FFmpeg，也提供面向 AI 助手的 skills 安装方式。",en:"It requires Node.js 22+ and also offers skills for AI assistants."},
        {zhTitle:"可扩展处",enTitle:"Where it extends",zh:"CLI、组件目录、Studio、播放器和 AWS Lambda 渲染路径组成完整工具链。",en:"The CLI, component catalog, Studio, player, and AWS Lambda path form a broader rendering toolkit."},
        {zhTitle:"适合的工作方式",enTitle:"Working style",zh:"适合把创意、代码和可重复的渲染流程放在同一项目里。",en:"It suits teams that want creative direction, code, and repeatable rendering in one project."}
      ],
      commands:[
        {labelZh:"安装代理技能",labelEn:"Install agent skills",code:"npx skills add heygen-com/hyperframes",noteZh:"项目提供的安装入口。",noteEn:"Published install command."},
        {labelZh:"创建项目",labelEn:"Create a project",code:"npx hyperframes init my-video\ncd my-video",noteZh:"初始化一个本地视频项目。",noteEn:"Initialize a local video project."},
        {labelZh:"预览与渲染",labelEn:"Preview and render",code:"npx hyperframes preview\nnpx hyperframes render",noteZh:"先在浏览器预览，再输出 MP4。",noteEn:"Preview in the browser, then render an MP4."}
      ],
      runtimeZh:"本地 CLI、AI 编程代理技能或托管工作流；渲染链路使用 headless Chrome 与 FFmpeg。",runtimeEn:"Local CLI, AI coding-agent skills, or hosted workflows; the render path uses headless Chrome and FFmpeg.",costZh:"项目采用 Apache 2.0 开源许可证，没有按次渲染费；托管服务、云资源和模型费用需另行确认。",costEn:"The project uses the Apache 2.0 license and has no per-render fee; hosted services, cloud resources, and model costs are separate questions.",commercialZh:"项目采用 Apache 2.0 许可证；商业使用仍应按项目许可证和所用依赖逐项核对。",commercialEn:"The project uses Apache 2.0; check the license and its dependencies before commercial use."
    },
    "openclaw/openclaw": {
      image:{src:"https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-banner-dark.png",source:"https://github.com/openclaw/openclaw/blob/main/README.md#L2-L7",altZh:"OpenClaw——EXFOLIATE! EXFOLIATE! 运行在你自己的设备上的 AI 助手",altEn:"OpenClaw — EXFOLIATE! EXFOLIATE! Your AI assistant, running on your own devices",captionZh:"OpenClaw 运行在自己的电脑上，接入 Discord、iMessage、Slack、Teams、Telegram、WhatsApp 等 20 多个渠道，并提供 macOS、iOS、Android、Windows、Linux 原生应用；一个 Gateway 可用于个人或团队部署。",captionEn:"OpenClaw runs on your own computer, reaches 20+ channels including Discord, iMessage, Slack, Teams, Telegram, and WhatsApp, and has native apps for macOS, iOS, Android, Windows, and Linux. One Gateway can serve a personal or team deployment.",analysisZh:"画面展示：状态、记忆和凭证保存在用户硬件上；模型与 agent harness 可以替换。",analysisEn:"It also says state, memory, and credentials stay on your hardware, while models and agent harnesses are swappable."},
      capability:{zh:"在自己的电脑和聊天渠道中运行的开源 AI 助手，可连接 Discord、iMessage、Slack、Teams、Telegram、WhatsApp 等 20 多个渠道，并提供桌面与移动端入口。",en:"An open-source AI assistant that runs on your computer and connects to Discord, iMessage, Slack, Teams, Telegram, WhatsApp, 20+ channels, and native desktop or mobile clients."},
      difference:{zh:"状态、记忆和凭证留在用户硬件；模型与 agent harness 可以替换；一个 Gateway 可作为个人助手，也可用于团队部署。项目没有付费层、托管服务或项目代币。",en:"State, memory, and credentials stay on the user's hardware; models and agent harnesses are replaceable; one Gateway can serve a personal setup or a team deployment. The project has no paid tier, hosted service, or project token."},
      fit:{zh:"适合希望跨多个聊天渠道使用个人助手、重视本地数据控制，或准备自托管团队助手的人。连接陌生用户或远程 Gateway 前，应先读安全和配对说明。",en:"A fit for people who want one assistant across several chat channels, care about local control, or plan a self-hosted team assistant. Read the security and pairing guidance before connecting strangers or exposing a Gateway."},
      highlights:[
        {zhTitle:"运行位置",enTitle:"Where it runs",zh:"核心状态、记忆和凭证保存在用户自己的设备上。",en:"Core state, memory, and credentials remain on the user's own hardware."},
        {zhTitle:"安装入口",enTitle:"Install paths",zh:"同时提供 macOS/Linux/WSL2、Windows PowerShell 和 npm 安装方式。",en:"It provides paths for macOS/Linux/WSL2, Windows PowerShell, and npm."},
        {zhTitle:"模型与渠道",enTitle:"Models and channels",zh:"模型提供方、聊天渠道、工具、skills 和 plugins 都可以按配置替换或扩展。",en:"Model providers, chat channels, tools, skills, and plugins can be changed or extended through configuration."},
        {zhTitle:"安全边界",enTitle:"Security boundary",zh:"外部消息应视为不可信输入；开启更多渠道前要完成 pairing、沙箱和暴露面检查。",en:"Treat inbound messages as untrusted input; complete pairing, sandboxing, and exposure checks before adding more channels."}
      ],
      commands:[
        {labelZh:"macOS / Linux / WSL2",labelEn:"macOS / Linux / WSL2",code:"curl -fsSL https://openclaw.ai/install.sh | bash",noteZh:"项目提供的安装脚本。",noteEn:"Published installer."},
        {labelZh:"Windows PowerShell",labelEn:"Windows PowerShell",code:"iwr -useb https://openclaw.ai/install.ps1 | iex",noteZh:"Windows 安装脚本。",noteEn:"Published Windows installer."},
        {labelZh:"安装后启动",labelEn:"After installation",code:"openclaw onboard --install-daemon\nopenclaw gateway status\nopenclaw dashboard",noteZh:"完成引导、检查 Gateway，再打开控制面板。",noteEn:"Complete onboarding, check the Gateway, then open the dashboard."}
      ],
      runtimeZh:"需要你配置模型提供方和聊天渠道；Gateway、工具、skills 与 plugins 决定可用范围。",runtimeEn:"You configure the model provider and chat channels; the Gateway, tools, skills, and plugins determine what is available.",costZh:"项目没有付费层、托管服务或代币；模型提供方、消息渠道和云资源可能产生各自费用。",costEn:"The project has no paid tier, hosted service, or token; model providers, messaging channels, and cloud resources may charge separately.",commercialZh:"项目采用 MIT 许可证；商业使用前请核对完整 LICENSE 和第三方声明。",commercialEn:"The project uses the MIT license; check the full LICENSE and third-party notices before commercial use."
    },
    "NousResearch/hermes-agent": {
      image:{src:"https://raw.githubusercontent.com/NousResearch/hermes-agent/main/assets/banner.png",source:"https://github.com/NousResearch/hermes-agent/blob/main/README.md#L1-L2",altZh:"Hermes Agent：可持续学习、运行在自己设备上的 AI 智能体",altEn:"Hermes Agent: a self-improving AI agent that runs on your own infrastructure",captionZh:"Hermes Agent 的官方横幅。项目说明它能从使用经验创建和改进技能，并通过终端、Gateway 和多种聊天平台工作。",captionEn:"the official Hermes Agent banner. The project says it creates and improves skills from experience and works through the terminal, Gateway, and multiple chat platforms.",analysisZh:"它支持任意模型提供方，可在本地、云端或服务器上运行，并连接 Telegram、Discord、Slack、WhatsApp、Signal 等渠道。",analysisEn:"It also says it supports different model providers, can run locally or on servers, and connects Telegram, Discord, Slack, WhatsApp, Signal, and other channels."},
      capability:{zh:"一个会从使用经验中创建和改进技能的 AI 智能体，可通过终端或 Gateway 工作，并把对话接入多个聊天平台。",en:"An AI agent that creates and improves skills from experience, works through a terminal or Gateway, and connects conversations across several chat platforms."},
      difference:{zh:"它把学习循环、记忆、技能创建和多平台 Gateway 放进同一个开源项目；模型提供方可以切换，不绑定单一模型。项目采用 MIT 许可证。",en:"It combines a learning loop, memory, skill creation, and a multi-platform Gateway in one open-source project. Model providers can be switched without locking into one model. It uses the MIT license."},
      fit:{zh:"适合需要长期运行个人智能体、统一聊天入口、保留自托管控制权，或希望让智能体逐步积累工作方法的个人和团队。",en:"A fit for people and teams that want a long-running personal agent, one gateway for several chat channels, self-hosted control, and skills that improve over time."},
      highlights:[
        {zhTitle:"学习循环",enTitle:"Learning loop",zh:"从复杂任务中创建技能，并在使用中持续改进。",en:"Creates skills from complex tasks and improves them during use."},
        {zhTitle:"多入口",enTitle:"Many entry points",zh:"终端、Telegram、Discord、Slack、WhatsApp、Signal 等入口共用一个 Gateway。",en:"The terminal, Telegram, Discord, Slack, WhatsApp, Signal, and other entry points can share one Gateway."},
        {zhTitle:"模型可切换",enTitle:"Flexible models",zh:"支持 Nous Portal、OpenRouter、OpenAI、自有端点等模型提供方。",en:"Supports Nous Portal, OpenRouter, OpenAI, custom endpoints, and other providers."},
        {zhTitle:"运行位置",enTitle:"Where it runs",zh:"可以运行在本地设备、低成本 VPS、GPU 集群或无服务器环境。",en:"It can run on a local device, a low-cost VPS, a GPU cluster, or serverless infrastructure."}
      ],
      commands:[
        {labelZh:"Linux / macOS / WSL2",labelEn:"Linux / macOS / WSL2",code:"curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",noteZh:"项目提供的一键安装入口。",noteEn:"Published installer."},
        {labelZh:"Windows PowerShell",labelEn:"Windows PowerShell",code:"iex (irm https://hermes-agent.nousresearch.com/install.ps1)",noteZh:"Windows 原生安装入口。",noteEn:"Native Windows installer."},
        {labelZh:"安装后启动",labelEn:"After installation",code:"source ~/.bashrc\nhermes\nhermes setup",noteZh:"重新加载 shell，启动 Hermes，再运行配置向导。",noteEn:"Reload the shell, start Hermes, then run the setup wizard."}
      ],
      runtimeZh:"需要配置模型提供方和工具；Gateway 可连接 Telegram、Discord、Slack、WhatsApp、Signal 等渠道。",runtimeEn:"Configure a model provider and tools; the Gateway can connect Telegram, Discord, Slack, WhatsApp, Signal, and other channels.",costZh:"项目采用 MIT 许可证；模型提供方、服务器、云资源和 Nous Portal 订阅可能产生费用。",costEn:"The project uses the MIT license; model providers, servers, cloud resources, and a Nous Portal subscription may cost extra.",commercialZh:"项目采用 MIT 许可证；商业使用前请核对完整 LICENSE、模型和第三方服务条款。",commercialEn:"The project uses the MIT license; check the full LICENSE, model terms, and third-party service terms before commercial use."
    },
    "firecrawl/firecrawl": {
      image:{src:"https://raw.githubusercontent.com/firecrawl/firecrawl/main/img/firecrawl_logo.png",source:"https://github.com/firecrawl/firecrawl/blob/main/README.md#L1-L5",altZh:"Firecrawl 官方项目图标",altEn:"Firecrawl official visual",captionZh:"Firecrawl 的官方项目图标。项目把网页搜索、抓取和交互整理成适合智能体调用的接口。",captionEn:"The official Firecrawl visual. The project turns web search, scraping, and interaction into APIs that agents can call.",analysisZh:"项目说明它可以输出 Markdown、结构化数据和网页截图，并处理 JavaScript 页面、PDF 与 DOCX 等内容。",analysisEn:"It says it can return Markdown, structured data, and screenshots, and handle JavaScript-heavy pages, PDFs, and DOCX files."},
      capability:{zh:"把网页搜索、抓取、交互和内容提取接入智能体，输出 Markdown、结构化数据和截图。",en:"Connects web search, scraping, interaction, and extraction to agents, returning Markdown, structured data, and screenshots."},
      difference:{zh:"它把代理式网页检索、动态页面处理、批量抓取和 MCP 接入放在同一套工具中；既有开源仓库，也有托管服务。",en:"It combines agentic web research, dynamic-page handling, batch crawling, and MCP access in one toolset, with both an open-source repository and a hosted service."},
      fit:{zh:"适合需要给智能体接入实时网页资料、批量抓取网站、读取动态页面或把网页转成干净 Markdown 的开发者和团队。",en:"A fit for developers and teams that need live web context, batch crawling, dynamic-page handling, or clean Markdown for agents."},
      highlights:[
        {zhTitle:"核心入口",enTitle:"Core entry points",zh:"Search、Scrape、Interact、Agent、Crawl、Map 和 Batch Scrape。",en:"Search, Scrape, Interact, Agent, Crawl, Map, and Batch Scrape."},
        {zhTitle:"智能体接入",enTitle:"Agent access",zh:"支持 SDK、CLI、MCP 和一条命令安装的 skills。",en:"Supports SDKs, CLI, MCP, and skills installed with one command."},
        {zhTitle:"输出形式",enTitle:"Output formats",zh:"可输出 Markdown、JSON、HTML、截图和结构化结果。",en:"Outputs Markdown, JSON, HTML, screenshots, and structured results."},
        {zhTitle:"使用条件",enTitle:"Access requirement",zh:"需要注册 Firecrawl 并配置 API key；托管服务按用量计费。",en:"Sign-up and an API key are required; the hosted service is usage-based."}
      ],
      commands:[
        {labelZh:"Python SDK",labelEn:"Python SDK",code:"pip install firecrawl-py",noteZh:"安装 Python SDK。",noteEn:"Install the Python SDK."},
        {labelZh:"Node.js SDK",labelEn:"Node.js SDK",code:"npm install firecrawl",noteZh:"安装 Node.js SDK。",noteEn:"Install the Node.js SDK."},
        {labelZh:"接入智能体",labelEn:"Connect an agent",code:"npx -y firecrawl-cli@latest init --all --browser",noteZh:"按项目说明初始化 CLI 与 skills。",noteEn:"Initialize the CLI and skills as documented by the project."}
      ],
      runtimeZh:"需要 Firecrawl API key；可通过 SDK、CLI、MCP 或 HTTP API 使用。",runtimeEn:"A Firecrawl API key is required; use it through the SDK, CLI, MCP, or HTTP API.",costZh:"开源仓库采用 AGPL-3.0；Firecrawl 托管服务、API 调用和外部模型可能产生费用。",costEn:"The open-source repository uses AGPL-3.0; hosted Firecrawl service, API calls, and external models may cost extra.",commercialZh:"商业使用前请核对 AGPL-3.0、托管服务条款和第三方依赖。",commercialEn:"Check AGPL-3.0, hosted-service terms, and third-party dependencies before commercial use."
    }
  };
  /* Every project gets an official cover immediately. A checked source image
     replaces it when the public source provides one, so pages never stay empty
     while waiting for a user to open them. */
  var readmeMedia = {
    "headroomlabs-ai/headroom": {
      url: "https://raw.githubusercontent.com/headroomlabs-ai/headroom/main/.github/assets/hero.svg",
      source: "https://github.com/headroomlabs-ai/headroom/blob/main/README.md#L1-L4",
      altZh: "Headroom：在送入模型前压缩智能体上下文",
      altEn: "Headroom: compressing agent context before it reaches the model",
      captionZh: "Headroom 展示把 55,957 个 token 压缩为 24,340 个实际发送给模型的 token，并保留关键错误行。",
      captionEn: "Headroom shows a 55,957-token agent prompt compressed to 24,340 tokens while preserving the critical error line.",
      analysisZh: "项目还说明它可在本地压缩工具输出、日志、文件和 RAG 片段，再把更短的上下文交给模型。",
      analysisEn: "It says it can compress tool outputs, logs, files, and RAG chunks locally before they reach the model."
    }
  };
  var curatedFor = function (item) { return item && curatedSamples[item.sourceId] ? curatedSamples[item.sourceId] : null; };
  var mediaFor = function (item) { return item && readmeMedia[item.sourceId] ? readmeMedia[item.sourceId] : null; };
  var repositoryCover = function (item) {
    var sourceId = String(item && item.sourceId || "").trim();
    return sourceId && sourceId.indexOf("/") !== -1 ? "https://opengraph.githubassets.com/1/" + encodeURI(sourceId) : null;
  };
  var $ = function (selector) { return document.querySelector(selector); };
  var set = function (selector, value) { var node = $(selector); if (node) node.textContent = value == null ? "" : String(value); };
  var hasCjk = function (value) { return /[\u3400-\u9fff]/.test(String(value || "")); };
  var safeUrl = function (value) { try { var url = new URL(value); return /^https?:$/.test(url.protocol) ? url.href : null; } catch (_) { return null; } };
  var trimUrl = function (value) { return String(value || "").replace(/\/+$/, ""); };
  var sourceName = function (item) { return item && item.source === "huggingface" ? "Hugging Face" : item && item.source === "github" ? "GitHub" : item && item.source ? item.source : "original source"; };
  var repoDirectory = function (item) {
    var id = String(item && item.sourceId || "").split("/").filter(Boolean).pop();
    if (id) return id.replace(/[^A-Za-z0-9._-]/g, "-");
    var url = trimUrl(item && item.canonicalUrl);
    return (url.split("/").filter(Boolean).pop() || "project").replace(/\.git$/, "").replace(/[^A-Za-z0-9._-]/g, "-");
  };
  var readmeUrl = function (item) {
    var evidence = safeUrl(item && item.admission && item.admission.evidenceUrl);
    var base = safeUrl(item && item.canonicalUrl);
    if (evidence && base && /(^|\.)githubusercontent\.com$/i.test(new URL(evidence).hostname)) {
      var path = new URL(evidence).pathname.split("/").filter(Boolean);
      var branch = item && item.repository && item.repository.defaultBranch || (path[2] || "main");
      var file = path.length > 3 ? path.slice(3).join("/") : "README.md";
      return trimUrl(base) + "/blob/" + encodeURIComponent(branch) + "/" + file.split("/").map(encodeURIComponent).join("/");
    }
    if (evidence) return evidence;
    if (!base) return null;
    var branch = item && item.repository && item.repository.defaultBranch || "main";
    return trimUrl(base) + "/blob/" + encodeURIComponent(branch) + "/README.md";
  };
  var links = function (item) {
    var original = safeUrl(item && item.canonicalUrl);
    var source = sourceName(item);
    var readme = readmeUrl(item);
    var evidence = safeUrl(item && item.admission && item.admission.evidenceUrl);
    var cloneUrl = original ? trimUrl(original) : "";
    if (cloneUrl && item && item.source === "github" && !/\.git$/i.test(cloneUrl)) cloneUrl += ".git";
    return {original: original, readme: readme, evidence: evidence, source: source, clone: cloneUrl};
  };
  var copy = function () { return english ? {
    title:"Tool details", missing:"Tool not found", missingText:"This project is not present in the current public snapshot.", kicker:"TOOL DETAIL", back:"← Back to ranking", sourceTitle:"Official project", sourceCopy:"See installation, releases, license, and full documentation on the official project page.", sourceLink:function (name) { return "Open " + name + " official page ↗"; }, readmeLink:"Open detailed docs ↗", evidenceLink:"Open project notes ↗", videoTitle:"Related videos", videoCopy:"Search results are ordered by views where the platform supports it.", videoLink:"Search YouTube by views ↗", bilibiliLink:"Search Bilibili by views ↗", useKicker:"START WITH THIS", useTitle:"Start here", useCopy:"Start with the project page, then follow its setup steps. The blocks below are ready to copy.", cloneLabel:"Get the project", cloneNote:"Copy this command, then follow the setup steps.", agentLabel:"Give it to a tool assistant", agentNote:"Give this request to your tool assistant for steps specific to the project.", sourceCommandLabel:"Official project link", sourceCommandNote:"Keep this official project link for sharing.", readmeCommandLabel:"Detailed docs link", readmeCommandNote:"Installation and calling details are on the project documentation page.", copy:"Copy", copied:"Copied", evidenceTitle:"Before you start", runtimeEvidence:"The project notes include installation and usage steps.", apiEvidence:"Check the project notes for service and model requirements.", licenseEvidence:"License", snapshotEvidence:"Information updated", runtimeLabel:"Services & APIs", runtimeValue:"Read the project notes and confirm the requirements in your environment.", costLabel:"Subscriptions & cost", costValue:"An open-source repository; hosted services or model APIs may charge separately", commercialLabel:"Commercial use", licensePending:"License review pending; commercial use is not confirmed", licenseKnown:function (id) { return "Verify the " + id + " license and model terms"; }, current:"Source updated", stale:"Source needs review", notice:"osmarks keeps the public project information together; installation, services, models, and commercial terms follow the official project page.", github:"GitHub", stars:"stars", language:"Language not listed", noDescription:"English summary pending.", homeAria:"osmarks home", navAria:"Page navigation", reviewAria:"Usage conditions", readinessKicker:"BEFORE YOU START", readinessTitle:"Check these first", readinessCopy:"Known conditions are separated from open questions.", prereqTitle:"Before you start", runmodeTitle:"How it runs", verifyTitle:"Verification", runCommandLabel:"Run & call", runCommandNote:"No confirmed command is shown when the public docs do not include one.", runCommandUnavailable:"The public docs do not include a confirmed run command.", rankRising:function (rank, score) { return "Rising #" + rank + " · " + score.toLocaleString("en-US") + " added stars in 7d"; }, rankStarred:function (rank, score) { return "Most starred #" + rank + " · " + score.toLocaleString("en-US") + " stars"; }, updated:"Project updated"
  } : {
    title:"工具详情", missing:"未找到该工具", missingText:"这个项目暂未出现在当前公开快照中。", kicker:"TOOL DETAIL / 工具详情", back:"← 返回榜单", sourceTitle:"官方项目页面", sourceCopy:"查看安装、版本、许可证和完整说明。", sourceLink:function (name) { return "打开 " + name + " 官方页面 ↗"; }, readmeLink:"打开详细说明 ↗", evidenceLink:"打开项目说明 ↗", videoTitle:"相关视频", videoCopy:"按平台支持的播放量优先打开检索结果。", videoLink:"在 YouTube 按播放量检索 ↗", bilibiliLink:"在哔哩哔哩按播放量检索 ↗", useKicker:"开始使用", useTitle:"从这里开始", useCopy:"先看项目介绍，再按步骤安装；下面的信息可以直接复制。", cloneLabel:"获取项目", cloneNote:"复制后按项目步骤完成安装。", agentLabel:"交给工具助手", agentNote:"把这段话交给你的工具助手，让它按项目页面给出步骤。", sourceCommandLabel:"官方页面链接", sourceCommandNote:"保留官方项目入口，方便分享。", readmeCommandLabel:"详细说明链接", readmeCommandNote:"安装和调用细节请看项目说明。", copy:"复制", copied:"已复制", evidenceTitle:"使用前要知道", runtimeEvidence:"项目说明包含安装与使用步骤。", apiEvidence:"服务与模型需求请查看官方项目页面。", licenseEvidence:"许可证", snapshotEvidence:"资料更新时间", runtimeLabel:"服务与 API", runtimeValue:"请阅读官方项目页面，并在你的环境中确认需求。", costLabel:"订阅与成本", costValue:"开源仓库；外部服务或模型 API 可能另行收费", commercialLabel:"商业使用", licensePending:"许可证待核验，暂不确认可商业使用", licenseKnown:function (id) { return "需核验 " + id + " 许可证及所用模型条款"; }, current:"来源已更新", stale:"来源需要复核", notice:"osmarks 汇总公开项目资料；安装、服务、模型和商业许可仍以官方项目页面为准。", github:"GitHub", stars:"星标", language:"语言未列出", noDescription:"中英文简介待补充。", homeAria:"osmarks 首页", navAria:"页面导航", reviewAria:"使用条件状态", readinessKicker:"开始前", readinessTitle:"先确认这些条件", readinessCopy:"把已知条件和仍待确认的部分分开，避免把猜测当成结论。", prereqTitle:"开始前准备", runmodeTitle:"运行方式", verifyTitle:"验证状态", runCommandLabel:"运行与调用", runCommandNote:"官方说明没有给出可确认的命令时，这里不会代为猜测；打开详细说明查看。", runCommandUnavailable:"官方说明暂未给出可确认的运行命令。", rankRising:function (rank, score) { return "上升总榜 #" + rank + " · 近 7 日新增 " + Number(score || 0).toLocaleString("zh-CN") + " 星标"; }, rankStarred:function (rank, score) { return "星标总榜 #" + rank + " · 累计 " + Number(score || 0).toLocaleString("zh-CN") + " 星标"; }, updated:"项目最近更新"
  }; };

  function setLink(selector, url, label) {
    var node = $(selector);
    if (!node) return;
    var valid = safeUrl(url);
    node.hidden = !valid;
    node.href = valid || "#";
    if (label) node.textContent = label;
  }

  function commandData(item) {
    var info = links(item);
    var original = info.original || "(official project URL unavailable)";
    var clone = info.clone ? "git clone " + info.clone + "\ncd " + repoDirectory(item) : (english ? "Open the official project page first." : "请先打开官方项目页面。");
    var prompt = english
      ? "Open the official project page for " + item.name + ". Return the exact setup and calling steps for my environment, and mark anything the project does not specify. Project: " + original
      : "请先查看「" + item.name + "」的官方项目页面，整理适合我当前环境的安装与调用步骤；项目没有写明的内容请明确标注。项目：" + original;
    var curated = curatedFor(item);
    var run = curated && curated.commands && curated.commands.length
      ? curated.commands[curated.commands.length - 1].code
      : (english ? "The public docs do not include a confirmed run command." : "官方说明暂未给出可确认的运行命令。");
    return {clone:clone, prompt:prompt, readme:info.readme, evidence:info.evidence, original:info.original, source:info.source, run:run};
  }

  var editorialProfiles = {
    "langflow-ai/langflow": {
      capability: {
        zh: "Langflow 是一个可视化 AI 应用搭建工具：把模型、提示词、检索、记忆和外部工具拖到画布上连接，调试后即可作为 API 部署。",
        en: "Langflow is a visual builder for AI applications: connect models, prompts, retrieval, memory, and external tools on a canvas, test the flow, then deploy it as an API."
      },
      difference: {
        zh: "它把可视化编排和 Python 自定义组件放在一起，既能快速试验，也能把流程交给团队复用；支持本地运行和部署到云端。",
        en: "It combines visual orchestration with custom Python components, so teams can prototype quickly and reuse flows in local or cloud deployments."
      },
      fit: {
        zh: "适合想快速搭建聊天机器人、知识库问答、数据处理链或多智能体流程，又不想从零编写全部胶水代码的人。",
        en: "A fit for people who want to build chatbots, knowledge-base Q&A, data pipelines, or multi-agent flows without writing every integration from scratch."
      }
    },
    "open-webui/open-webui": {
      capability: {
        zh: "Open WebUI 是一个可自托管的 AI 工作台：在浏览器里统一使用 Ollama、本地模型和 OpenAI 兼容 API，管理对话、文件、知识库与团队权限。",
        en: "Open WebUI is a self-hosted AI workspace: use Ollama, local models, and OpenAI-compatible APIs in one browser interface, with conversations, files, knowledge bases, and team access in one place."
      },
      difference: {
        zh: "它把多种模型后端放进同一套界面，并提供本地部署、知识库检索、工具接入和用户管理，适合把个人实验逐步变成团队工作台。",
        en: "It puts multiple model backends behind one interface and adds self-hosting, knowledge retrieval, tool connections, and user management for turning experiments into a team workspace."
      },
      fit: {
        zh: "适合想在自己的服务器上统一管理本地模型与云端 API，或需要让团队安全共享对话和知识库的人。",
        en: "A fit for people who want one self-hosted place for local models and cloud APIs, or need to share conversations and knowledge bases with a team."
      }
    }
  };

  function profileData(item) {
    var curated = curatedFor(item);
    if (curated) return {capability:english ? curated.capability.en : curated.capability.zh, difference:english ? curated.difference.en : curated.difference.zh, fit:english ? curated.fit.en : curated.fit.zh};
    var editorial = item && editorialProfiles[item.sourceId];
    if (editorial) return {capability:english ? editorial.capability.en : editorial.capability.zh, difference:english ? editorial.difference.en : editorial.difference.zh, fit:english ? editorial.fit.en : editorial.fit.zh};
    var category = (item.categories || [])[0] || "";
    var info = categoryInfo[category] || {zhCapability:"把官方项目页面中的主要能力、安装方式和使用入口集中在一起。", zhFit:"适合希望先看清项目用途与使用条件的人。", enCapability:"Keeps the project's main capability, setup path, and usage entry point together.", enFit:"A fit for people who want to understand the tool before using it."};
    var repo = item.repository || {};
    var topics = Array.isArray(repo.topics) ? repo.topics.filter(Boolean).slice(0, 3) : [];
    var language = repo.language || (english ? "the listed language is not available" : "暂未列出主要语言");
    var topicText = topics.length ? topics.join(", ") : (english ? "no public topic tags" : "暂未列出主题标签");
    var difference = english
      ? "Its public focus is " + topicText + "; the project is primarily built with " + language + "."
      : "它的公开方向集中在 " + topicText + "，主要使用 " + language + " 构建。";
    var descriptionZh = String(item.descriptionZh || item.description || "").trim();
    var descriptionEn = String(item.descriptionEn || item.description || "").trim();
    if (hasCjk(descriptionEn)) descriptionEn = "";
    var use = categoryUse[category] || {zh:"实际工作流程", en:"real workflows"};
    var capabilityZh = descriptionZh || info.zhCapability;
    var capabilityEn = descriptionEn || info.enCapability;
    if (descriptionZh && descriptionZh.length < 32) capabilityZh += " 主要用于" + use.zh + "。";
    if (descriptionEn && descriptionEn.length < 72) capabilityEn += " It is mainly used for " + use.en + ".";
    return {
      capability: english ? capabilityEn : capabilityZh,
      difference: difference,
      fit: english ? info.enFit : info.zhFit
    };
  }

  function leaderboardEntry(item) {
    var snapshots = Array.isArray(data.leaderboardSnapshots) ? data.leaderboardSnapshots : [];
    var matching = snapshots.filter(function (candidate) { return candidate && candidate.board === board && Array.isArray(candidate.entries); });
    matching.sort(function (a, b) { return Date.parse(String(b.generatedAt || b.sourceSnapshotAt || "")) - Date.parse(String(a.generatedAt || a.sourceSnapshotAt || "")); });
    var snapshot = matching[0];
    if (!snapshot) return null;
    return snapshot.entries.find(function (entry) { return entry && entry.toolId === item.id; }) || null;
  }

  function readinessData(item) {
    var admission = item.admission || {};
    var repository = item.repository || {};
    var curated = curatedFor(item);
    var evidence = Array.isArray(admission.evidence) ? admission.evidence : [];
    var language = repository.language || (english ? "the main language is not listed" : "暂未列出主要语言");
    var installKnown = evidence.indexOf("installation") !== -1;
    return {
      prereq: english
        ? (curated && item.sourceId === "heygen-com/hyperframes" ? "Node.js 22+, FFmpeg, and headless Chrome are listed for the local rendering path." : curated && item.sourceId === "openclaw/openclaw" ? "Choose a model provider and chat channels; the project provides macOS/Linux/WSL2, Windows PowerShell, and npm installation paths." : "The project page lists " + language + ". It mentions installation " + (installKnown ? "steps" : "but the steps are not confirmed here") + "; model, API-key, and hardware needs are not stated clearly in the current materials.")
        : (curated && item.sourceId === "heygen-com/hyperframes" ? "本地渲染路径需要 Node.js 22+、FFmpeg 和 headless Chrome。" : curated && item.sourceId === "openclaw/openclaw" ? "需要选择模型提供方和聊天渠道；项目提供 macOS/Linux/WSL2、Windows PowerShell 与 npm 安装路径。" : "项目资料记录的主要语言是 " + language + "。项目说明" + (installKnown ? "出现了安装线索，具体命令请打开原文" : "尚未确认安装步骤") + "；模型、API 密钥和硬件要求在当前资料中没有明确说明。"),
      runmode: english
        ? (curated && item.sourceId === "heygen-com/hyperframes" ? "Use the CLI, AI coding-agent skills, or a hosted workflow; preview and render commands are listed below." : curated && item.sourceId === "openclaw/openclaw" ? "Run the Gateway on your own device, then connect the configured channels and tools." : "Download it locally first; the exact service, model, or API setup remains subject to the official documentation.")
        : (curated && item.sourceId === "heygen-com/hyperframes" ? "可以使用 CLI、AI 编程代理技能或托管工作流；下面列出预览与渲染命令。" : curated && item.sourceId === "openclaw/openclaw" ? "先在自己的设备上运行 Gateway，再连接已配置的聊天渠道和工具。" : "先下载到本地；具体服务、模型和 API 配置仍以官方说明为准。"),
      verify: english
        ? (admission.runtimeTested ? "Osmarks has recorded a runtime check." : "The public project notes were read; Osmarks has not independently run this project.")
        : (admission.runtimeTested ? "Osmarks 已记录运行验证。" : "已读取项目公开说明；Osmarks 尚未独立运行验证。")
    };
  }

  function renderMaintainer(item) {
    var owner = item && item.owner || {};
    var handle = String(owner.handle || "").trim();
    var role = String(owner.role || "").trim().toLowerCase();
    var ownerUrl = handle && item && item.source === "github" ? "https://github.com/" + encodeURIComponent(handle) : "";
    var projectUrl = item && item.canonicalUrl;
    set("#maintainer-kicker", english ? "ORIGIN & PEOPLE" : "原创团队与维护者");
    set("#maintainer-title", english ? "Original team & maintainers" : "原创团队与维护者");
    set("#maintainer-copy", english ? "See who publishes the project, how the public account is identified, and where to learn more." : "了解项目由谁发起、由谁持续维护，以及可以公开查到的入口。");
    set("#maintainer-team-label", english ? "Public owner" : "公开归属");
    set("#maintainer-role-label", english ? "Maintainer type" : "维护身份");
    set("#maintainer-owner-label", english ? "Team profile" : "团队主页");
    set("#maintainer-project-label", english ? "Project page" : "项目主页");
    set("#maintainer-team", handle || (english ? "Not listed in the public record" : "公开资料未列出"));
    set("#maintainer-role", role === "organization" ? (english ? "Organization account" : "组织账号") : role === "user" || role === "individual" ? (english ? "Individual account" : "个人账号") : (english ? "Account type not listed" : "账号类型未列出"));
    setLink("#maintainer-owner", ownerUrl, english ? "Open team profile ↗" : "打开团队主页 ↗");
    setLink("#maintainer-project", projectUrl, english ? "Open project page ↗" : "打开项目主页 ↗");
    set("#maintainer-note", handle ? (english ? "The public record currently identifies the project at account level. Use the linked profile and project page for the team's own introduction, people, and contact details." : "当前公开资料已核对到账号层级；团队介绍、成员与联系信息请以链接中的官方主页为准。") : (english ? "No public owner profile is listed in the current record." : "当前资料没有列出可核对的团队主页。"));
    var extra = $("#maintainer-extra");
    if (extra) extra.hidden = true;
    if (!handle || !ownerUrl || typeof root.fetch !== "function") return;
    root.fetch(ownerUrl.replace("https://github.com/", "https://api.github.com/users/")).then(function (response) {
      if (!response || !response.ok) throw new Error("owner profile unavailable");
      return response.json();
    }).then(function (profile) {
      if (!extra || !profile) return;
      var parts = [];
      if (profile.name) parts.push((english ? "Name: " : "名称：") + profile.name);
      if (profile.bio) parts.push((english ? "About: " : "简介：") + profile.bio);
      if (profile.company) parts.push((english ? "Organization: " : "组织：") + profile.company);
      if (profile.location) parts.push((english ? "Location: " : "所在地：") + profile.location);
      if (profile.blog) parts.push((english ? "Website: " : "网站：") + profile.blog);
      if (!parts.length) return;
      extra.textContent = parts.join(english ? " · " : "　·　");
      extra.hidden = false;
    }).catch(function () {});
  }

  function firstReadmeImage(markdown, rawUrl) {
    var candidates = [];
    var markdownImage = /!\[([^\]]*)\]\((?:<)?([^)>\s]+)(?:>)?(?:\s+["'][^"']*["'])?\)/g;
    var match;
    while ((match = markdownImage.exec(markdown))) candidates.push({alt:match[1], src:match[2]});
    var htmlImage = /<img\b[^>]*?src=["']([^"']+)["'][^>]*>/gi;
    while ((match = htmlImage.exec(markdown))) candidates.push({alt:"", src:match[1]});
    for (var i = 0; i < candidates.length; i += 1) {
      var candidate = candidates[i];
      var source = String(candidate.src || "").trim().replace(/^<|>$/g, "");
      if (!source || /^data:|^javascript:|^#/i.test(source)) continue;
      if (/shields\.io|img\.shields|badge|actions\/workflows|github\.com\/.*\/actions/i.test(source)) continue;
      try {
        var resolved = new URL(source, rawUrl);
        if (/^https?:$/.test(resolved.protocol)) return {url:resolved.href, alt:candidate.alt || "visual"};
      } catch (_) {}
    }
    return null;
  }

  function renderRemoteSample(item, profile) {
    var story = $("#sample-story");
    var quickstart = $("#quickstart");
    var raw = safeUrl(item && item.admission && item.admission.evidenceUrl);
    if (quickstart) quickstart.hidden = true;
    if (!story) return;
    story.hidden = false;
    var image = $("#sample-image");
    var staticMedia = mediaFor(item);
    var cover = repositoryCover(item);
    var fallback = cover ? {url:cover, alt:"Official GitHub repository cover"} : null;
    var showMedia = function (media, fromReadme) {
      if (!media || !media.url || !image) return;
      image.alt = english ? (media.altEn || media.alt || "Official visual") : (media.altZh || media.alt || "官方画面");
      image.loading = "lazy";
      image.decoding = "async";
      image.onload = function () { story.hidden = false; };
      image.onerror = function () { if (fallback && media.url !== fallback.url) showMedia(fallback, false); };
      image.src = media.url;
    };
    if (staticMedia) showMedia(staticMedia, true);
    else if (fallback) showMedia(fallback, false);
    if (!raw || typeof root.fetch !== "function") return;
    root.fetch(raw).then(function (response) {
      if (!response || !response.ok) throw new Error("README unavailable");
      return response.text();
    }).then(function (markdown) {
      var media = firstReadmeImage(markdown, raw);
      if (!media) return;
      showMedia({url:media.url, alt:media.alt}, true);
    }).catch(function () {});
  }

  function renderSample(item, profile) {
    var sample = curatedFor(item);
    var story = $("#sample-story");
    var quickstart = $("#quickstart");
    if (!sample) {
      if (story) story.hidden = true;
      if (quickstart) quickstart.hidden = true;
      renderRemoteSample(item, profile);
      return;
    }
    story.hidden = false;
    quickstart.hidden = false;
    var image = $("#sample-image");
    image.src = sample.image.src;
    image.alt = english ? sample.image.altEn : sample.image.altZh;
    image.loading = "lazy";
    set("#quickstart-kicker", english ? "GET STARTED" : "马上开始");
    set("#quickstart-title", english ? "Get it running" : "把它跑起来");
    set("#quickstart-copy", english ? "When you are ready to try it, start with one of these copy-ready commands." : "准备动手时，下面三段命令可以直接开始。");
    var grid = $("#quickstart-grid"); grid.replaceChildren();
    sample.commands.forEach(function (item, index) {
      var card = document.createElement("article"); card.className = "quickstart-card";
      var head = document.createElement("div"); head.className = "command-head";
      var label = document.createElement("strong"); label.textContent = english ? item.labelEn : item.labelZh;
      var button = document.createElement("button"); button.className = "copy-button"; button.type = "button"; button.textContent = english ? "Copy" : "复制"; button.setAttribute("data-copy-target", "sample-command-" + index);
      head.append(label, button);
      var code = document.createElement("code"); code.className = "command"; code.id = "sample-command-" + index; code.textContent = item.code;
      var note = document.createElement("p"); note.className = "command-note"; note.textContent = english ? item.noteEn : item.noteZh;
      card.append(head, code, note); grid.append(card);
      button.addEventListener("click", function () { copyTarget(button); });
    });
  }

  function render() {
    var t = copy();
    document.documentElement.lang = english ? "en" : "zh-CN";
    document.title = t.title + (tool ? "｜" + tool.name : "") + "｜osmarks";
    set("#lang", english ? "Chinese / EN" : "EN / 中文");
    $("#lang").setAttribute("aria-label", english ? "Switch language" : "切换语言");
    $("#lang").setAttribute("aria-pressed", english ? "true" : "false");
    set("#kicker", t.kicker); set("#back", t.back); $(".brand").setAttribute("aria-label", t.homeAria); $(".nav").setAttribute("aria-label", t.navAria); $(".review").setAttribute("aria-label", t.reviewAria);
    set("#source-title", t.sourceTitle); set("#source-copy", t.sourceCopy); set("#readme-link", t.readmeLink); set("#evidence-link", t.evidenceLink);
    set("#video-title", t.videoTitle); set("#video-copy", t.videoCopy); set("#video-link", t.videoLink); set("#bilibili-link", t.bilibiliLink);
    set("#use-kicker", t.useKicker); set("#use-title", t.useTitle); set("#use-copy", t.useCopy); set("#clone-label", t.cloneLabel); set("#clone-note", t.cloneNote); set("#agent-label", t.agentLabel); set("#agent-note", t.agentNote); set("#source-command-label", t.sourceCommandLabel); set("#source-command-note", t.sourceCommandNote); set("#readme-command-label", t.readmeCommandLabel); set("#readme-command-note", t.readmeCommandNote); set("#clone-copy", t.copy); set("#agent-copy", t.copy); set("#source-url-copy", t.copy); set("#readme-copy", t.copy);
    set("#evidence-title", t.evidenceTitle); set("#evidence-runtime-label", english ? "Setup & usage" : "安装与使用"); set("#evidence-api-label", english ? "Services & models" : "服务与模型"); set("#evidence-license-label", t.licenseEvidence); set("#evidence-snapshot-label", t.snapshotEvidence);
    set("#difference-title", english ? "What makes it different" : "它有什么不同"); set("#fit-title", english ? "Who it suits" : "适合谁");
    set("#runtime-label", t.runtimeLabel); set("#runtime-value", t.runtimeValue); set("#cost-label", t.costLabel); set("#cost-value", t.costValue); set("#commercial-label", t.commercialLabel); set("#notice", t.notice);
    set("#readiness-kicker", t.readinessKicker); set("#readiness-title", t.readinessTitle); set("#readiness-copy", t.readinessCopy); set("#prereq-title", t.prereqTitle); set("#runmode-title", t.runmodeTitle); set("#verify-title", t.verifyTitle); set("#run-command-label", t.runCommandLabel); set("#run-command-note", t.runCommandNote);
    if (!tool) {
      $("#detail").classList.add("not-found"); set("#name", t.missing); set("#desc", t.missingText); set("#source-status", t.stale); $("#source-status").dataset.state = "stale"; return;
    }
    $("#detail").classList.remove("not-found");
    var info = commandData(tool);
    set("#name", tool.name);
    var profile = profileData(tool);
    set("#desc", profile.capability || t.noDescription);
    set("#difference", profile.difference); set("#fit", profile.fit);
    renderMaintainer(tool);
    var curated = curatedFor(tool);
    renderSample(tool, profile);
    var facts = $("#facts"); facts.replaceChildren();
    (tool.categories || []).forEach(function (label) { var span = document.createElement("span"); span.className = "fact"; span.textContent = english ? (categoryEnglish[label] || label) : label; facts.appendChild(span); });
    var starValue = tool.metrics && tool.metrics.stars || 0; var star = document.createElement("span"); star.className = "fact"; star.textContent = "★ " + new Intl.NumberFormat(english ? "en-US" : "zh-CN").format(starValue) + " " + t.stars; facts.appendChild(star);
    var language = document.createElement("span"); language.className = "fact"; language.textContent = tool.repository && tool.repository.language ? tool.repository.language : t.language; facts.appendChild(language);
    var entry = leaderboardEntry(tool); if (entry) { var boardFact = document.createElement("span"); boardFact.className = "fact fact-board"; var score = Number(entry.score || 0); boardFact.textContent = board === "rising" ? t.rankRising(entry.rank, score) : t.rankStarred(entry.rank, score); facts.appendChild(boardFact); }
    var pushedAt = tool.repository && tool.repository.pushedAt; if (pushedAt) { var updated = document.createElement("span"); updated.className = "fact"; updated.textContent = t.updated + " · " + String(pushedAt).slice(0, 10); facts.appendChild(updated); }
    var current = tool.status === "active"; $("#source-status").dataset.state = current ? "current" : "stale"; set("#source-status", (current ? t.current : t.stale) + " · " + String(tool.sourceSnapshotAt || "").slice(0, 10));
    setLink("#source-link", info.original, t.sourceLink(info.source)); setLink("#readme-link", info.readme, t.readmeLink); setLink("#evidence-link", info.evidence, t.evidenceLink);
    setLink("#video-link", "https://www.youtube.com/results?search_query=" + encodeURIComponent(tool.name + " AI tool") + "&sp=CAM%253D", t.videoLink); setLink("#bilibili-link", "https://search.bilibili.com/all?keyword=" + encodeURIComponent(tool.name + " AI") + "&search_type=video&order=click", t.bilibiliLink);
    set("#clone-command", info.clone); set("#agent-command", info.prompt); set("#source-command", info.original || (english ? "Official project URL unavailable." : "官方项目页面链接暂不可用。")); set("#readme-command", info.readme || (english ? "Detailed docs URL unavailable." : "详细说明链接暂不可用。")); set("#run-command", info.run || t.runCommandUnavailable);
    var evidence = tool.admission || {}; var evidenceNames = Array.isArray(evidence.evidence) ? evidence.evidence.map(function (name) { return ({code_language:english ? "project language" : "项目语言", installation:english ? "installation notes" : "安装说明", runtime_usage:english ? "usage notes" : "使用说明"}[name] || name.replace(/_/g, " ")); }) : []; var runtimeText = evidenceNames.length ? (english ? "The project page mentions: " + evidenceNames.join(", ") + "." : "项目页面提到：" + evidenceNames.join("、") + "。"): t.runtimeEvidence; set("#evidence-runtime", runtimeText); set("#evidence-api", t.apiEvidence); var license = tool.license || {}; var licenseId = license.spdxId && license.spdxId !== "NOASSERTION" ? license.spdxId : (english ? "License not listed" : "许可证待确认"); set("#evidence-license", licenseId + (license.status === "needs_review" ? (english ? " · review pending" : " · 待复核") : "")); set("#evidence-snapshot", tool.sourceSnapshotAt || data.generatedAt || "—");
    var commercial = curated ? (english ? curated.commercialEn : curated.commercialZh) : (license.status === "needs_review" || !license.spdxId || license.spdxId === "NOASSERTION" ? t.licensePending : t.licenseKnown(license.spdxId));
    set("#runtime-value", curated ? (english ? curated.runtimeEn : curated.runtimeZh) : t.runtimeValue);
    set("#cost-value", curated ? (english ? curated.costEn : curated.costZh) : t.costValue);
    set("#commercial-value", commercial);
    set("#evidence-api", curated ? (english ? curated.runtimeEn : curated.runtimeZh) : t.apiEvidence);
    var readiness = readinessData(tool); set("#prereq-value", readiness.prereq); set("#runmode-value", readiness.runmode); set("#verify-value", readiness.verify);
  }

  function fallbackCopy(text, done) { var area = document.createElement("textarea"); area.value = text; area.setAttribute("readonly", ""); area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.select(); try { document.execCommand("copy"); done(); } finally { document.body.removeChild(area); } }
  function copyTarget(button) {
    var target = $("#" + button.getAttribute("data-copy-target")); if (!target) return;
    var text = target.textContent || ""; var done = function () { button.dataset.copied = "true"; button.textContent = english ? "Copied" : "已复制"; setTimeout(function () { button.dataset.copied = "false"; button.textContent = copy().copy; }, 1600); };
    if (root.navigator && root.navigator.clipboard && root.navigator.clipboard.writeText) root.navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); }); else fallbackCopy(text, done);
  }

  $("#back").href = board === "rising" ? "rising.html" : board === "attention" ? "starred.html" : "index.html";
  $("#lang").addEventListener("click", function () { english = !english; if (root.localStorage) root.localStorage.setItem("osmarks.lang", english ? "en" : "zh"); render(); });
  document.querySelectorAll("[data-copy-target]").forEach(function (button) { button.addEventListener("click", function () { copyTarget(button); }); });
  render();
}(window, document));
