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
  }
];

/* ---------- 模拟图书数据（图书列表页） ---------- */

const BOOKS = [
  {
    id: 'js-red-book',
    title: 'JavaScript 高级程序设计（第 4 版）',
    author: '马特·弗里斯比',
    desc: 'JavaScript 开发者案头必备的权威指南，覆盖语言核心与最新特性。',
    emoji: '📕'
  },
  {
    id: 'css-secrets',
    title: 'CSS 揭秘',
    author: 'Lea Verou',
    desc: '47 个实用技巧，带你重新认识 CSS 的可能性。',
    emoji: '📘'
  },
  {
    id: 'csapp',
    title: '深入理解计算机系统（原书第 3 版）',
    author: "Randal E. Bryant / David R. O'Hallaron",
    desc: '从程序员视角理解计算机底层，构建完整知识体系。',
    emoji: '📗'
  },
  {
    id: 'clean-code',
    title: '代码整洁之道',
    author: 'Robert C. Martin',
    desc: '如何写出易读、易维护的代码，软件工程师必读。',
    emoji: '📙'
  },
  {
    id: 'design-patterns',
    title: '设计模式：可复用面向对象软件的基础',
    author: 'Erich Gamma 等',
    desc: '四位作者合著的经典之作，23 种设计模式的源头。',
    emoji: '📓'
  }
];

/* ---------- 模拟菜单数据（在线点菜单页） ---------- */

