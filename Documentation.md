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
- Multi-role authentication (National Coordinator & State Coordinator)
- State and District-based filtering with persistent store
- Comprehensive metrics tracking and performance visualization

---

## 1.1 National Coordinator Dashboard Overview

The **National Coordinator Dashboard** is a specialized interface within the main dashboard, designed for national-level oversight and management. It provides aggregate metrics, performance comparisons across states/districts, and batch management capabilities.

### National Coordinator Features
- Metric cards showing SM Enrolled, CHO Enrolled, and NM Numbers with trend indicators
- SM Performance tracking (Target, Enrolled, Certified status)
- CHO Performance overview with multi-dataset bar charts
- Batch Details card with current training batch status
- State-wise Performance Comparison for geographic analysis
- Persistent state/district selection using Zustand store
- Dynamic data fetching based on selected filters

---

## 2. Folder Structure

```
project-root/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── dashboard/page.tsx
│   └── api/
│       ├── login/route.ts
│       └── dashboard/route.ts
│
├── components/
│   ├── buttons/
│   ├── charts/
│   ├── common/
│   ├── dashboard/
│   │   ├── NationalMentor/
│   │   ├── NationalCoordinator/
│   │   │   ├── MetricCard.tsx
│   │   │   ├── SMPerformanceCard.tsx
│   │   │   ├── CHOPerformanceCard.tsx
│   │   │   ├── BatchDetailsCard.tsx
│   │   │   ├── StateComparisonCard.tsx
│   │   │   └── StateDistrictSelector.tsx
│   │   └── LayoutWrapper.tsx
│   ├── dropdowns/
│   ├── header/
│   ├── providers/
│   ├── pwa/
│   ├── pages/
│   │   └── Login.tsx
│   └── sidebar/
│
├── hooks/
│   ├── auth/
│   │   ├── useLogin.ts
│   │   └── useProtected.ts
│   ├── common/
│   ├── dashboard/
│   ├── notifications/
│   ├── pwa/
│   └── theme/
│
├── services/
│   └── auth/
│       └── login.ts
│
├── store/
│   ├── auth.store.ts
│   └── dashboard.store.ts
│
├── types/
│   ├── auth/
│   │   └── login.ts
│   ├── dashboard/
│   │   ├── metricCard.ts
│   │   ├── performance.ts
│   │   └── datacard.ts
│   └── common/
│       ├── BatchItem.ts
│       ├── dropdown.ts
│       └── multiChart.ts
│
├── config/
│   ├── chartColors.ts
│   └── distributionConfig.ts
│
├── data/
│   ├── datacard.json
│   ├── alerts.json
│   ├── performanceTrend.json
│   ├── choDistribution.json
│   ├── smCertification.json
│   ├── documents.json
│   ├── states.json
│   ├── metricCardData.json
│   ├── smPerformance.json
│   ├── choPerformance.json
│   ├── batchDetails.json
│   ├── stateComparison.json
│   ├── statesDistricts.json
│   └── notification.json
│
├── styles/
│   └── theme.css
│
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

## 3.4 State Management (Zustand)
- Centralized auth state with persistence
- Dashboard filters (state/district) with cached data
- Hydration handling for SSR safety

---

## 3.5 Role-Based Access Control
- Authentication types: `national_coordinator` | `state_coordinator`
- Protected routes using `useProtected` hook
- Automatic redirect to login if unauthenticated

---

## 4. Authentication System

### 4.1 Login Flow
1. User enters email and password
2. `useLogin` hook calls `AuthService.login()` which posts to `/api/login`
3. Server validates credentials against hardcoded user list
4. On success: `AuthUser` stored in `useAuthStore` (Zustand + localStorage)
5. User redirected to `/dashboard`

### 4.2 Protected Routes
- `useProtected` hook checks `isAuthenticated` and `hasHydrated` states
- Redirects unauthenticated users to `/` (login page)
- Hydration delay prevents false redirects during SSR

### 4.3 Authentication Types

```typescript
export type Role = "national_coordinator" | "state_coordinator";

