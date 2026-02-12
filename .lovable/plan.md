
# Strategies Page - Pixel-Perfect Implementation

## Overview
Create a new `/strategies` page for the public website (not admin) that matches the uploaded reference images exactly. The page will reuse the existing site header/navbar pattern and footer, with new strategy-specific sections.

## Page Sections (top to bottom)

### 1. Hero Section (Blue Gradient)
- Same logo notch + navbar pattern as homepage (reuse `HeroBackground`)
- Left side: Large heading "Algorithmic Trading Strategies" + subtitle + two CTA buttons ("Explore Strategies" white outlined, "Explore Strategies" blue filled with play icon)
- Right side: "Active Strategies" card with semi-transparent blue background showing:
  - "6 Running" bold stat
  - Two metric boxes: "Today's P&L +Rs45,230" (green) and "Win Rate 74.5%"
  - "Performance this month +8.2%" with green bar chart

### 2. Stats Bar (White background)
- Four stats in a row: "Rs 150Cr+" Capital Deployed, "Rs 3500+" Algo Trading, "Rs 38.5%" Strategies Deployed, "24/7" Capital Deployed
- Green text for rupee values, dark text for "24/7"

### 3. Top Rated Strategies Section
- Section badge: "Our Top Rated Strategies" (blue pill with star icon)
- 3x2 grid of strategy cards, each card containing:
  - Two top badges: "Momentum Trading" (blue) + "Most Popular" (yellow/green)
  - Title: "Ai Momentum Master"
  - Description paragraph
  - Two stat boxes: "Revenue +42% Annually" (green text) and "Win Rate 73%" (blue text)
  - Info rows: Risk Level (with "Medium" badge), Min Insurance "Rs 50,000", "15-20/month", Aug. Trade
  - Two buttons: "Subscribe Now" (blue filled) + "Subscribe Now" (blue outlined)

### 4. Process Section - "How Algo Trading Works"
- Section badge: "Process" pill
- Wrench icon centered
- Title: "How Algo Trading Works"
- Three step cards in a row, each with:
  - Numbered badge (01, 02, 03) positioned at top-left overlapping the card border
  - Icon (settings, wrench, chart)
  - Title + description
  - Cards have subtle shadow and rounded corners

### 5. CTA Section (Blue gradient background)
- "Ready to Automate Your Trading?"
- Subtitle: "Join 3,500+ traders who trust our AI algorithms"
- Two buttons: "Start Free Trial >" (white) + "Schedule Demo" (blue outlined)

### 6. Footer (reuse existing Footer component)

## Technical Plan

### New Files
1. **`src/pages/Strategies.tsx`** - Main page composing all sections
2. **`src/components/strategies/StrategiesHero.tsx`** - Hero with heading + active strategies card
3. **`src/components/strategies/StatsBar.tsx`** - Four green stats row
4. **`src/components/strategies/StrategyCard.tsx`** - Reusable card component for the 3x2 grid
5. **`src/components/strategies/TopStrategies.tsx`** - Section with grid of StrategyCards
6. **`src/components/strategies/HowItWorks.tsx`** - Three-step process section
7. **`src/components/strategies/StrategiesCTA.tsx`** - Blue gradient CTA banner

### Modified Files
1. **`src/App.tsx`** - Add `/strategies` route
2. **`src/components/HeroSection.tsx`** - Update nav link for "Algo" to point to `/strategies`

### Component Details

**StrategyCard** (reusable) will accept props:
- `tags: string[]` (e.g., ["Momentum Trading", "Most Popular"])
- `title: string`
- `description: string`
- `revenue: string` (e.g., "+42%")
- `winRate: string` (e.g., "73%")
- `riskLevel: string`
- `minInsurance: string`
- `avgTrade: string`

**StrategiesHero** will reuse `HeroBackground` for the blue gradient background with grid lines, and include the same logo/navbar pattern from `HeroSection`.

**HowItWorks** step cards will use absolute positioning for the numbered badges (`-top-4 -left-2`) overlapping the card border.

### Routing
- Route: `/strategies`
- Nav link "Algo" updated to `/strategies` using react-router `Link`
