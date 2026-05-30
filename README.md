<h1 align="center">馃搳 TanStack Ship 鈥?Admin Dashboard Template</h1>

<p align="center">
  <strong>Production-ready operations dashboard built with TanStack Start, React 19, Ant Design 6 & Recharts</strong>
</p>

<p align="center">
  <a href="https://tanstackship.com/" title="TanStack Ship">
    <img src="https://img.shields.io/badge/TanStack_Ship-FF4154?style=for-the-badge&logo=react&logoColor=white" alt="TanStack Ship" />
  </a>
  <a href="https://tanstack.com/start" title="TanStack Start">
    <img src="https://img.shields.io/badge/TanStack-Start-ff6b35?style=flat-square&logo=reactrouter&logoColor=white" alt="TanStack Start" />
  </a>
  <a href="https://react.dev" title="React 19">
    <img src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  </a>
  <a href="https://ant.design/" title="Ant Design 6">
    <img src="https://img.shields.io/badge/Ant_Design-6-1677ff?style=flat-square&logo=antdesign&logoColor=white" alt="Ant Design 6" />
  </a>
  <a href="https://www.typescriptlang.org/" title="TypeScript">
    <img src="https://img.shields.io/badge/TypeScript-6-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/" title="Tailwind CSS">
    <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://vite.dev/" title="Vite">
    <img src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  </a>
  <a href="https://workers.cloudflare.com/" title="Cloudflare Workers">
    <img src="https://img.shields.io/badge/Cloudflare-Workers-f38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Workers" />
  </a>
</p>

<p align="center">
  <a href="https://tanstackship.com/">馃敶 Live Demo</a> 鈥?  <a href="https://tanstackship.com/templates">馃摝 All Templates</a> 鈥?  <a href="https://tanstackship.com/pricing">馃挵 Pricing</a> 鈥?  <a href="https://tanstackship.com/docs">馃摉 Docs</a>
</p>

---

> 馃専 **If you find this template useful, please consider giving it a star!** It helps others discover it.

---

> A polished admin dashboard template for teams 鈥?TanStack Start + Ant Design 6 + Recharts, with overview, approvals, reports, users, integrations, and settings screens ready to customize and ship.
>
> Part of the [TanStack Ship](https://tanstackship.com/) ecosystem: production-ready starters for modern web developers.

## 鉁?Why This Template?

- 馃搳 **6 dashboard screens** 鈥?Overview, Approvals, Reports, Users, Integrations, Settings
- 馃帹 **Ant Design 6 themed** 鈥?Soft, productized visual system via central ConfigProvider
- 馃搱 **Charts included** 鈥?Recharts analytics widgets for trends and reporting
- 鈿?**TanStack Start** 鈥?Full SSR, file-based routing, type-safe navigation
- 馃殌 **Deploy in seconds** 鈥?Cloudflare Workers config included
- 馃敀 **Ready for auth** 鈥?Clean route structure, easy to add authentication layer

## Preview

### Overview

![Operations Hub overview](./images/overview.png)

### Approvals

![Operations Hub approvals](./images/approvals.png)

### Reports

![Operations Hub reports](./images/reports.png)

## Use Cases

This template is best suited for:

- 馃彚 Admin dashboards for SaaS products
- 馃敡 Internal operations workspaces
- 馃搱 Reporting and analytics consoles
- 鉁?Approval and workflow management panels
- 馃懃 Team, access, and integration management

## Tech Stack

| Layer | Choice |
| --- | --- |
| **Framework** | [TanStack Start](https://tanstack.com/start) |
| **Routing** | [TanStack Router](https://tanstack.com/router) (file-based) |
| **UI** | [Ant Design 6](https://ant.design/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Styling** | Tailwind CSS v4 + custom CSS |
| **Build** | Vite 8 |
| **Deploy** | Cloudflare Workers |
| **Language** | TypeScript |
| **Testing** | Vitest |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ship-tanstack/dashboard-01.git
cd dashboard-01

# Install dependencies
corepack enable
corepack pnpm@10 install

# Start dev server (http://localhost:3000)
corepack pnpm@10 dev

# Production build
corepack pnpm@10 build

# Deploy to Cloudflare
corepack pnpm@10 deploy
```

## Route Structure

| Route | Purpose |
| --- | --- |
| `/` | Landing page entry point |
| `/dashboard` | Executive overview with KPIs, pipeline health, and activity |
| `/dashboard/approvals` | Approval queue with segmented filtering |
| `/dashboard/reports` | Reporting workspace with charts and ROI metrics |
| `/dashboard/users` | Team and access management |
| `/dashboard/integrations` | Connected services and platform integrations |
| `/dashboard/settings` | System and workspace preferences |

## Project Structure

```text
.
鈹溾攢鈹€ src/
鈹?  鈹溾攢鈹€ routes/              # File-based route modules
鈹?  鈹?  鈹溾攢鈹€ __root.tsx       # Document shell and global providers
鈹?  鈹?  鈹溾攢鈹€ index.tsx        # Landing page
鈹?  鈹?  鈹斺攢鈹€ dashboard/
鈹?  鈹?      鈹溾攢鈹€ route.tsx    # Dashboard layout, sidebar, header
鈹?  鈹?      鈹溾攢鈹€ index.tsx    # Overview surface
鈹?  鈹?      鈹溾攢鈹€ approvals.tsx
鈹?  鈹?      鈹溾攢鈹€ reports.tsx
鈹?  鈹?      鈹溾攢鈹€ users.tsx
鈹?  鈹?      鈹溾攢鈹€ integrations.tsx
鈹?  鈹?      鈹斺攢鈹€ settings.tsx
鈹?  鈹溾攢鈹€ router.tsx           # Router setup
鈹?  鈹斺攢鈹€ styles.css           # Global styles
鈹溾攢鈹€ images/                  # README screenshots
鈹溾攢鈹€ vite.config.ts
鈹斺攢鈹€ wrangler.jsonc
```

## Customization Guide

Common extension points:

- Replace static data arrays with real API calls or TanStack loaders
- Add authentication and role-based access around the dashboard route group
- Extend navigation by creating new files under `src/routes/dashboard/`
- Rebrand by updating the theme object in root ConfigProvider
- Add TanStack Query for data fetching

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Vite dev server on port 3000 |
| `pnpm build` | Create a production build |
| `pnpm preview` | Build and preview locally |
| `pnpm test` | Run Vitest |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Prettier write + ESLint fix |
| `pnpm deploy` | Build and deploy with Wrangler |

## 馃敆 More from TanStack Ship

This template is part of the **[TanStack Ship](https://tanstackship.com/)** catalog:

| Template | Description |
| --- | --- |
| [Apple-like Landing Page](https://github.com/ship-tanstack/Apple-like) | Apple-inspired product landing page with CSS sculpture |
| [Aurelia No.7 Landing Page](https://github.com/ship-tanstack/Aurelia-No.7-Landing-Page) | Premium editorial landing page with scroll narrative |

- **[Browse all TanStack Templates 鈫抅(https://tanstackship.com/)**
- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)

---

<p align="center">
  Built with 鉂わ笍 using <a href="https://tanstack.com/start">TanStack Start</a>.<br/>
  Discover more templates at <a href="https://tanstackship.com/"><strong>tanstackship.com</strong></a>
</p>
