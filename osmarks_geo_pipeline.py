#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
osmarks.com · 谷歌生态 GEO (生成式引擎优化) 全自动排雷与分发流水线
=============================================================================
核心使命：
1. 生成机器可读的 Google Schema.org JSON-LD (SoftwareApplication + FAQPage)
2. 提炼人话场景、硬件门槛、避坑排雷补丁、匹配实操视频
3. 注入「出海四大件（虚拟卡/VPS/支付通道/eSIM）」高转化转化锚点
4. 生产级静态页面自适应输出至 dist/ 目录，供 Cloudflare Pages 构建
=============================================================================
"""

import json
import os
from datetime import datetime

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

def build_static_page(item):
    """构建自带 GEO 结构化标签、画中画视频与出海基建推荐位的完整高保真页面"""
    jsonld_code = generate_schema_jsonld(item)
    
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{item['name']} - 避坑排雷与实操指南 | 开源马克斯 osmarks.com</title>
  <meta name="description" content="{item['scenario']} 开源马克斯全网独家实测，提供最低硬件门槛与社区常见报错解决方案。">
  <meta name="keywords" content="{item['name']}, {item['name']} 报错解决, {item['name']} 教程, 开源马克斯, Marks认证">
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- 谷歌 GEO 核心结构化数据卡片 -->
  <script type="application/ld+json">
{jsonld_code}
  </script>
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen pb-20">

  <!-- 顶部导航 -->
  <header class="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="https://osmarks.com" class="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
        <span>osmarks<span class="text-emerald-400">.com</span></span>
        <span class="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-0.5 rounded border border-emerald-500/20 font-mono font-semibold">Marks 认证</span>
      </a>
      <div class="text-xs text-zinc-400 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        全网首席 AI 踩坑大师 · 避坑内参
      </div>
    </div>
  </header>

  <!-- 主体内容 -->
  <main class="max-w-5xl mx-auto px-6 pt-10 space-y-8">
    
    <!-- 标题与核心元数据 -->
    <div class="space-y-3">
      <div class="flex items-center gap-3">
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
          人话场景说明
        </div>
        <p class="text-sm text-zinc-200 leading-normal">{item['scenario']}</p>
      </div>

      <div class="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-2">
        <div class="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          商业价值与平替
        </div>
        <p class="text-sm text-zinc-200 leading-normal">{item['saas_alternative']}</p>
      </div>
    </div>

    <!-- 视频画中画嵌入区（零跳出播放） -->
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
    </div>

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
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-center font-mono text-sm">
      <span class="text-cyan-400 truncate pr-4">{item['quick_run_cmd']}</span>
      <button onclick="navigator.clipboard.writeText('{item['quick_run_cmd']}').then(()=>alert('命令已复制！'))" 
              class="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition">
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
        <a href="https://github.com/osmarks" target="_blank" class="hover:text-zinc-300">GitHub 开源仓库</a>
        <a href="https://osmarks.com/subdomain" class="text-emerald-400 hover:underline">一键免费申领专属二级域名分站</a>
      </div>
    </footer>

  </main>
</body>
</html>
"""
    return html

# 首批示范评测数据（Google TimesFM 时序预测大模型）
timesfm_sample = {
    "name": "google-research/timesfm",
    "category": "DataScience & AI Tools",
    "stars_weekly": "2.9k stars/周 (总 8.2k)",
    "official_desc": "Google 官方开源的基础时序预测大模型，专门用于金融走势、加密费率波动与供应链库存预测。",
    "scenario": "零基础预测未来：无需从头写复杂数学回归，调用预训练大模型直接预测金融或业务时序走势，省去 90% 模型调参时间。",
    "saas_alternative": "免费替代每月几千美元的高频商业预测系统与专属分析软件，个人与中小企业开箱即用。",
    "hardware_req": "最低需 6GB 显存显卡；若低于 6GB，在启动时强制添加 `--cpu-offload` 参数即可在普通笔记本 CPU 上流畅运行。",
    "pitfall_fix": "依赖版本冲突重灾区！安装时若直接 pip install，会拉取最新 transformers 报维度错位。必须严格执行：pip install transformers==4.38.2 锁定版本。",
    "video_author": "@The CLI Stack",
    "video_embed_url": "https://www.youtube-nocookie.com/embed/ZqVJ3sGN_QY?start=283",
    "quick_run_cmd": "pip install timesfm torch transformers==4.38.2",
    "os_support": "Linux, macOS, Windows 10/11"
}

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    dist_dir = os.path.join(base_dir, "dist")
    os.makedirs(dist_dir, exist_ok=True)
    
    output_html = build_static_page(timesfm_sample)
    output_path = os.path.join(dist_dir, "index.html")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(output_html)
        
    print(f"[✔] GEO 流水线编译成功！已生成示范静态页: {output_path} (大小: {len(output_html)} 字节)")