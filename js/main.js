/* ============================================================
   DevLog - 个人技术博客
   纯前端实现：文章数据以 JavaScript 数组模拟，后续可直接替换为后端接口。
   ============================================================ */
'use strict';

/* ---------- 站点基础信息 ---------- */

const SITE = {
  name: 'DevLog',
  author: '林默',
  email: 'hello@example.com'
};

const CATEGORIES = ['前端开发', 'JavaScript', '工程化', '性能优化'];

/* ---------- 模拟文章数据（后续接入后端时替换此数组） ---------- */

const POSTS = [
  {
    id: 'vite-vue3-best-practice',
    title: '从零搭建 Vite + Vue 3 项目的工程化实践',
    summary: 'Vite 凭借极快的冷启动速度和开箱即用的开发体验，已经成为 Vue 3 项目的主流构建工具。本文从项目初始化开始，梳理目录结构、路径别名、环境变量与代码规范等关键配置，帮你避开新手常踩的坑。',
    date: '2026-08-08',
    category: '工程化',
    tags: ['Vite', 'Vue3', '工程化'],
    cover: 'images/covers/cover-1.svg',
    readTime: 8,
    content: [
      { type: 'h2', text: '为什么选择 Vite' },
      { type: 'p', text: 'Vite 基于原生 ES Module 按需编译，开发服务器的启动速度几乎不随项目规模增长而变慢；配合 esbuild 预构建依赖，冷启动和热更新都远快于传统的 Webpack 方案。对于中小型项目，它是性价比很高的默认选择。' },
      {
        type: 'code',
        lang: 'js',
        code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport { fileURLToPath, URL } from 'node:url'\n\nexport default defineConfig({\n  plugins: [vue()],\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url))\n    }\n  },\n  server: { port: 5173, open: true }\n})"
      },
      { type: 'h2', text: '推荐目录结构' },
      {
        type: 'list',
        items: [
          'src/api：按模块组织接口请求',
          'src/components：公共组件，按功能拆分',
          'src/composables：组合式函数，复用业务逻辑',
          'src/router 与 src/store：路由与状态管理',
          'src/utils：纯工具函数，不依赖业务'
        ]
      },
      { type: 'h2', text: '容易被忽略的工程化细节' },
      {
        type: 'list',
        items: [
          '统一代码风格：ESLint + Prettier + husky 提交前检查',
          '环境变量统一使用 import.meta.env，避免在源码中硬编码',
          '组件库按需引入，减少首屏包体积',
          '使用 unplugin-auto-import 时注意显式声明依赖来源'
        ]
      },
      { type: 'quote', text: '工程化的目标不是引入更多工具，而是让团队在规模变大后依然能保持一致的开发体验。' }
    ]
  },
  {
    id: 'javascript-closure-scope',
    title: 'JavaScript 闭包与作用域链，一文彻底讲透',
    summary: '闭包是 JavaScript 面试与进阶绕不开的核心概念。本文从执行上下文和词法作用域讲起，逐步推导出闭包的形成原理，并用真实场景演示闭包在私有变量、函数工厂和事件处理中的应用，以及需要注意的内存问题。',
    date: '2026-08-05',
    category: 'JavaScript',
    tags: ['JavaScript', '闭包', '作用域'],
    cover: 'images/covers/cover-2.svg',
    readTime: 10,
    content: [
      { type: 'h2', text: '从词法作用域说起' },
      { type: 'p', text: 'JavaScript 采用词法作用域：函数的作用域在书写代码时就已确定，而不是在调用时。这意味着内层函数可以访问外层函数中声明的变量，而作用域链正是由这些嵌套的词法环境逐层连接而成的。' },
      {
        type: 'code',
        lang: 'js',
        code: "function makeCounter() {\n  let count = 0\n  return function increment() {\n    count += 1\n    return count\n  }\n}\n\nconst counter = makeCounter()\nconsole.log(counter()) // 1\nconsole.log(counter()) // 2"
      },
      { type: 'h2', text: '闭包到底是什么' },
      { type: 'p', text: 'increment 函数被返回后，makeCounter 的执行上下文虽然结束了，但 count 所在的词法环境依然被 increment 引用着，因此不会被垃圾回收。这种"函数 + 其外层词法环境"的组合，就是闭包。' },
      { type: 'h2', text: '常见应用场景' },
      {
        type: 'list',
        items: [
          '封装私有变量，避免全局污染',
          '函数工厂，例如按配置生成请求函数',
          '柯里化与高阶组件，延迟参数求值'
        ]
      },
      { type: 'h2', text: '内存注意点' },
      { type: 'p', text: '闭包会持有外部变量直到闭包本身被回收。如果长生命周期对象引用了大量数据，记得在不再需要时置空引用，避免内存泄漏。' },
      { type: 'quote', text: '理解闭包的关键不是背定义，而是画出"谁引用了谁"的作用域链。' }
    ]
  },
  {
    id: 'css-layout-evolution',
    title: 'CSS 布局进化史：从 Table 到 Grid 的取舍之道',
    summary: '从 Table 布局、浮动布局、Flexbox 到 Grid，CSS 布局能力经历了近二十年的演进。本文用同一张"两栏 + 页脚"页面串起各代布局方案的写法，对比各自的适用场景，并给出 2026 年的选型建议。',
    date: '2026-07-29',
    category: '前端开发',
    tags: ['CSS', 'Grid', '布局'],
    cover: 'images/covers/cover-3.svg',
    readTime: 7,
    content: [
      { type: 'h2', text: '为什么布局方案一直在变' },
      { type: 'p', text: '早期页面用 table 模拟多栏，代价是语义混乱和维护困难；后来 float 加 clearfix 统治了十年；再后来 Flexbox 解决了一维排列，Grid 则让二维布局第一次有了真正的语言支持。' },
      {
        type: 'code',
        lang: 'css',
        code: ".page {\n  display: grid;\n  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);\n  gap: 32px;\n}\n\n.sidebar {\n  position: sticky;\n  top: 88px;\n}\n\n@media (max-width: 920px) {\n  .page {\n    grid-template-columns: 1fr;\n  }\n}"
      },
      { type: 'h2', text: 'Flex 与 Grid 的边界' },
      { type: 'p', text: 'Flexbox 擅长"一行内的对齐与分配"，Grid 擅长"整个页面的行列规划"。实践中常见组合是：外层用 Grid 定骨架，内层小组件用 Flex 排列，二者各司其职。' },
      {
        type: 'list',
        items: [
          '导航栏、按钮组、卡片内布局：优先 Flex',
          '整体页面骨架、栅格系统、瀑布流：优先 Grid',
          '不确定时，先用最简单的方式实现，别为了"用 Grid 而用 Grid"'
        ]
      },
      { type: 'h2', text: '选型建议' },
      { type: 'p', text: '现代浏览器对 Grid 的支持已经非常稳定，2026 年的新项目完全可以放心地把页面骨架交给 Grid。兼容性顾虑大多来自历史项目，此时可以借助 Autoprefixer 与渐进增强策略过渡。' }
    ]
  },
  {
    id: 'frontend-performance-optimization',
    title: '前端性能优化实战：首屏加载时间降低 60%',
    summary: '性能优化的第一步永远是测量。本文记录了一次真实的首屏优化过程：从 Lighthouse 审计定位瓶颈，到代码分割、图片压缩与缓存策略逐项落地，最终把首屏加载时间从 4.2s 压到 1.7s，并附上可复用的检查清单。',
    date: '2026-07-22',
    category: '性能优化',
    tags: ['性能优化', '首屏', '实践'],
    cover: 'images/covers/cover-4.svg',
    readTime: 9,
    content: [
      { type: 'h2', text: '先测量，再动手' },
      { type: 'p', text: '优化前先用 Lighthouse 和 Performance 面板记录基线数据，明确瓶颈是网络、渲染还是脚本执行。没有基线的优化，等于在黑暗中开盲盒。' },
      {
        type: 'code',
        lang: 'js',
        code: "performance.getEntriesByType('navigation').forEach((entry) => {\n  const data = {\n    dns: entry.domainLookupEnd - entry.domainLookupStart,\n    tcp: entry.connectEnd - entry.connectStart,\n    ttfb: entry.responseStart - entry.requestStart,\n    dom: entry.domContentLoadedEventEnd - entry.navigationStart\n  }\n  console.table(data)\n})"
      },
      { type: 'h2', text: '三项立竿见影的优化' },
      {
        type: 'list',
        items: [
          '路由级代码分割：按页面拆包，首屏只加载当前路由资源',
          '图片改造：转 WebP / AVIF、开启懒加载、为不同尺寸提供 srcset',
          '静态资源长缓存：文件名加 hash，配合 CDN 的 Cache-Control'
        ]
      },
      { type: 'h2', text: '收益与反思' },
      { type: 'p', text: '改造后 TTFB 从 1.8s 降到 0.7s，首屏 LCP 从 4.2s 降到 1.7s。最大的体会是：优化是系统工程，单一技巧很难拯救全局，但先解决最大的那块短板，往往就能获得过半收益。' },
      { type: 'quote', text: '性能优化的尽头不是炫技，而是对用户等待时间的尊重。' }
    ]
  },
  {
    id: 'http-cache-guide',
    title: '深入浅出 HTTP 缓存：强缓存与协商缓存完整指南',
    summary: 'HTTP 缓存是前端性能的基石之一，但也是配置最容易出错的环节。本文用图解和实例对比 Cache-Control、Expires、ETag 与 Last-Modified 的协作方式，帮你彻底理清强缓存与协商缓存的判断流程。',
    date: '2026-07-15',
    category: '前端开发',
    tags: ['HTTP', '缓存', '网络'],
    cover: 'images/covers/cover-5.svg',
    readTime: 6,
    content: [
      { type: 'h2', text: '一次请求的缓存判断流程' },
      { type: 'p', text: '浏览器发起请求时，先检查本地是否有未过期的强缓存，命中则直接使用，不发网络请求；未命中则带上协商字段重新验证，由服务器决定返回 304 还是新资源。' },
      { type: 'img', src: 'images/diagram-cache.svg', alt: 'HTTP 缓存判断流程示意图', caption: '图：强缓存与协商缓存的判断流程' },
      {
        type: 'code',
        lang: 'http',
        code: "# 响应头示例：强缓存\nCache-Control: public, max-age=31536000, immutable\nETag: \"66f1-1234abc\"\n\n# 再次请求时浏览器自动携带\nIf-None-Match: \"66f1-1234abc\""
      },
      { type: 'h2', text: '如何配置才不容易出错' },
      {
        type: 'list',
        items: [
          'HTML 入口文件：no-cache，确保发布后立即拿到新版本',
          '带 hash 的静态资源：max-age=31536000 + immutable，缓存一年',
          '接口响应：按业务需要设置短缓存或 no-store'
        ]
      },
      { type: 'h2', text: '排查技巧' },
      { type: 'p', text: '打开 DevTools 的 Network 面板，Size 列会直接标注 from disk cache、from memory cache 或 304。若发现页面更新不及时，优先检查 HTML 是否被强缓存，这是最经典的坑。' },
      { type: 'quote', text: '缓存策略没有放之四海皆准的答案，但"HTML 不缓存、带 hash 的静态资源长缓存"永远是安全的起点。' }
    ]
  },
  {
    id: 'event-loop-async-await',
    title: '用事件循环理解 async/await 的执行顺序',
    summary: 'async/await 让异步代码读起来像同步，但也制造了"为什么顺序和直觉不一样"的困惑。本文从调用栈、任务队列与微任务的角度拆解一段经典代码，让你从此不再怕 event loop 面试题。',
    date: '2026-07-08',
    category: 'JavaScript',
    tags: ['JavaScript', '异步', '事件循环'],
    cover: 'images/covers/cover-6.svg',
    readTime: 11,
    content: [
      { type: 'h2', text: '三个基本概念' },
      { type: 'p', text: '调用栈负责同步执行；宏任务（setTimeout、I/O 回调）进入任务队列；Promise 回调属于微任务，在当前宏任务结束前、下一个宏任务开始前被清空。' },
      {
        type: 'code',
        lang: 'js',
        code: "console.log('1')\n\nsetTimeout(() => console.log('2'), 0)\n\nPromise.resolve().then(() => {\n  console.log('3')\n  queueMicrotask(() => console.log('4'))\n})\n\nconsole.log('5')\n\n// 输出顺序：1 -> 5 -> 3 -> 4 -> 2"
      },
      { type: 'h2', text: '为什么是 1 -> 5 -> 3 -> 4 -> 2' },
      { type: 'p', text: '同步代码 1 和 5 先执行；随后微任务 3 入队并立刻执行，其内部又注册了微任务 4，继续在本轮清空；最后才开始执行宏任务 2。微任务永远插队，这就是顺序的真相。' },
      { type: 'h2', text: 'async/await 只是语法糖' },
      { type: 'p', text: 'await 后面的代码相当于被放进了 then 回调，因此同样遵守微任务规则。理解这一点，很多"反直觉"的执行顺序问题都能迎刃而解。' },
      { type: 'quote', text: '当你把异步代码的执行顺序画成一张时间线，面试题就变成了送分题。' }
    ]
  },
  {
    id: 'responsive-design-guide',
    title: '响应式设计实践：从媒体查询到容器查询',
    summary: '响应式设计正在从"以视口为中心"走向"以容器为中心"。本文对比媒体查询与容器查询的适用场景，用一个实际组件演示从断点设计到容器感知布局的迁移过程，并给出实用建议。',
    date: '2026-07-25',
    category: '前端开发',
    tags: ['CSS', '响应式', '实践'],
    cover: 'images/covers/cover-7.svg',
    readTime: 8,
    content: [
      { type: 'h2', text: '从视口到容器' },
      { type: 'p', text: '媒体查询以整个视口为参照，适合页面级布局；但组件常被嵌入到不同宽度的区域，这时容器查询能根据父容器尺寸自适应，逻辑更内聚。' },
      {
        type: 'code',
        lang: 'css',
        code: ".card-list {\n  container-type: inline-size;\n  display: grid;\n  gap: 16px;\n}\n\n@container (min-width: 420px) {\n  .card-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@container (min-width: 720px) {\n  .card-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}"
      },
      { type: 'h2', text: '容器查询的三个注意点' },
      {
        type: 'list',
        items: [
          'container-type: inline-size 会让元素成为新的包含块，注意子元素定位',
          '与媒体查询搭配使用：页面骨架用媒体查询，组件内部用容器查询',
          '浏览器支持已覆盖主流环境，可以渐进增强使用'
        ]
      },
      { type: 'quote', text: '好的响应式不是"每个断点都调一遍"，而是让组件自己适应它所在的空间。' },
      { type: 'h2', text: '迁移建议' },
      { type: 'p', text: '先从"宽高比固定、布局密度随宽度变化"的组件开始迁移，收益最明显，风险也最小。' }
    ]
  },
  {
    id: 'vue3-composables-pinia',
    title: 'Vue 3 组合式 API 实战：从 setup 到 Pinia',
    summary: '组合式 API 让逻辑复用和状态组织变得更清晰。本文从 setup 语法讲起，逐步演示自定义组合函数与 Pinia 状态管理的配合方式，并总结团队实践中的分层约定。',
    date: '2026-07-05',
    category: '工程化',
    tags: ['Vue3', 'Pinia', '工程化'],
    cover: 'images/covers/cover-8.svg',
    readTime: 9,
    content: [
      { type: 'h2', text: 'setup 之后发生了什么' },
      { type: 'p', text: 'setup 在组件实例创建前执行，返回的响应式状态与函数会暴露给模板。相比 Options API，逻辑按功能聚合，而不是按 data / computed / methods 分散。' },
      {
        type: 'code',
        lang: 'js',
        code: "import { ref, computed } from 'vue'\n\nexport function useCounter(initial = 0) {\n  const count = ref(initial)\n  const double = computed(() => count.value * 2)\n  const increment = () => { count.value += 1 }\n  return { count, double, increment }\n}"
      },
      { type: 'h2', text: '什么时候用 Pinia' },
      {
        type: 'list',
        items: [
          '多组件共享同一份状态时',
          '需要持久化、跨页签同步等能力时',
          '状态逻辑较复杂，希望与组件解耦时'
        ]
      },
      { type: 'h2', text: '团队分层约定' },
      { type: 'p', text: '建议按"页面组件 → 组合函数 → Store"三层组织：组件只负责展示与交互，组合函数封装可复用的业务逻辑，Store 管理跨组件的共享状态。这样代码边界清晰，测试也更方便。' },
      { type: 'quote', text: '组合式 API 最大的价值不是语法新，而是让"逻辑"成为可以独立组织和测试的一等公民。' }
    ]
  }
];

