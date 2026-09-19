/* ==========================================================================
   osmarks.com · 出海基建四大件数据源
   --------------------------------------------------------------------------
   设计原则（与平台三铁律一致）：
     1. 只放能核实的官方站点，绝不写猜测的链接。
     2. 佣金状态一律如实标注。没签约就显示「待接入」，不假装有分成。
     3. 每个渠道必须写清「适合谁」和「谁千万别碰」，这是排雷，不是广告。
   维护方式：改本文件即可，页面无需重新构建。
   ========================================================================== */
(function (root) {
  root.OSMARKS_INFRA = {
    updatedAt: '2026-09-16',

    // 签约状态说明，页面直接展示
    statusNote: '佣金渠道待接入。未签约前，按钮只跳官方站点，不带任何返佣参数。',

    items: [
      {
        id: 'payment-card',
        tag: 'BASICS · 01',
        name: '海外虚拟信用卡 / 支付卡',
        why: '充值 ChatGPT、Claude、Midjourney 这类海外服务，国内卡直接被拒。这一步卡住的人最多。',
        fitFor: [
          '第一次订阅海外 AI 服务，手上没有可用外币卡',
          '有卡但总被风控拦，续费老是失败'
        ],
        avoid: '要拿它存大额资金的别碰。虚拟卡本质是预付工具，不是银行账户。',
        commission: '待确认',
        commissionType: '开卡费 + 充值返佣',
        affiliateStatus: 'pending',
        official: null,
        priceHint: '开卡费与充值手续费以渠道实时报价为准'
      },
      {
        id: 'vps',
        tag: 'BASICS · 02',
        name: '海外高性价比 VPS / 云服务器',
        why: '跑开源工具、部署自己的服务、需要一台稳定在境外的机器，这是最省事的一步。',
        fitFor: [
          '想跑开源项目的普通人，不是运维',
          '需要一个稳定环境做部署测试'
        ],
        avoid: '只是偶尔用一次的，别买年付。按小时计费的先用一个月再说。',
        commission: '待确认',
        commissionType: '首单佣金 + 月度分润',
        affiliateStatus: 'pending',
        official: null,
        priceHint: '入门机型通常每月几美元起，别被高价套餐劝退',
        references: [
          { name: 'Vultr', url: 'https://www.vultr.com' },
          { name: 'Hetzner', url: 'https://www.hetzner.com' },
          { name: 'DigitalOcean', url: 'https://www.digitalocean.com' }
        ]
      },
      {
        id: 'payout',
        tag: 'BASICS · 03',
        name: '跨境出海支付通道 / 合规收款',
        why: '做独立站、卖数字产品、接海外客户的钱，得先有一条能收进来的路。',
        fitFor: [
          '做独立站或卖数字产品的个人开发者',
          '接海外外包，需要正规收款路径'
        ],
        avoid: '想拿来走灰色流水的别碰。这条通道就是给正经生意用的。',
        commission: '待确认',
        commissionType: '商户开户奖励 + 流水返佣',
        affiliateStatus: 'pending',
        official: null,
        priceHint: '开户多为免费，按流水收手续费',
        references: [
          { name: 'Stripe', url: 'https://stripe.com' },
          { name: 'Wise', url: 'https://wise.com' },
          { name: 'Payoneer', url: 'https://www.payoneer.com' }
        ]
      },
      {
        id: 'esim',
        tag: 'BASICS · 04',
        name: '海外通信 / eSIM / 实体卡',
        why: '注册海外服务要收验证码，这一步没打通，前面三步全白搭。',
        fitFor: [
          '注册海外服务总是收不到验证码',
          '需要一个能长期收信的境外号码'
        ],
        avoid: '把重要账号的找回方式只绑在这个号上。号码一失效，账号一起丢。',
        commission: '待确认',
        commissionType: '按套餐返佣',
        affiliateStatus: 'pending',
        official: null,
        priceHint: '按流量或按月计费，先买最小套餐试',
        references: [{ name: 'Airalo', url: 'https://www.airalo.com' }]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : this);