const MENU = [
  { id: 'gongbao-jiding', name: '宫保鸡丁', price: 28, desc: '经典川菜，鸡丁嫩滑，花生香脆，微辣下饭。', emoji: '🥘' },
  { id: 'yuxiang-rous', name: '鱼香肉丝', price: 26, desc: '咸甜酸辣兼备，肉丝配木耳笋丝，超级下饭。', emoji: '🥢' },
  { id: 'mapo-doufu', name: '麻婆豆腐', price: 22, desc: '麻辣鲜香，嫩豆腐配上肉末与豆瓣酱。', emoji: '🌶️' },
  { id: 'tangcu-liji', name: '糖醋里脊', price: 32, desc: '外酥里嫩，酸甜适口，大人小孩都爱。', emoji: '🍖' },
  { id: 'qingchao-shishu', name: '清炒时蔬', price: 18, desc: '当季蔬菜，清淡爽口，解腻首选。', emoji: '🥬' },
  { id: 'suanla-tudousi', name: '酸辣土豆丝', price: 16, desc: '酸辣开胃，土豆丝爽脆，下饭神器。', emoji: '🥔' },
  { id: 'fanqie-dantang', name: '番茄鸡蛋汤', price: 12, desc: '家常味道，番茄酸甜，鸡蛋滑嫩。', emoji: '🍅' },
  { id: 'yangzhou-chaofan', name: '扬州炒饭', price: 20, desc: '粒粒分明，虾仁、火腿、鸡蛋配料丰富。', emoji: '🍚' }
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

function renderPostCard(post) {
  return `
    <article class="post-card">
      <a class="card-cover" href="article.html?id=${post.id}">
        <img src="${post.cover}" alt="${escapeHtml(post.title)}" loading="lazy">
      </a>
      <div class="card-body">
        <div class="card-meta">
          <a class="tag" href="articles.html#category=${encodeURIComponent(post.category)}">${escapeHtml(post.category)}</a>
          <time datetime="${post.date}">${post.date}</time>
          <span class="read-time">${post.readTime} 分钟</span>
        </div>
        <h2 class="card-title"><a href="article.html?id=${post.id}">${escapeHtml(post.title)}</a></h2>
        <p class="card-summary">${escapeHtml(post.summary)}</p>
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
  const featured = document.getElementById('featured-list');
  if (featured) {
    featured.innerHTML = sortByDateDesc(POSTS).slice(0, 3).map(renderPostCard).join('');
  }

  const latest = document.getElementById('latest-list');
  if (latest) {
    latest.innerHTML = sortByDateDesc(POSTS)
      .slice(0, 5)
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

  const statPosts = document.getElementById('stat-posts');
  if (statPosts) statPosts.textContent = POSTS.length;
  const statCats = document.getElementById('stat-cats');
  if (statCats) statCats.textContent = CATEGORIES.length;
}

/* ---------- 图书列表页 ---------- */

let bookQuery = '';
const favoriteBooks = new Set();

function toggleFavorite(button) {
  const id = button.dataset.id;
  if (favoriteBooks.has(id)) {
    favoriteBooks.delete(id);
  } else {
    favoriteBooks.add(id);
  }
  const faved = favoriteBooks.has(id);
  button.classList.toggle('faved', faved);
  button.textContent = faved ? '已收藏' : '收藏';
}

function renderBooks() {
  const container = document.getElementById('book-list');
  if (!container) return;

  const query = bookQuery.trim().toLowerCase();
  const filtered = query
    ? BOOKS.filter((book) => book.title.toLowerCase().includes(query))
    : BOOKS;

  if (filtered.length === 0) {
    container.innerHTML = '<div class="list-empty">没有找到匹配的图书，换个关键词试试吧。</div>';
    return;
  }

  container.innerHTML = filtered.map((book, index) => `
    <article class="book-card">
      <div class="book-cover book-cover-${(index % 5) + 1}"><span class="book-emoji">${book.emoji}</span></div>
      <div class="book-body">
        <h3 class="book-title">${escapeHtml(book.title)}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <p class="book-desc">${escapeHtml(book.desc)}</p>
        <div class="book-footer">
          <button class="fav-btn${favoriteBooks.has(book.id) ? ' faved' : ''}" type="button" data-id="${book.id}">
            ${favoriteBooks.has(book.id) ? '已收藏' : '收藏'}
          </button>
        </div>
      </div>
    </article>`).join('');
}

/* ---------- 在线点菜单 ---------- */

const order = new Map();

function renderMenu() {
  const container = document.getElementById('menu-list');
  if (!container) return;

  container.innerHTML = MENU.map((dish, index) => {
    const qty = order.get(dish.id) || 0;
    return `
      <article class="dish-card">
        <div class="dish-cover dish-cover-${(index % 4) + 1}"><span class="dish-emoji">${dish.emoji}</span></div>
        <div class="dish-body">
          <h3 class="dish-name">${escapeHtml(dish.name)}</h3>
          <p class="dish-desc">${escapeHtml(dish.desc)}</p>
          <div class="dish-footer">
            <span class="dish-price">¥${dish.price}</span>
            <button class="add-btn" type="button" data-id="${dish.id}">${qty ? `加入订单（${qty}）` : '加入订单'}</button>
          </div>
        </div>
      </article>`;
  }).join('');
}

function renderOrder() {
  const body = document.getElementById('order-body');
  const wrap = document.getElementById('order-table-wrap');
  const empty = document.getElementById('order-empty');
  if (!body) return;

  const hasItems = order.size > 0;
  if (wrap) wrap.hidden = !hasItems;
  if (empty) empty.hidden = hasItems;

  let total = 0;
  body.innerHTML = [...order.entries()]
    .map(([id, qty]) => {
      const dish = MENU.find((d) => d.id === id);
      if (!dish) return '';
      const subtotal = dish.price * qty;
      total += subtotal;
      return `
        <tr>
          <td>${dish.emoji} ${escapeHtml(dish.name)}</td>
          <td>¥${dish.price}</td>
          <td>${qty}</td>
          <td>¥${subtotal}</td>
          <td><button class="remove-item" type="button" data-id="${id}">移除</button></td>
        </tr>`;
    })
    .join('');

  const totalEl = document.getElementById('order-total');
  if (totalEl) totalEl.textContent = '¥' + total;
}

function updateOrder() {
  renderMenu();
  renderOrder();
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
                <span class="code-lang">${escapeHtml(block.lang || 'code')}</span>
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

  document.title = `${post.title} - ${SITE.name}`;

  const sorted = sortByDateDesc(POSTS);
  const index = sorted.findIndex((item) => item.id === post.id);
  const prev = sorted[index + 1];
  const next = sorted[index - 1];

  const navHtml = `
    <nav class="post-nav" aria-label="上一篇下一篇">
      ${prev ? `<a class="prev" href="article.html?id=${prev.id}"><span class="nav-label">上一篇</span><span class="nav-title">${escapeHtml(prev.title)}</span></a>` : '<span></span>'}
      ${next ? `<a class="next" href="article.html?id=${next.id}"><span class="nav-label">下一篇</span><span class="nav-title">${escapeHtml(next.title)}</span></a>` : ''}
    </nav>`;

  container.innerHTML = `
    <article class="article-card">
      <header class="article-header">
        <div class="article-meta">
          <a class="tag" href="articles.html#category=${encodeURIComponent(post.category)}">${escapeHtml(post.category)}</a>
          <span class="author-line">
            <img src="images/avatar.svg" alt="${escapeHtml(SITE.author)}">
            ${escapeHtml(SITE.author)}
          </span>
          <time datetime="${post.date}">${post.date}</time>
          <span class="read-time">${post.readTime} 分钟</span>
        </div>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="article-meta">
          ${post.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
      </header>
      <div class="article-cover">
        <img src="${post.cover}" alt="${escapeHtml(post.title)}">
      </div>
      <div class="article-body">
        ${renderBlocks(post.content)}
      </div>
      ${navHtml}
    </article>`;
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
  button.textContent = '已复制';
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
    order.set(id, (order.get(id) || 0) + 1);
    updateOrder();
    return;
  }

  const removeButton = event.target.closest('.remove-item');
  if (removeButton) {
    order.delete(removeButton.dataset.id);
    updateOrder();
    return;
  }

  if (event.target.closest('#clear-order')) {
    order.clear();
    updateOrder();
  }
});

/* ---------- 初始化 ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();

  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top');
  if (header || backToTop) {
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 4);
      if (backToTop) backToTop.classList.toggle('visible', window.scrollY > window.innerHeight);
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
  }
  if (page === 'articles') {
    applyCategoryFilter();
    window.addEventListener('hashchange', applyCategoryFilter);
  }
  if (page === 'books') {
    renderBooks();
    const searchInput = document.getElementById('book-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        bookQuery = searchInput.value;
        renderBooks();
      });
    }
  }
  if (page === 'menu') {
    renderMenu();
    renderOrder();
  }
  if (page === 'article') {
    renderArticlePage();
  }
});