/* ---------- 模拟图书数据（图书列表页） ---------- */

const BOOKS = [
  {
    id: 'js-red-book',
    title: 'JavaScript 高级程序设计（第 4 版）',
    author: '马特·弗里斯比',
    desc: 'JavaScript 开发者案头必备的权威指南，覆盖语言核心与最新特性。',
    code: 'JS'
  },
  {
    id: 'css-secrets',
    title: 'CSS 揭秘',
    author: 'Lea Verou',
    desc: '47 个实用技巧，带你重新认识 CSS 的可能性。',
    code: 'CSS'
  },
  {
    id: 'csapp',
    title: '深入理解计算机系统（原书第 3 版）',
    author: "Randal E. Bryant / David R. O'Hallaron",
    desc: '从程序员视角理解计算机底层，构建完整知识体系。',
    code: 'CS'
  },
  {
    id: 'clean-code',
    title: '代码整洁之道',
    author: 'Robert C. Martin',
    desc: '如何写出易读、易维护的代码，软件工程师必读。',
    code: 'CC'
  },
  {
    id: 'design-patterns',
    title: '设计模式：可复用面向对象软件的基础',
    author: 'Erich Gamma 等',
    desc: '四位作者合著的经典之作，23 种设计模式的源头。',
    code: 'DP'
  }
];

