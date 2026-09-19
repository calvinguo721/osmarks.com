/* ==========================================================================
   osmarks.com · 工具卡「四大件」人工内容
   --------------------------------------------------------------------------
   一条硬规矩：这个文件里的每一句话都由人写，不自动生成。
   每一项都要如实标注核验等级，不许把「照着官方文档抄的命令」写成「实测通过」。

   核验等级（页面会显示成徽标）：
     doc_only  命令与说明来自官方文档，本站尚未在实机逐条执行
     tested    本站已在实机跑通，problems 字段必须有可复现记录
     broken    本站实测跑不通，页面必须显示原因，不许删卡

   字段说明：
     plain     人话场景翻译，硬上限 80 字，说清解决什么痛点
     fitFor    适合谁
     avoid     谁千万别碰
     pitfalls  避坑排雷看板，err 必须是真的报错原文，fix 必须能直接照做
     run       一键运行命令
     video     站内画中画视频，没有就留 null，等 Upack 自荐通道来填
   ========================================================================== */
(function (root) {
  root.OSMARKS_CRAFT = {
    updatedAt: '2026-09-16',

    // 全局核验声明，页面底部如实展示
    notice:
      '以下卡片内容为人工整理。命令与报错处置来自项目官方文档，本站尚未在实机逐条复跑，因此暂不发放 Marks 认证标。',

    items: {
      'ollama/ollama': {
        plain:
          '想在本地跑大模型又不想折腾环境。装完一条命令就能用，不用显卡集群，笔记本也能起。',
        fitFor: ['想把资料留在自己电脑里的人', '第一次接触本地模型'],
        avoid: '指望本地跑出云端同等效果的人，别碰。小机器跑不动大模型，这是物理限制。',
        verify: 'doc_only',
        video: null,
        run: { label: 'macOS / Linux', cmd: 'curl -fsSL https://ollama.com/install.sh | sh' },
        pitfalls: [
          {
            err: 'Error: listen tcp 127.0.0.1:11434: bind: address already in use',
            fix: '说明已经有一个 ollama 在后台跑着。先执行 ollama ps 看看，或者重启电脑再试，别重复装。'
          },
          {
            err: 'Error: model requires more system memory than is available',
            fix: '模型太大。换小参数版本，比如 7b 换成 3b，或者加内存。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'n8n-io/n8n': {
        plain:
          '把一堆重复的活儿串起来自动跑，还不想写代码。可视化连线，跑在自己机器上，数据不出门。',
        fitFor: ['手上有一堆重复流程的人', '想自托管不付订阅费'],
        avoid: '只想点一下就完事的人，别碰。它再可视化也是要自己搭流程的。',
        verify: 'doc_only',
        video: null,
        run: { label: '直接跑，无需安装', cmd: 'npx n8n' },
        pitfalls: [
          {
            err: 'Error: listen EADDRINUSE: address already in use :::5678',
            fix: '默认端口被占了。启动时加环境变量换端口，比如 N8N_PORT=5679。'
          },
          {
            err: 'Error: Cannot find module 或者启动即退出',
            fix: 'Node 版本太老。升到官方要求的版本再跑，别用系统自带的老 Node。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'langgenius/dify': {
        plain:
          '想搭一个自己的 AI 应用但不会写前端。它把界面、流程、知识库都做好了，你只管配。',
        fitFor: ['想给团队内部做个 AI 工具的人', '做客服或知识库问答'],
        avoid: '只有一台小内存机器的人先别碰。整套跑起来很吃资源，会卡到你怀疑人生。',
        verify: 'doc_only',
        video: null,
        run: {
          label: '自托管，需先装 Docker',
          cmd: 'git clone https://github.com/langgenius/dify.git && cd dify/docker && docker compose up -d'
        },
        pitfalls: [
          {
            err: 'Cannot connect to the Docker daemon at unix:///var/run/docker.sock',
            fix: 'Docker 没启动。先把 Docker Desktop 打开，等它显示运行中，再执行上面的命令。'
          },
          {
            err: 'Error response from daemon: Ports are not available: 0.0.0.0:80',
            fix: '80 端口被占了，常见是装了别的网页服务。停掉它，或者改 docker-compose 里的端口映射。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'open-webui/open-webui': {
        plain:
          '想让本地模型像网页版聊天一样好用。装完就是界面，能接本地模型也能接别的接口。',
        fitFor: ['已经在本地跑模型，缺个好界面', '想要类似网页版的使用体验'],
        avoid: '模型还没跑起来的人先别装。它只是界面，后面没模型一样用不了。',
        verify: 'doc_only',
        video: null,
        run: { label: 'pip 安装后启动', cmd: 'pip install open-webui && open-webui serve' },
        pitfalls: [
          {
            err: 'ERROR: Could not find a version that satisfies the requirement open-webui',
            fix: 'Python 版本太低。升到 3.11 以上再装。'
          },
          {
            err: '启动后浏览器打不开 localhost:8080',
            fix: '首次启动要初始化数据库，等它打印出访问地址再打开，别急着刷新。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'huggingface/transformers': {
        plain:
          '要拿现成模型做文本、图像或语音任务，不想从零写。这个库把主流模型都包好了，几个函数就能跑。',
        fitFor: ['要跑具体模型任务的人', '有一点代码基础'],
        avoid: '完全不会写代码的人，别碰。它没有图形界面。',
        verify: 'doc_only',
        video: null,
        run: { label: 'pip 安装', cmd: 'pip install transformers' },
        pitfalls: [
          {
            err: 'ImportError: cannot import name 某模块 from transformers',
            fix: '缺底层框架。先装 torch，别只装 transformers。'
          },
          {
            err: '下载模型卡住或者连接超时',
            fix: '换国内镜像源，或者设置 HF_ENDPOINT 指向镜像，别反复重试硬等。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'AUTOMATIC1111/stable-diffusion-webui': {
        plain:
          '想自己在本机生成图片，不想按张付费。装好就是网页操作台，图全在自己电脑里。',
        fitFor: ['想批量出图的人', '在意图片不外传'],
        avoid: '显卡不行的别碰。这东西吃显存，小显存连启动都困难。',
        verify: 'doc_only',
        video: null,
        run: {
          label: '克隆后运行启动脚本',
          cmd: 'git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git && cd stable-diffusion-webui'
        },
        pitfalls: [
          {
            err: '启动正常但生成时报模型文件缺失',
            fix: '仓库里不含模型权重，需要自己另外下载模型文件，放进 models 目录。这一步官方文档写得很清楚。'
          },
          {
            err: '安装路径含中文导致启动报错',
            fix: '把目录换到纯英文路径下面再跑。这个问题很常见，也最容易被忽略。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'firecrawl/firecrawl': {
        plain:
          '要让 AI 读网页内容，但直接抓回来全是乱码和广告。它把网页整理成干净的结构化数据。',
        fitFor: ['在做 AI 应用需要喂网页内容', '要抓一批页面做整理'],
        avoid: '只是想手动复制一篇文章的人，别碰。为这个装一套东西不划算。',
        verify: 'doc_only',
        video: null,
        run: { label: '云服务需要先申请密钥', cmd: 'npm install @mendable/firecrawl-js' },
        pitfalls: [
          {
            err: '上报 401 Unauthorized',
            fix: '没有配密钥。先去官方申请 API Key，写进环境变量再调用，别写死在代码里。'
          },
          {
            err: '抓取返回内容为空',
            fix: '页面是前端渲染的，需要开浏览器渲染模式，普通请求抓不到内容。'
          }
        ],
        cmdSource: '项目官方文档 README'
      },

      'langchain-ai/langchain': {
        plain:
          '要写一个能自己查资料、调工具的 AI 程序，不想每个模型都重写一遍。它把这些接口统一了。',
        fitFor: ['要开发 AI 应用的程序员', '需要切换多个模型'],
        avoid: '只想用现成产品的人，别碰。这是给开发者用的库，不是软件。',
        verify: 'doc_only',
        video: null,
        run: { label: 'pip 安装', cmd: 'pip install langchain' },
        pitfalls: [
          {
            err: 'ModuleNotFoundError: No module named 某子模块',
            fix: '新版把功能拆成了多个包。按官方文档装上对应的子包，别指望一个包全包含。'
          },
          {
            err: '照着旧教程敲，报方法不存在',
            fix: '版本更新换过接口。以官方当前文档为准，网上的老教程基本都过期了。'
          }
        ],
        cmdSource: '项目官方文档 README'
      }
    }
  };
})(typeof window !== 'undefined' ? window : this);
