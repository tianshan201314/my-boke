# DevLog - 个人技术博客

一个纯前端（HTML + CSS + 原生 JavaScript）的个人技术博客，无框架、无构建步骤，文章内容以 JavaScript 数组模拟，已部署至 GitHub Pages。

## 在线地址

<https://tianshan201314.github.io/my-boke/>

## 功能

- 首页：独立落地页（Hero 介绍、精选文章、技能展示、最新文章、CTA 横幅）
- 文章列表：双栏布局（7:3），文章卡片网格，支持按分类实时筛选
- 图书列表：5 本推荐书目卡片（书名 / 作者 / 一句话简介），每行 3 个卡片，支持按书名搜索与收藏
- 文章详情：正文渲染（标题 / 段落 / 列表 / 引用 / 可复制的代码块 / 图片），上一篇 / 下一篇导航
- 关于我：个人简介、技能标签、联系方式
- 响应式适配：桌面双栏，移动端单栏（侧边栏下移）
- 吸顶导航（当前页下划线高亮）、右下角返回顶部按钮
- GitHub Actions 自动部署，推送 `main` 即发布

## 目录结构

```text
my_boke/
├── index.html          # 首页（落地页）
├── articles.html       # 文章列表页（列表 + 侧边栏 + 分类筛选）
├── books.html          # 图书列表页
├── article.html        # 文章详情页
├── about.html          # 关于我
├── structure.html      # 项目结构页
├── css/
│   └── style.css       # 全部样式
├── js/
│   └── main.js         # 站点数据（POSTS 数组）+ 渲染逻辑
├── images/             # 封面、头像、流程图等本地资源
├── docs/
│   ├── AI需求文档.md    # 需求文档与验收标准
│   ├── DEPLOY.md       # 部署指南
│   └── 项目结构.md      # 项目结构与文件职责说明
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages 部署工作流
├── README.md
└── .gitignore
```

## 本地运行

直接双击 `index.html` 即可，或启动静态服务：

```bash
python -m http.server 4173
```

然后访问 <http://127.0.0.1:4173>。

## 更新文章

文章数据集中在 `js/main.js` 的 `POSTS` 数组中，修改后提交推送即可自动部署：

```bash
git add .
git commit -m "docs: 更新文章"
git push
```

项目结构与文件职责见 [docs/项目结构.md](docs/项目结构.md)，部署流程见 [docs/DEPLOY.md](docs/DEPLOY.md)，需求与验收标准见 [docs/AI需求文档.md](docs/AI需求文档.md)。