/* ---------- 模拟菜单数据（在线点菜单页） ---------- */

const MENU = [
  { id: 'gongbao-jiding', name: '宫保鸡丁', price: 28, desc: '经典川菜，鸡丁嫩滑，花生香脆，微辣下饭。' },
  { id: 'yuxiang-rous', name: '鱼香肉丝', price: 26, desc: '咸甜酸辣兼备，肉丝配木耳笋丝，超级下饭。' },
  { id: 'mapo-doufu', name: '麻婆豆腐', price: 22, desc: '麻辣鲜香，嫩豆腐配上肉末与豆瓣酱。' },
  { id: 'tangcu-liji', name: '糖醋里脊', price: 32, desc: '外酥里嫩，酸甜适口，大人小孩都爱。' },
  { id: 'qingchao-shishu', name: '清炒时蔬', price: 18, desc: '当季蔬菜，清淡爽口，解腻首选。' },
  { id: 'suanla-tudousi', name: '酸辣土豆丝', price: 16, desc: '酸辣开胃，土豆丝爽脆，下饭神器。' },
  { id: 'fanqie-dantang', name: '番茄鸡蛋汤', price: 12, desc: '家常味道，番茄酸甜，鸡蛋滑嫩。' },
  { id: 'yangzhou-chaofan', name: '扬州炒饭', price: 20, desc: '粒粒分明，虾仁、火腿、鸡蛋配料丰富。' }
];

/* ---------- 模拟天气数据（首页天气预报） ---------- */

const WEATHER_DAYS = [
  { icon: 'sun', high: 33, low: 26, desc: '晴' },
  { icon: 'cloudy', high: 31, low: 25, desc: '多云' },
  { icon: 'rain', high: 27, low: 23, desc: '小雨' },
  { icon: 'storm', high: 26, low: 22, desc: '雷阵雨' },
  { icon: 'partly', high: 29, low: 24, desc: '多云转晴' }
];

const WEATHER_ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/></svg>',
  cloudy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="9" r="2.8"/><path d="M17.8 18.5a4.4 4.4 0 0 0 .3-8.8 5.2 5.2 0 0 0-9.9-1.2 3.4 3.4 0 0 0-1 6.7H17.5z"/></svg>',
  rain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 16.5a4.4 4.4 0 0 0 .3-8.8 5.2 5.2 0 0 0-9.9-1.2 3.4 3.4 0 0 0-1 6.7h9.4z"/><path d="M8.2 16.5l-1 2M12.2 16.5l-1 2M16.2 16.5l-1 2"/></svg>',
  storm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 15.5a4.4 4.4 0 0 0 .3-8.8 5.2 5.2 0 0 0-9.9-1.2 3.4 3.4 0 0 0-1 6.7h9.4z"/><path d="M12.2 15.5L10 19.5h2.4L10.8 23"/></svg>',
  partly: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="7.5" r="2.5"/><path d="M8 2.5V4M3.5 7.5H5M8 12.5V11M12.5 7.5H11"/><path d="M17.8 18.5a4.4 4.4 0 0 0 .3-8.8 5.2 5.2 0 0 0-9.9-1.2 3.4 3.4 0 0 0-1 6.7H17.5z"/></svg>'
};

/* ---------- 模拟友链数据（友情链接页） ---------- */

const LINKS = [
  { name: 'GitHub', url: 'https://github.com/', initial: 'G', type: '代码托管', desc: '全球最大的开源代码托管平台，几乎每天都要逛。' },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', initial: 'M', type: '技术文档', desc: '最权威的 Web 开发文档，查 API 和标准的第一站。' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com/', initial: 'S', type: '问答社区', desc: '遇到报错先来这里，你踩过的坑基本都有人踩过。' },
  { name: '掘金', url: 'https://juejin.cn/', initial: '掘', type: '中文社区', desc: '中文技术社区，刷文章、看面试题的常驻去处。' },
  { name: '阮一峰的网络日志', url: 'https://www.ruanyifeng.com/blog/', initial: '阮', type: '个人博客', desc: '坚持写作十几年的技术博客，每周必读。' },
  { name: 'CSS-Tricks', url: 'https://css-tricks.com/', initial: 'C', type: '前端资讯', desc: 'CSS 技巧与前端干货，布局灵感的来源。' },
  { name: 'Can I use', url: 'https://caniuse.com/', initial: 'C', type: '兼容性工具', desc: '浏览器特性兼容性查询，上线前必查。' },
  { name: 'Vite', url: 'https://vitejs.dev/', initial: 'V', type: '构建工具', desc: '下一代前端构建工具，本站构建思路的来源。' },
  { name: 'Dev.to', url: 'https://dev.to/', initial: 'D', type: '海外社区', desc: '海外开发者社区，观点与经验的分享地。' }
];

/* ---------- Hero 代码窗口内容（打字机效果） ---------- */

const CODE_LINES = [
  [{ cls: 'c-comment', text: '// 个人轨道任务配置' }],
  [{ cls: 'c-keyword', text: 'const' }, { text: ' mission = {' }],
  [{ text: '  operator: ' }, { cls: 'c-string', text: '"林默"' }, { text: ',' }],
  [{ text: '  role: ' }, { cls: 'c-string', text: '"前端工程师"' }, { text: ',' }],
  [{ text: '  status: ' }, { cls: 'c-string', text: '"ONLINE"' }, { text: ',' }],
  [{ text: '  target: ' }, { cls: 'c-string', text: '"探索 · 构建 · 记录"' }, { text: ',' }],
  [{ text: '};' }],
  [{ text: '' }]
];

/* ---------- 首页系统能力模块数据 ---------- */

const MODULES = [
  { name: 'JavaScript / TypeScript', type: '核心语言模块', status: '主力', statusEn: 'PRIMARY', level: 5 },
  { name: 'Vue 3', type: '界面开发模块', status: '常用', statusEn: 'ACTIVE', level: 4 },
  { name: 'React', type: '界面开发模块', status: '启用', statusEn: 'WORKING', level: 3 },
  { name: 'Node.js', type: '服务模块', status: '启用', statusEn: 'WORKING', level: 4 },
  { name: '性能优化', type: '工程能力模块', status: '主力', statusEn: 'PRIMARY', level: 5 },
  { name: '前端工程化', type: '工程能力模块', status: '常用', statusEn: 'ACTIVE', level: 4 },
  { name: 'AI 辅助开发', type: '效率模块', status: '学习中', statusEn: 'EXPLORING', level: 3 },
  { name: '技术写作', type: '内容模块', status: '探索中', statusEn: 'EXPLORING', level: 3 }
];

/* ---------- 工具函数 ---------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}

function getCategoryCounts() {
  return POSTS.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
}

/* ---------- 首页：文章卡片 ---------- */

const LOG_PREFIX = { '前端开发': 'FE', 'JavaScript': 'JS', '工程化': 'ENG', '性能优化': 'PERF' };

