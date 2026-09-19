(function (root) {
  "use strict";
  root.OSMARKS_SCHEMA_V0 = {
  "schemaVersion": "0.3.0",
  "generatedAt": "2026-09-15T02:14:13.080Z",
  "sample": false,
  "statusDefinitions": {
    "active": "可展示，最近有有效来源快照",
    "stale": "来源快照过期，需要重新采集",
    "archived": "来源项目已归档，仅保留历史记录",
    "restricted": "来源标记为私有、受限或 gated，不进入公开榜单",
    "needs_review": "字段缺失、许可证或异常信号需要人工复核"
  },
  "sources": [
    {
      "id": "github",
      "name": "GitHub",
      "url": "https://github.com",
      "sourceType": "code_repository",
      "status": "active",
      "apiVersion": "public-api",
      "licensePolicy": "以仓库许可证原文为准",
      "collectionStatus": "partial",
      "rankingEligible": true,
      "scope": "documented_ai_tools"
    },
    {
      "id": "huggingface",
      "name": "Hugging Face",
      "url": "https://huggingface.co",
      "sourceType": "model_and_dataset_hub",
      "status": "active",
      "apiVersion": "public-api",
      "licensePolicy": "以 model/dataset card 原文为准",
      "collectionStatus": "not_collected",
      "rankingEligible": false,
      "scope": "model_assets_not_tool_rankings"
    }
  ],
  "tools": [
    {
      "id": "github/repository/googleworkspace/cli",
      "stableSourceId": "1171026502",
      "slug": "googleworkspace-cli",
      "name": "cli",
      "source": "github",
      "repoType": "repository",
      "sourceId": "googleworkspace/cli",
      "canonicalUrl": "https://github.com/googleworkspace/cli",
      "description": "Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills.",
      "descriptionEn": "Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills.",
      "descriptionZh": "用一个命令行工具调用 Drive、Gmail、Calendar、Sheets、Docs 等服务。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "googleworkspace",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/googleworkspace/cli",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 30996,
        "forks": 1832,
        "starsDelta7d": 230,
        "starsAdded7d": 230,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Rust",
        "sizeKb": 10778,
        "defaultBranch": "main",
        "topics": [
          "agent-skills",
          "ai-agent",
          "automation",
          "cli",
          "discovery-api",
          "gemini-cli-extension",
          "google-admin",
          "google-api",
          "google-calendar",
          "google-chat",
          "google-docs",
          "google-drive",
          "google-sheets",
          "google-workspace",
          "oauth2",
          "rust"
        ],
        "createdAt": "2026-03-02T19:46:06Z",
        "pushedAt": "2026-09-14T21:07:29Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/googleworkspace/cli/main/README.md",
        "evidenceHash": "499ff9600cc36f6c547e16ef5b56e7baee05afa35240c010b8873441928a39aa"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 230,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 19
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 107
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 29
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 20
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 19
          }
        ],
        "sourceUrl": "https://api.github.com/repos/googleworkspace/cli/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/ScrapeGraphAI/Scrapegraph-ai",
      "stableSourceId": "749126547",
      "slug": "scrapegraphai-scrapegraph-ai",
      "name": "Scrapegraph-ai",
      "source": "github",
      "repoType": "repository",
      "sourceId": "ScrapeGraphAI/Scrapegraph-ai",
      "canonicalUrl": "https://github.com/ScrapeGraphAI/Scrapegraph-ai",
      "description": "Python scraper based on AI",
      "descriptionEn": "Python scraper based on AI",
      "descriptionZh": "基于 AI 的 Python 网页抓取工具。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "ScrapeGraphAI",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/ScrapeGraphAI/Scrapegraph-ai",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 30970,
        "forks": 3118,
        "starsDelta7d": 276,
        "starsAdded7d": 276,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 17315,
        "defaultBranch": "main",
        "topics": [
          "ai-crawler",
          "ai-scraping",
          "ai-search",
          "crawler",
          "data-extraction",
          "firecrawl-alternative",
          "large-language-model",
          "llm",
          "markdown",
          "rag",
          "scraping",
          "scraping-python",
          "web-crawler",
          "web-crawlers",
          "web-data",
          "web-data-extraction",
          "web-scraper",
          "web-scraping",
          "web-search",
          "webscraping"
        ],
        "createdAt": "2024-01-27T16:54:38Z",
        "pushedAt": "2026-09-07T13:49:52Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/ScrapeGraphAI/Scrapegraph-ai/main/README.md",
        "evidenceHash": "f969db3320ffa997da79f49e1d209a293a311a566a59fa4b10292f51bb4397e1"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 276,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 43
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 34
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 27
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 35
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 57
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 44
          }
        ],
        "sourceUrl": "https://api.github.com/repos/ScrapeGraphAI/Scrapegraph-ai/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/ComposioHQ/composio",
      "stableSourceId": "762304524",
      "slug": "composiohq-composio",
      "name": "composio",
      "source": "github",
      "repoType": "repository",
      "sourceId": "ComposioHQ/composio",
      "canonicalUrl": "https://github.com/ComposioHQ/composio",
      "description": "Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.",
      "descriptionEn": "Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.",
      "descriptionZh": "为 AI 智能体提供工具包、工具搜索、认证与沙盒工作台。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "ComposioHQ",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/ComposioHQ/composio",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 30170,
        "forks": 4794,
        "starsDelta7d": 101,
        "starsAdded7d": 101,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 397503,
        "defaultBranch": "next",
        "topics": [
          "agentic-ai",
          "agents",
          "ai",
          "ai-agents",
          "aiagents",
          "developer-tools",
          "function-calling",
          "gpt-4",
          "javascript",
          "js",
          "llm",
          "llmops",
          "mcp",
          "python",
          "remote-mcp-server",
          "sse",
          "typescript"
        ],
        "createdAt": "2024-02-23T13:58:27Z",
        "pushedAt": "2026-09-14T22:36:49Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/ComposioHQ/composio/next/README.md",
        "evidenceHash": "8c723e06bec36f55f3aaff4e2933834856a87dff5f6acd94f0a091b85457d94f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 101,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 12
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 14
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 10
          }
        ],
        "sourceUrl": "https://api.github.com/repos/ComposioHQ/composio/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/labring/FastGPT",
      "stableSourceId": "605673387",
      "slug": "labring-fastgpt",
      "name": "FastGPT",
      "source": "github",
      "repoType": "repository",
      "sourceId": "labring/FastGPT",
      "canonicalUrl": "https://github.com/labring/FastGPT",
      "description": "FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuratio",
      "descriptionEn": "FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuratio",
      "descriptionZh": "基于大语言模型的知识平台，提供数据处理、RAG 和可视化工作流。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "labring",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/labring/FastGPT",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 29644,
        "forks": 7315,
        "starsDelta7d": 57,
        "starsAdded7d": 57,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 464954,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "claude",
          "deepseek",
          "llm",
          "mcp",
          "nextjs",
          "openai",
          "qwen",
          "rag",
          "workflow"
        ],
        "createdAt": "2023-02-23T16:53:25Z",
        "pushedAt": "2026-09-14T13:46:53Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/labring/FastGPT/main/README.md",
        "evidenceHash": "e7a334e516858c294d1112c04960e8c148cdf03b9810198d7b59ffcfea5b0738"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 57,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 15
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 5
          }
        ],
        "sourceUrl": "https://api.github.com/repos/labring/FastGPT/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/jackwener/OpenCLI",
      "stableSourceId": "1181982220",
      "slug": "jackwener-opencli",
      "name": "OpenCLI",
      "source": "github",
      "repoType": "repository",
      "sourceId": "jackwener/OpenCLI",
      "canonicalUrl": "https://github.com/jackwener/OpenCLI",
      "description": "Make Any Website into CLI & Use your logged-in browser by AI agent. ",
      "descriptionEn": "Make Any Website into CLI & Use your logged-in browser by AI agent. ",
      "descriptionZh": "把网站变成 CLI，让 AI 智能体使用已登录的浏览器。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "jackwener",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/jackwener/OpenCLI",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 29282,
        "forks": 2863,
        "starsDelta7d": 230,
        "starsAdded7d": 230,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "JavaScript",
        "sizeKb": 16182,
        "defaultBranch": "main",
        "topics": [
          "ai-agent",
          "ai-agents",
          "ai-tools",
          "browser-automation",
          "browser-use",
          "cli",
          "playwright"
        ],
        "createdAt": "2026-03-14T22:10:23Z",
        "pushedAt": "2026-08-30T17:36:26Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/jackwener/OpenCLI/main/README.md",
        "evidenceHash": "7f3848c49c92ef2122868ffed5c601958a27ea5c7f8dbc71748244bcbc1a19d4"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 230,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 39
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 54
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 30
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 23
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 23
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 34
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 27
          }
        ],
        "sourceUrl": "https://api.github.com/repos/jackwener/OpenCLI/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/microsoft/semantic-kernel",
      "stableSourceId": "607289185",
      "slug": "microsoft-semantic-kernel",
      "name": "semantic-kernel",
      "source": "github",
      "repoType": "repository",
      "sourceId": "microsoft/semantic-kernel",
      "canonicalUrl": "https://github.com/microsoft/semantic-kernel",
      "description": "Integrate cutting-edge LLM technology quickly and easily into your apps",
      "descriptionEn": "Integrate cutting-edge LLM technology quickly and easily into your apps",
      "descriptionZh": "帮助应用快速集成大语言模型能力的开发框架。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "microsoft",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/microsoft/semantic-kernel",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 28558,
        "forks": 4770,
        "starsDelta7d": 23,
        "starsAdded7d": 23,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "C#",
        "sizeKb": 103298,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "artificial-intelligence",
          "llm",
          "openai",
          "sdk"
        ],
        "createdAt": "2023-02-27T17:39:42Z",
        "pushedAt": "2026-09-11T06:58:37Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/microsoft/semantic-kernel/main/README.md",
        "evidenceHash": "166fb81995eeeaf31b56883db3fae0617cc7dea0d7b4baf48a9ba6293c3bcd64"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 23,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/microsoft/semantic-kernel/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/OtterMind/Chat2DB",
      "stableSourceId": "656227652",
      "slug": "ottermind-chat2db",
      "name": "Chat2DB",
      "source": "github",
      "repoType": "repository",
      "sourceId": "OtterMind/Chat2DB",
      "canonicalUrl": "https://github.com/OtterMind/Chat2DB",
      "description": "Chat2DB is a free, cross-platform, local-first database client and SQL workspace for developers, DBAs, analysts, and data teams. Connect to 40+ databases, manage data, edit and run SQL, and use your own AI model to generate, explain, and optimize queries. Available on desktop, web, Docker, and CLI, with MCP support.",
      "descriptionEn": "Chat2DB is a free, cross-platform, local-first database client and SQL workspace for developers, DBAs, analysts, and data teams. Connect to 40+ databases, manage data, edit and run SQL, and use your own AI model to generate, explain, and optimize queries. Available on desktop, web, Docker, and CLI, with MCP support.",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "OtterMind",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/OtterMind/Chat2DB",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 28118,
        "forks": 3031,
        "starsDelta7d": 43,
        "starsAdded7d": 43,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Java",
        "sizeKb": 57626,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "clickhouse",
          "database",
          "database-client",
          "database-gui",
          "database-management",
          "jdbc",
          "llm",
          "mcp",
          "mongodb",
          "mysql",
          "oracle",
          "postgresql",
          "redis",
          "sql",
          "sql-client",
          "sql-editor",
          "sql-server",
          "sqlite",
          "text-to-sql"
        ],
        "createdAt": "2023-06-20T14:05:26Z",
        "pushedAt": "2026-09-14T07:25:58Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/OtterMind/Chat2DB/main/README.md",
        "evidenceHash": "422cbdbde341e2173deda89aa53e17376247b5fca1748e952e1c6413204333d2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 43,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/OtterMind/Chat2DB/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/QwenLM/qwen-code",
      "stableSourceId": "1008713177",
      "slug": "qwenlm-qwen-code",
      "name": "qwen-code",
      "source": "github",
      "repoType": "repository",
      "sourceId": "QwenLM/qwen-code",
      "canonicalUrl": "https://github.com/QwenLM/qwen-code",
      "description": "An open-source AI coding agent that lives in your terminal.",
      "descriptionEn": "An open-source AI coding agent that lives in your terminal.",
      "descriptionZh": "在终端运行的开源 AI 编码智能体，可执行代码和工具任务。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "QwenLM",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/QwenLM/qwen-code",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 27841,
        "forks": 3041,
        "starsDelta7d": 172,
        "starsAdded7d": 172,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 1161368,
        "defaultBranch": "main",
        "topics": [
          "agentic",
          "ai",
          "ai-agent",
          "ai-coding",
          "cli",
          "coding-agent",
          "developer-tools",
          "llm",
          "mcp",
          "qwen",
          "terminal",
          "typescript"
        ],
        "createdAt": "2025-06-26T01:37:46Z",
        "pushedAt": "2026-09-14T22:46:04Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/QwenLM/qwen-code/main/README.md",
        "evidenceHash": "0fc2159f9ab32e6d28a9f47a692002540537421525e96cd3a7e37c01ceb9fdde"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 172,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 19
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 20
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 24
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 31
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 25
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 17
          }
        ],
        "sourceUrl": "https://api.github.com/repos/QwenLM/qwen-code/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/Fosowl/agenticSeek",
      "stableSourceId": "935604638",
      "slug": "fosowl-agenticseek",
      "name": "agenticSeek",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Fosowl/agenticSeek",
      "canonicalUrl": "https://github.com/Fosowl/agenticSeek",
      "description": "Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity.",
      "descriptionEn": "Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code for the sole cost of electricity.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Fosowl",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "GPL-3.0",
        "evidenceUrl": "https://github.com/Fosowl/agenticSeek",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 27207,
        "forks": 3041,
        "starsDelta7d": 42,
        "starsAdded7d": 42,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 27026,
        "defaultBranch": "main",
        "topics": [
          "agentic-ai",
          "agents",
          "ai",
          "autonomous-agents",
          "deepseek-r1",
          "llm",
          "llm-agents",
          "voice-assistant"
        ],
        "createdAt": "2025-02-19T18:03:06Z",
        "pushedAt": "2026-09-13T19:26:13Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Fosowl/agenticSeek/main/README.md",
        "evidenceHash": "5080c61c1bf430ee9a3800dc49abab2af375685d6ec03145139754c388593992"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 42,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Fosowl/agenticSeek/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/titanwings/distilly",
      "stableSourceId": "1195828337",
      "slug": "titanwings-distilly",
      "name": "distilly",
      "source": "github",
      "repoType": "repository",
      "sourceId": "titanwings/distilly",
      "canonicalUrl": "https://github.com/titanwings/distilly",
      "description": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "descriptionEn": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "titanwings",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/titanwings/distilly",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 24722,
        "forks": 2145,
        "starsDelta7d": 319,
        "starsAdded7d": 319,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 17701,
        "defaultBranch": "dot-skill",
        "topics": [
          "agent-skills",
          "agentic-ai",
          "ai-agent",
          "ai-agents",
          "ai-assistants",
          "ai-persona",
          "claude-code",
          "claude-skills",
          "codex",
          "codex-skills",
          "deepseek-harness",
          "digital-human",
          "dsh-plugin",
          "hermes-agent",
          "knowledge-distillation",
          "llm-agent",
          "meta-skill",
          "openclaw",
          "opencode"
        ],
        "createdAt": "2026-03-30T05:22:23Z",
        "pushedAt": "2026-09-12T18:15:02Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/titanwings/distilly/dot-skill/README.md",
        "evidenceHash": "37d63cbb6331ab344a76712f0faefde80f25f064181f5800b48731671c6d6d31"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 319,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 29
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 113
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 50
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 31
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 27
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 30
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 39
          }
        ],
        "sourceUrl": "https://api.github.com/repos/titanwings/distilly/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/Tencent/ncnn",
      "stableSourceId": "95879426",
      "slug": "tencent-ncnn",
      "name": "ncnn",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Tencent/ncnn",
      "canonicalUrl": "https://github.com/Tencent/ncnn",
      "description": "ncnn is a high-performance neural network inference framework optimized for the mobile platform",
      "descriptionEn": "ncnn is a high-performance neural network inference framework optimized for the mobile platform",
      "descriptionZh": "用于模型推理与服务部署的运行引擎。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Tencent",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/Tencent/ncnn",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 23814,
        "forks": 4504,
        "starsDelta7d": 28,
        "starsAdded7d": 28,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "C++",
        "sizeKb": 37148,
        "defaultBranch": "master",
        "topics": [
          "android",
          "arm-neon",
          "artificial-intelligence",
          "caffe",
          "darknet",
          "deep-learning",
          "high-preformance",
          "inference",
          "ios",
          "keras",
          "mlir",
          "mxnet",
          "ncnn",
          "neural-network",
          "onnx",
          "pytorch",
          "riscv",
          "simd",
          "tensorflow",
          "vulkan"
        ],
        "createdAt": "2017-06-30T10:55:37Z",
        "pushedAt": "2026-09-14T06:23:50Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Tencent/ncnn/master/README.md",
        "evidenceHash": "c2c82d74af40c50b29e59e6ef8102a34b0bfd5776100feda76797b3328c1f20f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 28,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Tencent/ncnn/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/NirDiamant/agents-towards-production",
      "stableSourceId": "1003143578",
      "slug": "nirdiamant-agents-towards-production",
      "name": "agents-towards-production",
      "source": "github",
      "repoType": "repository",
      "sourceId": "NirDiamant/agents-towards-production",
      "canonicalUrl": "https://github.com/NirDiamant/agents-towards-production",
      "description": "End-to-end, code-first tutorials for building production-grade GenAI agents. From prototype to enterprise deployment.",
      "descriptionEn": "End-to-end, code-first tutorials for building production-grade GenAI agents. From prototype to enterprise deployment.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "NirDiamant",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/NirDiamant/agents-towards-production",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 21454,
        "forks": 2849,
        "starsDelta7d": 38,
        "starsAdded7d": 38,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Jupyter Notebook",
        "sizeKb": 157515,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "agent-framework",
          "agentic-ai",
          "agents",
          "ai-agents",
          "deployment",
          "genai",
          "generative-ai",
          "langgraph",
          "llm",
          "llms",
          "mcp",
          "mlops",
          "multi-agent-systems",
          "observability",
          "production",
          "python",
          "rag",
          "tutorials"
        ],
        "createdAt": "2025-06-16T17:33:44Z",
        "pushedAt": "2026-09-06T12:33:09Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/NirDiamant/agents-towards-production/main/README.md",
        "evidenceHash": "982600412bde3863f3731f6d36636f2a078b004930e8f5f194b8076d0e9e020d"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 38,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 7
          }
        ],
        "sourceUrl": "https://api.github.com/repos/NirDiamant/agents-towards-production/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/mlc-ai/web-llm",
      "stableSourceId": "627561173",
      "slug": "mlc-ai-web-llm",
      "name": "web-llm",
      "source": "github",
      "repoType": "repository",
      "sourceId": "mlc-ai/web-llm",
      "canonicalUrl": "https://github.com/mlc-ai/web-llm",
      "description": "High-performance In-browser LLM Inference Engine ",
      "descriptionEn": "High-performance In-browser LLM Inference Engine ",
      "descriptionZh": "让 AI 智能体操作浏览器并执行网页任务。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "mlc-ai",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/mlc-ai/web-llm",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 19122,
        "forks": 1379,
        "starsDelta7d": 108,
        "starsAdded7d": 108,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 69139,
        "defaultBranch": "main",
        "topics": [
          "chatgpt",
          "deep-learning",
          "language-model",
          "llm",
          "tvm",
          "webgpu",
          "webml"
        ],
        "createdAt": "2023-04-13T18:11:59Z",
        "pushedAt": "2026-09-13T18:47:51Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/mlc-ai/web-llm/main/README.md",
        "evidenceHash": "17a771925ff58c144222415c813e3eb084aade8c2a8fc303fb79cb3eee8c768f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 108,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 15
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 38
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 16
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 9
          }
        ],
        "sourceUrl": "https://api.github.com/repos/mlc-ai/web-llm/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/NVIDIA-NeMo/Speech",
      "stableSourceId": "200722670",
      "slug": "nvidia-nemo-speech",
      "name": "Speech",
      "source": "github",
      "repoType": "repository",
      "sourceId": "NVIDIA-NeMo/Speech",
      "canonicalUrl": "https://github.com/NVIDIA-NeMo/Speech",
      "description": "A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Speech AI (Automatic Speech Recognition and Text-to-Speech)",
      "descriptionEn": "A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Speech AI (Automatic Speech Recognition and Text-to-Speech)",
      "descriptionZh": "用于语音识别、语音合成和多模态模型开发的生成式 AI 框架。",
      "descriptionZhMethod": "editorial-map",
      "owner": {
        "handle": "NVIDIA-NeMo",
        "role": "organization"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/NVIDIA-NeMo/Speech",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 18447,
        "forks": 3610,
        "starsDelta7d": 46,
        "starsAdded7d": 46,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 532587,
        "defaultBranch": "main",
        "topics": [
          "asr",
          "deeplearning",
          "generative-ai",
          "machine-translation",
          "neural-networks",
          "speaker-diariazation",
          "speaker-recognition",
          "speech-synthesis",
          "speech-translation",
          "tts"
        ],
        "createdAt": "2019-08-05T20:16:42Z",
        "pushedAt": "2026-09-14T22:19:27Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/NVIDIA-NeMo/Speech/main/README.md",
        "evidenceHash": "f7f63002e9f9fc053094e26f6828687dccdfda41a2e13c13cf2587fcacf556f8"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 46,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 12
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 5
          }
        ],
        "sourceUrl": "https://api.github.com/repos/NVIDIA-NeMo/Speech/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/camel-ai/camel",
      "stableSourceId": "615510678",
      "slug": "camel-ai-camel",
      "name": "camel",
      "source": "github",
      "repoType": "repository",
      "sourceId": "camel-ai/camel",
      "canonicalUrl": "https://github.com/camel-ai/camel",
      "description": "🐫 CAMEL: The first and the best multi-agent framework. Finding the Scaling Law of Agents. https://www.camel-ai.org",
      "descriptionEn": "🐫 CAMEL: The first and the best multi-agent framework. Finding the Scaling Law of Agents. https://www.camel-ai.org",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "camel-ai",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/camel-ai/camel",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 17715,
        "forks": 2077,
        "starsDelta7d": 40,
        "starsAdded7d": 40,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 505328,
        "defaultBranch": "master",
        "topics": [
          "agent",
          "ai-societies",
          "artificial-intelligence",
          "communicative-ai",
          "cooperative-ai",
          "deep-learning",
          "large-language-models",
          "multi-agent-systems",
          "natural-language-processing"
        ],
        "createdAt": "2023-03-17T21:41:54Z",
        "pushedAt": "2026-09-14T14:31:55Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/camel-ai/camel/master/README.md",
        "evidenceHash": "a2be9addbef3d31c4e691dcf1ef17aa40754f640a5eb05e1985eca4e12a82d8d"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 40,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/camel-ai/camel/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/xbtlin/ai-berkshire",
      "stableSourceId": "1203777920",
      "slug": "xbtlin-ai-berkshire",
      "name": "ai-berkshire",
      "source": "github",
      "repoType": "repository",
      "sourceId": "xbtlin/ai-berkshire",
      "canonicalUrl": "https://github.com/xbtlin/ai-berkshire",
      "description": "AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格·段永平·李录四大师方法论 + 多Agent并行研究。| AI-era Berkshire: a value investing research framework built for Claude Code / Codex. 4 masters' methodologies + multi-agent adversarial analysis.",
      "descriptionEn": "AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格·段永平·李录四大师方法论 + 多Agent并行研究。| AI-era Berkshire: a value investing research framework built for Claude Code / Codex. 4 masters' methodologies + multi-agent adversarial analysis.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "xbtlin",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/xbtlin/ai-berkshire",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 16343,
        "forks": 2438,
        "starsDelta7d": 124,
        "starsAdded7d": 124,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "HTML",
        "sizeKb": 68810,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agent",
          "anthropic",
          "berkshire-hathaway",
          "charlie-munger",
          "china-stock",
          "claude",
          "claude-code",
          "financial-analysis",
          "fintech",
          "fundamental-analysis",
          "investment",
          "investment-research",
          "llm",
          "mcp",
          "portfolio-management",
          "stock-analysis",
          "stock-market",
          "value-investing",
          "warren-buffett"
        ],
        "createdAt": "2026-04-07T11:19:51Z",
        "pushedAt": "2026-09-11T21:10:20Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/xbtlin/ai-berkshire/main/README.md",
        "evidenceHash": "56838f349a8154c417241b31423612a13d4184324038323688aad4aaef2ca4cd"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 124,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 20
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 15
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 16
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 22
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 24
          }
        ],
        "sourceUrl": "https://api.github.com/repos/xbtlin/ai-berkshire/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/HBAI-Ltd/Toonflow-app",
      "stableSourceId": "1145022970",
      "slug": "hbai-ltd-toonflow-app",
      "name": "Toonflow-app",
      "source": "github",
      "repoType": "repository",
      "sourceId": "HBAI-Ltd/Toonflow-app",
      "canonicalUrl": "https://github.com/HBAI-Ltd/Toonflow-app",
      "description": "Toonflow 是开源一站式 AI 短剧创作工具，将小说、剧本快速转化为动画短剧。集成 AI 编剧、智能分镜、角色与视频生成，跨平台桌面端轻量部署，助力创作者低成本批量产出视觉内容。Toonflow is an open-source AI tool that turns stories and scripts into animated short dramas. Features AI scriptwriting, storyboarding, character and video generation. A cross-platform desktop app for efficient content creation.",
      "descriptionEn": "Toonflow 是开源一站式 AI 短剧创作工具，将小说、剧本快速转化为动画短剧。集成 AI 编剧、智能分镜、角色与视频生成，跨平台桌面端轻量部署，助力创作者低成本批量产出视觉内容。Toonflow is an open-source AI tool that turns stories and scripts into animated short dramas. Features AI scriptwriting, storyboarding, character and video generation. A cross-platform desktop app for efficient content creation.",
      "descriptionZh": "根据文本或素材生成视频的 AI 工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "HBAI-Ltd",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/HBAI-Ltd/Toonflow-app",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 15587,
        "forks": 2804,
        "starsDelta7d": 360,
        "growthStatus": "ready",
        "starsAdded7d": 360,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 282777,
        "defaultBranch": "master",
        "topics": [
          "ai",
          "ai-content-creation",
          "ai-tool",
          "ai-video-generation",
          "automation",
          "content-generation",
          "desktop-app",
          "electron",
          "generative-ai",
          "image-generation",
          "llm",
          "nodejs",
          "shorts",
          "text-to-video",
          "typescript",
          "video-generation",
          "vite",
          "vue3"
        ],
        "createdAt": "2026-01-29T10:25:45Z",
        "pushedAt": "2026-08-26T10:49:08Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/HBAI-Ltd/Toonflow-app/master/README.md",
        "evidenceHash": "113b1e83358e24ad83c883aec73b804a013342c91a77dd9918e89c61dc4e9a57"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 360,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 62
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 66
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 78
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 56
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 33
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 40
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 25
          }
        ],
        "sourceUrl": "https://api.github.com/repos/HBAI-Ltd/Toonflow-app/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/opensandbox-group/OpenSandbox",
      "stableSourceId": "1118085970",
      "slug": "opensandbox-group-opensandbox",
      "name": "OpenSandbox",
      "source": "github",
      "repoType": "repository",
      "sourceId": "opensandbox-group/OpenSandbox",
      "canonicalUrl": "https://github.com/opensandbox-group/OpenSandbox",
      "description": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "descriptionEn": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "descriptionZh": "用于模型推理与服务部署的运行引擎。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "opensandbox-group",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/opensandbox-group/OpenSandbox",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 15284,
        "forks": 1397,
        "starsDelta7d": 259,
        "growthStatus": "ready",
        "starsAdded7d": 259,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 102271,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agent",
          "ai-infra",
          "kubernetes",
          "sandbox"
        ],
        "createdAt": "2025-12-17T08:41:09Z",
        "pushedAt": "2026-09-14T15:44:46Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/opensandbox-group/OpenSandbox/main/README.md",
        "evidenceHash": "9eaf248c390341fc806c5368f7707d255c89be273c21def3c08cbc5251e14233"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 259,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 32
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 27
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 21
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 28
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 16
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 25
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 110
          }
        ],
        "sourceUrl": "https://api.github.com/repos/opensandbox-group/OpenSandbox/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/e2b-dev/E2B",
      "stableSourceId": "609539715",
      "slug": "e2b-dev-e2b",
      "name": "E2B",
      "source": "github",
      "repoType": "repository",
      "sourceId": "e2b-dev/E2B",
      "canonicalUrl": "https://github.com/e2b-dev/E2B",
      "description": "Open-source, secure environment with real-world tools for enterprise-grade agents.",
      "descriptionEn": "Open-source, secure environment with real-world tools for enterprise-grade agents.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "e2b-dev",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/e2b-dev/E2B",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 13800,
        "forks": 1034,
        "starsDelta7d": 98,
        "growthStatus": "ready",
        "starsAdded7d": 98,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 129087,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "ai",
          "ai-agent",
          "ai-agents",
          "code-interpreter",
          "copilot",
          "development",
          "devtools",
          "gpt",
          "gpt-4",
          "javascript",
          "llm",
          "nextjs",
          "openai",
          "python",
          "react",
          "software",
          "typescript"
        ],
        "createdAt": "2023-03-04T13:41:18Z",
        "pushedAt": "2026-09-14T21:27:59Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/e2b-dev/E2B/main/README.md",
        "evidenceHash": "46c32f7888ac56dfe178d489ae878f6e3049fba16745682aa75e61d2ead6e675"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 98,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 21
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 12
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 17
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 15
          }
        ],
        "sourceUrl": "https://api.github.com/repos/e2b-dev/E2B/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/Lightning-AI/litgpt",
      "stableSourceId": "636372163",
      "slug": "lightning-ai-litgpt",
      "name": "litgpt",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Lightning-AI/litgpt",
      "canonicalUrl": "https://github.com/Lightning-AI/litgpt",
      "description": "20+ high-performance LLMs with recipes to pretrain, finetune and deploy at scale.",
      "descriptionEn": "20+ high-performance LLMs with recipes to pretrain, finetune and deploy at scale.",
      "descriptionZh": "用于模型训练、微调或优化的 AI 开发工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Lightning-AI",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/Lightning-AI/litgpt",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 13663,
        "forks": 1499,
        "starsDelta7d": 11,
        "growthStatus": "ready",
        "starsAdded7d": 11,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 5940,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "artificial-intelligence",
          "deep-learning",
          "large-language-models",
          "llm",
          "llm-inference",
          "llms"
        ],
        "createdAt": "2023-05-04T17:46:11Z",
        "pushedAt": "2026-09-14T10:24:06Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Lightning-AI/litgpt/main/README.md",
        "evidenceHash": "744e606018a856aed48a4ec0c72c65d3dc083b33ed779f9761db754288d3be97"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 11,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Lightning-AI/litgpt/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/semantica-agi/semantica",
      "stableSourceId": "1008304614",
      "slug": "semantica-agi-semantica",
      "name": "semantica",
      "source": "github",
      "repoType": "repository",
      "sourceId": "semantica-agi/semantica",
      "canonicalUrl": "https://github.com/semantica-agi/semantica",
      "description": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "descriptionEn": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "descriptionZh": "组织知识与向量检索，为 AI 应用提供相关内容。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "semantica-agi",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/semantica-agi/semantica",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 12871,
        "forks": 1437,
        "starsDelta7d": 573,
        "growthStatus": "ready",
        "starsAdded7d": 573,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 46638,
        "defaultBranch": "main",
        "topics": [
          "agent-memory",
          "ai",
          "ai-governance",
          "ai-infrastructure",
          "artificial-intelligence",
          "context-engineering",
          "context-graphs",
          "data-engineering",
          "decision-intelligence",
          "developer-tools",
          "explainable-ai",
          "generative-ai",
          "graph-rag",
          "knowledge-graph",
          "llm",
          "ontology",
          "provenance",
          "python",
          "reasoning",
          "semantic-search"
        ],
        "createdAt": "2025-06-25T10:41:00Z",
        "pushedAt": "2026-09-14T19:57:55Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/semantica-agi/semantica/main/README.md",
        "evidenceHash": "f7e416c523b794ea4343c4e4c440466a6d07b97ea1e0ceaec0a2e0d2c4749131"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 573,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 124
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 106
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 83
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 80
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 63
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 70
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 47
          }
        ],
        "sourceUrl": "https://api.github.com/repos/semantica-agi/semantica/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/voxel51/fiftyone",
      "stableSourceId": "257913595",
      "slug": "voxel51-fiftyone",
      "name": "fiftyone",
      "source": "github",
      "repoType": "repository",
      "sourceId": "voxel51/fiftyone",
      "canonicalUrl": "https://github.com/voxel51/fiftyone",
      "description": "Refine high-quality datasets and visual AI models",
      "descriptionEn": "Refine high-quality datasets and visual AI models",
      "descriptionZh": "组织知识与向量检索，为 AI 应用提供相关内容。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "voxel51",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/voxel51/fiftyone",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 11085,
        "forks": 819,
        "starsDelta7d": 22,
        "growthStatus": "ready",
        "starsAdded7d": 22,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 2403075,
        "defaultBranch": "main",
        "topics": [
          "active-learning",
          "artificial-intelligence",
          "computer-vision",
          "data-centric-ai",
          "data-cleaning",
          "data-curation",
          "data-quality",
          "data-science",
          "deep-learning",
          "developer-tools",
          "image-classification",
          "machine-learning",
          "object-detection",
          "python",
          "unstructured-data",
          "vector-search",
          "visualization"
        ],
        "createdAt": "2020-04-22T13:43:28Z",
        "pushedAt": "2026-09-14T21:23:29Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/voxel51/fiftyone/main/README.md",
        "evidenceHash": "8a167ef76e986c08be07b9ed7703fd0862cfbcd89dcec0c4e7bf976dad782389"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 22,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/voxel51/fiftyone/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/jo-inc/camofox-browser",
      "stableSourceId": "1142274728",
      "slug": "jo-inc-camofox-browser",
      "name": "camofox-browser",
      "source": "github",
      "repoType": "repository",
      "sourceId": "jo-inc/camofox-browser",
      "canonicalUrl": "https://github.com/jo-inc/camofox-browser",
      "description": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "descriptionEn": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "descriptionZh": "让 AI 智能体操作浏览器并执行网页任务。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "jo-inc",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/jo-inc/camofox-browser",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 11038,
        "forks": 1086,
        "starsDelta7d": 1073,
        "growthStatus": "ready",
        "starsAdded7d": 1073,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "JavaScript",
        "sizeKb": 15565,
        "defaultBranch": "master",
        "topics": [
          "ai-agent",
          "anti-bot",
          "antidetect-browser",
          "automation",
          "bot-detection",
          "browser-automation",
          "cloudflare-bypass",
          "headless-browser",
          "javascript",
          "nodejs",
          "playwright",
          "puppeteer",
          "scraping",
          "stealth-browser",
          "web-scraping"
        ],
        "createdAt": "2026-01-26T07:31:13Z",
        "pushedAt": "2026-09-14T15:36:04Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/jo-inc/camofox-browser/master/README.md",
        "evidenceHash": "a29847cde38a6f22fd91bb318a20e0c04dd773d767cec81522c404a1975bd9cd"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 1073,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 712
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 170
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 55
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 39
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 22
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 35
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 40
          }
        ],
        "sourceUrl": "https://api.github.com/repos/jo-inc/camofox-browser/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/lucidrains/denoising-diffusion-pytorch",
      "stableSourceId": "290373506",
      "slug": "lucidrains-denoising-diffusion-pytorch",
      "name": "denoising-diffusion-pytorch",
      "source": "github",
      "repoType": "repository",
      "sourceId": "lucidrains/denoising-diffusion-pytorch",
      "canonicalUrl": "https://github.com/lucidrains/denoising-diffusion-pytorch",
      "description": "Implementation of Denoising Diffusion Probabilistic Model in Pytorch",
      "descriptionEn": "Implementation of Denoising Diffusion Probabilistic Model in Pytorch",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "lucidrains",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/lucidrains/denoising-diffusion-pytorch",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 10686,
        "forks": 1280,
        "starsDelta7d": 6,
        "growthStatus": "ready",
        "starsAdded7d": 6,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 2686,
        "defaultBranch": "main",
        "topics": [
          "artificial-intelligence",
          "deep-learning",
          "generative-model",
          "score-matching"
        ],
        "createdAt": "2020-08-26T02:22:10Z",
        "pushedAt": "2026-09-01T14:49:07Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/lucidrains/denoising-diffusion-pytorch/main/README.md",
        "evidenceHash": "f5da81ad6b0bb307a9734addc09a325f79b5c9807660a8a3d5a359d95db153a2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 6,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/lucidrains/denoising-diffusion-pytorch/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/google-deepmind/sonnet",
      "stableSourceId": "87067212",
      "slug": "google-deepmind-sonnet",
      "name": "sonnet",
      "source": "github",
      "repoType": "repository",
      "sourceId": "google-deepmind/sonnet",
      "canonicalUrl": "https://github.com/google-deepmind/sonnet",
      "description": "TensorFlow-based neural network library",
      "descriptionEn": "TensorFlow-based neural network library",
      "descriptionZh": "为 AI 模型与应用提供开发、调用或部署能力的工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "google-deepmind",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/google-deepmind/sonnet",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 9970,
        "forks": 1305,
        "starsDelta7d": 4,
        "growthStatus": "ready",
        "starsAdded7d": 4,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 16932,
        "defaultBranch": "v2",
        "topics": [
          "artificial-intelligence",
          "deep-learning",
          "machine-learning",
          "neural-networks",
          "tensorflow"
        ],
        "createdAt": "2017-04-03T11:34:35Z",
        "pushedAt": "2026-07-07T22:31:42Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/google-deepmind/sonnet/v2/README.md",
        "evidenceHash": "9e4718ad827385f284949f7c0cd4be63230328e25ca6795a28f7242035fc03c2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 4,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/google-deepmind/sonnet/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/omnigent-ai/omnigent",
      "stableSourceId": "1266212515",
      "slug": "omnigent-ai-omnigent",
      "name": "omnigent",
      "source": "github",
      "repoType": "repository",
      "sourceId": "omnigent-ai/omnigent",
      "canonicalUrl": "https://github.com/omnigent-ai/omnigent",
      "description": "Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses without rewriting, enforce policies and sandboxing, and collaborate in real time from any device.",
      "descriptionEn": "Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses without rewriting, enforce policies and sandboxing, and collaborate in real time from any device.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "omnigent-ai",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/omnigent-ai/omnigent",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 9948,
        "forks": 1558,
        "starsDelta7d": 190,
        "growthStatus": "ready",
        "starsAdded7d": 190,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 229590,
        "defaultBranch": "main",
        "topics": [
          "agent-framework",
          "agent-governance",
          "agent-orchestration",
          "agents",
          "ai",
          "ai-agent",
          "ai-agents",
          "claude-code",
          "codex",
          "coding-agents",
          "developer-tools",
          "llm",
          "ml",
          "multi-agent",
          "python",
          "sandbox"
        ],
        "createdAt": "2026-06-11T12:18:13Z",
        "pushedAt": "2026-09-14T22:49:00Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/omnigent-ai/omnigent/main/README.md",
        "evidenceHash": "90ac1fd2f2e9d1d72c3aff7746b453fd66c1cd948d1116ec885b954499fb23d5"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 190,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 27
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 24
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 26
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 25
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 29
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 22
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 37
          }
        ],
        "sourceUrl": "https://api.github.com/repos/omnigent-ai/omnigent/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/frankbria/ralph-claude-code",
      "stableSourceId": "1045721921",
      "slug": "frankbria-ralph-claude-code",
      "name": "ralph-claude-code",
      "source": "github",
      "repoType": "repository",
      "sourceId": "frankbria/ralph-claude-code",
      "canonicalUrl": "https://github.com/frankbria/ralph-claude-code",
      "description": "Autonomous AI development loop for Claude Code with intelligent exit detection",
      "descriptionEn": "Autonomous AI development loop for Claude Code with intelligent exit detection",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "frankbria",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/frankbria/ralph-claude-code",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 9627,
        "forks": 719,
        "starsDelta7d": 9,
        "growthStatus": "ready",
        "starsAdded7d": 9,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Shell",
        "sizeKb": 951,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agent",
          "ai-agents",
          "ai-development",
          "ai-development-tools",
          "claude-code",
          "claude-code-cli",
          "development-tools",
          "development-workflow"
        ],
        "createdAt": "2025-08-27T16:03:45Z",
        "pushedAt": "2026-07-18T02:33:21Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/frankbria/ralph-claude-code/main/README.md",
        "evidenceHash": "b2e0fe69af5257cc449112d8bd1ed4ca07f04b20cc5bab0d3482d08d3fecd844"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 9,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/frankbria/ralph-claude-code/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/xorbitsai/inference",
      "stableSourceId": "653496050",
      "slug": "xorbitsai-inference",
      "name": "inference",
      "source": "github",
      "repoType": "repository",
      "sourceId": "xorbitsai/inference",
      "canonicalUrl": "https://github.com/xorbitsai/inference",
      "description": "Swap GPT for any LLM by changing a single line of code. Xinference lets you run open-source, speech, and multimodal models on cloud, on-prem, or your laptop — all through one unified, production-ready inference API.",
      "descriptionEn": "Swap GPT for any LLM by changing a single line of code. Xinference lets you run open-source, speech, and multimodal models on cloud, on-prem, or your laptop — all through one unified, production-ready inference API.",
      "descriptionZh": "用于模型推理与服务部署的运行引擎。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "xorbitsai",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/xorbitsai/inference",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 9567,
        "forks": 867,
        "starsDelta7d": 20,
        "growthStatus": "ready",
        "starsAdded7d": 20,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 87938,
        "defaultBranch": "main",
        "topics": [
          "artificial-intelligence",
          "deployment",
          "diffusers",
          "gemma",
          "glm",
          "glm-5-3",
          "inference",
          "kimi",
          "kimi-k3",
          "llama-cpp",
          "llamacpp",
          "llm",
          "machine-learning",
          "openai-api",
          "pytorch",
          "qwen",
          "sglang",
          "transformers",
          "vllm",
          "whisper"
        ],
        "createdAt": "2023-06-14T07:05:04Z",
        "pushedAt": "2026-09-14T04:58:07Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/xorbitsai/inference/main/README.md",
        "evidenceHash": "e3a458a8710c54e48062e6391f4a4b256f1e240ce0f8c34d4b447b87881825da"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 20,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/xorbitsai/inference/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/EvoMap/evolver",
      "stableSourceId": "1147063571",
      "slug": "evomap-evolver",
      "name": "evolver",
      "source": "github",
      "repoType": "repository",
      "sourceId": "EvoMap/evolver",
      "canonicalUrl": "https://github.com/EvoMap/evolver",
      "description": "The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai",
      "descriptionEn": "The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "EvoMap",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "GPL-3.0",
        "evidenceUrl": "https://github.com/EvoMap/evolver",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 9075,
        "forks": 845,
        "starsDelta7d": 40,
        "growthStatus": "ready",
        "starsAdded7d": 40,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "JavaScript",
        "sizeKb": 149092,
        "defaultBranch": "main",
        "topics": [
          "a2a",
          "agent-evolution",
          "agent-framework",
          "agent-protocol",
          "ai-agent",
          "auditable-ai",
          "autonomous-agent",
          "cli",
          "evomap",
          "gep",
          "llm-agent",
          "mcp",
          "memory-system",
          "nodejs",
          "prompt-engineering",
          "prompt-governance",
          "self-evolution",
          "self-evolving",
          "skill-library",
          "skills"
        ],
        "createdAt": "2026-02-01T05:59:24Z",
        "pushedAt": "2026-09-14T09:19:43Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/EvoMap/evolver/main/README.md",
        "evidenceHash": "6df15a67995378b52ccae213a01c07b6a6e1bd812803f89d7d8cebb3c7fe81a5"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 40,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/EvoMap/evolver/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/bentoml/BentoML",
      "stableSourceId": "178976529",
      "slug": "bentoml-bentoml",
      "name": "BentoML",
      "source": "github",
      "repoType": "repository",
      "sourceId": "bentoml/BentoML",
      "canonicalUrl": "https://github.com/bentoml/BentoML",
      "description": "The easiest way to serve AI apps and models - Build Model Inference APIs, Job queues, LLM apps, Multi-model pipelines, and more!",
      "descriptionEn": "The easiest way to serve AI apps and models - Build Model Inference APIs, Job queues, LLM apps, Multi-model pipelines, and more!",
      "descriptionZh": "用于模型推理与服务部署的运行引擎。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "bentoml",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/bentoml/BentoML",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 8839,
        "forks": 1033,
        "starsDelta7d": 18,
        "growthStatus": "ready",
        "starsAdded7d": 18,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 103798,
        "defaultBranch": "main",
        "topics": [
          "ai-inference",
          "deep-learning",
          "generative-ai",
          "inference-platform",
          "llm",
          "llm-inference",
          "llm-serving",
          "llmops",
          "machine-learning",
          "ml-engineering",
          "mlops",
          "model-inference-service",
          "model-serving",
          "multimodal",
          "python"
        ],
        "createdAt": "2019-04-02T01:39:27Z",
        "pushedAt": "2026-09-07T17:43:01Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/bentoml/BentoML/main/README.md",
        "evidenceHash": "e88760951897f29802551b87a97886144aa3d5af45e0db3d1932b088abc9ec2a"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 18,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/bentoml/BentoML/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/nexu-io/html-anything",
      "stableSourceId": "1235403234",
      "slug": "nexu-io-html-anything",
      "name": "html-anything",
      "source": "github",
      "repoType": "repository",
      "sourceId": "nexu-io/html-anything",
      "canonicalUrl": "https://github.com/nexu-io/html-anything",
      "description": "✨ The agentic HTML editor — your local AI agent writes the HTML, you ship it. 🚀 75 Skills × 9 Surfaces (magazine · deck · poster · XHS / tweet · prototype · data report · Hyperframes) 🛡️ Sandboxed preview · 📤 1-click to WeChat / X / Zhihu / HTML / PNG 🔑 Zero API key — Claude Code / Cursor / Codex / Gemini / Copilot",
      "descriptionEn": "✨ The agentic HTML editor — your local AI agent writes the HTML, you ship it. 🚀 75 Skills × 9 Surfaces (magazine · deck · poster · XHS / tweet · prototype · data report · Hyperframes) 🛡️ Sandboxed preview · 📤 1-click to WeChat / X / Zhihu / HTML / PNG 🔑 Zero API key — Claude Code / Cursor / Codex / Gemini / Copilot",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "nexu-io",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/nexu-io/html-anything",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 8806,
        "forks": 855,
        "starsDelta7d": 116,
        "growthStatus": "ready",
        "starsAdded7d": 116,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "HTML",
        "sizeKb": 15462,
        "defaultBranch": "main",
        "topics": [
          "agent-skills",
          "agentic",
          "ai-agents",
          "ai-design",
          "ai-editor",
          "byok",
          "claude",
          "claude-code",
          "claude-skills",
          "coding-agents",
          "generative-ai",
          "html",
          "html-editor",
          "hyperframes",
          "local-first",
          "markdown",
          "nextjs",
          "vibe-coding",
          "wechat",
          "xiaohongshu"
        ],
        "createdAt": "2026-05-11T09:40:38Z",
        "pushedAt": "2026-08-23T08:53:57Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/nexu-io/html-anything/main/README.md",
        "evidenceHash": "086ff35d415c3f4be964983c0bb09387cf28f526c9c9007a475e8c6bd18cf2d1"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 116,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 17
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 14
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 16
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 25
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 14
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 12
          }
        ],
        "sourceUrl": "https://api.github.com/repos/nexu-io/html-anything/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/maximhq/bifrost",
      "stableSourceId": "951115072",
      "slug": "maximhq-bifrost",
      "name": "bifrost",
      "source": "github",
      "repoType": "repository",
      "sourceId": "maximhq/bifrost",
      "canonicalUrl": "https://github.com/maximhq/bifrost",
      "description": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "descriptionEn": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "descriptionZh": "跟踪、评估和监测模型应用的执行效果。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "maximhq",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/maximhq/bifrost",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 8071,
        "forks": 1213,
        "starsDelta7d": 208,
        "growthStatus": "ready",
        "starsAdded7d": 208,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Go",
        "sizeKb": 969843,
        "defaultBranch": "dev",
        "topics": [
          "ai-gateway",
          "gateway",
          "gateway-services",
          "generative-ai",
          "guardrails",
          "llm",
          "llm-cost",
          "llm-gateway",
          "llm-observability",
          "llmops",
          "load-balancing",
          "mcp-client",
          "mcp-gateway",
          "mcp-server",
          "model-router",
          "token-management"
        ],
        "createdAt": "2025-03-19T07:21:26Z",
        "pushedAt": "2026-09-14T22:12:38Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/maximhq/bifrost/dev/README.md",
        "evidenceHash": "5b0956dfe41f2f347366f87f1f473aaaec6942ee2a6b33037ebb02304b6a20cc"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 208,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 37
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 28
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 33
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 26
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 30
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 36
          }
        ],
        "sourceUrl": "https://api.github.com/repos/maximhq/bifrost/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/evidentlyai/evidently",
      "stableSourceId": "315977578",
      "slug": "evidentlyai-evidently",
      "name": "evidently",
      "source": "github",
      "repoType": "repository",
      "sourceId": "evidentlyai/evidently",
      "canonicalUrl": "https://github.com/evidentlyai/evidently",
      "description": "Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
      "descriptionEn": "Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
      "descriptionZh": "跟踪、评估和监测模型应用的执行效果。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "evidentlyai",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/evidentlyai/evidently",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7914,
        "forks": 918,
        "starsDelta7d": 17,
        "growthStatus": "ready",
        "starsAdded7d": 17,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Jupyter Notebook",
        "sizeKb": 564847,
        "defaultBranch": "main",
        "topics": [
          "data-drift",
          "data-quality",
          "data-science",
          "data-validation",
          "generative-ai",
          "hacktoberfest",
          "html-report",
          "jupyter-notebook",
          "llm",
          "llmops",
          "machine-learning",
          "mlops",
          "model-monitoring",
          "pandas-dataframe"
        ],
        "createdAt": "2020-11-25T15:20:08Z",
        "pushedAt": "2026-09-11T09:03:28Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/evidentlyai/evidently/main/README.md",
        "evidenceHash": "c8ac72c2363a2f0b7c36f38a6e7801817e5659507a2e6a37212702ad1cd51c20"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 17,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/evidentlyai/evidently/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/stanfordnlp/stanza",
      "stableSourceId": "104854615",
      "slug": "stanfordnlp-stanza",
      "name": "stanza",
      "source": "github",
      "repoType": "repository",
      "sourceId": "stanfordnlp/stanza",
      "canonicalUrl": "https://github.com/stanfordnlp/stanza",
      "description": "Stanford NLP Python library for tokenization, sentence segmentation, NER, and parsing of many human languages",
      "descriptionEn": "Stanford NLP Python library for tokenization, sentence segmentation, NER, and parsing of many human languages",
      "descriptionZh": "用于图像理解、检测或分割的计算机视觉工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "stanfordnlp",
        "role": "organization"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/stanfordnlp/stanza",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 7877,
        "forks": 960,
        "starsDelta7d": 4,
        "growthStatus": "ready",
        "starsAdded7d": 4,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 87761,
        "defaultBranch": "main",
        "topics": [
          "artificial-intelligence",
          "corenlp",
          "deep-learning",
          "machine-learning",
          "named-entity-recognition",
          "natural-language-processing",
          "nlp",
          "python",
          "pytorch",
          "universal-dependencies"
        ],
        "createdAt": "2017-09-26T08:00:56Z",
        "pushedAt": "2026-09-10T17:58:52Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/stanfordnlp/stanza/main/README.md",
        "evidenceHash": "b4f5360262f710da999086d585e29fa060e0db2e52387ae7d59c5b7dc7d84eca"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 4,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/stanfordnlp/stanza/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/2FastLabs/agent-squad",
      "stableSourceId": "832647441",
      "slug": "2fastlabs-agent-squad",
      "name": "agent-squad",
      "source": "github",
      "repoType": "repository",
      "sourceId": "2FastLabs/agent-squad",
      "canonicalUrl": "https://github.com/2FastLabs/agent-squad",
      "description": "Flexible and powerful framework for managing multiple AI agents and handling complex conversations",
      "descriptionEn": "Flexible and powerful framework for managing multiple AI agents and handling complex conversations",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "2FastLabs",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/2FastLabs/agent-squad",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7761,
        "forks": 739,
        "starsDelta7d": 8,
        "growthStatus": "ready",
        "starsAdded7d": 8,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Swift",
        "sizeKb": 71332,
        "defaultBranch": "main",
        "topics": [
          "agentic-ai",
          "agents",
          "ai-agents",
          "ai-agents-framework",
          "anthropic",
          "anthropic-claude",
          "aws",
          "aws-bedrock",
          "aws-cdk",
          "aws-lambda",
          "chatbot",
          "framework",
          "generative-ai",
          "machine-learning",
          "openai",
          "openaiapi",
          "orchestrator",
          "python",
          "serverless",
          "typescript"
        ],
        "createdAt": "2024-07-23T12:48:30Z",
        "pushedAt": "2026-09-13T08:42:05Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/2FastLabs/agent-squad/main/README.md",
        "evidenceHash": "5755ed57934279caa63f7be727c447e6fac4eeee90e068aa5fd1958fd1f248fb"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 8,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/2FastLabs/agent-squad/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/SWE-agent/mini-swe-agent",
      "stableSourceId": "1010318950",
      "slug": "swe-agent-mini-swe-agent",
      "name": "mini-swe-agent",
      "source": "github",
      "repoType": "repository",
      "sourceId": "SWE-agent/mini-swe-agent",
      "canonicalUrl": "https://github.com/SWE-agent/mini-swe-agent",
      "description": "The 100 line AI agent that solves GitHub issues or helps you in your command line. Radically simple, no huge configs, no giant monorepo—but scores >74% on SWE-bench verified!",
      "descriptionEn": "The 100 line AI agent that solves GitHub issues or helps you in your command line. Radically simple, no huge configs, no giant monorepo—but scores >74% on SWE-bench verified!",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "SWE-agent",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/SWE-agent/mini-swe-agent",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7544,
        "forks": 1022,
        "starsDelta7d": 380,
        "growthStatus": "ready",
        "starsAdded7d": 380,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 20171,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "agentic-ai",
          "agentic-ai-cli",
          "ai",
          "ai-agent",
          "textual"
        ],
        "createdAt": "2025-06-28T20:18:15Z",
        "pushedAt": "2026-09-14T22:12:15Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/SWE-agent/mini-swe-agent/main/README.md",
        "evidenceHash": "9982d90b7566f2f3fa5e9811b475d5e8e2a84e2df80cf3f1e4be6e820b129835"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 380,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 60
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 43
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 101
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 52
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 49
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 46
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 29
          }
        ],
        "sourceUrl": "https://api.github.com/repos/SWE-agent/mini-swe-agent/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/di-sukharev/opencommit",
      "stableSourceId": "610217037",
      "slug": "di-sukharev-opencommit",
      "name": "opencommit",
      "source": "github",
      "repoType": "repository",
      "sourceId": "di-sukharev/opencommit",
      "canonicalUrl": "https://github.com/di-sukharev/opencommit",
      "description": "top #1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT and every other provider, supports local Ollama models too",
      "descriptionEn": "top #1 and most feature rich GPT wrapper for git — generate commit messages with an LLM in 1 sec — works with Claude, GPT and every other provider, supports local Ollama models too",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "di-sukharev",
        "role": "maintainer"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/di-sukharev/opencommit",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7539,
        "forks": 444,
        "starsDelta7d": 6,
        "growthStatus": "ready",
        "starsAdded7d": 6,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "JavaScript",
        "sizeKb": 22992,
        "defaultBranch": "master",
        "topics": [
          "ai",
          "ai-commit",
          "ai-commits",
          "artificial-intelligence",
          "chatgpt",
          "git",
          "gpt",
          "productivity"
        ],
        "createdAt": "2023-03-06T10:30:51Z",
        "pushedAt": "2026-09-09T15:32:24Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/di-sukharev/opencommit/master/README.md",
        "evidenceHash": "41fa5db11c481f8b739052b41803b8ce5c3860407a4cd99efd3eab26c6fc3b53"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 6,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 3
          }
        ],
        "sourceUrl": "https://api.github.com/repos/di-sukharev/opencommit/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/traceloop/openllmetry",
      "stableSourceId": "686364232",
      "slug": "traceloop-openllmetry",
      "name": "openllmetry",
      "source": "github",
      "repoType": "repository",
      "sourceId": "traceloop/openllmetry",
      "canonicalUrl": "https://github.com/traceloop/openllmetry",
      "description": "Open-source observability for your GenAI or LLM application, based on OpenTelemetry",
      "descriptionEn": "Open-source observability for your GenAI or LLM application, based on OpenTelemetry",
      "descriptionZh": "跟踪、评估和监测模型应用的执行效果。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "traceloop",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/traceloop/openllmetry",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7429,
        "forks": 1075,
        "starsDelta7d": 20,
        "growthStatus": "ready",
        "starsAdded7d": 20,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 64107,
        "defaultBranch": "main",
        "topics": [
          "artifical-intelligence",
          "datascience",
          "generative-ai",
          "good-first-issue",
          "good-first-issues",
          "help-wanted",
          "llm",
          "llmops",
          "metrics",
          "ml",
          "model-monitoring",
          "monitoring",
          "observability",
          "open-source",
          "open-telemetry",
          "opentelemetry",
          "opentelemetry-python",
          "python"
        ],
        "createdAt": "2023-09-02T14:42:59Z",
        "pushedAt": "2026-08-10T08:49:01Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/traceloop/openllmetry/main/README.md",
        "evidenceHash": "cc23a623407899839e861f65140e97870c168ed44c0c66c1498bc84e171f10a4"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 20,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/traceloop/openllmetry/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/ChatLab/ChatLab",
      "stableSourceId": "1104370536",
      "slug": "chatlab-chatlab",
      "name": "ChatLab",
      "source": "github",
      "repoType": "repository",
      "sourceId": "ChatLab/ChatLab",
      "canonicalUrl": "https://github.com/ChatLab/ChatLab",
      "description": "Local-first chat history analyzer with AI. | 本地优先的 AI 聊天记录分析工具",
      "descriptionEn": "Local-first chat history analyzer with AI. | 本地优先的 AI 聊天记录分析工具",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "ChatLab",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/ChatLab/ChatLab",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7356,
        "forks": 1510,
        "starsDelta7d": 37,
        "growthStatus": "ready",
        "starsAdded7d": 37,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 18391,
        "defaultBranch": "main",
        "topics": [
          "ai-agent",
          "chat-analyzer",
          "chat-history",
          "data-analysis",
          "data-visualization",
          "harness"
        ],
        "createdAt": "2025-11-26T05:54:26Z",
        "pushedAt": "2026-09-12T15:49:33Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/ChatLab/ChatLab/main/README.md",
        "evidenceHash": "ba773054afd77a7d78e800168917f15a0838dbd1d3b2e7fe6e4e1d76bd6427e6"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 37,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/ChatLab/ChatLab/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/vladmandic/sdnext",
      "stableSourceId": "581913613",
      "slug": "vladmandic-sdnext",
      "name": "sdnext",
      "source": "github",
      "repoType": "repository",
      "sourceId": "vladmandic/sdnext",
      "canonicalUrl": "https://github.com/vladmandic/sdnext",
      "description": "SD.Next: All-in-one WebUI for AI generative image and video creation, captioning and processing",
      "descriptionEn": "SD.Next: All-in-one WebUI for AI generative image and video creation, captioning and processing",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "vladmandic",
        "role": "maintainer"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/vladmandic/sdnext",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7340,
        "forks": 583,
        "starsDelta7d": 6,
        "growthStatus": "ready",
        "starsAdded7d": 6,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 116657,
        "defaultBranch": "master",
        "topics": [
          "ai-art",
          "caption",
          "diffusers",
          "generative-art",
          "python",
          "pytorch",
          "sdnext",
          "stable-diffusion",
          "transformers",
          "webui"
        ],
        "createdAt": "2022-12-24T20:59:11Z",
        "pushedAt": "2026-09-14T21:51:42Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/vladmandic/sdnext/master/README.md",
        "evidenceHash": "16e9a61ef8f256291ebd8127b3641d29f713861ae9c019526a8aa1bf5baf76be"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 6,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/vladmandic/sdnext/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/strands-agents/harness-sdk",
      "stableSourceId": "983715534",
      "slug": "strands-agents-harness-sdk",
      "name": "harness-sdk",
      "source": "github",
      "repoType": "repository",
      "sourceId": "strands-agents/harness-sdk",
      "canonicalUrl": "https://github.com/strands-agents/harness-sdk",
      "description": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "descriptionEn": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "strands-agents",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/strands-agents/harness-sdk",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7241,
        "forks": 1137,
        "starsDelta7d": 71,
        "growthStatus": "ready",
        "starsAdded7d": 71,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 161478,
        "defaultBranch": "main",
        "topics": [
          "agent-framework",
          "agentic",
          "agentic-ai",
          "agents",
          "ai",
          "ai-agents",
          "anthropic",
          "autonomous-agents",
          "bedrock",
          "generative-ai",
          "harness",
          "llm",
          "llm-agent",
          "mcp",
          "multi-agent-systems",
          "openai",
          "python",
          "sdk",
          "strands-agents",
          "typescript"
        ],
        "createdAt": "2025-05-14T19:59:51Z",
        "pushedAt": "2026-09-14T21:00:21Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/strands-agents/harness-sdk/main/README.md",
        "evidenceHash": "b4ae70e51a5b694422e20d152a3474370618944b287090eb15dcad8cb1532aaf"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 71,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 17
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 12
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 5
          }
        ],
        "sourceUrl": "https://api.github.com/repos/strands-agents/harness-sdk/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/Zipstack/unstract",
      "stableSourceId": "761150311",
      "slug": "zipstack-unstract",
      "name": "unstract",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Zipstack/unstract",
      "canonicalUrl": "https://github.com/Zipstack/unstract",
      "description": "LLM-Driven Extraction of Unstructured Data — Built for API Deployments & ETL Pipeline Workflows",
      "descriptionEn": "LLM-Driven Extraction of Unstructured Data — Built for API Deployments & ETL Pipeline Workflows",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Zipstack",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/Zipstack/unstract",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7236,
        "forks": 716,
        "starsDelta7d": 12,
        "growthStatus": "ready",
        "starsAdded7d": 12,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 106730,
        "defaultBranch": "main",
        "topics": [
          "ai-agents",
          "data-engineering",
          "document-ai",
          "generative-ai",
          "idp",
          "json-extraction",
          "llm",
          "mcp-server",
          "ocr",
          "pdf-extraction",
          "prompt-engineering",
          "structured-output"
        ],
        "createdAt": "2024-02-21T10:34:33Z",
        "pushedAt": "2026-09-14T19:17:58Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Zipstack/unstract/main/README.md",
        "evidenceHash": "612366a1cc7c3bfbbff237ce91dcef0e5705fb93c741c9c15c20ac8193e23f4a"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 12,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 3
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Zipstack/unstract/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/kyegomez/swarms",
      "stableSourceId": "639195966",
      "slug": "kyegomez-swarms",
      "name": "swarms",
      "source": "github",
      "repoType": "repository",
      "sourceId": "kyegomez/swarms",
      "canonicalUrl": "https://github.com/kyegomez/swarms",
      "description": "The Enterprise-Grade Multi-Agent Orchestration Framework. Website: https://swarms.ai",
      "descriptionEn": "The Enterprise-Grade Multi-Agent Orchestration Framework. Website: https://swarms.ai",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "kyegomez",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/kyegomez/swarms",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 7170,
        "forks": 1021,
        "starsDelta7d": 27,
        "growthStatus": "ready",
        "starsAdded7d": 27,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 189118,
        "defaultBranch": "master",
        "topics": [
          "agentic-ai",
          "agentic-workflow",
          "agents",
          "ai",
          "artificial-intelligence",
          "chatgpt",
          "claude-code",
          "gpt4all",
          "huggingface",
          "langchain",
          "langchain-python",
          "machine-learning",
          "multi-agent-systems",
          "prompt-engineering",
          "prompt-toolkit",
          "prompting",
          "swarms",
          "tree-of-thoughts"
        ],
        "createdAt": "2023-05-11T01:09:00Z",
        "pushedAt": "2026-09-14T10:46:18Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/kyegomez/swarms/master/README.md",
        "evidenceHash": "4f4856f11a94a7aeaebd704bdd431d62fff8f2d797589cc0cf82f8247d84d9b2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 27,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 12
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 3
          }
        ],
        "sourceUrl": "https://api.github.com/repos/kyegomez/swarms/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/NVIDIA-NeMo/Guardrails",
      "stableSourceId": "629494390",
      "slug": "nvidia-nemo-guardrails",
      "name": "Guardrails",
      "source": "github",
      "repoType": "repository",
      "sourceId": "NVIDIA-NeMo/Guardrails",
      "canonicalUrl": "https://github.com/NVIDIA-NeMo/Guardrails",
      "description": "NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails to LLM-based conversational systems.",
      "descriptionEn": "NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails to LLM-based conversational systems.",
      "descriptionZh": "为 AI 模型与应用提供开发、调用或部署能力的工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "NVIDIA-NeMo",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/NVIDIA-NeMo/Guardrails",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 7122,
        "forks": 835,
        "starsDelta7d": 42,
        "growthStatus": "ready",
        "starsAdded7d": 42,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 153045,
        "defaultBranch": "develop",
        "topics": [
          "agents",
          "generative-ai",
          "guardrails",
          "llm-safety",
          "llm-security",
          "llms",
          "nvidia",
          "python",
          "safety"
        ],
        "createdAt": "2023-04-18T12:32:47Z",
        "pushedAt": "2026-09-14T22:41:31Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/NVIDIA-NeMo/Guardrails/develop/README.md",
        "evidenceHash": "3024d4b057de3751e2ef5cb0d2154674880d76169c17d8d357f7bf750a419333"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 42,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 6
          }
        ],
        "sourceUrl": "https://api.github.com/repos/NVIDIA-NeMo/Guardrails/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/zenstory-ai/oh-story-claudecode",
      "stableSourceId": "1218208502",
      "slug": "zenstory-ai-oh-story-claudecode",
      "name": "oh-story-claudecode",
      "source": "github",
      "repoType": "repository",
      "sourceId": "zenstory-ai/oh-story-claudecode",
      "canonicalUrl": "https://github.com/zenstory-ai/oh-story-claudecode",
      "description": "Claude Code / Codex / OpenCode agent skills for writing Chinese web novels (网文): 扫榜、拆文、写作、去AI味、封面全流程，长篇短篇都支持 | 13 skills for novel writing and long-form fiction with file-based continuity tracking. MIT.",
      "descriptionEn": "Claude Code / Codex / OpenCode agent skills for writing Chinese web novels (网文): 扫榜、拆文、写作、去AI味、封面全流程，长篇短篇都支持 | 13 skills for novel writing and long-form fiction with file-based continuity tracking. MIT.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "zenstory-ai",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/zenstory-ai/oh-story-claudecode",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 6873,
        "forks": 979,
        "starsDelta7d": 248,
        "growthStatus": "ready",
        "starsAdded7d": 248,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "JavaScript",
        "sizeKb": 8273,
        "defaultBranch": "main",
        "topics": [
          "agent-skills",
          "ai-agent",
          "ai-novel-writing",
          "ai-writing",
          "antigravity",
          "chinese-novel",
          "claude-code",
          "claude-code-skills",
          "claude-skills",
          "codex",
          "creative-writing",
          "fiction-writing",
          "novel-writing",
          "openclaw",
          "opencode",
          "skill",
          "web-novel",
          "webnovel",
          "writing-assistant",
          "zenstory"
        ],
        "createdAt": "2026-04-22T16:35:39Z",
        "pushedAt": "2026-09-14T09:10:07Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/zenstory-ai/oh-story-claudecode/main/README.md",
        "evidenceHash": "23d44c995d2e8e0d71d53bf6820188f5123a2ad78b8ffa0cbebf3391552024a7"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 248,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 53
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 33
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 41
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 33
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 32
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 31
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 25
          }
        ],
        "sourceUrl": "https://api.github.com/repos/zenstory-ai/oh-story-claudecode/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/genspark-ai/genoffice",
      "stableSourceId": "1318187016",
      "slug": "genspark-ai-genoffice",
      "name": "genoffice",
      "source": "github",
      "repoType": "repository",
      "sourceId": "genspark-ai/genoffice",
      "canonicalUrl": "https://github.com/genspark-ai/genoffice",
      "description": "Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a `genoffice` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows & Linux.",
      "descriptionEn": "Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a `genoffice` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows & Linux.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "genspark-ai",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/genspark-ai/genoffice",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 6762,
        "forks": 899,
        "starsDelta7d": 862,
        "growthStatus": "ready",
        "starsAdded7d": 862,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 40279,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agent",
          "claude-code",
          "cli",
          "codex",
          "cursor",
          "docx",
          "excel",
          "libreoffice-alternative",
          "local-first",
          "markdown-editor",
          "microsoft-office-alternative",
          "office-suite",
          "pdf-editor",
          "pdf-to-word",
          "powerpoint",
          "pptx",
          "skills",
          "spreadsheet",
          "xlsx"
        ],
        "createdAt": "2026-07-31T09:40:58Z",
        "pushedAt": "2026-09-14T11:04:23Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/genspark-ai/genoffice/main/README.md",
        "evidenceHash": "9e65bd278eadfb8d810a3f132e464ed608bb92a9e3a65d919c9e3895e8482224"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 862,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 303
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 131
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 120
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 78
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 80
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 94
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 56
          }
        ],
        "sourceUrl": "https://api.github.com/repos/genspark-ai/genoffice/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/GoogleCloudPlatform/agent-starter-pack",
      "stableSourceId": "925298844",
      "slug": "googlecloudplatform-agent-starter-pack",
      "name": "agent-starter-pack",
      "source": "github",
      "repoType": "repository",
      "sourceId": "GoogleCloudPlatform/agent-starter-pack",
      "canonicalUrl": "https://github.com/GoogleCloudPlatform/agent-starter-pack",
      "description": "Ship AI Agents to Google Cloud in minutes, not months. Production-ready templates with built-in CI/CD, evaluation, and observability.",
      "descriptionEn": "Ship AI Agents to Google Cloud in minutes, not months. Production-ready templates with built-in CI/CD, evaluation, and observability.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "GoogleCloudPlatform",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/GoogleCloudPlatform/agent-starter-pack",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 6556,
        "forks": 1503,
        "starsDelta7d": 4,
        "growthStatus": "ready",
        "starsAdded7d": 4,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 38078,
        "defaultBranch": "main",
        "topics": [
          "agents",
          "gcp",
          "gemini",
          "genai-agents",
          "generative-ai",
          "llmops",
          "mlops",
          "observability"
        ],
        "createdAt": "2025-01-31T16:03:06Z",
        "pushedAt": "2026-07-21T23:42:40Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/GoogleCloudPlatform/agent-starter-pack/main/README.md",
        "evidenceHash": "051efec7ba06e7a6ebcf580542871a3aede7fbd46a14d00faebd3854aab0b1bc"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 4,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/GoogleCloudPlatform/agent-starter-pack/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/KunAgent/Kun",
      "stableSourceId": "1245699721",
      "slug": "kunagent-kun",
      "name": "Kun",
      "source": "github",
      "repoType": "repository",
      "sourceId": "KunAgent/Kun",
      "canonicalUrl": "https://github.com/KunAgent/Kun",
      "description": "Local-first AI agent workspace for coding, writing, design, research, and automation — one runtime for desktop GUI and TUI.",
      "descriptionEn": "Local-first AI agent workspace for coding, writing, design, research, and automation — one runtime for desktop GUI and TUI.",
      "descriptionZh": "辅助编写、修改和检查代码的 AI 开发工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "KunAgent",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/KunAgent/Kun",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 6309,
        "forks": 594,
        "starsDelta7d": 31,
        "growthStatus": "ready",
        "starsAdded7d": 31,
        "growthMetric": "stars_created"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 285534,
        "defaultBranch": "master",
        "topics": [
          "agentic-workflow",
          "ai-agent",
          "ai-assistant",
          "ai-design",
          "automation",
          "coding-agent",
          "deepseek",
          "desktop-app",
          "electron",
          "llm",
          "local-first",
          "mcp",
          "multi-agent",
          "openai-compatible",
          "productivity",
          "react",
          "tui",
          "typescript",
          "writing-assistant"
        ],
        "createdAt": "2026-05-21T13:22:06Z",
        "pushedAt": "2026-09-14T02:53:06Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/KunAgent/Kun/master/README.md",
        "evidenceHash": "8ff22486b45bb6f43859fa33d9d99b26eb82466062fde169b0000785eca4e809"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 31,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/KunAgent/Kun/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/Akegarasu/lora-scripts",
      "stableSourceId": "591961298",
      "slug": "akegarasu-lora-scripts",
      "name": "lora-scripts",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Akegarasu/lora-scripts",
      "canonicalUrl": "https://github.com/Akegarasu/lora-scripts",
      "description": "SD-Trainer. LoRA & Dreambooth training scripts & GUI use kohya-ss's trainer, for diffusion model.",
      "descriptionEn": "SD-Trainer. LoRA & Dreambooth training scripts & GUI use kohya-ss's trainer, for diffusion model.",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Akegarasu",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/Akegarasu/lora-scripts",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 6116,
        "forks": 699,
        "starsDelta7d": 7,
        "starsAdded7d": 7,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 7658,
        "defaultBranch": "main",
        "topics": [
          "dreambooth",
          "finetune",
          "lora",
          "stable-diffusion"
        ],
        "createdAt": "2023-01-22T13:50:45Z",
        "pushedAt": "2026-08-21T16:02:55Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Akegarasu/lora-scripts/main/README.md",
        "evidenceHash": "e32afe6bd238c5629265ef3f606dfc300c32348d4124262724e6b4e086de87a2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 7,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Akegarasu/lora-scripts/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/netease-youdao/LobsterAI",
      "stableSourceId": "1156137396",
      "slug": "netease-youdao-lobsterai",
      "name": "LobsterAI",
      "source": "github",
      "repoType": "repository",
      "sourceId": "netease-youdao/LobsterAI",
      "canonicalUrl": "https://github.com/netease-youdao/LobsterAI",
      "description": "Open-source, desktop-grade AI agent that gets real work done — data analysis, slides, docs, video & web research. Built on OpenClaw; runs tools on your real desktop and takes commands from your phone via WeChat, Feishu, DingTalk & Telegram.",
      "descriptionEn": "Open-source, desktop-grade AI agent that gets real work done — data analysis, slides, docs, video & web research. Built on OpenClaw; runs tools on your real desktop and takes commands from your phone via WeChat, Feishu, DingTalk & Telegram.",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "netease-youdao",
        "role": "maintainer"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/netease-youdao/LobsterAI",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 6025,
        "forks": 962,
        "starsDelta7d": 38,
        "starsAdded7d": 38,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 69638,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "ai-agent",
          "ai-assistant",
          "automation",
          "autonomous-agents",
          "chatbot",
          "copilot",
          "cross-platform",
          "desktop-app",
          "electron",
          "llm",
          "mcp",
          "office-automation",
          "openclaw",
          "productivity",
          "react",
          "tyepscript"
        ],
        "createdAt": "2026-02-12T09:56:20Z",
        "pushedAt": "2026-09-14T17:17:27Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/netease-youdao/LobsterAI/main/README.md",
        "evidenceHash": "2f256996d30da2c791b4ff870d1919e205f2120ad6175caf8d8339b7669aff6a"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 38,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/netease-youdao/LobsterAI/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/Q00/ouroboros",
      "stableSourceId": "1133901637",
      "slug": "q00-ouroboros",
      "name": "ouroboros",
      "source": "github",
      "repoType": "repository",
      "sourceId": "Q00/ouroboros",
      "canonicalUrl": "https://github.com/Q00/ouroboros",
      "description": "Agent OS: the agent gets smarter on its own. We just hold the line: Interview-gated, staged evaluation, budgeted evolution loop. MCP server, 14 runtimes: Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot, Kiro and more.",
      "descriptionEn": "Agent OS: the agent gets smarter on its own. We just hold the line: Interview-gated, staged evaluation, budgeted evolution loop. MCP server, 14 runtimes: Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot, Kiro and more.",
      "descriptionZh": "用于模型推理与服务部署的运行引擎。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "Q00",
        "role": "maintainer"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/Q00/ouroboros",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5869,
        "forks": 596,
        "starsDelta7d": 77,
        "starsAdded7d": 77,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 53624,
        "defaultBranch": "main",
        "topics": [
          "agent-os",
          "agentic-ai",
          "ai-agent",
          "ai-coding-agent",
          "claude-code",
          "cli",
          "codex",
          "coding-agent",
          "deepseek",
          "developer-tools",
          "dsh",
          "dsh-plugin",
          "llm-evaluation",
          "llm-orchestration",
          "loop-engineering",
          "mcp",
          "opencode",
          "skill",
          "skills"
        ],
        "createdAt": "2026-01-14T01:14:04Z",
        "pushedAt": "2026-09-14T19:17:54Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/Q00/ouroboros/main/README.md",
        "evidenceHash": "025dc8b9037e26e50bad4bac66d50991eaf7b1b5cb3422902bc61edcece1004e"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 77,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 38
          }
        ],
        "sourceUrl": "https://api.github.com/repos/Q00/ouroboros/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/wiltodelta/remove-ai-watermarks",
      "stableSourceId": "1191930807",
      "slug": "wiltodelta-remove-ai-watermarks",
      "name": "remove-ai-watermarks",
      "source": "github",
      "repoType": "repository",
      "sourceId": "wiltodelta/remove-ai-watermarks",
      "canonicalUrl": "https://github.com/wiltodelta/remove-ai-watermarks",
      "description": "Remove visible and invisible AI watermarks and provenance metadata from images and video. Python library and CLI for SynthID, C2PA, EXIF, IPTC, XMP, and common generative-AI marks.",
      "descriptionEn": "Remove visible and invisible AI watermarks and provenance metadata from images and video. Python library and CLI for SynthID, C2PA, EXIF, IPTC, XMP, and common generative-AI marks.",
      "descriptionZh": "为 AI 模型与应用提供开发、调用或部署能力的工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "wiltodelta",
        "role": "maintainer"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/wiltodelta/remove-ai-watermarks",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5546,
        "forks": 517,
        "starsDelta7d": 95,
        "starsAdded7d": 95,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 378305,
        "defaultBranch": "main",
        "topics": [
          "ai-watermark",
          "c2pa",
          "cli",
          "comfyui",
          "computer-vision",
          "content-credentials",
          "diffusion-models",
          "exif",
          "flux",
          "gemini",
          "generative-ai",
          "image-processing",
          "metadata",
          "nano-banana",
          "python",
          "stable-diffusion",
          "synthid",
          "video-processing",
          "watermark-removal",
          "watermark-remover"
        ],
        "createdAt": "2026-03-25T18:15:24Z",
        "pushedAt": "2026-09-14T19:07:08Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/wiltodelta/remove-ai-watermarks/main/README.md",
        "evidenceHash": "ac41be1a3c1e8dc706641f701d4794879e367fad5857407ca75a31cd6e950a8b"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 95,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 18
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 19
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 10
          }
        ],
        "sourceUrl": "https://api.github.com/repos/wiltodelta/remove-ai-watermarks/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/ATH-MaaS/ComfyUI-Copilot",
      "stableSourceId": "932644823",
      "slug": "ath-maas-comfyui-copilot",
      "name": "ComfyUI-Copilot",
      "source": "github",
      "repoType": "repository",
      "sourceId": "ATH-MaaS/ComfyUI-Copilot",
      "canonicalUrl": "https://github.com/ATH-MaaS/ComfyUI-Copilot",
      "description": "An AI-powered custom node for ComfyUI designed to enhance workflow automation and provide intelligent assistance",
      "descriptionEn": "An AI-powered custom node for ComfyUI designed to enhance workflow automation and provide intelligent assistance",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "ATH-MaaS",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/ATH-MaaS/ComfyUI-Copilot",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5515,
        "forks": 363,
        "starsDelta7d": 15,
        "starsAdded7d": 15,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 174642,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "ai",
          "comfy-ui",
          "comfyui",
          "comfyui-nodes",
          "copilot",
          "deepseek",
          "deepseek-v3",
          "flux",
          "gpt-4",
          "llm-agent",
          "rag",
          "stable-diffusion"
        ],
        "createdAt": "2025-02-14T09:02:28Z",
        "pushedAt": "2026-09-11T02:19:06Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/ATH-MaaS/ComfyUI-Copilot/main/README.md",
        "evidenceHash": "642ef15861d57c623d7a9a28976aa2e68fdd3ea7d8ad7a0ae86757f81a791e77"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 15,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 2
          }
        ],
        "sourceUrl": "https://api.github.com/repos/ATH-MaaS/ComfyUI-Copilot/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/PurpleAILAB/Decepticon",
      "stableSourceId": "997390194",
      "slug": "purpleailab-decepticon",
      "name": "Decepticon",
      "source": "github",
      "repoType": "repository",
      "sourceId": "PurpleAILAB/Decepticon",
      "canonicalUrl": "https://github.com/PurpleAILAB/Decepticon",
      "description": "Autonomous Hacking Agent for Red Team",
      "descriptionEn": "Autonomous Hacking Agent for Red Team",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "PurpleAILAB",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/PurpleAILAB/Decepticon",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5510,
        "forks": 1047,
        "starsDelta7d": 51,
        "starsAdded7d": 51,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 310111,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "ai",
          "cybersecurity",
          "generative-ai",
          "hacking",
          "langchain",
          "langgraph",
          "llm",
          "pentest",
          "pentesting"
        ],
        "createdAt": "2025-06-06T12:55:02Z",
        "pushedAt": "2026-08-30T13:22:58Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/PurpleAILAB/Decepticon/main/README.md",
        "evidenceHash": "0a4f66cd220bfeac246b930568d740cbda41755217e2bd712001d38c0bd5f559"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 51,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 4
          }
        ],
        "sourceUrl": "https://api.github.com/repos/PurpleAILAB/Decepticon/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/apache/maka",
      "stableSourceId": "1251460378",
      "slug": "apache-maka",
      "name": "maka",
      "source": "github",
      "repoType": "repository",
      "sourceId": "apache/maka",
      "canonicalUrl": "https://github.com/apache/maka",
      "description": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "descriptionEn": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "apache",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/apache/maka",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5401,
        "forks": 500,
        "starsDelta7d": 427,
        "starsAdded7d": 427,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 128374,
        "defaultBranch": "main",
        "topics": [
          "agent-runtime",
          "ai",
          "ai-agent",
          "apache",
          "cli",
          "desktop",
          "electron",
          "event-sourcing",
          "incubator",
          "llm",
          "local-first",
          "maka",
          "tool-use",
          "typescript"
        ],
        "createdAt": "2026-05-27T15:46:05Z",
        "pushedAt": "2026-09-14T16:09:27Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/apache/maka/main/README.md",
        "evidenceHash": "2f60c904352e67fff28042a550b520a097c5a268ee7945a371aa6b4f6840ea3d"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 427,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 103
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 71
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 55
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 44
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 50
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 63
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 41
          }
        ],
        "sourceUrl": "https://api.github.com/repos/apache/maka/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/KnockOutEZ/wigolo",
      "stableSourceId": "1208642537",
      "slug": "knockoutez-wigolo",
      "name": "wigolo",
      "source": "github",
      "repoType": "repository",
      "sourceId": "KnockOutEZ/wigolo",
      "canonicalUrl": "https://github.com/KnockOutEZ/wigolo",
      "description": "The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.",
      "descriptionEn": "The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.",
      "descriptionZh": "辅助编写、修改和检查代码的 AI 开发工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "KnockOutEZ",
        "role": "maintainer"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "NOASSERTION",
        "evidenceUrl": "https://github.com/KnockOutEZ/wigolo",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 5257,
        "forks": 420,
        "starsDelta7d": 92,
        "starsAdded7d": 92,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 43475,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "ai",
          "ai-agent",
          "claude",
          "cli",
          "developer-tools",
          "local-first",
          "mcp",
          "mcp-server",
          "metasearch",
          "model-context-protocol",
          "nodejs",
          "privacy",
          "rag",
          "search",
          "search-engine",
          "typescript",
          "web-crawler",
          "web-scraping",
          "web-search"
        ],
        "createdAt": "2026-04-12T15:04:11Z",
        "pushedAt": "2026-09-14T10:36:05Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/KnockOutEZ/wigolo/main/README.md",
        "evidenceHash": "4ced569638973025111b543a6a0013c24a72207f33da24155c9a092b6df1555f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 92,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 24
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 16
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 10
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 9
          }
        ],
        "sourceUrl": "https://api.github.com/repos/KnockOutEZ/wigolo/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/h2oai/h2o-llmstudio",
      "stableSourceId": "629142696",
      "slug": "h2oai-h2o-llmstudio",
      "name": "h2o-llmstudio",
      "source": "github",
      "repoType": "repository",
      "sourceId": "h2oai/h2o-llmstudio",
      "canonicalUrl": "https://github.com/h2oai/h2o-llmstudio",
      "description": "H2O LLM Studio - a framework and no-code GUI for fine-tuning LLMs. Documentation: https://docs.h2o.ai/h2o-llmstudio/",
      "descriptionEn": "H2O LLM Studio - a framework and no-code GUI for fine-tuning LLMs. Documentation: https://docs.h2o.ai/h2o-llmstudio/",
      "descriptionZh": "用于模型训练、微调或优化的 AI 开发工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "h2oai",
        "role": "organization"
      },
      "categories": [
        "开发与数据"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/h2oai/h2o-llmstudio",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5181,
        "forks": 557,
        "starsDelta7d": 5,
        "starsAdded7d": 5,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 58361,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "chatbot",
          "chatgpt",
          "fedramp",
          "fine-tuning",
          "finetuning",
          "generative",
          "generative-ai",
          "gpt",
          "llama",
          "llama2",
          "llm",
          "llm-training"
        ],
        "createdAt": "2023-04-17T17:56:33Z",
        "pushedAt": "2026-09-08T11:15:24Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/h2oai/h2o-llmstudio/main/README.md",
        "evidenceHash": "6617ddc2cfdea421be42e67e03e87689692cc9df8d36d0c178f73c8a17365cc6"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 5,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/h2oai/h2o-llmstudio/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/iflytek/skillhub",
      "stableSourceId": "1178833585",
      "slug": "iflytek-skillhub",
      "name": "skillhub",
      "source": "github",
      "repoType": "repository",
      "sourceId": "iflytek/skillhub",
      "canonicalUrl": "https://github.com/iflytek/skillhub",
      "description": "Self-hosted, open-source agent skill registry for enterprises. Publish & version skill packages, govern with RBAC and audit logs, deploy   on-premise with Docker or Kubernetes.",
      "descriptionEn": "Self-hosted, open-source agent skill registry for enterprises. Publish & version skill packages, govern with RBAC and audit logs, deploy   on-premise with Docker or Kubernetes.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "iflytek",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/iflytek/skillhub",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 5101,
        "forks": 835,
        "starsDelta7d": 50,
        "starsAdded7d": 50,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Java",
        "sizeKb": 19133,
        "defaultBranch": "main",
        "topics": [
          "agent-framework",
          "ai-agent",
          "ai-governance",
          "ai-infrastructure",
          "ai-orchestration",
          "audit-log",
          "enterprise-ai",
          "iflytek-astron",
          "openclaw",
          "openclaw-skills",
          "rbac",
          "skill",
          "skill-hub",
          "skill-management",
          "skill-manager",
          "skill-registry",
          "skills",
          "version-control"
        ],
        "createdAt": "2026-03-11T12:17:05Z",
        "pushedAt": "2026-09-14T14:20:38Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/iflytek/skillhub/main/README.md",
        "evidenceHash": "e8e334939bb1aa03502c2fc9b61907121eef26c6c29945f4217fa425ddc8f98d"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 50,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 10
          }
        ],
        "sourceUrl": "https://api.github.com/repos/iflytek/skillhub/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/EvoScientist/EvoScientist",
      "stableSourceId": "1142406715",
      "slug": "evoscientist-evoscientist",
      "name": "EvoScientist",
      "source": "github",
      "repoType": "repository",
      "sourceId": "EvoScientist/EvoScientist",
      "canonicalUrl": "https://github.com/EvoScientist/EvoScientist",
      "description": "🔬 Harness Vibe Research with Self-evolving AI Scientists",
      "descriptionEn": "🔬 Harness Vibe Research with Self-evolving AI Scientists",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "EvoScientist",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/EvoScientist/EvoScientist",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4892,
        "forks": 308,
        "starsDelta7d": 220,
        "starsAdded7d": 220,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 29604,
        "defaultBranch": "main",
        "topics": [
          "ai-agent",
          "ai4science",
          "multi-agent-system",
          "vibe-research"
        ],
        "createdAt": "2026-01-26T11:19:26Z",
        "pushedAt": "2026-09-11T20:46:47Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/EvoScientist/EvoScientist/main/README.md",
        "evidenceHash": "08b2a97ab04c7360279092e8153011c09bef31a325b98927545a13efb9a6580f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 220,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 31
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 30
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 27
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 32
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 28
          }
        ],
        "sourceUrl": "https://api.github.com/repos/EvoScientist/EvoScientist/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/yangjian102621/geekai",
      "stableSourceId": "636986058",
      "slug": "yangjian102621-geekai",
      "name": "geekai",
      "source": "github",
      "repoType": "repository",
      "sourceId": "yangjian102621/geekai",
      "canonicalUrl": "https://github.com/yangjian102621/geekai",
      "description": "AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI  绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",
      "descriptionEn": "AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI  绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "yangjian102621",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/yangjian102621/geekai",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4699,
        "forks": 1071,
        "starsDelta7d": 5,
        "starsAdded7d": 5,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Vue",
        "sizeKb": 105557,
        "defaultBranch": "main",
        "topics": [
          "azure",
          "chatgpt",
          "dalle3",
          "element-plus",
          "go",
          "midjourney",
          "stable-diffusion"
        ],
        "createdAt": "2023-05-06T06:48:54Z",
        "pushedAt": "2026-09-13T06:41:01Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/yangjian102621/geekai/main/README.md",
        "evidenceHash": "4abc03d71945f3bbe8f22e6415c9127d737c6e9419d354d882f915f0e10dab31"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 5,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/yangjian102621/geekai/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/shy3130/tick-stock-panel",
      "stableSourceId": "1273015953",
      "slug": "shy3130-tick-stock-panel",
      "name": "tick-stock-panel",
      "source": "github",
      "repoType": "repository",
      "sourceId": "shy3130/tick-stock-panel",
      "canonicalUrl": "https://github.com/shy3130/tick-stock-panel",
      "description": "TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台  | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源",
      "descriptionEn": "TSP自托管、零运维的 A 股「选股 + 监控 + 回测」量化工作台  | LLM能力驱使策略定制+个股分析+复盘 | 自由接入第三方数据源与个性化扩展数据 | 个人开源",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "shy3130",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/shy3130/tick-stock-panel",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4680,
        "forks": 1146,
        "starsDelta7d": 230,
        "starsAdded7d": 230,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 23318,
        "defaultBranch": "main",
        "topics": [
          "a-stock",
          "ai-agent",
          "aigc",
          "backtesting",
          "daily",
          "duckdb",
          "fastapi",
          "llm",
          "polars",
          "quant",
          "quantitative-finance",
          "quantitative-trading",
          "react",
          "screener",
          "self-hosted",
          "stock",
          "stock-analysis",
          "tdx",
          "tickflow",
          "tsp"
        ],
        "createdAt": "2026-06-18T06:18:29Z",
        "pushedAt": "2026-09-14T07:57:20Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/shy3130/tick-stock-panel/main/README.md",
        "evidenceHash": "02b63e34540bc70e6d762cfade5ae7362d7c3725321151d1245d1bc9ae8faf78"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 230,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 20
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 45
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 32
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 48
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 26
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 23
          }
        ],
        "sourceUrl": "https://api.github.com/repos/shy3130/tick-stock-panel/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T00:12:21.633Z"
      }
    },
    {
      "id": "github/repository/zebbern/claude-code-guide",
      "stableSourceId": "1006251566",
      "slug": "zebbern-claude-code-guide",
      "name": "claude-code-guide",
      "source": "github",
      "repoType": "repository",
      "sourceId": "zebbern/claude-code-guide",
      "canonicalUrl": "https://github.com/zebbern/claude-code-guide",
      "description": "Claude Code Guide - Setup, Commands, workflows, agents, skills & tips-n-tricks from beginner to power user!",
      "descriptionEn": "Claude Code Guide - Setup, Commands, workflows, agents, skills & tips-n-tricks from beginner to power user!",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "zebbern",
        "role": "maintainer"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/zebbern/claude-code-guide",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4622,
        "forks": 463,
        "starsDelta7d": 14,
        "starsAdded7d": 14,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 4078,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agent",
          "ai-agent-tools",
          "anthropic-claude",
          "claude",
          "claude-ai",
          "claude-api",
          "claude-code",
          "claude-code-communication",
          "claude-code-guide",
          "claude-code-skills",
          "claude-commands",
          "claude-desktop",
          "claude-mcp",
          "claude-sonnet",
          "code",
          "mcp",
          "mcp-agents",
          "mcp-tools",
          "vscode-extension"
        ],
        "createdAt": "2025-06-21T20:43:25Z",
        "pushedAt": "2026-09-13T01:03:04Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/zebbern/claude-code-guide/main/README.md",
        "evidenceHash": "9dbd9232d21737b4649272b11a869e7b4d58a0b56f019daf886f1648cf672988"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 14,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/zebbern/claude-code-guide/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/IBM/mcp-context-forge",
      "stableSourceId": "979886407",
      "slug": "ibm-mcp-context-forge",
      "name": "mcp-context-forge",
      "source": "github",
      "repoType": "repository",
      "sourceId": "IBM/mcp-context-forge",
      "canonicalUrl": "https://github.com/IBM/mcp-context-forge",
      "description": "An AI Gateway, registry, and proxy that sits in front of any MCP, A2A, or REST/gRPC APIs, exposing a unified endpoint with centralized discovery, guardrails and management. Optimizes Agent & Tool calling, and supports plugins.",
      "descriptionEn": "An AI Gateway, registry, and proxy that sits in front of any MCP, A2A, or REST/gRPC APIs, exposing a unified endpoint with centralized discovery, guardrails and management. Optimizes Agent & Tool calling, and supports plugins.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "IBM",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/IBM/mcp-context-forge",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4469,
        "forks": 863,
        "starsDelta7d": 37,
        "starsAdded7d": 37,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 446890,
        "defaultBranch": "main",
        "topics": [
          "agents",
          "ai",
          "api-gateway",
          "asyncio",
          "authentication-middleware",
          "devops",
          "docker",
          "fastapi",
          "federation",
          "gateway",
          "generative-ai",
          "jwt",
          "kubernetes",
          "llm-agents",
          "mcp",
          "model-context-protocol",
          "observability",
          "prompt-engineering",
          "python",
          "tools"
        ],
        "createdAt": "2025-05-08T08:16:59Z",
        "pushedAt": "2026-09-14T19:35:21Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/IBM/mcp-context-forge/main/README.md",
        "evidenceHash": "5b509529cb479dd957324776d2b05b70167c57fe0631be7356cb82d3aba3aa77"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 37,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 5
          }
        ],
        "sourceUrl": "https://api.github.com/repos/IBM/mcp-context-forge/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/ArcReel/ArcReel",
      "stableSourceId": "1152014383",
      "slug": "arcreel-arcreel",
      "name": "ArcReel",
      "source": "github",
      "repoType": "repository",
      "sourceId": "ArcReel/ArcReel",
      "canonicalUrl": "https://github.com/ArcReel/ArcReel",
      "description": "AI Agent 驱动的开源可自部署视频工作台：将小说与剧本转为角色、场景、道具资产、分镜、视频和剪映草稿，支持跨镜头一致性、多供应商与费用追踪 | Self-hosted AI video workspace for stories, storyboards and short-form video production",
      "descriptionEn": "AI Agent 驱动的开源可自部署视频工作台：将小说与剧本转为角色、场景、道具资产、分镜、视频和剪映草稿，支持跨镜头一致性、多供应商与费用追踪 | Self-hosted AI video workspace for stories, storyboards and short-form video production",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "ArcReel",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/ArcReel/ArcReel",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4456,
        "forks": 898,
        "starsDelta7d": 80,
        "starsAdded7d": 80,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 58021,
        "defaultBranch": "main",
        "topics": [
          "agentic-workflow",
          "ai-agent",
          "ai-animation",
          "ai-video-generator",
          "capcut",
          "claude-agent-sdk",
          "content-creation",
          "docker",
          "ffmpeg",
          "image-to-video",
          "multi-provider",
          "novel-to-video",
          "reference-to-video",
          "script-to-video",
          "self-hosted",
          "short-drama",
          "short-video",
          "storyboard",
          "text-to-video",
          "video-generation"
        ],
        "createdAt": "2026-02-07T08:17:10Z",
        "pushedAt": "2026-09-14T05:41:09Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/ArcReel/ArcReel/main/README.md",
        "evidenceHash": "55881f5d4aac259b05899c4f5edf2082f16be974fab8839468f9f97644379bdd"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 80,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 15
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 14
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 13
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 11
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 7
          }
        ],
        "sourceUrl": "https://api.github.com/repos/ArcReel/ArcReel/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/embabel/embabel-agent",
      "stableSourceId": "963665823",
      "slug": "embabel-embabel-agent",
      "name": "embabel-agent",
      "source": "github",
      "repoType": "repository",
      "sourceId": "embabel/embabel-agent",
      "canonicalUrl": "https://github.com/embabel/embabel-agent",
      "description": "Agent framework for the JVM. Pronounced Em-BAY-bel /ɛmˈbeɪbəl/",
      "descriptionEn": "Agent framework for the JVM. Pronounced Em-BAY-bel /ɛmˈbeɪbəl/",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "embabel",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/embabel/embabel-agent",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4447,
        "forks": 433,
        "starsDelta7d": 23,
        "starsAdded7d": 23,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Kotlin",
        "sizeKb": 20543,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "agentic-ai",
          "agents",
          "ai",
          "ai-agents",
          "aiagentframework",
          "genai",
          "generative-ai",
          "java",
          "kotlin",
          "llms",
          "multi-agents",
          "multi-agents-orchestration",
          "multi-agents-system",
          "spring"
        ],
        "createdAt": "2025-04-10T03:06:07Z",
        "pushedAt": "2026-09-12T23:25:46Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/embabel/embabel-agent/main/README.md",
        "evidenceHash": "63de26712423787b75c721dcc872933a9b461f1ac4fd98634f70071a723d41fb"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 23,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 8
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 3
          }
        ],
        "sourceUrl": "https://api.github.com/repos/embabel/embabel-agent/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/xlite-dev/lite.ai.toolkit",
      "stableSourceId": "350375089",
      "slug": "xlite-dev-lite-ai-toolkit",
      "name": "lite.ai.toolkit",
      "source": "github",
      "repoType": "repository",
      "sourceId": "xlite-dev/lite.ai.toolkit",
      "canonicalUrl": "https://github.com/xlite-dev/lite.ai.toolkit",
      "description": "A lite C++ AI toolkit: 100+ models with MNN, ORT and TRT, including Det, Seg, Stable-Diffusion, Face-Fusion.",
      "descriptionEn": "A lite C++ AI toolkit: 100+ models with MNN, ORT and TRT, including Det, Seg, Stable-Diffusion, Face-Fusion.",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "xlite-dev",
        "role": "organization"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "GPL-3.0",
        "evidenceUrl": "https://github.com/xlite-dev/lite.ai.toolkit",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4432,
        "forks": 785,
        "starsDelta7d": 1,
        "starsAdded7d": 1,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "C++",
        "sizeKb": 469454,
        "defaultBranch": "main",
        "topics": [
          "facefusion",
          "mnn",
          "mnn-model",
          "ncnn",
          "onnx",
          "onnxruntime",
          "robustvideomatting",
          "stable-diffusion",
          "tensorrt",
          "tnn",
          "yolov5",
          "yolov6",
          "yolov8",
          "yolox"
        ],
        "createdAt": "2021-03-22T14:31:56Z",
        "pushedAt": "2026-09-05T05:50:35Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/xlite-dev/lite.ai.toolkit/main/README.md",
        "evidenceHash": "fb547d7b66cdf24f88cffd7ae7e4fe06d77fe609dcba3e73e7f82464dc84b9e8"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 1,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/xlite-dev/lite.ai.toolkit/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/oracle-devrel/oracle-ai-developer-hub",
      "stableSourceId": "744164276",
      "slug": "oracle-devrel-oracle-ai-developer-hub",
      "name": "oracle-ai-developer-hub",
      "source": "github",
      "repoType": "repository",
      "sourceId": "oracle-devrel/oracle-ai-developer-hub",
      "canonicalUrl": "https://github.com/oracle-devrel/oracle-ai-developer-hub",
      "description": "Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI services",
      "descriptionEn": "Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI services",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "oracle-devrel",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": null,
        "evidenceUrl": "https://github.com/oracle-devrel/oracle-ai-developer-hub",
        "status": "needs_review"
      },
      "metrics": {
        "stars": 4375,
        "forks": 827,
        "starsDelta7d": 13,
        "starsAdded7d": 13,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Jupyter Notebook",
        "sizeKb": 275314,
        "defaultBranch": "main",
        "topics": [
          "agentmemory",
          "agents",
          "ai",
          "ai-developer",
          "artificial-intelligence",
          "generative-ai",
          "kubernetes",
          "kustomize",
          "oracle-database",
          "oracleaidatabase",
          "oraclejet",
          "rag"
        ],
        "createdAt": "2024-01-16T18:43:15Z",
        "pushedAt": "2026-09-11T11:31:02Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/oracle-devrel/oracle-ai-developer-hub/main/README.md",
        "evidenceHash": "84e996cd2bafaa651fc49c04026508e22b8b4a7c5df3e0fac701cea0ad26250f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 13,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/oracle-devrel/oracle-ai-developer-hub/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/GiovanniPasq/agentic-rag-for-dummies",
      "stableSourceId": "1075623145",
      "slug": "giovannipasq-agentic-rag-for-dummies",
      "name": "agentic-rag-for-dummies",
      "source": "github",
      "repoType": "repository",
      "sourceId": "GiovanniPasq/agentic-rag-for-dummies",
      "canonicalUrl": "https://github.com/GiovanniPasq/agentic-rag-for-dummies",
      "description": "A modular Agentic RAG built with LangGraph — learn Retrieval-Augmented Generation Agents in minutes.",
      "descriptionEn": "A modular Agentic RAG built with LangGraph — learn Retrieval-Augmented Generation Agents in minutes.",
      "descriptionZh": "组织知识与向量检索，为 AI 应用提供相关内容。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "GiovanniPasq",
        "role": "maintainer"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/GiovanniPasq/agentic-rag-for-dummies",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 4160,
        "forks": 531,
        "starsDelta7d": 146,
        "starsAdded7d": 146,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Jupyter Notebook",
        "sizeKb": 24788,
        "defaultBranch": "main",
        "topics": [
          "agent",
          "agentic-ai",
          "agentic-rag",
          "agents",
          "ai-agents",
          "bm25",
          "generative-ai",
          "gradio",
          "langchain",
          "langgraph",
          "llm",
          "ollama",
          "qdrant",
          "rag",
          "rag-agents",
          "rag-chatbot",
          "rag-pipeline",
          "retrieval-augmented-generation",
          "retrieval-augmented-generation-rag"
        ],
        "createdAt": "2025-10-13T18:51:41Z",
        "pushedAt": "2026-08-30T10:19:02Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/GiovanniPasq/agentic-rag-for-dummies/main/README.md",
        "evidenceHash": "9700f05692e0a538b15eec07cb4d7ed9a7ffc0e68707e8995fe83f952284fefe"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 146,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 9
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 23
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 56
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 32
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 17
          }
        ],
        "sourceUrl": "https://api.github.com/repos/GiovanniPasq/agentic-rag-for-dummies/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/aurelio-labs/semantic-router",
      "stableSourceId": "711904962",
      "slug": "aurelio-labs-semantic-router",
      "name": "semantic-router",
      "source": "github",
      "repoType": "repository",
      "sourceId": "aurelio-labs/semantic-router",
      "canonicalUrl": "https://github.com/aurelio-labs/semantic-router",
      "description": "Superfast AI decision making and intelligent processing of multi-modal data.",
      "descriptionEn": "Superfast AI decision making and intelligent processing of multi-modal data.",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "aurelio-labs",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/aurelio-labs/semantic-router",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3894,
        "forks": 372,
        "starsDelta7d": 19,
        "starsAdded7d": 19,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 114745,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "artificial-intelligence",
          "chatbot",
          "computer-vision",
          "generative-ai",
          "machine-learning",
          "nlp"
        ],
        "createdAt": "2023-10-30T12:12:45Z",
        "pushedAt": "2026-09-12T08:47:41Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/aurelio-labs/semantic-router/main/README.md",
        "evidenceHash": "fe6f45d7e84bf0aa76b800e6e71aa98b50c422b007754666b191137444f16af7"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 19,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/aurelio-labs/semantic-router/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/LazyAGI/LazyLLM",
      "stableSourceId": "810121174",
      "slug": "lazyagi-lazyllm",
      "name": "LazyLLM",
      "source": "github",
      "repoType": "repository",
      "sourceId": "LazyAGI/LazyLLM",
      "canonicalUrl": "https://github.com/LazyAGI/LazyLLM",
      "description": "Easiest and laziest way for  building multi-agent LLMs applications.",
      "descriptionEn": "Easiest and laziest way for  building multi-agent LLMs applications.",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "LazyAGI",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/LazyAGI/LazyLLM",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3885,
        "forks": 414,
        "starsDelta7d": 5,
        "starsAdded7d": 5,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 28938,
        "defaultBranch": "main",
        "topics": [
          "agents",
          "ai-agent",
          "data",
          "deep-learning",
          "documentation-tool",
          "finetuning",
          "framework",
          "knowlege-graph",
          "langchain",
          "lazyllm",
          "llamaindex",
          "llm",
          "llms",
          "rag"
        ],
        "createdAt": "2024-06-04T05:01:45Z",
        "pushedAt": "2026-09-14T00:34:57Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/LazyAGI/LazyLLM/main/README.md",
        "evidenceHash": "28f99a6918121980e5ec1b89b731b8bc31de04566073ae4fab207b00268f4898"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 5,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/LazyAGI/LazyLLM/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/SamurAIGPT/llm-wiki-agent",
      "stableSourceId": "630824392",
      "slug": "samuraigpt-llm-wiki-agent",
      "name": "llm-wiki-agent",
      "source": "github",
      "repoType": "repository",
      "sourceId": "SamurAIGPT/llm-wiki-agent",
      "canonicalUrl": "https://github.com/SamurAIGPT/llm-wiki-agent",
      "description": "A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed.",
      "descriptionEn": "A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed.",
      "descriptionZh": "组织知识与向量检索，为 AI 应用提供相关内容。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "SamurAIGPT",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/SamurAIGPT/llm-wiki-agent",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3524,
        "forks": 400,
        "starsDelta7d": 28,
        "starsAdded7d": 28,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 391,
        "defaultBranch": "main",
        "topics": [
          "ai-agent",
          "ai-tools",
          "automation",
          "claude-code",
          "codex",
          "gemini",
          "generative-ai",
          "knowledge-base",
          "knowledge-graph",
          "llm",
          "markdown",
          "muapi",
          "note-taking",
          "obsidian",
          "open-source",
          "personal-knowledge-management",
          "rag",
          "research",
          "second-brain",
          "wiki"
        ],
        "createdAt": "2023-04-21T08:31:00Z",
        "pushedAt": "2026-09-14T08:57:39Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/SamurAIGPT/llm-wiki-agent/main/README.md",
        "evidenceHash": "7cc2bdf0f8cbbc7f9895e7133a2885b427520d25a81d33a9b8e3e8d14b04c2d5"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 28,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 5
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 6
          }
        ],
        "sourceUrl": "https://api.github.com/repos/SamurAIGPT/llm-wiki-agent/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/RunMaestro/Maestro",
      "stableSourceId": "1102197464",
      "slug": "runmaestro-maestro",
      "name": "Maestro",
      "source": "github",
      "repoType": "repository",
      "sourceId": "RunMaestro/Maestro",
      "canonicalUrl": "https://github.com/RunMaestro/Maestro",
      "description": "Agent Orchestration Command Center",
      "descriptionEn": "Agent Orchestration Command Center",
      "descriptionZh": "构建、运行和协调 AI 智能体与自动化工作流。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "RunMaestro",
        "role": "organization"
      },
      "categories": [
        "自动化与智能体"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/RunMaestro/Maestro",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3340,
        "forks": 357,
        "starsDelta7d": 24,
        "starsAdded7d": 24,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 166072,
        "defaultBranch": "main",
        "topics": [
          "ai-agents",
          "claude-code",
          "codex",
          "generative-ai",
          "opencode"
        ],
        "createdAt": "2025-11-23T01:59:55Z",
        "pushedAt": "2026-09-14T22:33:41Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/RunMaestro/Maestro/main/README.md",
        "evidenceHash": "b47571249f2515ac94def9129911060192c8d7af69abb9fabf4d4d095a91d099"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 24,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 3
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/RunMaestro/Maestro/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/rsxdalv/TTS-WebUI",
      "stableSourceId": "633546245",
      "slug": "rsxdalv-tts-webui",
      "name": "TTS-WebUI",
      "source": "github",
      "repoType": "repository",
      "sourceId": "rsxdalv/TTS-WebUI",
      "canonicalUrl": "https://github.com/rsxdalv/TTS-WebUI",
      "description": "A single Gradio + React WebUI with extensions for ACE-Step, OmniVoice, Kimi Audio, Piper TTS, GPT-SoVITS, CosyVoice, XTTSv2, DIA, Kokoro, OpenVoice, ParlerTTS, Stable Audio, MMS, StyleTTS2, MAGNet, AudioGen, MusicGen, Tortoise, RVC, Vocos, Demucs, SeamlessM4T, and Bark!",
      "descriptionEn": "A single Gradio + React WebUI with extensions for ACE-Step, OmniVoice, Kimi Audio, Piper TTS, GPT-SoVITS, CosyVoice, XTTSv2, DIA, Kokoro, OpenVoice, ParlerTTS, Stable Audio, MMS, StyleTTS2, MAGNet, AudioGen, MusicGen, Tortoise, RVC, Vocos, Demucs, SeamlessM4T, and Bark!",
      "descriptionZh": "将文本转换为语音，或构建语音合成与声音处理流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "rsxdalv",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/rsxdalv/TTS-WebUI",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3262,
        "forks": 332,
        "starsDelta7d": 8,
        "starsAdded7d": 8,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 37419,
        "defaultBranch": "main",
        "topics": [
          "ace-step",
          "ai",
          "audio-generation",
          "cosyvoice",
          "generative-ai",
          "generator",
          "gradio",
          "music",
          "musicgen",
          "openai-api",
          "openvoice",
          "rvc",
          "styletts2",
          "text-to-speech",
          "tortoise-tts",
          "tts",
          "vocos"
        ],
        "createdAt": "2023-04-27T18:32:26Z",
        "pushedAt": "2026-09-07T08:54:58Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/rsxdalv/TTS-WebUI/main/README.md",
        "evidenceHash": "2411dac16ba7b9548662577dad678e70794f12c4cb546b4770e1cac378a9d1a2"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 8,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 2
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/rsxdalv/TTS-WebUI/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/TanStack/ai",
      "stableSourceId": "1072429861",
      "slug": "tanstack-ai",
      "name": "ai",
      "source": "github",
      "repoType": "repository",
      "sourceId": "TanStack/ai",
      "canonicalUrl": "https://github.com/TanStack/ai",
      "description": "🤖 Type-safe, provider-agnostic TypeScript AI SDK for streaming chat, tool calling, agents, and multimodal apps across OpenAI, Anthropic, Gemini, React, Vue, Svelte, and Solid.",
      "descriptionEn": "🤖 Type-safe, provider-agnostic TypeScript AI SDK for streaming chat, tool calling, agents, and multimodal apps across OpenAI, Anthropic, Gemini, React, Vue, Svelte, and Solid.",
      "descriptionZh": "连接模型与工具，提供对话和任务协助的 AI 应用。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "TanStack",
        "role": "organization"
      },
      "categories": [
        "研究与知识"
      ],
      "license": {
        "spdxId": "MIT",
        "evidenceUrl": "https://github.com/TanStack/ai",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 3108,
        "forks": 327,
        "starsDelta7d": 33,
        "starsAdded7d": 33,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 58577,
        "defaultBranch": "main",
        "topics": [
          "ai",
          "ai-agents",
          "ai-sdk",
          "anthropic",
          "chatbot",
          "function-calling",
          "gemini",
          "generative-ai",
          "llm",
          "multimodal",
          "openai",
          "react",
          "solidjs",
          "streaming",
          "svelte",
          "tanstack",
          "tool-calling",
          "typescript",
          "typescript-sdk",
          "vue"
        ],
        "createdAt": "2025-10-08T17:52:48Z",
        "pushedAt": "2026-09-14T22:48:14Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/TanStack/ai/main/README.md",
        "evidenceHash": "d3355afc3b3a685256e2f2f538b5f531fbdecfda9d379efac11e613c468a8956"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 33,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 7
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 6
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 4
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 6
          }
        ],
        "sourceUrl": "https://api.github.com/repos/TanStack/ai/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/lobehub/sd-webui-lobe-theme",
      "stableSourceId": "606329910",
      "slug": "lobehub-sd-webui-lobe-theme",
      "name": "sd-webui-lobe-theme",
      "source": "github",
      "repoType": "repository",
      "sourceId": "lobehub/sd-webui-lobe-theme",
      "canonicalUrl": "https://github.com/lobehub/sd-webui-lobe-theme",
      "description": "🅰️ Lobe theme - The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.",
      "descriptionEn": "🅰️ Lobe theme - The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "lobehub",
        "role": "organization"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/lobehub/sd-webui-lobe-theme",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 2711,
        "forks": 271,
        "starsDelta7d": 1,
        "starsAdded7d": 1,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 57077,
        "defaultBranch": "main",
        "topics": [
          "extension",
          "lobehub",
          "react",
          "stable-diffusion",
          "stable-diffusion-webui",
          "stable-diffusion-webui-plugin",
          "theme",
          "typescript"
        ],
        "createdAt": "2023-02-25T06:41:18Z",
        "pushedAt": "2026-09-14T08:55:30Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/lobehub/sd-webui-lobe-theme/main/README.md",
        "evidenceHash": "1d5749a1119ec195b2ff13101f08a82ca8f11659b5f8902dcb0598f063c59ecf"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 1,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 1
          }
        ],
        "sourceUrl": "https://api.github.com/repos/lobehub/sd-webui-lobe-theme/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/KohakuBlueleaf/LyCORIS",
      "stableSourceId": "607121301",
      "slug": "kohakublueleaf-lycoris",
      "name": "LyCORIS",
      "source": "github",
      "repoType": "repository",
      "sourceId": "KohakuBlueleaf/LyCORIS",
      "canonicalUrl": "https://github.com/KohakuBlueleaf/LyCORIS",
      "description": "Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion.",
      "descriptionEn": "Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion.",
      "descriptionZh": "用于图像生成与编辑的 AI 工具，支持可复用的创作流程。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "KohakuBlueleaf",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "Apache-2.0",
        "evidenceUrl": "https://github.com/KohakuBlueleaf/LyCORIS",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 2523,
        "forks": 181,
        "starsDelta7d": 1,
        "starsAdded7d": 1,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "Python",
        "sizeKb": 223192,
        "defaultBranch": "main",
        "topics": [
          "finetune",
          "stable-diffusion"
        ],
        "createdAt": "2023-02-27T11:05:13Z",
        "pushedAt": "2026-09-05T07:16:45Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/KohakuBlueleaf/LyCORIS/main/README.md",
        "evidenceHash": "92a6cc38b5e27a48c791338571f621620cec197d9cb5db1170732bc0700e1c3f"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 1,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 0
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 1
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 0
          }
        ],
        "sourceUrl": "https://api.github.com/repos/KohakuBlueleaf/LyCORIS/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    },
    {
      "id": "github/repository/PurpleDoubleD/locally-uncensored",
      "stableSourceId": "1191052193",
      "slug": "purpledoubled-locally-uncensored",
      "name": "locally-uncensored",
      "source": "github",
      "repoType": "repository",
      "sourceId": "PurpleDoubleD/locally-uncensored",
      "canonicalUrl": "https://github.com/PurpleDoubleD/locally-uncensored",
      "description": "The all-in-one local AI studio for your desktop: chat, image and video generation and a coding agent in one free, open source app. Windows and Linux. No Docker, no terminal, no cloud required.",
      "descriptionEn": "The all-in-one local AI studio for your desktop: chat, image and video generation and a coding agent in one free, open source app. Windows and Linux. No Docker, no terminal, no cloud required.",
      "descriptionZh": "根据文本或素材生成视频的 AI 工具。",
      "descriptionZhMethod": "metadata-purpose-rule",
      "owner": {
        "handle": "PurpleDoubleD",
        "role": "maintainer"
      },
      "categories": [
        "内容创作"
      ],
      "license": {
        "spdxId": "AGPL-3.0",
        "evidenceUrl": "https://github.com/PurpleDoubleD/locally-uncensored",
        "status": "source_metadata"
      },
      "metrics": {
        "stars": 1635,
        "forks": 248,
        "starsDelta7d": 238,
        "starsAdded7d": 238,
        "growthMetric": "stars_created",
        "growthStatus": "ready"
      },
      "repository": {
        "language": "TypeScript",
        "sizeKb": 38999,
        "defaultBranch": "master",
        "topics": [
          "agent",
          "ai-chat",
          "ai-studio",
          "all-in-one",
          "coding-agent",
          "desktop-app",
          "flux",
          "image-generation",
          "linux",
          "llm",
          "local-ai",
          "local-llm",
          "open-source",
          "privacy",
          "self-hosted",
          "stable-diffusion",
          "uncensored",
          "uncensored-ai",
          "video-generation",
          "windows"
        ],
        "createdAt": "2026-03-24T21:52:47Z",
        "pushedAt": "2026-09-14T13:51:07Z",
        "archived": false,
        "disabled": false,
        "private": false,
        "fork": false
      },
      "admission": {
        "eligible": true,
        "reason": "documented_ai_tool",
        "evidence": [
          "code_language",
          "installation",
          "runtime_usage"
        ],
        "runtimeTested": false,
        "filterVersion": "ai-tools-v2",
        "checkedAt": "2026-09-14T22:49:46.105Z",
        "evidenceUrl": "https://raw.githubusercontent.com/PurpleDoubleD/locally-uncensored/master/README.md",
        "evidenceHash": "1bdd9fa2315fa755ad4d06592319594c06fac7f931e20a66a6c334df04232401"
      },
      "sourceSnapshotAt": "2026-09-14T22:49:46.105Z",
      "ingestedAt": "2026-09-14T22:49:46.105Z",
      "status": "active",
      "dataQuality": "public-api-documentation-checked",
      "starHistory7d": {
        "status": "ready",
        "metric": "stars_created",
        "method": "github_stargazers_history",
        "sourceTimeZone": "source_defined_not_guaranteed_utc",
        "window": "7d",
        "windowDefinition": "latest_7_complete_source_days",
        "windowStartAt": "2026-09-08T00:00:00.000Z",
        "windowEndAt": "2026-09-15T00:00:00.000Z",
        "count": 238,
        "days": [
          {
            "startAt": "2026-09-08T00:00:00.000Z",
            "endAt": "2026-09-09T00:00:00.000Z",
            "count": 94
          },
          {
            "startAt": "2026-09-09T00:00:00.000Z",
            "endAt": "2026-09-10T00:00:00.000Z",
            "count": 36
          },
          {
            "startAt": "2026-09-10T00:00:00.000Z",
            "endAt": "2026-09-11T00:00:00.000Z",
            "count": 34
          },
          {
            "startAt": "2026-09-11T00:00:00.000Z",
            "endAt": "2026-09-12T00:00:00.000Z",
            "count": 17
          },
          {
            "startAt": "2026-09-12T00:00:00.000Z",
            "endAt": "2026-09-13T00:00:00.000Z",
            "count": 22
          },
          {
            "startAt": "2026-09-13T00:00:00.000Z",
            "endAt": "2026-09-14T00:00:00.000Z",
            "count": 19
          },
          {
            "startAt": "2026-09-14T00:00:00.000Z",
            "endAt": "2026-09-15T00:00:00.000Z",
            "count": 16
          }
        ],
        "sourceUrl": "https://api.github.com/repos/PurpleDoubleD/locally-uncensored/stargazers/history?per_page=30&page=1",
        "collectedAt": "2026-09-15T02:14:13.080Z"
      }
    }
  ],
  "leaderboardSnapshots": [
    {
      "id": "leaderboard/rising/2026-09-15T02:14:13.080Z",
      "board": "rising",
      "window": "7d",
      "windowMs": 604800000,
      "windowDefinition": "latest_7_complete_source_days",
      "sourceTimeZone": "source_defined_not_guaranteed_utc",
      "metric": "stars_created",
      "status": "ready",
      "statusReason": "complete_history_coverage",
      "coverage": {
        "ready": 77,
        "total": 77
      },
      "pending": [],
      "ruleVersion": "github-added-stars-7d-v1",
      "sourceSnapshotAt": "2026-09-15T02:14:13.080Z",
      "generatedAt": "2026-09-15T02:14:13.080Z",
      "entries": [
        {
          "rank": 1,
          "toolId": "github/repository/jo-inc/camofox-browser",
          "score": 1073,
          "metricLabel": "↑ 1073 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 2,
          "toolId": "github/repository/genspark-ai/genoffice",
          "score": 862,
          "metricLabel": "↑ 862 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 3,
          "toolId": "github/repository/semantica-agi/semantica",
          "score": 573,
          "metricLabel": "↑ 573 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 4,
          "toolId": "github/repository/apache/maka",
          "score": 427,
          "metricLabel": "↑ 427 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 5,
          "toolId": "github/repository/SWE-agent/mini-swe-agent",
          "score": 380,
          "metricLabel": "↑ 380 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 6,
          "toolId": "github/repository/HBAI-Ltd/Toonflow-app",
          "score": 360,
          "metricLabel": "↑ 360 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 7,
          "toolId": "github/repository/titanwings/distilly",
          "score": 319,
          "metricLabel": "↑ 319 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 8,
          "toolId": "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "score": 276,
          "metricLabel": "↑ 276 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 9,
          "toolId": "github/repository/opensandbox-group/OpenSandbox",
          "score": 259,
          "metricLabel": "↑ 259 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 10,
          "toolId": "github/repository/zenstory-ai/oh-story-claudecode",
          "score": 248,
          "metricLabel": "↑ 248 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 11,
          "toolId": "github/repository/PurpleDoubleD/locally-uncensored",
          "score": 238,
          "metricLabel": "↑ 238 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 12,
          "toolId": "github/repository/googleworkspace/cli",
          "score": 230,
          "metricLabel": "↑ 230 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 13,
          "toolId": "github/repository/jackwener/OpenCLI",
          "score": 230,
          "metricLabel": "↑ 230 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 14,
          "toolId": "github/repository/shy3130/tick-stock-panel",
          "score": 230,
          "metricLabel": "↑ 230 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 15,
          "toolId": "github/repository/EvoScientist/EvoScientist",
          "score": 220,
          "metricLabel": "↑ 220 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 16,
          "toolId": "github/repository/maximhq/bifrost",
          "score": 208,
          "metricLabel": "↑ 208 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 17,
          "toolId": "github/repository/omnigent-ai/omnigent",
          "score": 190,
          "metricLabel": "↑ 190 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 18,
          "toolId": "github/repository/QwenLM/qwen-code",
          "score": 172,
          "metricLabel": "↑ 172 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 19,
          "toolId": "github/repository/GiovanniPasq/agentic-rag-for-dummies",
          "score": 146,
          "metricLabel": "↑ 146 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 20,
          "toolId": "github/repository/xbtlin/ai-berkshire",
          "score": 124,
          "metricLabel": "↑ 124 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 21,
          "toolId": "github/repository/nexu-io/html-anything",
          "score": 116,
          "metricLabel": "↑ 116 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 22,
          "toolId": "github/repository/mlc-ai/web-llm",
          "score": 108,
          "metricLabel": "↑ 108 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 23,
          "toolId": "github/repository/ComposioHQ/composio",
          "score": 101,
          "metricLabel": "↑ 101 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 24,
          "toolId": "github/repository/e2b-dev/E2B",
          "score": 98,
          "metricLabel": "↑ 98 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 25,
          "toolId": "github/repository/wiltodelta/remove-ai-watermarks",
          "score": 95,
          "metricLabel": "↑ 95 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 26,
          "toolId": "github/repository/KnockOutEZ/wigolo",
          "score": 92,
          "metricLabel": "↑ 92 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 27,
          "toolId": "github/repository/ArcReel/ArcReel",
          "score": 80,
          "metricLabel": "↑ 80 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 28,
          "toolId": "github/repository/Q00/ouroboros",
          "score": 77,
          "metricLabel": "↑ 77 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 29,
          "toolId": "github/repository/strands-agents/harness-sdk",
          "score": 71,
          "metricLabel": "↑ 71 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 30,
          "toolId": "github/repository/labring/FastGPT",
          "score": 57,
          "metricLabel": "↑ 57 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 31,
          "toolId": "github/repository/PurpleAILAB/Decepticon",
          "score": 51,
          "metricLabel": "↑ 51 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 32,
          "toolId": "github/repository/iflytek/skillhub",
          "score": 50,
          "metricLabel": "↑ 50 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 33,
          "toolId": "github/repository/NVIDIA-NeMo/Speech",
          "score": 46,
          "metricLabel": "↑ 46 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 34,
          "toolId": "github/repository/OtterMind/Chat2DB",
          "score": 43,
          "metricLabel": "↑ 43 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 35,
          "toolId": "github/repository/Fosowl/agenticSeek",
          "score": 42,
          "metricLabel": "↑ 42 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 36,
          "toolId": "github/repository/NVIDIA-NeMo/Guardrails",
          "score": 42,
          "metricLabel": "↑ 42 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 37,
          "toolId": "github/repository/camel-ai/camel",
          "score": 40,
          "metricLabel": "↑ 40 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 38,
          "toolId": "github/repository/EvoMap/evolver",
          "score": 40,
          "metricLabel": "↑ 40 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 39,
          "toolId": "github/repository/netease-youdao/LobsterAI",
          "score": 38,
          "metricLabel": "↑ 38 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 40,
          "toolId": "github/repository/NirDiamant/agents-towards-production",
          "score": 38,
          "metricLabel": "↑ 38 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 41,
          "toolId": "github/repository/ChatLab/ChatLab",
          "score": 37,
          "metricLabel": "↑ 37 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 42,
          "toolId": "github/repository/IBM/mcp-context-forge",
          "score": 37,
          "metricLabel": "↑ 37 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 43,
          "toolId": "github/repository/TanStack/ai",
          "score": 33,
          "metricLabel": "↑ 33 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 44,
          "toolId": "github/repository/KunAgent/Kun",
          "score": 31,
          "metricLabel": "↑ 31 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 45,
          "toolId": "github/repository/SamurAIGPT/llm-wiki-agent",
          "score": 28,
          "metricLabel": "↑ 28 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 46,
          "toolId": "github/repository/Tencent/ncnn",
          "score": 28,
          "metricLabel": "↑ 28 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 47,
          "toolId": "github/repository/kyegomez/swarms",
          "score": 27,
          "metricLabel": "↑ 27 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 48,
          "toolId": "github/repository/RunMaestro/Maestro",
          "score": 24,
          "metricLabel": "↑ 24 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 49,
          "toolId": "github/repository/embabel/embabel-agent",
          "score": 23,
          "metricLabel": "↑ 23 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 50,
          "toolId": "github/repository/microsoft/semantic-kernel",
          "score": 23,
          "metricLabel": "↑ 23 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 51,
          "toolId": "github/repository/voxel51/fiftyone",
          "score": 22,
          "metricLabel": "↑ 22 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 52,
          "toolId": "github/repository/traceloop/openllmetry",
          "score": 20,
          "metricLabel": "↑ 20 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 53,
          "toolId": "github/repository/xorbitsai/inference",
          "score": 20,
          "metricLabel": "↑ 20 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 54,
          "toolId": "github/repository/aurelio-labs/semantic-router",
          "score": 19,
          "metricLabel": "↑ 19 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 55,
          "toolId": "github/repository/bentoml/BentoML",
          "score": 18,
          "metricLabel": "↑ 18 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 56,
          "toolId": "github/repository/evidentlyai/evidently",
          "score": 17,
          "metricLabel": "↑ 17 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 57,
          "toolId": "github/repository/ATH-MaaS/ComfyUI-Copilot",
          "score": 15,
          "metricLabel": "↑ 15 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 58,
          "toolId": "github/repository/zebbern/claude-code-guide",
          "score": 14,
          "metricLabel": "↑ 14 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 59,
          "toolId": "github/repository/oracle-devrel/oracle-ai-developer-hub",
          "score": 13,
          "metricLabel": "↑ 13 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 60,
          "toolId": "github/repository/Zipstack/unstract",
          "score": 12,
          "metricLabel": "↑ 12 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 61,
          "toolId": "github/repository/Lightning-AI/litgpt",
          "score": 11,
          "metricLabel": "↑ 11 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 62,
          "toolId": "github/repository/frankbria/ralph-claude-code",
          "score": 9,
          "metricLabel": "↑ 9 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 63,
          "toolId": "github/repository/2FastLabs/agent-squad",
          "score": 8,
          "metricLabel": "↑ 8 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 64,
          "toolId": "github/repository/rsxdalv/TTS-WebUI",
          "score": 8,
          "metricLabel": "↑ 8 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 65,
          "toolId": "github/repository/Akegarasu/lora-scripts",
          "score": 7,
          "metricLabel": "↑ 7 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 66,
          "toolId": "github/repository/di-sukharev/opencommit",
          "score": 6,
          "metricLabel": "↑ 6 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 67,
          "toolId": "github/repository/lucidrains/denoising-diffusion-pytorch",
          "score": 6,
          "metricLabel": "↑ 6 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 68,
          "toolId": "github/repository/vladmandic/sdnext",
          "score": 6,
          "metricLabel": "↑ 6 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 69,
          "toolId": "github/repository/h2oai/h2o-llmstudio",
          "score": 5,
          "metricLabel": "↑ 5 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 70,
          "toolId": "github/repository/LazyAGI/LazyLLM",
          "score": 5,
          "metricLabel": "↑ 5 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 71,
          "toolId": "github/repository/yangjian102621/geekai",
          "score": 5,
          "metricLabel": "↑ 5 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 72,
          "toolId": "github/repository/google-deepmind/sonnet",
          "score": 4,
          "metricLabel": "↑ 4 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 73,
          "toolId": "github/repository/GoogleCloudPlatform/agent-starter-pack",
          "score": 4,
          "metricLabel": "↑ 4 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 74,
          "toolId": "github/repository/stanfordnlp/stanza",
          "score": 4,
          "metricLabel": "↑ 4 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 75,
          "toolId": "github/repository/KohakuBlueleaf/LyCORIS",
          "score": 1,
          "metricLabel": "↑ 1 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 76,
          "toolId": "github/repository/lobehub/sd-webui-lobe-theme",
          "score": 1,
          "metricLabel": "↑ 1 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        },
        {
          "rank": 77,
          "toolId": "github/repository/xlite-dev/lite.ai.toolkit",
          "score": 1,
          "metricLabel": "↑ 1 / 7d",
          "metric": "stars_created",
          "method": "github_stargazers_history",
          "windowStartAt": "2026-09-08T00:00:00.000Z",
          "windowEndAt": "2026-09-15T00:00:00.000Z"
        }
      ]
    },
    {
      "id": "leaderboard/attention/2026-09-15T02:14:13.080Z",
      "board": "attention",
      "window": "all-time",
      "metric": "github_stargazers_count",
      "status": "ready",
      "ruleVersion": "github-stars-v1",
      "sourceSnapshotAt": "2026-09-15T02:14:13.080Z",
      "generatedAt": "2026-09-15T02:14:13.080Z",
      "entries": [
        {
          "rank": 1,
          "toolId": "github/repository/googleworkspace/cli",
          "score": 30996,
          "metricLabel": "★ 30996"
        },
        {
          "rank": 2,
          "toolId": "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "score": 30970,
          "metricLabel": "★ 30970"
        },
        {
          "rank": 3,
          "toolId": "github/repository/ComposioHQ/composio",
          "score": 30170,
          "metricLabel": "★ 30170"
        },
        {
          "rank": 4,
          "toolId": "github/repository/labring/FastGPT",
          "score": 29644,
          "metricLabel": "★ 29644"
        },
        {
          "rank": 5,
          "toolId": "github/repository/jackwener/OpenCLI",
          "score": 29282,
          "metricLabel": "★ 29282"
        },
        {
          "rank": 6,
          "toolId": "github/repository/microsoft/semantic-kernel",
          "score": 28558,
          "metricLabel": "★ 28558"
        },
        {
          "rank": 7,
          "toolId": "github/repository/OtterMind/Chat2DB",
          "score": 28118,
          "metricLabel": "★ 28118"
        },
        {
          "rank": 8,
          "toolId": "github/repository/QwenLM/qwen-code",
          "score": 27841,
          "metricLabel": "★ 27841"
        },
        {
          "rank": 9,
          "toolId": "github/repository/Fosowl/agenticSeek",
          "score": 27207,
          "metricLabel": "★ 27207"
        },
        {
          "rank": 10,
          "toolId": "github/repository/titanwings/distilly",
          "score": 24722,
          "metricLabel": "★ 24722"
        },
        {
          "rank": 11,
          "toolId": "github/repository/Tencent/ncnn",
          "score": 23814,
          "metricLabel": "★ 23814"
        },
        {
          "rank": 12,
          "toolId": "github/repository/NirDiamant/agents-towards-production",
          "score": 21454,
          "metricLabel": "★ 21454"
        },
        {
          "rank": 13,
          "toolId": "github/repository/mlc-ai/web-llm",
          "score": 19122,
          "metricLabel": "★ 19122"
        },
        {
          "rank": 14,
          "toolId": "github/repository/NVIDIA-NeMo/Speech",
          "score": 18447,
          "metricLabel": "★ 18447"
        },
        {
          "rank": 15,
          "toolId": "github/repository/camel-ai/camel",
          "score": 17715,
          "metricLabel": "★ 17715"
        },
        {
          "rank": 16,
          "toolId": "github/repository/xbtlin/ai-berkshire",
          "score": 16343,
          "metricLabel": "★ 16343"
        },
        {
          "rank": 17,
          "toolId": "github/repository/HBAI-Ltd/Toonflow-app",
          "score": 15587,
          "metricLabel": "★ 15587"
        },
        {
          "rank": 18,
          "toolId": "github/repository/opensandbox-group/OpenSandbox",
          "score": 15284,
          "metricLabel": "★ 15284"
        },
        {
          "rank": 19,
          "toolId": "github/repository/e2b-dev/E2B",
          "score": 13800,
          "metricLabel": "★ 13800"
        },
        {
          "rank": 20,
          "toolId": "github/repository/Lightning-AI/litgpt",
          "score": 13663,
          "metricLabel": "★ 13663"
        },
        {
          "rank": 21,
          "toolId": "github/repository/semantica-agi/semantica",
          "score": 12871,
          "metricLabel": "★ 12871"
        },
        {
          "rank": 22,
          "toolId": "github/repository/voxel51/fiftyone",
          "score": 11085,
          "metricLabel": "★ 11085"
        },
        {
          "rank": 23,
          "toolId": "github/repository/jo-inc/camofox-browser",
          "score": 11038,
          "metricLabel": "★ 11038"
        },
        {
          "rank": 24,
          "toolId": "github/repository/lucidrains/denoising-diffusion-pytorch",
          "score": 10686,
          "metricLabel": "★ 10686"
        },
        {
          "rank": 25,
          "toolId": "github/repository/google-deepmind/sonnet",
          "score": 9970,
          "metricLabel": "★ 9970"
        },
        {
          "rank": 26,
          "toolId": "github/repository/omnigent-ai/omnigent",
          "score": 9948,
          "metricLabel": "★ 9948"
        },
        {
          "rank": 27,
          "toolId": "github/repository/frankbria/ralph-claude-code",
          "score": 9627,
          "metricLabel": "★ 9627"
        },
        {
          "rank": 28,
          "toolId": "github/repository/xorbitsai/inference",
          "score": 9567,
          "metricLabel": "★ 9567"
        },
        {
          "rank": 29,
          "toolId": "github/repository/EvoMap/evolver",
          "score": 9075,
          "metricLabel": "★ 9075"
        },
        {
          "rank": 30,
          "toolId": "github/repository/bentoml/BentoML",
          "score": 8839,
          "metricLabel": "★ 8839"
        },
        {
          "rank": 31,
          "toolId": "github/repository/nexu-io/html-anything",
          "score": 8806,
          "metricLabel": "★ 8806"
        },
        {
          "rank": 32,
          "toolId": "github/repository/maximhq/bifrost",
          "score": 8071,
          "metricLabel": "★ 8071"
        },
        {
          "rank": 33,
          "toolId": "github/repository/evidentlyai/evidently",
          "score": 7914,
          "metricLabel": "★ 7914"
        },
        {
          "rank": 34,
          "toolId": "github/repository/stanfordnlp/stanza",
          "score": 7877,
          "metricLabel": "★ 7877"
        },
        {
          "rank": 35,
          "toolId": "github/repository/2FastLabs/agent-squad",
          "score": 7761,
          "metricLabel": "★ 7761"
        },
        {
          "rank": 36,
          "toolId": "github/repository/SWE-agent/mini-swe-agent",
          "score": 7544,
          "metricLabel": "★ 7544"
        },
        {
          "rank": 37,
          "toolId": "github/repository/di-sukharev/opencommit",
          "score": 7539,
          "metricLabel": "★ 7539"
        },
        {
          "rank": 38,
          "toolId": "github/repository/traceloop/openllmetry",
          "score": 7429,
          "metricLabel": "★ 7429"
        },
        {
          "rank": 39,
          "toolId": "github/repository/ChatLab/ChatLab",
          "score": 7356,
          "metricLabel": "★ 7356"
        },
        {
          "rank": 40,
          "toolId": "github/repository/vladmandic/sdnext",
          "score": 7340,
          "metricLabel": "★ 7340"
        },
        {
          "rank": 41,
          "toolId": "github/repository/strands-agents/harness-sdk",
          "score": 7241,
          "metricLabel": "★ 7241"
        },
        {
          "rank": 42,
          "toolId": "github/repository/Zipstack/unstract",
          "score": 7236,
          "metricLabel": "★ 7236"
        },
        {
          "rank": 43,
          "toolId": "github/repository/kyegomez/swarms",
          "score": 7170,
          "metricLabel": "★ 7170"
        },
        {
          "rank": 44,
          "toolId": "github/repository/NVIDIA-NeMo/Guardrails",
          "score": 7122,
          "metricLabel": "★ 7122"
        },
        {
          "rank": 45,
          "toolId": "github/repository/zenstory-ai/oh-story-claudecode",
          "score": 6873,
          "metricLabel": "★ 6873"
        },
        {
          "rank": 46,
          "toolId": "github/repository/genspark-ai/genoffice",
          "score": 6762,
          "metricLabel": "★ 6762"
        },
        {
          "rank": 47,
          "toolId": "github/repository/GoogleCloudPlatform/agent-starter-pack",
          "score": 6556,
          "metricLabel": "★ 6556"
        },
        {
          "rank": 48,
          "toolId": "github/repository/KunAgent/Kun",
          "score": 6309,
          "metricLabel": "★ 6309"
        },
        {
          "rank": 49,
          "toolId": "github/repository/Akegarasu/lora-scripts",
          "score": 6116,
          "metricLabel": "★ 6116"
        },
        {
          "rank": 50,
          "toolId": "github/repository/netease-youdao/LobsterAI",
          "score": 6025,
          "metricLabel": "★ 6025"
        },
        {
          "rank": 51,
          "toolId": "github/repository/Q00/ouroboros",
          "score": 5869,
          "metricLabel": "★ 5869"
        },
        {
          "rank": 52,
          "toolId": "github/repository/wiltodelta/remove-ai-watermarks",
          "score": 5546,
          "metricLabel": "★ 5546"
        },
        {
          "rank": 53,
          "toolId": "github/repository/ATH-MaaS/ComfyUI-Copilot",
          "score": 5515,
          "metricLabel": "★ 5515"
        },
        {
          "rank": 54,
          "toolId": "github/repository/PurpleAILAB/Decepticon",
          "score": 5510,
          "metricLabel": "★ 5510"
        },
        {
          "rank": 55,
          "toolId": "github/repository/apache/maka",
          "score": 5401,
          "metricLabel": "★ 5401"
        },
        {
          "rank": 56,
          "toolId": "github/repository/KnockOutEZ/wigolo",
          "score": 5257,
          "metricLabel": "★ 5257"
        },
        {
          "rank": 57,
          "toolId": "github/repository/h2oai/h2o-llmstudio",
          "score": 5181,
          "metricLabel": "★ 5181"
        },
        {
          "rank": 58,
          "toolId": "github/repository/iflytek/skillhub",
          "score": 5101,
          "metricLabel": "★ 5101"
        },
        {
          "rank": 59,
          "toolId": "github/repository/EvoScientist/EvoScientist",
          "score": 4892,
          "metricLabel": "★ 4892"
        },
        {
          "rank": 60,
          "toolId": "github/repository/yangjian102621/geekai",
          "score": 4699,
          "metricLabel": "★ 4699"
        },
        {
          "rank": 61,
          "toolId": "github/repository/shy3130/tick-stock-panel",
          "score": 4680,
          "metricLabel": "★ 4680"
        },
        {
          "rank": 62,
          "toolId": "github/repository/zebbern/claude-code-guide",
          "score": 4622,
          "metricLabel": "★ 4622"
        },
        {
          "rank": 63,
          "toolId": "github/repository/IBM/mcp-context-forge",
          "score": 4469,
          "metricLabel": "★ 4469"
        },
        {
          "rank": 64,
          "toolId": "github/repository/ArcReel/ArcReel",
          "score": 4456,
          "metricLabel": "★ 4456"
        },
        {
          "rank": 65,
          "toolId": "github/repository/embabel/embabel-agent",
          "score": 4447,
          "metricLabel": "★ 4447"
        },
        {
          "rank": 66,
          "toolId": "github/repository/xlite-dev/lite.ai.toolkit",
          "score": 4432,
          "metricLabel": "★ 4432"
        },
        {
          "rank": 67,
          "toolId": "github/repository/oracle-devrel/oracle-ai-developer-hub",
          "score": 4375,
          "metricLabel": "★ 4375"
        },
        {
          "rank": 68,
          "toolId": "github/repository/GiovanniPasq/agentic-rag-for-dummies",
          "score": 4160,
          "metricLabel": "★ 4160"
        },
        {
          "rank": 69,
          "toolId": "github/repository/aurelio-labs/semantic-router",
          "score": 3894,
          "metricLabel": "★ 3894"
        },
        {
          "rank": 70,
          "toolId": "github/repository/LazyAGI/LazyLLM",
          "score": 3885,
          "metricLabel": "★ 3885"
        },
        {
          "rank": 71,
          "toolId": "github/repository/SamurAIGPT/llm-wiki-agent",
          "score": 3524,
          "metricLabel": "★ 3524"
        },
        {
          "rank": 72,
          "toolId": "github/repository/RunMaestro/Maestro",
          "score": 3340,
          "metricLabel": "★ 3340"
        },
        {
          "rank": 73,
          "toolId": "github/repository/rsxdalv/TTS-WebUI",
          "score": 3262,
          "metricLabel": "★ 3262"
        },
        {
          "rank": 74,
          "toolId": "github/repository/TanStack/ai",
          "score": 3108,
          "metricLabel": "★ 3108"
        },
        {
          "rank": 75,
          "toolId": "github/repository/lobehub/sd-webui-lobe-theme",
          "score": 2711,
          "metricLabel": "★ 2711"
        },
        {
          "rank": 76,
          "toolId": "github/repository/KohakuBlueleaf/LyCORIS",
          "score": 2523,
          "metricLabel": "★ 2523"
        },
        {
          "rank": 77,
          "toolId": "github/repository/PurpleDoubleD/locally-uncensored",
          "score": 1635,
          "metricLabel": "★ 1635"
        }
      ]
    }
  ],
  "leaderboardHistory": [
    {
      "at": "2026-09-11T23:03:03.614Z",
      "boards": {
        "rising": [
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/jackwener/OpenCLI",
          "github/repository/googleworkspace/cli",
          "github/repository/QwenLM/qwen-code",
          "github/repository/ComposioHQ/composio",
          "github/repository/labring/FastGPT",
          "github/repository/NVIDIA-NeMo/Speech",
          "github/repository/microsoft/semantic-kernel"
        ],
        "attention": [
          "github/repository/googleworkspace/cli",
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/ComposioHQ/composio",
          "github/repository/labring/FastGPT",
          "github/repository/jackwener/OpenCLI",
          "github/repository/microsoft/semantic-kernel",
          "github/repository/QwenLM/qwen-code",
          "github/repository/NVIDIA-NeMo/Speech"
        ]
      }
    },
    {
      "at": "2026-09-12T18:28:07.8540452Z",
      "boards": {
        "rising": [
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/jackwener/OpenCLI",
          "github/repository/googleworkspace/cli",
          "github/repository/QwenLM/qwen-code",
          "github/repository/ComposioHQ/composio",
          "github/repository/labring/FastGPT",
          "github/repository/NVIDIA-NeMo/Speech",
          "github/repository/microsoft/semantic-kernel"
        ],
        "attention": [
          "github/repository/googleworkspace/cli",
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/ComposioHQ/composio",
          "github/repository/labring/FastGPT",
          "github/repository/jackwener/OpenCLI",
          "github/repository/microsoft/semantic-kernel",
          "github/repository/QwenLM/qwen-code",
          "github/repository/NVIDIA-NeMo/Speech"
        ]
      }
    },
    {
      "at": "2026-09-15T02:14:13.080Z",
      "boards": {
        "rising": [
          "github/repository/jo-inc/camofox-browser",
          "github/repository/genspark-ai/genoffice",
          "github/repository/semantica-agi/semantica",
          "github/repository/apache/maka",
          "github/repository/SWE-agent/mini-swe-agent",
          "github/repository/HBAI-Ltd/Toonflow-app",
          "github/repository/titanwings/distilly",
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/opensandbox-group/OpenSandbox",
          "github/repository/zenstory-ai/oh-story-claudecode",
          "github/repository/PurpleDoubleD/locally-uncensored",
          "github/repository/googleworkspace/cli",
          "github/repository/jackwener/OpenCLI",
          "github/repository/shy3130/tick-stock-panel",
          "github/repository/EvoScientist/EvoScientist",
          "github/repository/maximhq/bifrost",
          "github/repository/omnigent-ai/omnigent",
          "github/repository/QwenLM/qwen-code",
          "github/repository/GiovanniPasq/agentic-rag-for-dummies",
          "github/repository/xbtlin/ai-berkshire",
          "github/repository/nexu-io/html-anything",
          "github/repository/mlc-ai/web-llm",
          "github/repository/ComposioHQ/composio",
          "github/repository/e2b-dev/E2B",
          "github/repository/wiltodelta/remove-ai-watermarks",
          "github/repository/KnockOutEZ/wigolo",
          "github/repository/ArcReel/ArcReel",
          "github/repository/Q00/ouroboros",
          "github/repository/strands-agents/harness-sdk",
          "github/repository/labring/FastGPT",
          "github/repository/PurpleAILAB/Decepticon",
          "github/repository/iflytek/skillhub",
          "github/repository/NVIDIA-NeMo/Speech",
          "github/repository/OtterMind/Chat2DB",
          "github/repository/Fosowl/agenticSeek",
          "github/repository/NVIDIA-NeMo/Guardrails",
          "github/repository/camel-ai/camel",
          "github/repository/EvoMap/evolver",
          "github/repository/netease-youdao/LobsterAI",
          "github/repository/NirDiamant/agents-towards-production",
          "github/repository/ChatLab/ChatLab",
          "github/repository/IBM/mcp-context-forge",
          "github/repository/TanStack/ai",
          "github/repository/KunAgent/Kun",
          "github/repository/SamurAIGPT/llm-wiki-agent",
          "github/repository/Tencent/ncnn",
          "github/repository/kyegomez/swarms",
          "github/repository/RunMaestro/Maestro",
          "github/repository/embabel/embabel-agent",
          "github/repository/microsoft/semantic-kernel",
          "github/repository/voxel51/fiftyone",
          "github/repository/traceloop/openllmetry",
          "github/repository/xorbitsai/inference",
          "github/repository/aurelio-labs/semantic-router",
          "github/repository/bentoml/BentoML",
          "github/repository/evidentlyai/evidently",
          "github/repository/ATH-MaaS/ComfyUI-Copilot",
          "github/repository/zebbern/claude-code-guide",
          "github/repository/oracle-devrel/oracle-ai-developer-hub",
          "github/repository/Zipstack/unstract",
          "github/repository/Lightning-AI/litgpt",
          "github/repository/frankbria/ralph-claude-code",
          "github/repository/2FastLabs/agent-squad",
          "github/repository/rsxdalv/TTS-WebUI",
          "github/repository/Akegarasu/lora-scripts",
          "github/repository/di-sukharev/opencommit",
          "github/repository/lucidrains/denoising-diffusion-pytorch",
          "github/repository/vladmandic/sdnext",
          "github/repository/h2oai/h2o-llmstudio",
          "github/repository/LazyAGI/LazyLLM",
          "github/repository/yangjian102621/geekai",
          "github/repository/google-deepmind/sonnet",
          "github/repository/GoogleCloudPlatform/agent-starter-pack",
          "github/repository/stanfordnlp/stanza",
          "github/repository/KohakuBlueleaf/LyCORIS",
          "github/repository/lobehub/sd-webui-lobe-theme",
          "github/repository/xlite-dev/lite.ai.toolkit"
        ],
        "attention": [
          "github/repository/googleworkspace/cli",
          "github/repository/ScrapeGraphAI/Scrapegraph-ai",
          "github/repository/ComposioHQ/composio",
          "github/repository/labring/FastGPT",
          "github/repository/jackwener/OpenCLI",
          "github/repository/microsoft/semantic-kernel",
          "github/repository/OtterMind/Chat2DB",
          "github/repository/QwenLM/qwen-code",
          "github/repository/Fosowl/agenticSeek",
          "github/repository/titanwings/distilly",
          "github/repository/Tencent/ncnn",
          "github/repository/NirDiamant/agents-towards-production",
          "github/repository/mlc-ai/web-llm",
          "github/repository/NVIDIA-NeMo/Speech",
          "github/repository/camel-ai/camel",
          "github/repository/xbtlin/ai-berkshire",
          "github/repository/HBAI-Ltd/Toonflow-app",
          "github/repository/opensandbox-group/OpenSandbox",
          "github/repository/e2b-dev/E2B",
          "github/repository/Lightning-AI/litgpt",
          "github/repository/semantica-agi/semantica",
          "github/repository/voxel51/fiftyone",
          "github/repository/jo-inc/camofox-browser",
          "github/repository/lucidrains/denoising-diffusion-pytorch",
          "github/repository/google-deepmind/sonnet",
          "github/repository/omnigent-ai/omnigent",
          "github/repository/frankbria/ralph-claude-code",
          "github/repository/xorbitsai/inference",
          "github/repository/EvoMap/evolver",
          "github/repository/bentoml/BentoML",
          "github/repository/nexu-io/html-anything",
          "github/repository/maximhq/bifrost",
          "github/repository/evidentlyai/evidently",
          "github/repository/stanfordnlp/stanza",
          "github/repository/2FastLabs/agent-squad",
          "github/repository/SWE-agent/mini-swe-agent",
          "github/repository/di-sukharev/opencommit",
          "github/repository/traceloop/openllmetry",
          "github/repository/ChatLab/ChatLab",
          "github/repository/vladmandic/sdnext",
          "github/repository/strands-agents/harness-sdk",
          "github/repository/Zipstack/unstract",
          "github/repository/kyegomez/swarms",
          "github/repository/NVIDIA-NeMo/Guardrails",
          "github/repository/zenstory-ai/oh-story-claudecode",
          "github/repository/genspark-ai/genoffice",
          "github/repository/GoogleCloudPlatform/agent-starter-pack",
          "github/repository/KunAgent/Kun",
          "github/repository/Akegarasu/lora-scripts",
          "github/repository/netease-youdao/LobsterAI",
          "github/repository/Q00/ouroboros",
          "github/repository/wiltodelta/remove-ai-watermarks",
          "github/repository/ATH-MaaS/ComfyUI-Copilot",
          "github/repository/PurpleAILAB/Decepticon",
          "github/repository/apache/maka",
          "github/repository/KnockOutEZ/wigolo",
          "github/repository/h2oai/h2o-llmstudio",
          "github/repository/iflytek/skillhub",
          "github/repository/EvoScientist/EvoScientist",
          "github/repository/yangjian102621/geekai",
          "github/repository/shy3130/tick-stock-panel",
          "github/repository/zebbern/claude-code-guide",
          "github/repository/IBM/mcp-context-forge",
          "github/repository/ArcReel/ArcReel",
          "github/repository/embabel/embabel-agent",
          "github/repository/xlite-dev/lite.ai.toolkit",
          "github/repository/oracle-devrel/oracle-ai-developer-hub",
          "github/repository/GiovanniPasq/agentic-rag-for-dummies",
          "github/repository/aurelio-labs/semantic-router",
          "github/repository/LazyAGI/LazyLLM",
          "github/repository/SamurAIGPT/llm-wiki-agent",
          "github/repository/RunMaestro/Maestro",
          "github/repository/rsxdalv/TTS-WebUI",
          "github/repository/TanStack/ai",
          "github/repository/lobehub/sd-webui-lobe-theme",
          "github/repository/KohakuBlueleaf/LyCORIS",
          "github/repository/PurpleDoubleD/locally-uncensored"
        ]
      }
    }
  ],
  "communityBoundary": {
    "contributionUnit": "points_and_badges",
    "transferable": false,
    "redeemable": false,
    "purchasable": false,
    "walletConnected": false,
    "leaderboardAffectsContributionUnit": false,
    "manualReviewRequiredFor": [
      "high_risk_reward",
      "author_attribution_change",
      "asset_takedown",
      "rule_change"
    ]
  },
  "collection": {
    "status": "complete",
    "metadataStatus": "partial",
    "lastAttemptAt": "2026-09-14T22:49:46.105Z",
    "target": 100,
    "tools": 77,
    "sourceCount": {
      "github": 77,
      "huggingface": 0
    },
    "discovered": 606,
    "metadataPassed": 259,
    "reviewed": 606,
    "filterVersion": "ai-tools-v2",
    "errors": [],
    "historyCursor": 29,
    "historyCoverage": {
      "budget": 45,
      "ready": 77,
      "pending": 0
    },
    "exclusionCounts": {
      "educational_list_prompt_or_paper": 67,
      "inactive_over_three_months": 184,
      "not_ai_specific": 70,
      "no_executable_code_language": 8,
      "unclear_tool_purpose": 18,
      "missing_usage_documentation": 149,
      "no_install_and_runtime_evidence": 31,
      "readme_is_resource_collection": 2
    },
    "notes": [
      "README installation/runtime evidence is checked; projects are not installed or security-audited.",
      "Repositories without a push in the last three calendar months are excluded and replaced by the next eligible candidate.",
      "Hugging Face model likes/downloads are not GitHub stars and are excluded from tool rankings.",
      "Rising uses newly created stars across the latest seven complete source-defined days, not a rolling 168-hour net change. Missing history is pending and incomplete coverage is provisional."
    ],
    "lastHistoryAttemptAt": "2026-09-15T02:14:13.080Z",
    "refreshWarnings": []
  },
  "history": [
    {
      "at": "2026-09-11T21:53:03.776Z",
      "metrics": {
        "github/repository/googleworkspace/cli": {
          "stars": 30942
        },
        "github/repository/ScrapeGraphAI/Scrapegraph-ai": {
          "stars": 30834
        },
        "github/repository/ComposioHQ/composio": {
          "stars": 30136
        },
        "github/repository/labring/FastGPT": {
          "stars": 29631
        },
        "github/repository/jackwener/OpenCLI": {
          "stars": 29207
        },
        "github/repository/microsoft/semantic-kernel": {
          "stars": 28552
        }
      }
    },
    {
      "at": "2026-09-11T23:03:03.614Z",
      "metrics": {
        "github/repository/googleworkspace/cli": {
          "stars": 30942
        },
        "github/repository/ScrapeGraphAI/Scrapegraph-ai": {
          "stars": 30834
        },
        "github/repository/ComposioHQ/composio": {
          "stars": 30136
        },
        "github/repository/labring/FastGPT": {
          "stars": 29631
        },
        "github/repository/jackwener/OpenCLI": {
          "stars": 29207
        },
        "github/repository/microsoft/semantic-kernel": {
          "stars": 28552
        },
        "github/repository/QwenLM/qwen-code": {
          "stars": 27800
        },
        "github/repository/NVIDIA-NeMo/Speech": {
          "stars": 18433
        }
      }
    },
    {
      "at": "2026-09-12T18:28:07.8540452Z",
      "metrics": {
        "github/repository/googleworkspace/cli": {
          "stars": 30942
        },
        "github/repository/ScrapeGraphAI/Scrapegraph-ai": {
          "stars": 30834
        },
        "github/repository/ComposioHQ/composio": {
          "stars": 30136
        },
        "github/repository/labring/FastGPT": {
          "stars": 29631
        },
        "github/repository/jackwener/OpenCLI": {
          "stars": 29207
        },
        "github/repository/microsoft/semantic-kernel": {
          "stars": 28552
        },
        "github/repository/QwenLM/qwen-code": {
          "stars": 27800
        },
        "github/repository/NVIDIA-NeMo/Speech": {
          "stars": 18433
        }
      }
    },
    {
      "at": "2026-09-14T22:49:46.105Z",
      "metrics": {
        "github/repository/googleworkspace/cli": {
          "stars": 30996
        },
        "github/repository/ScrapeGraphAI/Scrapegraph-ai": {
          "stars": 30970
        },
        "github/repository/ComposioHQ/composio": {
          "stars": 30170
        },
        "github/repository/labring/FastGPT": {
          "stars": 29644
        },
        "github/repository/jackwener/OpenCLI": {
          "stars": 29282
        },
        "github/repository/microsoft/semantic-kernel": {
          "stars": 28558
        },
        "github/repository/OtterMind/Chat2DB": {
          "stars": 28118
        },
        "github/repository/QwenLM/qwen-code": {
          "stars": 27841
        },
        "github/repository/Fosowl/agenticSeek": {
          "stars": 27207
        },
        "github/repository/titanwings/distilly": {
          "stars": 24722
        },
        "github/repository/Tencent/ncnn": {
          "stars": 23814
        },
        "github/repository/NirDiamant/agents-towards-production": {
          "stars": 21454
        },
        "github/repository/mlc-ai/web-llm": {
          "stars": 19122
        },
        "github/repository/NVIDIA-NeMo/Speech": {
          "stars": 18447
        },
        "github/repository/camel-ai/camel": {
          "stars": 17715
        },
        "github/repository/xbtlin/ai-berkshire": {
          "stars": 16343
        },
        "github/repository/HBAI-Ltd/Toonflow-app": {
          "stars": 15587
        },
        "github/repository/opensandbox-group/OpenSandbox": {
          "stars": 15284
        },
        "github/repository/e2b-dev/E2B": {
          "stars": 13800
        },
        "github/repository/Lightning-AI/litgpt": {
          "stars": 13663
        },
        "github/repository/semantica-agi/semantica": {
          "stars": 12871
        },
        "github/repository/voxel51/fiftyone": {
          "stars": 11085
        },
        "github/repository/jo-inc/camofox-browser": {
          "stars": 11038
        },
        "github/repository/lucidrains/denoising-diffusion-pytorch": {
          "stars": 10686
        },
        "github/repository/google-deepmind/sonnet": {
          "stars": 9970
        },
        "github/repository/omnigent-ai/omnigent": {
          "stars": 9948
        },
        "github/repository/frankbria/ralph-claude-code": {
          "stars": 9627
        },
        "github/repository/xorbitsai/inference": {
          "stars": 9567
        },
        "github/repository/EvoMap/evolver": {
          "stars": 9075
        },
        "github/repository/bentoml/BentoML": {
          "stars": 8839
        },
        "github/repository/nexu-io/html-anything": {
          "stars": 8806
        },
        "github/repository/maximhq/bifrost": {
          "stars": 8071
        },
        "github/repository/evidentlyai/evidently": {
          "stars": 7914
        },
        "github/repository/stanfordnlp/stanza": {
          "stars": 7877
        },
        "github/repository/2FastLabs/agent-squad": {
          "stars": 7761
        },
        "github/repository/SWE-agent/mini-swe-agent": {
          "stars": 7544
        },
        "github/repository/di-sukharev/opencommit": {
          "stars": 7539
        },
        "github/repository/traceloop/openllmetry": {
          "stars": 7429
        },
        "github/repository/ChatLab/ChatLab": {
          "stars": 7356
        },
        "github/repository/vladmandic/sdnext": {
          "stars": 7340
        },
        "github/repository/strands-agents/harness-sdk": {
          "stars": 7241
        },
        "github/repository/Zipstack/unstract": {
          "stars": 7236
        },
        "github/repository/kyegomez/swarms": {
          "stars": 7170
        },
        "github/repository/NVIDIA-NeMo/Guardrails": {
          "stars": 7122
        },
        "github/repository/zenstory-ai/oh-story-claudecode": {
          "stars": 6873
        },
        "github/repository/genspark-ai/genoffice": {
          "stars": 6762
        },
        "github/repository/GoogleCloudPlatform/agent-starter-pack": {
          "stars": 6556
        },
        "github/repository/KunAgent/Kun": {
          "stars": 6309
        },
        "github/repository/Akegarasu/lora-scripts": {
          "stars": 6116
        },
        "github/repository/netease-youdao/LobsterAI": {
          "stars": 6025
        },
        "github/repository/Q00/ouroboros": {
          "stars": 5869
        },
        "github/repository/wiltodelta/remove-ai-watermarks": {
          "stars": 5546
        },
        "github/repository/ATH-MaaS/ComfyUI-Copilot": {
          "stars": 5515
        },
        "github/repository/PurpleAILAB/Decepticon": {
          "stars": 5510
        },
        "github/repository/apache/maka": {
          "stars": 5401
        },
        "github/repository/KnockOutEZ/wigolo": {
          "stars": 5257
        },
        "github/repository/h2oai/h2o-llmstudio": {
          "stars": 5181
        },
        "github/repository/iflytek/skillhub": {
          "stars": 5101
        },
        "github/repository/EvoScientist/EvoScientist": {
          "stars": 4892
        },
        "github/repository/yangjian102621/geekai": {
          "stars": 4699
        },
        "github/repository/shy3130/tick-stock-panel": {
          "stars": 4680
        },
        "github/repository/zebbern/claude-code-guide": {
          "stars": 4622
        },
        "github/repository/IBM/mcp-context-forge": {
          "stars": 4469
        },
        "github/repository/ArcReel/ArcReel": {
          "stars": 4456
        },
        "github/repository/embabel/embabel-agent": {
          "stars": 4447
        },
        "github/repository/xlite-dev/lite.ai.toolkit": {
          "stars": 4432
        },
        "github/repository/oracle-devrel/oracle-ai-developer-hub": {
          "stars": 4375
        },
        "github/repository/GiovanniPasq/agentic-rag-for-dummies": {
          "stars": 4160
        },
        "github/repository/aurelio-labs/semantic-router": {
          "stars": 3894
        },
        "github/repository/LazyAGI/LazyLLM": {
          "stars": 3885
        },
        "github/repository/SamurAIGPT/llm-wiki-agent": {
          "stars": 3524
        },
        "github/repository/RunMaestro/Maestro": {
          "stars": 3340
        },
        "github/repository/rsxdalv/TTS-WebUI": {
          "stars": 3262
        },
        "github/repository/TanStack/ai": {
          "stars": 3108
        },
        "github/repository/lobehub/sd-webui-lobe-theme": {
          "stars": 2711
        },
        "github/repository/KohakuBlueleaf/LyCORIS": {
          "stars": 2523
        },
        "github/repository/PurpleDoubleD/locally-uncensored": {
          "stars": 1635
        }
      }
    }
  ]
};
}(window));
