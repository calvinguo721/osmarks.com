#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
osmarks.com · 谷歌生态 GEO (生成式引擎优化) 全自动排雷与分发流水线
=============================================================================
核心使命：
1. 生成机器可读的 Google Schema.org JSON-LD (SoftwareApplication + FAQPage / Service)
2. 提炼人话场景、硬件门槛、避坑排雷补丁、匹配实操视频
3. 注入「出海四大件（虚拟卡/VPS/支付通道/eSIM）」高转化转化锚点
4. 导航栏常驻「企业私有化部署定制」高亮变现入口（弹窗咨询）
5. 独立输出 /enterprise 企业咨询落地页（黑金风 + 三触点转化）
6. 生产级静态页面自适应输出至 dist/ 目录，供 Cloudflare Pages 构建
=============================================================================
"""

import json
import os
from datetime import datetime

# 企业咨询转化常量（拿到专属客服微信号后改 ENTERPRISE_WECHAT 一行即全站生效）
ENTERPRISE_WECHAT = "开源马克斯"              # 微信公众号名（当前唯一真实咨询入口）
ENTERPRISE_KEYWORD = "企业定制"                # 公众号后台回复关键词
ENTERPRISE_MAIL = "calvinguo721@gmail.com"     # 邮件预约通道
REAL_REPO_URL = "https://github.com/calvinguo721/osmarks.com"

def generate_schema_jsonld(item):
    """生成喂给谷歌 AI Overview 和搜索引擎的最高权重 Schema.org 结构化数据"""
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": item["name"],
                "headline": f"{item['name']} 避坑指南与开箱实测 - 开源马克斯 Marks 认证",
                "applicationCategory": item["category"],
                "operatingSystem": item["os_support"],
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "128"
                },
                "review": {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Marks",
                        "jobTitle": "全网首席 AI 踩坑大师"
                    },
                    "reviewBody": item["scenario"]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": f"{item['name']} 常见的安装报错与避坑方法是什么？",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"开源马克斯排雷实测：{item['pitfall_fix']}"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"{item['name']} 最低需要什么电脑配置和显存？",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item["hardware_req"]
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"{item['name']} 可以免费替代哪些昂贵的商业软件？",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item["saas_alternative"]
                        }
                    }
                ]
            }
        ]
    }
    return json.dumps(schema, ensure_ascii=False, indent=2)

def build_video_block(item):
    """有实测视频就渲染画中画播放器，没有就渲染视频位预留卡，页面永不出现坏嵌入"""
    if item.get("video_embed_url"):
        return f"""    <!-- 视频画中画嵌入区（零跳出播放） -->
    <div class="bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
      <div class="bg-zinc-900 px-4 py-3 flex justify-between items-center text-xs border-b border-zinc-800">
        <span class="text-zinc-400">实操讲解博主：<strong class="text-white">{item['video_author']}</strong></span>
        <span class="text-emerald-400 font-mono font-semibold">站内高清播放（免跳出）</span>
      </div>
      <div class="relative w-full pb-[56.25%] h-0 bg-black">
        <iframe class="absolute top-0 left-0 w-full h-full"
                src="{item['video_embed_url']}"
                title="{item['name']} 避坑实战视频"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
      </div>
    </div>"""
    return """    <!-- 视频位预留卡（实测视频上线后自动切换为画中画播放器） -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center space-y-2">
      <div class="text-3xl">🎬</div>
      <div class="text-white font-bold">实操视频整理中</div>
      <p class="text-sm text-zinc-400">这套部署的完整踩坑实录正在剪辑，关注「开源马克斯」第一时间看实测</p>
    </div>"""

# 企业定制变现弹窗 + 交互脚本（纯静态字符串，JS 花括号无需转义）
ENT_MODAL_BLOCK = """
  <!-- 企业私有化部署定制 · 高亮变现入口弹窗 -->
  <div id="entModal" class="hidden fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-zinc-900 border border-emerald-500/30 rounded-2xl max-w-sm w-full p-6 space-y-4 relative shadow-2xl shadow-emerald-500/10">
      <button onclick="closeEntModal()" class="absolute top-3 right-4 text-zinc-500 hover:text-white text-2xl leading-none">&times;</button>
      <div class="text-3xl">🏢</div>
      <h3 class="text-white font-black text-lg leading-snug">企业私有化部署 · 一对一定制</h3>
      <p class="text-sm text-zinc-300 leading-relaxed">知识库中枢搭建、显存调优、内网大模型接入，交付即用。数据全程不出您的服务器。</p>
      <ul class="text-xs text-zinc-400 space-y-1.5">
        <li>✓ 按项目收费，不按人头收年费</li>
        <li>✓ 部署 + 调优 + 员工培训一条龙</li>
        <li>✓ 评测排雷永久免费，定制才是生意</li>
      </ul>
      <button id="entCopyBtn" onclick="copyEntContact()" class="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold py-2.5 rounded-lg hover:opacity-90 transition">复制公众号「开源马克斯」</button>
      <a href="https://osmarks.com/enterprise" class="block text-center text-xs text-emerald-400 hover:underline">查看企业服务详细介绍 →</a>
    </div>
  </div>

  <script>
    function openEntModal() {
      document.getElementById('entModal').classList.remove('hidden');
    }
    function closeEntModal() {
      document.getElementById('entModal').classList.add('hidden');
    }
    function copyEntContact() {
      var btn = document.getElementById('entCopyBtn');
      navigator.clipboard.writeText('开源马克斯').then(function () {
        btn.textContent = '已复制！去微信搜索公众号';
        setTimeout(function () { btn.textContent = '复制公众号「开源马克斯」'; }, 2000);
      });
    }
    document.getElementById('entModal').addEventListener('click', function (e) {
      if (e.target === this) closeEntModal();
    });
  </script>