function logId(post) {
  const prefix = LOG_PREFIX[post.category] || 'LOG';
  const index = POSTS.findIndex((p) => p.id === post.id);
  return `${prefix}-${String(Math.max(index, 0) + 1).padStart(3, '0')}`;
}

function renderPostCard(post) {
  return `
    <article class="post-card scan-target">
      <span class="scan-line"></span>
      <div class="card-head">
        <span class="mission-id">LOG / ${logId(post)}</span>
        <span class="read-time">约 ${post.readTime} 分钟</span>
      </div>
      <a class="card-cover" href="article.html?id=${post.id}">
        <img src="${post.cover}" alt="${escapeHtml(post.title)}" loading="lazy">
      </a>
      <div class="card-body">
        <h2 class="card-title"><a href="article.html?id=${post.id}">${escapeHtml(post.title)}</a></h2>
        <p class="card-summary">${escapeHtml(post.summary)}</p>
        <div class="card-meta">
          <a class="tag" href="articles.html#category=${encodeURIComponent(post.category)}">${escapeHtml(post.category)}</a>
          <time datetime="${post.date}">${post.date.replace(/-/g, '.')}</time>
        </div>
        <span class="card-more">查看日志 →</span>
      </div>
    </article>`;
}

let currentCategory = null;

function getHashCategory() {
  const match = decodeURIComponent(location.hash).match(/^#category=(.+)$/);
  return match ? match[1] : null;
}

function renderPostList() {
  const container = document.getElementById('article-list');
  if (!container) return;

  const filtered = currentCategory
    ? POSTS.filter((post) => post.category === currentCategory)
    : POSTS;

  if (filtered.length === 0) {
    container.innerHTML = '<div class="list-empty">该分类下暂时没有文章，去看看其他分类吧。</div>';
    return;
  }

  container.innerHTML = sortByDateDesc(filtered).map(renderPostCard).join('');
}

function applyCategoryFilter() {
  currentCategory = getHashCategory();
  renderPostList();
  renderCategoryList();

  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.classList.toggle('active', (chip.dataset.cat || '') === (currentCategory || ''));
  });

  const posts = document.getElementById('posts');
  if (currentCategory && posts) {
    posts.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ---------- 侧边栏 ---------- */

function renderCategoryList() {
  const container = document.getElementById('category-list');
  if (!container) return;

  const counts = getCategoryCounts();
  const total = POSTS.length;
  const activeCategory = currentCategory !== null ? currentCategory : getHashCategory();
  const items = [
    `<li><a href="articles.html#posts" class="${activeCategory ? '' : 'active'}"><span>全部文章</span><span class="count">${total}</span></a></li>`
  ];

  CATEGORIES.forEach((category) => {
    const count = counts[category] || 0;
    const active = activeCategory === category ? ' active' : '';
    items.push(
      `<li><a class="${active}" href="articles.html#category=${encodeURIComponent(category)}"><span>${escapeHtml(category)}</span><span class="count">${count}</span></a></li>`
    );
  });

  container.innerHTML = items.join('');
}

function renderRecentList() {
  const container = document.getElementById('recent-list');
  if (!container) return;

  const recent = sortByDateDesc(POSTS).slice(0, 5);
  container.innerHTML = recent
    .map(
      (post) => `
        <li>
          <a href="article.html?id=${post.id}">
            <img class="recent-thumb" src="${post.cover}" alt="" loading="lazy">
            <span class="recent-title">${escapeHtml(post.title)}
              <span class="recent-date">${post.date}</span>
            </span>
          </a>
        </li>`
    )
    .join('');
}

function renderSidebar() {
  renderCategoryList();
  renderRecentList();
}

/* ---------- 首页（落地页） ---------- */

function renderHome() {
  const weather = document.getElementById('weather-list');
  if (weather) {
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    weather.innerHTML = WEATHER_DAYS.map((day, index) => {
      const d = new Date();
      d.setDate(d.getDate() + index + 1);
      const current = Math.round((day.high + day.low) / 2);
      const label = `${d.getMonth() + 1}月${String(d.getDate()).padStart(2, '0')}日`;
      return `
        <div class="weather-card">
          <div class="weather-date">${label} · ${weekdays[d.getDay()]}</div>
          <div class="weather-icon">${WEATHER_ICONS[day.icon] || ''}</div>
          <div class="weather-temp">${day.high}° / ${day.low}°</div>
          <div class="weather-meta">当前温度 ${current}°</div>
          <div class="weather-desc">${escapeHtml(day.desc)}</div>
        </div>`;
    }).join('');
  }

  const featured = document.getElementById('featured-list');
  if (featured) {
    featured.innerHTML = sortByDateDesc(POSTS).slice(0, 3).map(renderPostCard).join('');
  }

  renderModules();
  renderTransmission();

  const telPosts = document.getElementById('tel-posts');
  if (telPosts) telPosts.textContent = POSTS.length;
  const telBooks = document.getElementById('tel-books');
  if (telBooks) telBooks.textContent = BOOKS.length;
  const telModules = document.getElementById('tel-modules');
  if (telModules) telModules.textContent = MODULES.length;
}

function renderModules() {
  const container = document.getElementById('module-list');
  if (!container) return;

  container.innerHTML = MODULES.map((mod) => {
    const primary = mod.status === '主力' ? ' primary' : '';
    return `
      <div class="module-card">
        <div class="module-top">
          <div>
            <div class="module-name">${escapeHtml(mod.name)}</div>
            <div class="module-type">${escapeHtml(mod.type)}</div>
          </div>
          <span class="module-status${primary}"><i class="signal-dot"></i>${escapeHtml(mod.status)} <span class="hud-label">${mod.statusEn}</span></span>
        </div>
        <div class="module-bars">${'<i></i>'.repeat(mod.level)}</div>
      </div>`;
  }).join('');
}

function renderTransmission() {
  const container = document.getElementById('transmission-list');
  if (!container) return;

  container.innerHTML = sortByDateDesc(POSTS)
    .slice(0, 5)
    .map((post, index) => `
      <a class="transmission-row" href="article.html?id=${post.id}">
        <span class="tx-id">L-${String(index + 1).padStart(3, '0')}</span>
        <span class="tx-title">${escapeHtml(post.title)}</span>
        <span class="tx-cat">${escapeHtml(post.category)}</span>
        <span class="tx-date">${post.date.slice(5).replace('-', '.')}</span>
        <span class="tx-right">
          <span class="tx-status"><i class="signal-dot ok"></i>已接收</span>
          <span class="tx-open">打开 →</span>
        </span>
      </a>`)
    .join('');
}

/* ---------- 首页：代码打字机 ---------- */

function renderCodeWindow() {
  const container = document.getElementById('code-lines');
  if (!container) return;

  container.innerHTML = CODE_LINES.map((line) => {
    const tokens = line
      .map((token) => (token.cls ? `<span class="${token.cls}">${escapeHtml(token.text)}</span>` : escapeHtml(token.text)))
      .join('');
    return `<div class="code-line">${tokens}</div>`;
  }).join('');

  const lines = container.querySelectorAll('.code-line');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lines.forEach((el) => el.classList.add('shown'));
    return;
  }
  lines.forEach((el, index) => {
    setTimeout(() => el.classList.add('shown'), 280 + index * 110);
  });
}

