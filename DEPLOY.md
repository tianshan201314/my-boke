# GitHub Pages 部署指南

本博客是纯静态站点（HTML + CSS + 原生 JavaScript，无构建步骤），已附带 GitHub Actions 部署流程，推送代码后即可自动发布。

## 路径检查结果

部署前已对全部 57 处路径引用做了审计：

- 所有本地资源（`css/style.css`、`js/main.js`、`images/...`、页面间跳转）均为**相对路径**，且目标文件全部存在
- 11 处外链（GitHub、Codex、邮箱等）使用完整 `https://` / `mailto:` 地址，不受部署影响
- 站点部署到子路径（`https://<用户名>.github.io/<仓库名>/`）下也能正常访问，无需修改代码

---

## 一、首次部署

### 1. 初始化 Git 并提交（当前项目尚未初始化）

在项目目录 `E:\Course\my_boke` 打开终端执行：

```bash
git init
git add .
git commit -m "feat: 个人技术博客"
git branch -M main
```

### 2. 在 GitHub 新建仓库

1. 登录 GitHub → 右上角 `+` → New repository
2. 仓库名填写英文名（例如 `my-boke`），**可见性选择 Public**（免费版 Pages 要求公开仓库）
3. 不要勾选 "Add a README"（避免与本地内容冲突），点击 Create repository

### 3. 关联远程仓库并推送

```bash
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

### 4. 开启 GitHub Pages（使用 Actions）

1. 打开仓库页面 → `Settings` → 左侧 `Pages`
2. `Build and deployment` 的 **Source** 选择 **GitHub Actions**
3. 无需其他配置，推送时已自动触发 `.github/workflows/deploy.yml`
4. 到 `Actions` 页确认工作流执行成功（约 1-2 分钟）

### 5. 访问站点

```
https://<你的用户名>.github.io/<仓库名>/
```

例如用户名 `linmo`、仓库名 `my-boke`，地址为 `https://linmo.github.io/my-boke/`。

---

## 二、备选方式：从分支部署（不使用 Actions）

如果不想用工作流，也可以让 GitHub 直接发布仓库文件：

1. 仓库 → `Settings` → `Pages`
2. `Source` 选择 **Deploy from a branch**
3. 分支选 `main`，目录选 `/` (root)，点击 Save
4. 等待几分钟后访问同一地址

> 根目录的 `.nojekyll` 空文件用于跳过 Jekyll 处理，保证静态文件原样发布。

---

## 三、日常更新文章

每次新增或修改文章后，执行：

```bash
git add .
git commit -m "docs: 新增文章"
git push
```

推送后 GitHub Actions 会自动重新部署，约 1-2 分钟生效。

---

## 四、自定义域名（可选）

1. 仓库 → `Settings` → `Pages` → 在 `Custom domain` 填入你的域名并保存
2. 在项目根目录新建 `CNAME` 文件，内容只写一行域名（如 `blog.example.com`）
3. 到域名服务商处添加一条 CNAME 记录，指向 `<你的用户名>.github.io`

---

## 五、常见问题

| 问题 | 处理方式 |
| --- | --- |
| 部署后访问 404 | 等待 Actions 完成；确认仓库名与 URL 大小写一致 |
| 图片 / 样式丢失 | 检查是否误加了以 `/` 开头的绝对路径（本项目已全部使用相对路径） |
| 仓库是私有的 | 免费版 GitHub Pages 需要公开仓库，或升级付费方案 |
| 推送被拒绝 | 若远程仓库已初始化 README，先 `git pull --rebase origin main` 再推送 |