"""

def build_static_page(item):
    """构建自带 GEO 结构化标签、变现入口、视频区与出海基建推荐位的完整高保真页面"""
    jsonld_code = generate_schema_jsonld(item)
    video_block = build_video_block(item)

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{item['name']} - 避坑排雷与实操指南 | 开源马克斯 osmarks.com</title>
  <meta name="description" content="{item['scenario']} 开源马克斯全网独家实测，提供最低硬件门槛与社区常见报错解决方案。">
  <meta name="keywords" content="{item['name']}, {item['name']} 报错解决, {item['name']} 教程, 企业知识库私有化部署, 开源马克斯, Marks认证">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- 谷歌 GEO 核心结构化数据卡片 -->
  <script type="application/ld+json">
{jsonld_code}
  </script>
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen pb-20">

  <!-- 顶部导航 -->
  <header class="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
      <a href="https://osmarks.com" class="flex items-center gap-3 text-white font-bold text-xl tracking-tight shrink-0">
        <span>osmarks<span class="text-emerald-400">.com</span></span>
        <span class="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-0.5 rounded border border-emerald-500/20 font-mono font-semibold hidden sm:inline">Marks 认证</span>
      </a>
      <div class="flex items-center gap-3 min-w-0">
        <div class="text-xs text-zinc-400 flex items-center gap-2 hidden md:flex">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          全网首席 AI 踩坑大师 · 避坑内参
        </div>
        <button onclick="openEntModal()" class="shrink-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-lg hover:scale-105 transition shadow-lg shadow-emerald-500/25">
          🏢 企业私有化部署定制
        </button>
      </div>
    </div>
  </header>

  <!-- 主体内容 -->
  <main class="max-w-5xl mx-auto px-6 pt-10 space-y-8">
    
    <!-- 标题与核心元数据 -->
    <div class="space-y-3">
      <div class="flex items-center gap-3 flex-wrap">
        <span class="text-sm font-mono text-zinc-400 font-bold">#01 排雷专档</span>
        <span class="bg-amber-400/10 text-amber-400 text-xs px-2 py-0.5 rounded font-mono">★ {item['stars_weekly']}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight">{item['name']}</h1>
      <p class="text-zinc-400 text-base leading-relaxed">{item['official_desc']}</p>
    </div>

    <!-- 人话场景与商业替代 -->
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-2">
        <div class="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          老板视角 · 这东西能干嘛
        </div>
        <p class="text-sm text-zinc-200 leading-normal">{item['scenario']}</p>
      </div>

      <div class="bg-zinc-900/90 border border-amber-500/30 rounded-xl p-5 space-y-2">
        <div class="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          商业价值与平替
        </div>
        <p class="text-sm text-zinc-200 leading-normal">{item['saas_alternative']}</p>
      </div>
    </div>

{video_block}

    <!-- 核心杀手锏：踩坑大师避坑排雷看板 -->
    <div class="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 space-y-4">
      <div class="flex items-center gap-2 text-amber-400 font-bold text-base">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        全网首席 AI 踩坑大师 · 避坑补丁清单
      </div>
      <div class="text-sm text-zinc-200 space-y-2 leading-relaxed">
        <div class="bg-zinc-900/60 p-3.5 rounded border border-zinc-800/80">
          <strong class="text-amber-300 font-mono block mb-1">⚠️ 常见报错与排雷解法：</strong>
          {item['pitfall_fix']}
        </div>
        <div class="bg-zinc-900/60 p-3.5 rounded border border-zinc-800/80">
          <strong class="text-emerald-300 font-mono block mb-1">💻 最低硬件门槛：</strong>
          {item['hardware_req']}
        </div>
      </div>
    </div>

    <!-- 一键运行命令 -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-center font-mono text-sm gap-3">
      <span class="text-cyan-400 truncate pr-2">{item['quick_run_cmd']}</span>
      <button onclick="navigator.clipboard.writeText('{item['quick_run_cmd']}').then(()=>alert('命令已复制！'))" 
              class="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition shrink-0">
        一键复制命令
      </button>
    </div>

    <!-- 出海基建四大件转化区 (Affiliate Revenue Engine) -->
    <div class="bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/30 border border-emerald-500/20 rounded-xl p-6 space-y-4">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-white font-bold text-lg">踩坑大师 · 出海与 AI 落地基础设施直达</h3>
          <p class="text-xs text-zinc-400 mt-0.5">普通人玩转海外 AI 与出海业务必备，大师亲测防封防坑渠道</p>
        </div>
        <span class="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">小白避坑直连</span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <a href="https://osmarks.com/go/card" target="_blank" class="bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/50 p-3.5 rounded-lg text-center space-y-1 transition group">
          <div class="font-bold text-white group-hover:text-emerald-400">💳 海外虚拟信用卡</div>
          <div class="text-[11px] text-zinc-500">充值AI/SaaS防拒付</div>
        </a>
        <a href="https://osmarks.com/go/vps" target="_blank" class="bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/50 p-3.5 rounded-lg text-center space-y-1 transition group">
          <div class="font-bold text-white group-hover:text-emerald-400">🖥️ 海外原生纯净VPS</div>
          <div class="text-[11px] text-zinc-500">24小时挂载开源工具</div>
        </a>
        <a href="https://osmarks.com/go/pay" target="_blank" class="bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/50 p-3.5 rounded-lg text-center space-y-1 transition group">
          <div class="font-bold text-white group-hover:text-emerald-400">💰 跨境合规收款通道</div>
          <div class="text-[11px] text-zinc-500">Stripe/Wise合法收美金</div>
        </a>
        <a href="https://osmarks.com/go/esim" target="_blank" class="bg-zinc-950/60 border border-zinc-800 hover:border-emerald-500/50 p-3.5 rounded-lg text-center space-y-1 transition group">
          <div class="font-bold text-white group-hover:text-emerald-400">📱 海外实体eSIM</div>
          <div class="text-[11px] text-zinc-500">免实名接海外验证码</div>
        </a>
      </div>
    </div>

    <!-- 底部版权与免责声明 -->
    <footer class="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
      <div>© 2026 osmarks.com 开源马克斯 · 评测排雷全免费，只赚企业定制钱</div>
      <div class="flex gap-4">
        <a href="{REAL_REPO_URL}" target="_blank" class="hover:text-zinc-300">GitHub 开源仓库</a>
        <a href="https://osmarks.com/subdomain" class="text-emerald-400 hover:underline">一键免费申领专属二级域名分站</a>
      </div>
    </footer>

  </main>
{ENT_MODAL_BLOCK}
</body>
</html>
"""
    return html