/* ---------- 全站动效：视差 / 3D 倾斜 / 数字滚动 ---------- */

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const space = document.querySelector('.hero-space');
  const visual = document.querySelector('.hero-visual');
  if (!hero || (!space && !visual)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    if (space) space.style.transform = `translate(${x * -10}px, ${y * -7}px)`;
    if (visual) visual.style.transform = `translate(${x * 6}px, ${y * 4}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    if (space) space.style.transform = '';
    if (visual) visual.style.transform = '';
  });
}

function initStatCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('#tel-posts, #tel-books, #tel-modules').forEach((el) => {
    const target = parseInt(el.textContent, 10);
    if (Number.isNaN(target)) return;
    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------- 图书列表页 ---------- */

let bookQuery = '';
let bookFilter = 'all'; // all | archived | open
let favoriteBooks = new Set();

function loadFavorites() {
  try {
    const raw = localStorage.getItem('devlog-book-favorites');
    if (raw) favoriteBooks = new Set(JSON.parse(raw));
  } catch (err) {
    favoriteBooks = new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem('devlog-book-favorites', JSON.stringify([...favoriteBooks]));
  } catch (err) {
    // 存储不可用时降级为仅本次会话
  }
}

function toggleFavorite(button) {
  const id = button.dataset.id;
  if (favoriteBooks.has(id)) {
    favoriteBooks.delete(id);
  } else {
    favoriteBooks.add(id);
  }
  const faved = favoriteBooks.has(id);
  button.classList.toggle('faved', faved);
  button.textContent = faved ? '✓ 已归档' : '加入档案';
  saveFavorites();
  renderBooks();
  renderBookStats();
}

function renderBooks() {
  const container = document.getElementById('book-list');
  if (!container) return;

  const query = bookQuery.trim().toLowerCase();
  const filtered = searchBooks(query);
  const shown = filtered.filter((book) => {
    if (bookFilter === 'archived') return favoriteBooks.has(book.id);
    if (bookFilter === 'open') return !favoriteBooks.has(book.id);
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="list-empty">没有找到匹配的图书，换个关键词试试吧。</div>';
    return;
  }

  container.innerHTML = shown.map((book, index) => `
    <article class="book-card">
      <div class="book-top">
        <span class="book-id">BOOK-${String(index + 1).padStart(3, '0')}</span>
        <span class="hud-label">${escapeHtml(book.code)}</span>
      </div>
      <div class="book-cover book-cover-${(index % 5) + 1}"><span class="book-code">${escapeHtml(book.code)}</span></div>
      <div class="book-body">
        <h3 class="book-title">${escapeHtml(book.title)}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <p class="book-desc">${escapeHtml(book.desc)}</p>
        <p class="book-state ${favoriteBooks.has(book.id) ? 'archived' : ''}"><i class="signal-dot ${favoriteBooks.has(book.id) ? 'ok' : ''}"></i>${favoriteBooks.has(book.id) ? '已归档' : '未归档'}</p>
        <div class="book-footer">
          <button class="fav-btn${favoriteBooks.has(book.id) ? ' faved' : ''}" type="button" data-id="${book.id}">
            ${favoriteBooks.has(book.id) ? '✓ 已归档' : '加入档案'}
          </button>
        </div>
      </div>
    </article>`).join('');
}

function renderBookStats() {
  const archivedCount = [...favoriteBooks].filter((id) => BOOKS.some((b) => b.id === id)).length;
  const total = document.getElementById('bk-total');
  if (total) total.textContent = BOOKS.length;
  const archived = document.getElementById('bk-archived');
  if (archived) archived.textContent = archivedCount;
  const open = document.getElementById('bk-open');
  if (open) open.textContent = BOOKS.length - archivedCount;
}

/* ---------- 友情链接页 ---------- */

function renderLinks() {
  const container = document.getElementById('links-list');
  if (!container) return;

  container.innerHTML = LINKS.map((link, index) => {
    const domain = link.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    return `
      <a class="link-card" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        <span class="link-avatar">${escapeHtml(link.initial)}</span>
        <span class="link-body">
          <span class="link-node-id">NODE-${String(index + 1).padStart(3, '0')} // 通信节点</span>
          <span class="link-name">${escapeHtml(link.name)}</span>
          <span class="link-desc">${escapeHtml(link.desc)}</span>
          <span class="link-meta">
            <span class="link-type">${escapeHtml(link.type)}</span>
            <span class="link-domain">${escapeHtml(domain)}</span>
            <span class="link-status"><i class="signal-dot ok"></i>已连接</span>
          </span>
          <span class="link-open">访问节点 →</span>
        </span>
      </a>`;
  }).join('');
}

/* ---------- 星链中继网络（友链） ---------- */

function renderRelayNetwork() {
  const wrap = document.getElementById('relay-network');
  if (!wrap) return;
  const cx = 380;
  const cy = 230;
  const r = 160;
  const nodes = LINKS.map((link, i) => {
    const angle = (Math.PI * 2 * i) / LINKS.length - Math.PI / 2;
    return {
      ...link,
      i,
      x: Math.round(cx + r * Math.cos(angle)),
      y: Math.round(cy + r * Math.sin(angle)),
      id: `NODE-${String(i + 1).padStart(3, '0')}`
    };
  });
  const items = nodes
    .map(
      (n) => `
        <g class="relay-item" data-i="${n.i}" tabindex="0" role="button" aria-label="节点 ${n.id} ${n.name}">
          <line x1="${cx}" y1="${cy}" x2="${n.x}" y2="${n.y}"/>
          <circle cx="${n.x}" cy="${n.y}" r="13"/>
          <text class="node-letter" x="${n.x}" y="${n.y + 4}" text-anchor="middle">${escapeHtml(n.initial)}</text>
          <text class="node-label" x="${n.x}" y="${n.y + 27}" text-anchor="middle">${escapeHtml(n.name)}</text>
        </g>`
    )
    .join('');
  wrap.innerHTML = `
    <svg viewBox="0 0 760 460" role="img" aria-label="轨道通信节点图">
      <circle class="relay-ring" cx="${cx}" cy="${cy}" r="${r + 22}"/>
      <circle class="relay-ring" cx="${cx}" cy="${cy}" r="${r + 46}"/>
      <g class="relay-center">
        <circle cx="${cx}" cy="${cy}" r="36"/>
        <text x="${cx}" y="${cy - 3}" text-anchor="middle">DEVLOG</text>
        <text class="center-sub" x="${cx}" y="${cy + 13}" text-anchor="middle">个人轨道空间站</text>
      </g>
      ${items}
    </svg>`;
  wrap.dataset.nodes = JSON.stringify(nodes);

  const select = (i) => {
    document.querySelectorAll('.relay-item').forEach((g, idx) => g.classList.toggle('active', idx === i));
    const node = nodes[i];
    const body = document.getElementById('relay-info-body');
    const visit = document.getElementById('relay-visit');
    if (body && node) {
      body.innerHTML = `
        <div><dt>节点编号</dt><dd>${node.id}</dd></div>
        <div><dt>网站名称</dt><dd>${escapeHtml(node.name)}</dd></div>
        <div><dt>类型</dt><dd>${escapeHtml(node.type)}</dd></div>
        <div><dt>域名</dt><dd>${escapeHtml(node.url.replace(/^https?:\/\//, '').replace(/\/.*$/, ''))}</dd></div>
        <div><dt>简介</dt><dd>${escapeHtml(node.desc)}</dd></div>
        <div><dt>通信状态</dt><dd class="stat-ok"><i class="signal-dot ok"></i>已连接</dd></div>`;
    }
    if (visit && node) visit.href = node.url;
  };

  wrap.addEventListener('click', (e) => {
    const g = e.target.closest('.relay-item');
    if (g) select(Number(g.dataset.i));
  });
  wrap.addEventListener('keydown', (e) => {
    const g = e.target.closest('.relay-item');
    if (g && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      select(Number(g.dataset.i));
    }
  });
}

/* ---------- 通用搜索（文章列表与指令面板共用） ---------- */

function searchPosts(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [...POSTS];
  return POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

function searchBooks(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [...BOOKS];
  return BOOKS.filter(
    (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.desc.toLowerCase().includes(q)
  );
}

function searchLinks(query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [...LINKS];
  return LINKS.filter(
    (l) => l.name.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q) || l.type.includes(query.trim())
  );
}

/* ---------- 任务日志数据库（文章列表页） ---------- */

const logState = { query: '', category: null, sort: 'newest' };

function renderFeaturedLog(post) {
  const wrap = document.getElementById('featured-log');
  if (!wrap) return;
  wrap.innerHTML = `
    <a class="featured-log" href="article.html?id=${post.id}">
      <div class="featured-log-cover">
        <span class="mission-id">LOG / ${logId(post)}</span>
        <img src="${post.cover}" alt="${escapeHtml(post.title)}" loading="lazy">
      </div>
      <div class="featured-log-info">
        <span class="tag">${escapeHtml(post.category)}</span>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.summary)}</p>
        <span class="featured-log-meta">${post.date.replace(/-/g, '.')} · 约 ${post.readTime} 分钟 · <i class="signal-dot ok"></i>已归档</span>
        <span class="card-more">打开任务日志 →</span>
      </div>
    </a>`;
}

function renderLogRows(list) {
  const wrap = document.getElementById('log-list');
  if (!wrap) return;
  wrap.innerHTML = list
    .map(
      (post) => `
        <a class="log-row" href="article.html?id=${post.id}">
          <span class="log-row-id">${logId(post)}</span>
          <span class="log-row-main">
            <span class="log-row-title">${escapeHtml(post.title)}</span>
            <span class="log-row-summary">${escapeHtml(post.summary)}</span>
            <span class="log-row-meta">${escapeHtml(post.category)} · ${post.date.replace(/-/g, '.')} · 约 ${post.readTime} 分钟 · <i class="signal-dot ok"></i>已归档</span>
          </span>
          <span class="log-row-open">打开 →</span>
        </a>`
    )
    .join('');
}

function renderLogDatabase() {
  let list = searchPosts(logState.query);
  if (logState.category) list = list.filter((p) => p.category === logState.category);
  list = sortByDateDesc(list);
  if (logState.sort === 'oldest') list.reverse();

  renderFeaturedLog(list[0]);
  renderLogRows(list.slice(1));

  const countEl = document.getElementById('log-count');
  if (countEl) countEl.textContent = `已找到 ${list.length} 条日志`;
  document.querySelectorAll('.sort-btn').forEach((btn) => {
    const active = btn.dataset.sort === logState.sort;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function initLogDatabase() {
  const catWrap = document.getElementById('log-cats');
  if (!catWrap) return;

  const cats = [...new Set(POSTS.map((p) => p.category))];
  const chips = [
    `<button class="sort-btn cat-btn active" type="button" data-cat="" aria-pressed="true">全部</button>`
  ].concat(
    cats.map(
      (c) => `<button class="sort-btn cat-btn" type="button" data-cat="${escapeHtml(c)}" aria-pressed="false">${escapeHtml(c)}</button>`
    )
  );
  catWrap.innerHTML = chips.join('');

  const statTotal = document.getElementById('stat-log-total');
  if (statTotal) statTotal.textContent = POSTS.length;
  const statCats = document.getElementById('stat-log-cats');
  if (statCats) statCats.textContent = cats.length;
  const statSync = document.getElementById('stat-log-sync');
  if (statSync) statSync.textContent = sortByDateDesc(POSTS)[0].date.slice(5).replace('-', '.');

  const search = document.getElementById('log-search');
  if (search) {
    search.addEventListener('input', () => {
      logState.query = search.value;
      renderLogDatabase();
    });
  }

  document.querySelectorAll('.sort-btn[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      logState.sort = btn.dataset.sort;
      renderLogDatabase();
    });
  });
  catWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    logState.category = btn.dataset.cat || null;
    document.querySelectorAll('.cat-btn').forEach((b) => {
      const active = b === btn;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    renderLogDatabase();
  });

  renderLogDatabase();
}

/* ---------- 轨道补给舱（实验舱） ---------- */

const order = new Map();

function renderMenu() {
  const container = document.getElementById('menu-list');
  if (!container) return;

  container.innerHTML = MENU.map((dish, index) => {
    const qty = order.get(dish.id) || 0;
    return `
      <article class="dish-card">
        <span class="dish-no">补给编号 ${String(index + 1).padStart(2, '0')}</span>
        <img class="dish-img" src="images/placeholder.svg" alt="菜品图片占位" loading="lazy">
        <div class="dish-body">
          <h3 class="dish-name">${escapeHtml(dish.name)}</h3>
          <p class="dish-desc">${escapeHtml(dish.desc)}</p>
          <div class="dish-footer">
            <span class="dish-price">¥${dish.price}</span>
            ${qty > 0
              ? `<span class="qty-control">
                  <button class="qty-btn qty-minus" type="button" data-id="${dish.id}" aria-label="减少数量">−</button>
                  <span class="qty-num">${qty}</span>
                  <button class="qty-btn qty-plus" type="button" data-id="${dish.id}" aria-label="增加数量">＋</button>
                </span>`
              : `<button class="add-btn" type="button" data-id="${dish.id}">加入清单</button>`}
          </div>
        </div>
      </article>`;
  }).join('');
}

function renderManifestRows() {
  const targets = [document.getElementById('manifest-body'), document.getElementById('sheet-body')].filter(Boolean);
  if (!targets.length) return;
  const rows = [...order.entries()]
    .map(([id, qty]) => {
      const dish = MENU.find((d) => d.id === id);
      if (!dish) return '';
      return `
        <div class="manifest-row">
          <span class="manifest-name">${escapeHtml(dish.name)}</span>
          <span class="manifest-price">¥${dish.price}</span>
          <span class="qty-control">
            <button class="qty-btn qty-minus" type="button" data-id="${dish.id}" aria-label="减少数量">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn qty-plus" type="button" data-id="${dish.id}" aria-label="增加数量">＋</button>
          </span>
          <span class="manifest-subtotal">¥${dish.price * qty}</span>
          <button class="manifest-remove" type="button" data-id="${id}" aria-label="删除该项目">×</button>
        </div>`;
    })
    .join('');
  targets.forEach((el) => {
    el.innerHTML = rows || '<p class="manifest-empty">清单为空，请选择补给项目。</p>';
  });
}

function renderSupplyStats() {
  const items = order.size;
  const qty = [...order.values()].reduce((a, b) => a + b, 0);
  let total = 0;
  order.forEach((n, id) => {
    const d = MENU.find((x) => x.id === id);
    if (d) total += d.price * n;
  });
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  set('sup-total', MENU.length);
  set('sup-items', items);
  set('sup-qty', qty);
  set('sup-cost', '¥' + total);
  set('m-items', items);
  set('m-qty', qty);
  set('m-cost', '¥' + total);
  const totalEl = document.getElementById('manifest-total');
  if (totalEl) totalEl.textContent = '¥' + total;
  const sheetTotal = document.getElementById('sheet-total');
  if (sheetTotal) sheetTotal.textContent = '¥' + total;
  const bar = document.getElementById('supply-bar-label');
  if (bar) bar.textContent = `补给清单 · ${items} 项 · ¥${total}`;
  const status = document.getElementById('sup-status');
  if (status) {
    status.textContent = items ? '● 配置中' : '● 等待配置';
    status.classList.toggle('configuring', items > 0);
  }
}

function updateOrder() {
  renderMenu();
  renderManifestRows();
  renderSupplyStats();
}

/* ---------- 文章详情页 ---------- */

function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      switch (block.type) {
        case 'h2':
          return `<h2>${escapeHtml(block.text)}</h2>`;
        case 'h3':
          return `<h3>${escapeHtml(block.text)}</h3>`;
        case 'p':
          return `<p>${escapeHtml(block.text)}</p>`;
        case 'list':
          return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
        case 'quote':
          return `<blockquote><p>${escapeHtml(block.text)}</p></blockquote>`;
        case 'code':
          return `
            <div class="code-block">
              <div class="code-header">
                <span class="code-lang">代码模块 / ${escapeHtml(block.lang || 'code')}</span>
                <button class="copy-btn" type="button">复制</button>
              </div>
              <pre><code>${escapeHtml(block.code)}</code></pre>
            </div>`;
        case 'img':
          return `
            <figure class="content-img">
              <img src="${block.src}" alt="${escapeHtml(block.alt || '')}" loading="lazy">
              ${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''}
            </figure>`;
        default:
          return '';
      }
    })
    .join('');
}

function renderArticlePage() {
  const container = document.getElementById('post-content');
  if (!container) return;

  const params = new URLSearchParams(location.search);
  const post = POSTS.find((item) => item.id === params.get('id'));

  if (!post) {
    container.innerHTML = `
      <div class="article-error">
        <h1>文章不存在或已被移除</h1>
        <p>你可以回到<a href="index.html">首页</a>查看最新文章。</p>
      </div>`;
    return;
  }

  document.title = `${post.title} - DEVLOG`;

  const sorted = sortByDateDesc(POSTS);
  const index = sorted.findIndex((item) => item.id === post.id);
  const prev = sorted[index + 1];
  const next = sorted[index - 1];
  const related = buildRelated(post);

  const jumpHtml = `
    <nav class="log-jump" aria-label="任务跳转">
      ${prev ? `<a class="jump prev" href="article.html?id=${prev.id}"><span class="jump-label">上一份日志</span><span class="jump-id">LOG / ${logId(prev)}</span><span class="jump-title">${escapeHtml(prev.title)}</span></a>` : '<span></span>'}
      ${next ? `<a class="jump next" href="article.html?id=${next.id}"><span class="jump-label">下一份日志</span><span class="jump-id">LOG / ${logId(next)}</span><span class="jump-title">${escapeHtml(next.title)}</span></a>` : ''}
    </nav>`;

  const relatedHtml = `
    <section class="related-logs">
      <h2>相关任务日志 <span class="hud-label">RELATED</span></h2>
      <div class="related-grid">
        ${related.map((p) => `
          <a class="related-card" href="article.html?id=${p.id}">
            <span class="mission-id">LOG / ${logId(p)}</span>
            <span class="related-title">${escapeHtml(p.title)}</span>
            <span class="related-meta">${escapeHtml(p.category)} · ${p.date.replace(/-/g, '.')}</span>
          </a>`).join('')}
      </div>
    </section>`;

  container.innerHTML = `
    <article class="reader" data-reveal>
      <header class="reader-header">
        <div class="reader-head-left">
          <div class="article-eyebrow">任务日志 / ${logId(post)}</div>
          <h1>${escapeHtml(post.title)}</h1>
          <p class="reader-summary">${escapeHtml(post.summary)}</p>
          <div class="reader-tags">${post.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        </div>
        <dl class="reader-data">
          <div><dt>作者</dt><dd>${escapeHtml(SITE.author)}</dd></div>
          <div><dt>记录时间</dt><dd>${post.date.replace(/-/g, '.')}</dd></div>
          <div><dt>分类</dt><dd>${escapeHtml(post.category)}</dd></div>
          <div><dt>预计阅读</dt><dd>${post.readTime} 分钟</dd></div>
          <div><dt>状态</dt><dd class="stat-ok"><i class="signal-dot ok"></i>已归档</dd></div>
        </dl>
      </header>
      <figure class="reader-cover">
        <img src="${post.cover}" alt="${escapeHtml(post.title)}" loading="lazy">
        <figcaption aria-hidden="true">
          <span class="mission-id">${logId(post)}</span>
          <span class="cover-coords">N 31.2° · E 121.4°</span>
        </figcaption>
      </figure>
      <div class="reader-layout">
        <div class="reader-body" id="reader-body">${renderBlocks(post.content)}</div>
        <aside class="reader-toc" id="reader-toc" aria-label="本日志目录">
          <button class="toc-toggle" id="toc-toggle" type="button" aria-expanded="false">本文目录</button>
          <nav>
            <h3>本日志目录</h3>
            <ol id="toc-list"></ol>
            <div class="toc-progress"><span>阅读进度</span><b id="log-progress">0%</b></div>
          </nav>
        </aside>
      </div>
      ${jumpHtml}
      ${relatedHtml}
    </article>`;

  buildToc();
  initTocSpy();
}

function buildRelated(post) {
  const same = POSTS.filter((p) => p.id !== post.id && p.category === post.category);
  const rest = sortByDateDesc(POSTS.filter((p) => p.id !== post.id && p.category !== post.category));
  return [...same, ...rest].slice(0, 3);
}

function buildToc() {
  const list = document.getElementById('toc-list');
  const body = document.getElementById('reader-body');
  if (!list || !body) return;
  const headings = [...body.querySelectorAll('h2, h3')];
  list.innerHTML = headings
    .map((h, i) => {
      h.id = 'toc-' + i;
      const num = String(i + 1).padStart(2, '0');
      return `<li class="${h.tagName === 'H3' ? 'toc-h3' : ''}"><a href="#toc-${i}"><span class="toc-num">${num}</span>${escapeHtml(h.textContent)}</a></li>`;
    })
    .join('');
}

function initTocSpy() {
  const body = document.getElementById('reader-body');
  const toc = document.getElementById('reader-toc');
  if (!body || !toc) return;
  const links = [...document.querySelectorAll('#toc-list a')];
  const headings = [...body.querySelectorAll('h2, h3')];
  const progress = document.getElementById('log-progress');

  const update = () => {
    const pos = window.scrollY + 96;
    let current = -1;
    headings.forEach((h, i) => {
      if (h.getBoundingClientRect().top + window.scrollY <= pos) current = i;
    });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
    const top = body.getBoundingClientRect().top + window.scrollY;
    const p = Math.min(Math.max(((window.scrollY - top) / Math.max(body.offsetHeight - window.innerHeight, 1)) * 100, 0), 100);
    if (progress) progress.textContent = Math.round(p) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();

  const toggle = document.getElementById('toc-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = toc.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
}

/* ---------- 代码复制 ---------- */

async function copyCode(button) {
  const block = button.closest('.code-block');
  const code = block ? block.querySelector('pre code') : null;
  if (!code) return;

  const text = code.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  const original = button.textContent;
  button.textContent = '已复制 ✓';
  button.classList.add('copied');
  setTimeout(() => {
    button.textContent = original;
    button.classList.remove('copied');
  }, 1600);
}

document.addEventListener('click', (event) => {
  const copyButton = event.target.closest('.copy-btn');
  if (copyButton) copyCode(copyButton);

  const favButton = event.target.closest('.fav-btn');
  if (favButton) toggleFavorite(favButton);

  const addButton = event.target.closest('.add-btn');
  if (addButton) {
    const id = addButton.dataset.id;
    order.set(id, 1);
    updateOrder();
    return;
  }

  const plusButton = event.target.closest('.qty-plus');
  if (plusButton) {
    const id = plusButton.dataset.id;
    order.set(id, (order.get(id) || 0) + 1);
    updateOrder();
    return;
  }

  const minusButton = event.target.closest('.qty-minus');
  if (minusButton) {
    const id = minusButton.dataset.id;
    const next = (order.get(id) || 0) - 1;
    if (next <= 0) order.delete(id);
    else order.set(id, next);
    updateOrder();
    return;
  }

  const removeButton = event.target.closest('.manifest-remove, .remove-item');
  if (removeButton) {
    order.delete(removeButton.dataset.id);
    updateOrder();
    return;
  }

  if (event.target.closest('#clear-order')) {
    order.clear();
    updateOrder();
  }

  if (event.target.closest('#submit-order, #submit-order-sheet')) {
    const toast = document.getElementById('order-toast');
    const items = [...order.entries()];
    let total = 0;
    items.forEach(([id, qty]) => {
      const dish = MENU.find((d) => d.id === id);
      if (dish) total += dish.price * qty;
    });
    const count = items.reduce((sum, [, qty]) => sum + qty, 0);
    if (!items.length) {
      if (toast) showToast('请先添加补给项目，再确认补给');
      return;
    }
    const status = document.getElementById('sup-status');
    if (status) status.textContent = '● 补给已确认';
    showToast(`补给确认成功！共 ${count} 份补给项目，合计 ¥${total}`);
    setTimeout(() => {
      if (status && order.size) status.textContent = '● 配置中';
    }, 2600);
    const sheet = document.getElementById('supply-sheet');
    if (sheet && sheet.open) sheet.close();
  }

  if (event.target.closest('#supply-bar-open')) {
    const sheet = document.getElementById('supply-sheet');
    if (sheet && typeof sheet.showModal === 'function') sheet.showModal();
  }

  if (event.target.closest('#sheet-close')) {
    const sheet = document.getElementById('supply-sheet');
    if (sheet) sheet.close();
  }
});

function showToast(text) {
  const toast = document.getElementById('order-toast');
  if (!toast) return;
  toast.textContent = text;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 350);
  }, 2600);
}

/* ---------- 主题切换（白 / 黑） ---------- */

function initTheme() {
  const root = document.documentElement;
  let stored = null;
  try {
    stored = localStorage.getItem('devlog-theme');
  } catch (err) {
    stored = null;
  }
  root.dataset.theme = stored === 'dark' || stored === 'light' ? stored : 'light';

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('title', '切换白昼 / 深空模式');
    toggle.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem('devlog-theme', next);
      } catch (err) {
        // 忽略存储失败
      }
    });
  }
}

initTheme();

/* ---------- 系统状态栏 / 移动菜单 / 导航高亮 ---------- */

function initChrome() {
  const full = document.getElementById('status-clock');
  const short = document.getElementById('status-clock-short');
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const d = new Date();
    const hms = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    if (full) full.textContent = hms;
    if (short) short.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  tick();
  setInterval(tick, 1000);

  const mobileMenu = document.getElementById('mobile-menu');
  const navToggle = document.getElementById('nav-toggle');
  if (mobileMenu && navToggle) {
    mobileMenu.innerHTML = '';
    document.querySelectorAll('.main-nav .nav-link').forEach((link) => {
      const a = document.createElement('a');
      a.href = link.getAttribute('href');
      a.innerHTML = link.innerHTML;
      mobileMenu.appendChild(a);
    });
    navToggle.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        mobileMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const hrefMap = {
    home: 'index.html',
    articles: 'articles.html',
    books: 'books.html',
    menu: 'menu.html',
    links: 'links.html',
    structure: 'structure.html',
    about: 'about.html',
    article: 'articles.html'
  };
  const target = hrefMap[document.body.dataset.page];
  if (target) {
    document.querySelectorAll('.main-nav .nav-link, #mobile-menu a').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === target);
    });
  }
}

/* ---------- Canvas 星空 ---------- */

const StarField = (() => {
  let canvas = null;
  let ctx = null;
  let stars = [];
  let running = false;
  let rafId = 0;

  function build() {
    canvas = document.getElementById('starfield');
    if (!canvas || !canvas.getContext) return;
    ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(110, Math.round((window.innerWidth * window.innerHeight) / 16000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.3 + Math.random() * 1.1,
      v: 0.03 + Math.random() * 0.09,
      tw: Math.random() * Math.PI * 2,
      sp: 0.004 + Math.random() * 0.01
    }));
  }

const rgb = () =>
    document.documentElement.dataset.theme === 'light' ? '49, 104, 217' : '237, 248, 255';

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const light = document.documentElement.dataset.theme !== 'dark';
    for (const s of stars) {
      s.tw += s.sp;
      const alpha = light ? 0.26 : 0.2 + Math.abs(Math.sin(s.tw)) * 0.5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb()}, ${alpha})`;
      ctx.fill();
    }
  }

  function frame() {
    for (const s of stars) {
      s.y -= s.v;
      if (s.y < -2) {
        s.y = window.innerHeight + 2;
        s.x = Math.random() * window.innerWidth;
      }
    }
    draw();
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    build();
    if (!ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw();
      return;
    }
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => {
    build();
    if (running) draw();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && running) {
      cancelAnimationFrame(rafId);
      running = false;
    } else if (!document.hidden && !running && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      running = true;
      rafId = requestAnimationFrame(frame);
    }
  });

  return { start };
})();