export interface AuthUser {
  email: string;
  role: Role;
}
```

### 4.4 Demo Credentials
- **National Coordinator**: `a@gmail.com` / `1234`
- **State Coordinator**: `b@gmail.com` / `1234`

### 4.5 Auth Store (Zustand)
```typescript
interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  hasHydrated: boolean;
  setHydrated: () => void;
  setUser: (user: AuthUser) => void;
  logout: () => void;
}
```

---

## 4.1 Theme & Design System

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

### 6.8 useDashboardStore
- Manages state/district filters
- Triggers API calls when filters change
- Caches dashboard data
- Syncs across components

---

## 7. National Coordinator Components

### 7.1 MetricCard
Displays KPI metrics with trend indicators and progress bars.

```typescript
interface MetricCardData {
  id: string;
  title: string;
  value: string;
  trend: string;
  trendIcon: string;
  trendType: "up" | "down";
  progress: number;
  description: string;
  icon: string;
}
```

**Features:**
- Material symbols icon in background
- Trend percentage with arrow (up/down)
- Progress bar showing percentage
- Description text with percentage context

### 7.2 SMPerformanceCard
Shows State Mentor performance tracking across three phases: Target, Enrolled, Certified.

**Features:**
- Horizontal stacked progress bars
- Status indicators (Goal, Active, Final)
- Dynamic color mapping from `DISTRIBUTION_COLORS`
- Percent completion display

### 7.3 CHOPerformanceCard
Displays CHO (Community Health Officer) performance using multi-dataset bar charts.

**Features:**
- Multi-dataset bar chart comparing two metrics
- Dynamic legend showing datasets
- Responsive chart container (h-[250px])
- Header with title and metric indicators

### 7.4 BatchDetailsCard
Shows current batch information for State Mentors and CHOs.

```typescript
interface BatchItem {
  label: string;
  batches: {
    name: string;
    status: {
      label: string;
      bgClass: string;
      textClass: string;
    };
  }[];
}
```

**Features:**
- Batch cards grouped by type (SM, CHO)
- Status tags (In Progress, Active, Onboarding)
- Color-coded status indicators
- "View Detailed Timeline" button

### 7.5 StateComparisonCard
Geographic performance analysis comparing states across metrics.

**Features:**
- Title and subtitle for context
- Multi-dataset bar chart
- Legend with status indicators
- Large chart container (h-80)
- Responsive grid layout

### 7.6 StateDistrictSelector
Cascading dropdown system for filtering data.

**Features:**
- State dropdown populated from `statesDistricts.json`
- District dropdown (enabled only after state selection)
- Zustand store integration (`useDashboardStore`)
- Persists selections across page navigations
- Synced display on mount using `useEffect`
- Triggers API call on district selection

```typescript
const handleDistrictSelect = (option: DropdownOption) => {
  if (option.key === "__DISTRICT__") return;
  selectDistrict(option);
  if (selectedState && selectedState.key !== "__STATE__") {
    setFilters(selectedState.key, option.key); // API call
  }
};
```

### 7.7 PerformanceBarItem & StatusIndicator
Utility components for rendering performance metrics and status badges.

---

## 7.8 Core Layout Components
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

## 9. API Endpoints

### 9.1 POST /api/login
**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": boolean,
  "data": {
    "email": "string",
    "role": "national_coordinator" | "state_coordinator"
  },
  "message": "string"
}
```

**Description:** Authenticates user and returns AuthUser object with role.

### 9.2 POST /api/dashboard
**Request:**
```json
{
  "state": "string (state code)",
  "district": "string (district code)"
}
```

**Response:**
```json
{
  "success": boolean,
  "data": {
    "metricCardData": MetricCardData[],
    "smPerformanceData": PerformanceItem[],
    "choPerformanceData": { labels: string[], datasets: Dataset[] },
    "batchDetails": BatchItem[],
    "stateComparison": { title, subtitle, labels, datasets }
  }
}
```

**Description:** Returns dashboard data filtered by state and district. Data is populated from JSON files on the server.

---

## 10. Data Layer

Stored in `/data` as JSON:

- `datacard.json`
- `alerts.json`
- `performanceTrend.json`
- `choDistribution.json`
- `smCertification.json`
- `documents.json`
- `states.json`

## 10. Data Layer

Stored in `/data` as JSON:

### National Mentor Dashboard
- `datacard.json` - KPI metrics (generic mentor dashboard)
- `alerts.json` - Alert items
- `performanceTrend.json` - Weekly/monthly performance trends
- `choDistribution.json` - CHO phase distribution progress
- `smCertification.json` - SM certification bar chart
- `documents.json` - Policy documents listing
- `states.json` - States list for navigation

### National Coordinator Dashboard
- `metricCardData.json` - National-level metrics (SM Enrolled, CHO Enrolled, NM Numbers)
- `smPerformance.json` - SM performance tracking (Target, Enrolled, Certified)
- `choPerformance.json` - CHO performance by state/district
- `batchDetails.json` - Current batch information (State Mentors & CHOs)
- `stateComparison.json` - Cross-state performance comparison
- `statesDistricts.json` - Hierarchical state/district data for selector

### Data Structures

**MetricCardData:**
```json
{
  "id": "sm_enrolled",
  "title": "SM Enrolled",
  "value": "1,284",
  "trend": "+12%",
  "trendIcon": "arrow_upward",
  "trendType": "up",
  "progress": 72,
  "description": "72% of annual target reached",
  "icon": "groups"
}
```