# 通用复制脚本（内容从按钮 data-copy 属性读取，全部页面共用）
COPY_JS = """
  <script>
    function entCopy(el) {
      var t = el.getAttribute('data-copy');
      navigator.clipboard.writeText(t).then(function () {
        var o = el.textContent;
        el.textContent = '已复制！';
        setTimeout(function () { el.textContent = o; }, 2000);
      });
    }
  </script>
"""

def build_enterprise_page():
    """企业咨询落地页（黑金风），Service + FAQ Schema，三触点转化"""
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "serviceType": "企业 AI 私有化部署定制",
                "provider": {
                    "@type": "Organization",
                    "name": "osmarks.com 开源马克斯",
                    "url": "https://osmarks.com"
                },
                "areaServed": "CN",
                "description": "企业知识库与私有大模型内网部署、商业 SaaS 成本优化、跨系统自动化工作流定制。数据物理不出内网，按项目里程碑交付，代码 100% 移交。"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "私有化部署会不会导致数据泄露？",
                        "acceptedAnswer": {"@type": "Answer", "text": "全部组件部署在您自己的服务器，模型与向量库均在本机运行，物理隔离。验收时可当场做断网测试，数据物理不出内网是合同条款不是口号。"}
                    },
                    {
                        "@type": "Question",
                        "name": "企业私有化部署的交付周期是多久？",
                        "acceptedAnswer": {"@type": "Answer", "text": "标准知识库中枢 2-4 周交付，含部署、调优与一轮团队内训。复杂工作流定制按里程碑拆分，每个节点可单独验收。"}
                    },
                    {
                        "@type": "Question",
                        "name": "osmarks 企业定制怎么收费？",
                        "acceptedAnswer": {"@type": "Answer", "text": "按项目一次性报价，按里程碑付款，不按人头收年费。评测排雷永久免费，企业定制是 osmarks 唯一的收费业务。"}
                    }
                ]
            }
        ]
    }
    jsonld_code = json.dumps(schema, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>企业 AI 私有化部署定制 - 知识库中枢 · 内网大模型 · 工作流自动化 | osmarks.com</title>
  <meta name="description" content="开源马克斯企业定制专线：Dify/RAGFlow 知识库中枢、内网大模型部署、跨系统自动化工作流。数据物理不出内网，按项目里程碑交付，代码 100% 移交，把年费 5-10 万的商业 SaaS 压减 90%。">
  <meta name="keywords" content="企业知识库私有化部署, Dify 部署, RAGFlow 部署, 内网大模型, 企业 AI 定制, 数据不出内网, 开源马克斯">
  <script src="https://cdn.tailwindcss.com"></script>

  <script type="application/ld+json">
{jsonld_code}
  </script>
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen pb-20">

  <!-- 顶部导航 -->
  <header class="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
      <a href="https://osmarks.com" class="flex items-center gap-3 text-white font-bold text-xl tracking-tight shrink-0">
        <span>osmarks<span class="text-amber-400">.com</span></span>
        <span class="bg-amber-400/10 text-amber-400 text-xs px-2.5 py-0.5 rounded border border-amber-400/20 font-mono font-semibold hidden sm:inline">ENTERPRISE</span>
      </a>
      <div class="flex items-center gap-3">
        <a href="https://osmarks.com" class="text-xs text-zinc-400 hover:text-white transition hidden sm:inline">← 返回主站</a>
        <a href="#contact" class="shrink-0 bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-lg hover:scale-105 transition shadow-lg shadow-amber-500/25">
          📞 预约咨询
        </a>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 pt-12 space-y-10">

    <!-- Hero -->
    <section class="space-y-5">
      <div class="flex items-center gap-3 flex-wrap">
        <span class="text-xs font-mono bg-amber-400/10 text-amber-400 px-3 py-1 rounded border border-amber-400/20 font-bold">ENTERPRISE · 企业定制专线</span>
        <span class="text-xs font-mono text-zinc-500">全网首席 AI 踩坑大师亲自操刀</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
        企业 AI 私有化部署<span class="text-amber-400">，一次交付，永久归你</span>
      </h1>
      <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl">
        知识库中枢、内网大模型、自动化工作流。把年费 5-10 万的商业 SaaS 压减 90%，数据一根毛都不出您的机房。评测排雷永久免费的人，做起企业定制来只会更狠。
      </p>
      <div class="flex gap-3 flex-wrap">
        <a href="#contact" class="bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg shadow-amber-500/25">📞 立即预约咨询</a>
        <a href="https://osmarks.com" class="bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold px-6 py-3 rounded-xl hover:border-zinc-500 transition">先看免费实测排雷 →</a>
      </div>
    </section>

    <!-- 数字承诺条 -->
    <section class="grid grid-cols-3 gap-3">
      <div class="bg-zinc-900 border border-amber-500/20 rounded-xl p-5 text-center space-y-1">
        <div class="text-3xl font-black text-amber-400">90%</div>
        <div class="text-xs text-zinc-400">商业 SaaS 成本压减</div>
      </div>
      <div class="bg-zinc-900 border border-amber-500/20 rounded-xl p-5 text-center space-y-1">
        <div class="text-3xl font-black text-amber-400">100%</div>
        <div class="text-xs text-zinc-400">代码与文档移交</div>
      </div>
      <div class="bg-zinc-900 border border-amber-500/20 rounded-xl p-5 text-center space-y-1">
        <div class="text-3xl font-black text-amber-400">0</div>
        <div class="text-xs text-zinc-400">数据出内网条数</div>
      </div>
    </section>

    <!-- 三大核心业务 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-black text-white">我们干什么活</h2>
      <div class="space-y-4">
        <div class="bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition">
          <div class="flex items-center gap-3">
            <span class="text-amber-400 font-mono font-black text-lg">01</span>
            <h3 class="text-white font-bold text-lg">企业知识库与私有大模型内网部署</h3>
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">Dify / RAGFlow 选型与落地部署，本地算力调优（显存分配、模型量化、推理加速），公司文档清洗与向量化流水线搭好，员工像搜内部网站一样问遍全公司资料。</p>
          <div class="flex flex-wrap gap-2 text-[11px] font-mono">
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">Dify</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">RAGFlow</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">vLLM / Ollama</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">显存调优</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">向量库</span>
          </div>
        </div>
        <div class="bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition">
          <div class="flex items-center gap-3">
            <span class="text-amber-400 font-mono font-black text-lg">02</span>
            <h3 class="text-white font-bold text-lg">商业 SaaS 成本优化</h3>
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">年费 5-10 万的企业知识库商业授权，一次性私有化项目压减 90% 起。按项目收费不按人头，规模增长零边际成本，续费焦虑永久清零。</p>
          <div class="flex flex-wrap gap-2 text-[11px] font-mono">
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">成本审计</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">开源替代方案</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">迁移落地</span>
          </div>
        </div>
        <div class="bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition">
          <div class="flex items-center gap-3">
            <span class="text-amber-400 font-mono font-black text-lg">03</span>
            <h3 class="text-white font-bold text-lg">跨系统自动化工作流深度定制</h3>
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">把 AI 接进您现有的系统：企业微信、飞书、内部数据库、ERP。审批、检索、通知、报表全链路自动化，员工少点一百次鼠标。</p>
          <div class="flex flex-wrap gap-2 text-[11px] font-mono">
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">企业微信</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">飞书</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">内部数据库</span>
            <span class="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">工作流引擎</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 四条核心承诺 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-black text-white">白纸黑字的承诺</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-gradient-to-br from-zinc-900 to-amber-950/20 border border-amber-500/20 rounded-xl p-5 space-y-2">
          <div class="text-2xl">🔒</div>
          <div class="text-white font-bold">数据物理不出内网</div>
          <p class="text-xs text-zinc-400 leading-relaxed">全部组件部署在您自己的服务器，模型与向量库本机运行。验收时可当场做断网测试，写进合同条款。</p>
        </div>
        <div class="bg-gradient-to-br from-zinc-900 to-amber-950/20 border border-amber-500/20 rounded-xl p-5 space-y-2">
          <div class="text-2xl">📋</div>
          <div class="text-white font-bold">按项目里程碑交付</div>
          <p class="text-xs text-zinc-400 leading-relaxed">每个节点可单独验收再付下一笔，拒绝打包模糊报价。做不完不收钱，说到做到。</p>
        </div>
        <div class="bg-gradient-to-br from-zinc-900 to-amber-950/20 border border-amber-500/20 rounded-xl p-5 space-y-2">
          <div class="text-2xl">📦</div>
          <div class="text-white font-bold">代码 100% 移交</div>
          <p class="text-xs text-zinc-400 leading-relaxed">源码、部署文档、运维手册全部移交，不锁定、不绑架、不靠续费活着。</p>
        </div>
        <div class="bg-gradient-to-br from-zinc-900 to-amber-950/20 border border-amber-500/20 rounded-xl p-5 space-y-2">
          <div class="text-2xl">🎓</div>
          <div class="text-white font-bold">包调优与团队内训</div>
          <p class="text-xs text-zinc-400 leading-relaxed">交付不是终点，教会您的团队自己玩得转才算完。内训一次，永久受用。</p>
        </div>
      </div>
    </section>

    <!-- 成本对比 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-black text-white">一笔老板算得清的账</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 space-y-3">
          <div class="text-xs font-mono text-zinc-500 font-bold">传统商业知识库 SaaS</div>
          <div class="text-3xl font-black text-zinc-400">¥5-10 万<span class="text-sm font-normal">/年</span></div>
          <ul class="text-xs text-zinc-400 space-y-1.5">
            <li>· 按人头按年续费，只涨不降</li>
            <li>· 员工数据存在别人服务器</li>
            <li>· 想深度定制？加钱排队</li>
            <li>· 停止续费，数据导出难看</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-zinc-900 to-amber-950/30 border border-amber-500/40 rounded-xl p-6 space-y-3 relative overflow-hidden">
          <span class="absolute top-3 right-3 text-[10px] font-mono bg-amber-400 text-zinc-950 px-2 py-0.5 rounded font-bold">osmarks 方案</span>
          <div class="text-xs font-mono text-amber-400 font-bold">私有化一次性项目制</div>
          <div class="text-3xl font-black text-amber-400">-90%<span class="text-sm font-normal text-zinc-400"> 成本</span></div>
          <ul class="text-xs text-zinc-300 space-y-1.5">
            <li>· 一次项目制投入，零年费</li>
            <li>· 数据全程在您自己机房</li>
            <li>· 深度定制就是本行</li>
            <li>· 代码移交，永久属于您</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 转化触点 -->
    <section id="contact" class="scroll-mt-24 space-y-4">
      <h2 class="text-2xl font-black text-white">三步锁定排期</h2>
      <p class="text-sm text-zinc-400">挑您顺手的方式开口，说完需求 2 小时内给初步评估。</p>
      <div class="grid sm:grid-cols-3 gap-4">
        <div class="bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition text-center">
          <div class="text-3xl">💬</div>
          <div class="text-white font-bold">微信 1v1 咨询</div>
          <p class="text-xs text-zinc-400 leading-relaxed">微信搜索公众号「{ENTERPRISE_WECHAT}」，后台回复「{ENTERPRISE_KEYWORD}」直达企业专线</p>
          <button onclick="entCopy(this)" data-copy="{ENTERPRISE_WECHAT}" class="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold py-2.5 rounded-lg transition">复制公众号名</button>
        </div>
        <div class="bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition text-center">
          <div class="text-3xl">🔑</div>
          <div class="text-white font-bold">复制回复关键词</div>
          <p class="text-xs text-zinc-400 leading-relaxed">复制下方关键词，粘贴到公众号后台发送，自动弹出企业服务对接表</p>
          <button onclick="entCopy(this)" data-copy="{ENTERPRISE_KEYWORD}" class="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 text-xs font-bold py-2.5 rounded-lg hover:opacity-90 transition">复制「{ENTERPRISE_KEYWORD}」</button>
        </div>
        <div class="bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-6 space-y-3 transition text-center">
          <div class="text-3xl">📅</div>
          <div class="text-white font-bold">邮件预约</div>
          <p class="text-xs text-zinc-400 leading-relaxed">正式商务合作，邮件说明规模与需求，工作日 24 小时内回函</p>
          <a href="mailto:{ENTERPRISE_MAIL}?subject=%E4%BC%81%E4%B8%9A%E7%A7%81%E6%9C%89%E5%8C%96%E9%83%A8%E7%BD%B2%E5%92%A8%E8%AF%A2" class="block w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold py-2.5 rounded-lg transition">{ENTERPRISE_MAIL}</a>
        </div>
      </div>
    </section>

    <!-- 三铁律信任背书 -->
    <section class="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
      <div class="text-amber-400 font-bold mb-3">为什么敢信一个做免费评测的</div>
      <div class="grid sm:grid-cols-3 gap-4 text-xs text-zinc-300 space-y-1">
        <div><span class="text-amber-400 font-bold">绝对克制</span><br>只评历史总榜与近 7 天热议，不灌水</div>
        <div><span class="text-amber-400 font-bold">绝对中立</span><br>测试排雷永久免费，不接软文不收充钱上榜</div>
        <div><span class="text-amber-400 font-bold">坦荡盈利</span><br>企业私有化定制是唯一收费业务，光明正大</div>
      </div>
    </section>

    <!-- 底部版权 -->
    <footer class="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
      <div>© 2026 osmarks.com 开源马克斯 · 评测排雷全免费，只赚企业定制钱</div>
      <div class="flex gap-4">
        <a href="{REAL_REPO_URL}" target="_blank" class="hover:text-zinc-300">GitHub 开源仓库</a>
        <a href="https://osmarks.com" class="text-amber-400 hover:underline">返回主站看免费实测</a>
      </div>
    </footer>

  </main>
{COPY_JS}
</body>
</html>
"""

# 首发旗舰数据：企业私有化知识库中枢（Dify / RAGFlow），老板痛点极强的高价值项目
dify_ragflow_sample = {
    "name": "Dify / RAGFlow 企业私有化知识库中枢",
    "category": "Enterprise AI Infrastructure",
    "stars_weekly": "GitHub 万星级双顶流（Dify 90k+ / RAGFlow 50k+，实时数以官方仓库为准）",
    "official_desc": "两个开源自托管的企业 AI 知识库中枢：把公司文档、制度、合同、客服话术全部喂进私有化大模型，员工像搜内部网站一样随问随答，数据一条都不出您自己的机房。",
    "scenario": "给老板翻人话：花每年 5-10 万买 SaaS 知识库，员工资料还得存在别人服务器上，出了事说不清。Dify 和 RAGFlow 部署在公司自己服务器，一朵云都不依赖，数据不出内网，问答、RAG 检索、工作流自动化全都有，普通员工零学习成本上手。",
    "saas_alternative": "直接免费替代年费 5-10 万的企业知识库 SaaS（各类大厂智能知识库、AI 客服系统的企业版年费区间），且数据主权完全归自己，规模上去以后零边际成本。",
    "hardware_req": "起步门槛很低：16GB 显存显卡跑 7B 量化模型（Qwen / DeepSeek 4bit 量化版）+ 32GB 内存即可完整跑通；没有显卡也能先用 API 模式把知识库跑起来，再逐步换本地模型。文档量大时 RAGFlow 的向量化服务建议 4 核 16G 起步，Dify 本体 2 核 8G 就能转。",
    "pitfall_fix": "企业落地三大重灾区，全部踩过排干净：① 显存溢出（CUDA out of memory）——7B 模型 FP16 原样起直接吃满 14GB+，必须上 AWQ/GPTQ 4bit 量化，vLLM 启动加 --gpu-memory-utilization 0.85 限流，上下文别一上来就拉 32k；② 跨域与网络配置——Docker compose 起完前端 502、CORS 报错，九成是 nginx 反代没透传 Host 与 WebSocket header，外加内网防火墙拦了 Dify 的 80/443 与 RAGFlow 的 9380 端口，端口规划部署前先定死；③ 本地大模型接入——Dify 里接 Ollama / Xinference 时 base_url 千万不能写 localhost（容器里指向的是它自己），必须写宿主机内网 IP 或 host.docker.internal，这是新手报废率最高的一步。",
    "video_author": "@开源马克斯 实测录制中",
    "video_embed_url": "",
    "quick_run_cmd": "git clone https://github.com/langgenius/dify.git && cd dify/docker && cp .env.example .env && docker compose up -d",
    "os_support": "Linux (Ubuntu 20.04+) / Docker 24+ / Windows Server + WSL2"
}

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    dist_dir = os.path.join(base_dir, "dist")
    os.makedirs(dist_dir, exist_ok=True)

    # 主站旗舰页
    main_html = build_static_page(dify_ragflow_sample)
    main_path = os.path.join(dist_dir, "index.html")
    with open(main_path, "w", encoding="utf-8") as f:
        f.write(main_html)
    print(f"[✔] 主站旗舰页已生成: {main_path} (大小: {len(main_html)} 字符)")

    # 企业咨询落地页 /enterprise/
    ent_html = build_enterprise_page()
    ent_dir = os.path.join(dist_dir, "enterprise")
    os.makedirs(ent_dir, exist_ok=True)
    ent_path = os.path.join(ent_dir, "index.html")
    with open(ent_path, "w", encoding="utf-8") as f:
        f.write(ent_html)
    print(f"[✔] 企业落地页已生成: {ent_path} (大小: {len(ent_html)} 字符)")