/* ---------- 全局指令面板（Ctrl / Cmd + K） ---------- */

function initCommandPalette() {
  const pageItems = [
    { zh: '首页', en: 'COMMAND', href: 'index.html' },
    { zh: '文章', en: 'LOGS', href: 'articles.html' },
    { zh: '图书', en: 'ARCHIVE', href: 'books.html' },
    { zh: '实验舱', en: 'LAB', href: 'menu.html' },
    { zh: '友链', en: 'RELAY', href: 'links.html' },
    { zh: '系统结构', en: 'SYSTEM', href: 'structure.html' },
    { zh: '关于我', en: 'PROFILE', href: 'about.html' }
  ];

  const overlay = document.createElement('div');
  overlay.className = 'palette-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', '指令面板');
  overlay.innerHTML = `
    <div class="palette-panel">
      <div class="palette-head">
        <span class="hud-label">COMMAND INTERFACE</span>
        <input class="palette-input" id="palette-input" type="text" placeholder="搜索文章、页面或指令……" autocomplete="off">
        <span class="palette-kbd">ESC</span>
      </div>
      <div class="palette-list" id="palette-list"></div>
    </div>`;
  document.body.appendChild(overlay);

  const input = overlay.querySelector('#palette-input');
  const list = overlay.querySelector('#palette-list');
  let selected = 0;

  function itemHtml(zh, en, href, action) {
    return `<div class="palette-item" data-href="${href || ''}" data-action="${action || ''}"><span>${escapeHtml(zh)}</span><span class="palette-en">${escapeHtml(en)}</span></div>`;
  }

  function render() {
    const q = input.value.trim().toLowerCase();
    const pages = pageItems.filter(
      (p) => !q || p.zh.includes(input.value.trim()) || p.en.toLowerCase().includes(q)
    );
    const posts = q ? searchPosts(q).slice(0, 5) : sortByDateDesc(POSTS).slice(0, 3);
    const books = q ? searchBooks(q).slice(0, 4) : [];
    const links = q ? searchLinks(q).slice(0, 4) : [];
    const html = [];
    if (pages.length) {
      html.push('<div class="palette-section">页面 // PAGES</div>');
      pages.forEach((p) => html.push(itemHtml(p.zh, p.en, p.href)));
    }
    if (posts.length) {
      html.push('<div class="palette-section">任务日志 // LOGS</div>');
      posts.forEach((p) => html.push(itemHtml(p.title, 'LOG / ' + logId(p), 'article.html?id=' + p.id)));
    }
    if (books.length) {
      html.push('<div class="palette-section">知识档案 // ARCHIVE</div>');
      books.forEach((b, i) => html.push(itemHtml(b.title, 'BOOK-00' + (i + 1), 'books.html')));
    }
    if (links.length) {
      html.push('<div class="palette-section">通信节点 // RELAY</div>');
      links.forEach((l, i) => html.push(itemHtml(l.name, 'NODE-00' + (i + 1), l.url)));
    }
    html.push('<div class="palette-section">指令 // COMMANDS</div>');
    html.push(itemHtml('切换主题', 'TOGGLE THEME', null, 'theme'));
    list.innerHTML = html.join('');
    selected = 0;
    highlight();
  }

  function highlight() {
    [...list.querySelectorAll('.palette-item')].forEach((el, i) => el.classList.toggle('selected', i === selected));
  }

  function activate(el) {
    if (!el) return;
    if (el.dataset.action === 'theme') {
      const toggle = document.getElementById('theme-toggle');
      if (toggle) toggle.click();
      close();
      return;
    }
    if (el.dataset.href) location.href = el.dataset.href;
  }

  function open() {
    overlay.classList.add('open');
    input.value = '';
    render();
    input.focus();
  }

  function close() {
    overlay.classList.remove('open');
  }

  list.addEventListener('click', (e) => {
    const el = e.target.closest('.palette-item');
    if (el) activate(el);
  });
  input.addEventListener('input', render);
  input.addEventListener('keydown', (e) => {
    const items = [...list.querySelectorAll('.palette-item')];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selected = Math.min(selected + 1, Math.max(items.length - 1, 0));
      highlight();
      if (items[selected]) items[selected].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selected = Math.max(selected - 1, 0);
      highlight();
      if (items[selected]) items[selected].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      activate(items[selected]);
    }
  });
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('open')) close();
      else open();
    }
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      close();
      input.blur();
    }
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
}

