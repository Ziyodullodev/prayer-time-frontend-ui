# Namoz Vaqtlari (Prayer Times Homepage)

A modern web application for displaying daily and weekly Islamic prayer times, with customizable settings and a beautiful, responsive UI. Built with Next.js, React, and Tailwind CSS.

## Features

- **Daily Prayer Times:** View today's prayer times for your selected city and country.
- **Weekly Timetable:** See a full week's prayer schedule, filterable by location.
- **Location Selection:** Choose your country and city for accurate times.
- **Hijri & Gregorian Dates:** Both Islamic and Gregorian dates are displayed.
- **Settings Page:**
  - Change location (country/city)
  - Switch between light and dark mode
  - Select prayer calculation method (Hanafi or Shafi)
- **Qibla Direction, Islamic Calendar, and Nearby Mosques:** UI sections for these features (static for now, ready for future integration).
- **Responsive Design:** Works on all devices.
- **Beautiful UI:** Uses shadcn/ui, Radix UI, and Tailwind CSS for a modern look.

## Screenshots

> Add screenshots here if available (e.g., homepage, weekly timetable, settings page)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd prayer-time-homepage
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` — Next.js app directory (routing, layout, pages)
- `components/` — Reusable UI components
- `lib/` — Utility libraries (e.g., theme context)
- `public/` — Static assets (logos, images)
- `styles/` — Additional styles (if any)
- `prayer-time-homepage.tsx` — Main homepage component
- `weekly-timetable.tsx` — Weekly timetable page
- `settings-page.tsx` — Settings page

## Customization
- **Prayer times data** is currently mocked. Integrate with a real API for production use.
- **Qibla, Calendar, Mosques**: UI is ready for these features; connect to APIs as needed.

## Tech Stack
- [Next.js](https://nextjs.org/) 15+
- [React](https://react.dev/) 19+
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Scripts
- `npm dev` — Start development server
- `npm build` — Build for production
- `npm start` — Start production server
- `npm lint` — Lint code

## Credits
- UI inspired by shadcn/ui and Radix UI
- Created by TafSoft.uz

## License

> Specify your license here (e.g., MIT, GPL, etc.) 