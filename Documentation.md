# National Mentor Dashboard Documentation

## 1. Project Overview

The **National Mentor Dashboard** is a production-ready Next.js Progressive Web App (PWA) built using:
- Next.js (App Router)
- TypeScript
- Tailwind CSS (Design Token Based)
- Chart.js

### Core Features
- Fully responsive dashboard (mobile → large screens)
- Dark/Light theme with persistence (localStorage + system preference)
- Data visualization (Line & Bar charts)
- Alerts & notifications system
- PWA support (offline + installable)
- Modular architecture with reusable hooks & components

---

## 2. Folder Structure

```
project-root/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── dashboard/page.tsx
│
├── components/
│   ├── buttons/
│   ├── charts/
│   ├── common/
│   ├── dashboard/
│   ├── dropdowns/
│   ├── header/
│   ├── providers/
│   ├── pwa/
│   └── sidebar/
│
├── hooks/
│   ├── common/
│   ├── dashboard/
│   ├── notifications/
│   ├── pwa/
│   └── theme/
│
├── config/
├── data/
├── styles/
├── types/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── manifest.json
│   └── sw.js
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## 3. Architecture Principles

### 3.1 Component-Based Design
- Reusable UI components
- Separation of concerns
- Feature-based grouping (dashboard modules)

### 3.2 Hooks-Driven Logic
All business logic is abstracted into hooks:
- UI state
- Data transformation
- Side effects

### 3.3 Config-Driven UI
- Colors → `config/chartColors.ts`
- Distribution → `config/distributionConfig.ts`
- Data → JSON files

---

## 4. Theme & Design System

### 4.1 CSS Variables (Design Tokens)

Defined in `styles/theme.css`:

```
:root {
  --card-bg: #18282f;
  --card-primary-text: #ffffff;
  --card-secondary-text: #9db2b9;
  --card-menu-text: #006686;
}
```

### 4.2 Utility Classes

```
.card-bg { background-color: var(--card-bg); }
.card-title { color: var(--card-primary-text); }
.card-subtitle { color: var(--card-secondary-text); }
.selected-menu-text { color: var(--card-menu-text); }
```

### 4.3 Dark Mode Strategy
- Tailwind uses `darkMode: "class"`
- Controlled via `<html class="dark">`
- Synced using localStorage + system preference

---

## 5. Tailwind Configuration

```
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
```

---

## 6. Core Hooks

### 6.1 useTheme
- Handles theme initialization
- Syncs with localStorage
- Applies `dark` class

### 6.2 useDropdown
- Toggle dropdown
- Manage selection
- Detect outside click

### 6.3 useSidebar
- Sidebar toggle (mobile)
- Active menu tracking
- Auto-hide arrow animation

### 6.4 useTimeAgo
- Converts date → "x days ago"

### 6.5 useNotification
- Notification dropdown state

### 6.6 useQuickTargetAdjust
- State selection
- Input validation

### 6.7 useInstallPrompt
- PWA install handling

---

## 7. Core Components

### 7.1 Layout
- RootLayout handles:
  - Fonts
  - Theme hydration fix
  - PWA setup

### 7.2 Sidebar
- Mobile responsive
- Overlay support
- Auto-hide arrow

### 7.3 Header
- Search
- Notifications
- Theme toggle

### 7.4 Dashboard Modules

#### DataCard
- KPI metrics display
- Trend indicators

#### MentoringPerformance
- Line chart (weekly/monthly)

#### CHOPhaseDistribution
- Progress bars

#### SMCertification
- Bar chart visualization

#### AlertsCard
- Urgent alerts list

#### PolicyDocuments
- Document listing with icons

#### QuickTargetAdjust
- Input-based updates

---

## 8. Charts Implementation

### Line Chart
- Smooth curve (`tension: 0.4`)
- Filled background

### Bar Chart
- Dynamic colors
- Rounded bars

---

## 9. Data Layer

Stored in `/data` as JSON:

- `datacard.json`
- `alerts.json`
- `performanceTrend.json`
- `choDistribution.json`
- `smCertification.json`
- `documents.json`
- `states.json`

---

## 10. PWA Setup

### Files
- `manifest.json`
- `sw.js`
- icons

### Registration
```
navigator.serviceWorker.register("/sw.js")
```

### Safe Area Support
- Handles iOS notch spacing

---

## 11. Fonts & Icons

### Inter Font
- Loaded via Next.js font optimization

### Material Symbols
- Custom font loaded from `/public/fonts`

---

## 12. Performance Optimizations

- App Router (Next.js)
- Client/Server separation
- Lazy loading charts
- JSON-based static data

---

## 13. Best Practices Followed

- No hardcoded colors (design tokens used)
- Centralized configuration
- Reusable hooks
- Modular folder structure
- Responsive-first design

---

## 14. Setup & Run

### Install
```
npm install
```

### Development
```
npm run dev
```

### Production Build
```
npm run build
npm run start
```

---