/* ---------- 初始化 ---------- */

document.addEventListener('DOMContentLoaded', () => {
  initChrome();
  StarField.start();
  initCommandPalette();

  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top');
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.prepend(scrollProgress);

  if (header || backToTop) {
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 4);
      if (backToTop) backToTop.classList.toggle('visible', window.scrollY > window.innerHeight);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = maxScroll > 0 ? `${(window.scrollY / maxScroll) * 100}%` : '0%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  const page = document.body.dataset.page;
  if (page === 'home') {
    renderHome();
    renderCodeWindow();
    initStatCounters();
  }
  if (page === 'articles') {
    initLogDatabase();
  }
  if (page === 'books') {
    loadFavorites();
    renderBookStats();
    renderBooks();
    const searchInput = document.getElementById('book-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        bookQuery = searchInput.value;
        renderBooks();
      });
    }
    const filterWrap = document.getElementById('book-filters');
    if (filterWrap) {
      filterWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('.book-filter');
        if (!btn) return;
        bookFilter = btn.dataset.filter;
        document.querySelectorAll('.book-filter').forEach((b) => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', String(active));
        });
        renderBooks();
      });
    }
  }
  if (page === 'links') {
    renderLinks();
    renderRelayNetwork();
    const rlTotal = document.getElementById('rl-total');
    if (rlTotal) rlTotal.textContent = LINKS.length;
  }
  if (page === 'menu') {
    renderMenu();
    updateOrder();
  }
  if (page === 'article') {
    renderArticlePage();
  }

  initHeroParallax();

  // 滚动浮现动画
  const revealItems = document.querySelectorAll('[data-reveal]');
  if (revealItems.length) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((el) => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealItems.forEach((el) => revealObserver.observe(el));
    }
  }
});
