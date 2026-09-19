// osmarks.com · 联盟分润公示数据 (Ledger Data Schema v1)
window.OSMARKS_LEDGER = {
  "updated_at": "2026-09-16T20:00:00+08:00",
  "summary": {
    "total_allies": 12,
    "total_revenue_cny": 0.00,
    "total_payout_cny": 0.00,
    "commission_ratio_reward": "70%",
    "commission_ratio_infra": "20% ~ 30%",
    "status": "公示准备中 · 首期未产生真实账单，先公示规则与结构"
  },
  "rules": [
    {
      "tier": "打赏分润",
      "ally_ratio": "70%",
      "platform_ratio": "30%",
      "desc": "读者在分站页面进行的自愿打赏赞助，扣除通道手续费后 70% 直付分站站长。"
    },
    {
      "tier": "基建四大件分销",
      "ally_ratio": "20% ~ 30%",
      "platform_ratio": "平台统谈返点",
      "desc": "通过分站推广 VPS、网络通道、eSIM 产生的签约返佣，全量透明上链或公示，按期结算。"
    }
  ],
  "entries": [
    {
      "id": "L-202609-001",
      "date": "2026-09-16",
      "tenant": "laowang",
      "source": "出海基建 · VPS 推荐",
      "gross_cny": 180.00,
      "ally_share_cny": 54.00,
      "status": "待结算",
      "note": "联盟分润测试账目（待正式上线后由真实渠道回执驱动）"
    },
    {
      "id": "L-202609-002",
      "date": "2026-09-16",
      "tenant": "alex",
      "source": "读者打赏",
      "gross_cny": 50.00,
      "ally_share_cny": 35.00,
      "status": "待结算",
      "note": "创刊号自愿打赏分润测试"
    }
  ]
};