**PerformanceItem:**
```json
{
  "label": "Target",
  "value": "2,000",
  "percentage": 100,
  "type": "goal"
}
```

**BatchItem:**
```json
{
  "label": "State Mentor",
  "batches": [
    {
      "name": "Batch 5",
      "status": {
        "label": "In Progress",
        "bgClass": "bg-primary/20",
        "textClass": "text-primary"
      }
    }
  ]
}
```

---

## 11. PWA Setup

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

## 12. Fonts & Icons

### Inter Font
- Loaded via Next.js font optimization

### Material Symbols
- Custom font loaded from `/public/fonts`

---

## 13. Performance Optimizations

- App Router (Next.js)
- Client/Server separation
- Lazy loading charts
- JSON-based static data

---

## 14. Best Practices Followed

- No hardcoded colors (design tokens used)
- Centralized configuration
- Reusable hooks
- Modular folder structure
- Responsive-first design

---

## 16. Dashboard Layout & Component Hierarchy

### 16.1 Layout Structure
```
LayoutWrapper (Client Component)
├── Sidebar (Navigation)
├── Header (Search, Theme Toggle, State/District Selector)
└── Main Content Area
    ├── NationalMentorDashboard (Mentor View)
    │   ├── DataCard Grid (4 columns)
    │   ├── Charts Section (3 columns grid)
    │   │   ├── MentoringPerformance (Line Chart)
    │   │   ├── CHOPhaseDistribution (Progress Bars)
    │   │   └── SMCertification (Bar Chart)
    │   └── Sidebar
    │       ├── AlertsCard
    │       ├── QuickTargetAdjust
    │       └── PolicyDocuments
    │
    └── NationalCoordinator (Coordinator View)
        ├── MetricCard Grid (3 columns)
        ├── Charts Row
        │   ├── SMPerformanceCard (1 column)
        │   ├── CHOPerformanceCard (2 columns)
        │   └── BatchDetailsCard (1 column)
        └── StateComparisonCard (Full width)
```

### 16.2 Data Flow
1. User logs in → `useAuthStore` persists auth state
2. User navigates to dashboard → `useProtected` verifies auth
3. Header shows `StateDistrictSelector` → User selects state/district
4. Selection triggers `setFilters()` → `useDashboardStore` calls `POST /api/dashboard`
5. API returns filtered data → Components subscribe to `useDashboardStore`
6. Charts, cards, and metrics re-render with new data
7. Store persists selections → Restored on page reload

### 16.3 Dashboard API Integration
```typescript
// In StateDistrictSelector.tsx
const handleDistrictSelect = (option: DropdownOption) => {
  if (option.key === "__DISTRICT__") return;
  selectDistrict(option);
  if (selectedState && selectedState.key !== "__STATE__") {
    setFilters(selectedState.key, option.key); // Triggers API call
  }
};

// In dashboard.store.ts
fetchDashboardData: async () => {
  const { state, district } = get();
  if (!state || !district) return;
  set({ loading: true });
  
  const res = await fetch("/api/dashboard", {
    method: "POST",
    body: JSON.stringify({ state, district }),
  });
  
  const result = await res.json();
  if (result.success) {
    set({ data: result.data, loading: false });
  }
}
```

---

## 17. Dropdown Component System

### 17.1 CommonDropdown
Reusable dropdown component with controlled state.

```typescript
interface Props {
  label?: string;
  options: DropdownOption[];
  selected: DropdownOption;
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onSelect: (option: DropdownOption) => void;
}
```

### 17.2 useDropdown Hook
Manages dropdown state, selection, and outside-click detection.

```typescript
export const useDropdown = (initialOptions: DropdownOption[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption>(initialOptions[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  // Handles outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  
  return { isOpen, selected, dropdownRef, toggle, selectOption };
};
```

---

## 18. Type Definitions

### 18.1 Authentication Types
```typescript
export type Role = "national_coordinator" | "state_coordinator";

export interface AuthUser {
  email: string;
  role: Role;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data?: AuthUser;
  message?: string;
}
```

### 18.2 Dashboard Types
```typescript
export interface MetricCardData {
  id: string;
  title: string;
  value: string;
  trend: string;
  trendIcon: string;
  trendType: "up" | "down";
  progress: number;
  description: string;
  icon: string;
}

export interface PerformanceItem {
  label: string;
  value: string;
  percentage: number;
  color?: string;
}

export interface BatchItem {
  label: string;
  batches: {
    name: string;
    status: {
      label: string;
      bgClass: string;
      textClass: string;
    };
  }[];
}

export interface DropdownOption {
  key: string;
  value: string;
}
```

---

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