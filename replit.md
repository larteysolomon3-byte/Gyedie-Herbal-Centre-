# HerbalHMS - Clinic Management System

## Overview
A full-stack Hospital/Clinic Management System built with React (frontend) and Express (backend), served together via Vite middleware in development and static files in production.

## Architecture
- **Frontend**: React 19 + TypeScript + Tailwind CSS v4 + Framer Motion
- **Backend**: Express.js served via `server.ts` (tsx runner)
- **Database**: SQLite via `better-sqlite3` (file: `hms.db`)
- **Build tool**: Vite 6 with `@vitejs/plugin-react`
- **Dev server**: Single unified server — Express + Vite middleware on port 5000

## Project Structure
```
├── server.ts          # Express backend + Vite dev middleware
├── src/
│   ├── App.tsx        # Main React application
│   ├── main.tsx       # React entry point
│   ├── index.css      # Global styles
│   └── types.ts       # TypeScript types
├── index.html         # HTML entry point
├── vite.config.ts     # Vite config (host: 0.0.0.0, port: 5000, allowedHosts: true)
└── package.json
```

## Running
- **Dev**: `npm run dev` → starts `tsx server.ts` on port 5000
- **Build**: `npm run build` → Vite builds to `dist/`
- **Production**: serves from `dist/` directory

## Database Schema (SQLite - hms.db)
- `users` - Staff accounts (admin, doctor, receptionist, lab, pharmacy)
- `patients` - Patient records
- `appointments` - Appointment scheduling
- `medical_records` - Doctor consultation records
- `lab_records` - Laboratory test requests/results
- `pharmacy_inventory` - Drug inventory
- `prescriptions_dispensed` - Dispensed medications
- `billing` - Patient bills

## Default Credentials (seeded on first run)
- Admin: `admin` / `admin123`
- Doctor: `doctor` / `doc123`
- Receptionist: `reception` / `rec123`

## Environment Variables
- `GEMINI_API_KEY` - Optional, for Gemini AI features
- `APP_URL` - App URL for self-referential links

## Ports
- Port 5000: Main application (frontend + backend unified)
