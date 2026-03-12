# GYEDIE HERBAL CENTRE CMS

**Your Healing Is Our Testimony**

A modern, full-featured clinic management system for the Gyedie Herbal Centre, built with React, TypeScript, Tailwind CSS, and Supabase.

---

## Overview

GYEDIE HERBAL CENTRE CMS is a comprehensive clinic management system designed specifically for herbal healthcare facilities. It provides complete functionality for patient management, appointment scheduling, consultations, herbal prescriptions, inventory management, laboratory tests, billing, and reporting.

**Location:** Adawukwao (Off Kasoa – Bawjiase Road), Ghana
**Owner:** Rabbi T/Dr. Shalomo Lartey
**Currency:** Ghana Cedis (₵)

---

## Features

### 1. Authentication System
- Role-based access control: Admin, Doctor/Herbalist, Receptionist
- Secure email/password authentication via Supabase Auth
- Session management and automatic logout
- User profile management

### 2. Dashboard
- Total patient count
- Today's appointments
- Today's prescriptions
- Daily revenue in Ghana Cedis
- Low stock medicine alerts
- Clinic information display

### 3. Patient Management
- Register new patients with auto-generated Patient IDs
- Capture patient details:
  - Full name
  - Age and gender
  - Phone number and address
  - Medical history
  - Known allergies
- Search patients by name, ID, or phone
- View complete patient records

### 4. Appointment System
- Book appointments with date and time
- Assign doctors to appointments
- View daily appointment calendar
- Track appointment status (scheduled, completed, cancelled)
- Add appointment notes

### 5. Consultation Module
- Record consultation details:
  - Symptoms observed
  - Diagnosis
  - Spiritual scanning notes
  - Treatment plan
- Link consultations to appointments
- Automatic appointment completion on consultation
- View consultation history

### 6. Herbal Prescription System
- Create prescriptions with multiple medicines
- Specify for each medicine:
  - Dosage
  - Duration
  - Special instructions
  - Quantity
- Track prescription status (pending, dispensed)
- Pre-loaded with 10 sample herbal medicines:
  - Super Plus Capsules
  - Gyedie Mix
  - Detox Formula
  - Immune Booster
  - Blood Pressure Control
  - Sugar Balance
  - Malaria Relief
  - Digestive Aid
  - Pain Relief Tonic
  - Energy Boost

### 7. Herbal Dispensary & Inventory
- Track medicine stock levels
- Manage medicine pricing in Ghana Cedis
- Monitor expiry dates
- Automatic low stock alerts
- Edit medicine details
- Add new medicines to inventory

### 8. Laboratory Module
- Request laboratory tests for patients
- Common test types: Malaria Test, Blood Pressure, Blood Sugar, Blood Test, Urine Test
- Add custom test types
- Record test results
- Track test status (pending, completed)
- Store results in patient profile

### 9. Billing System
- Generate invoices with auto-generated invoice numbers
- Add services and medicines to invoices
- Calculate totals automatically
- Track payment methods: Cash or Mobile Money
- Mark payments as pending or paid
- Print invoices with clinic branding
- Professional invoice layout with clinic information

### 10. Reports & Analytics
- Daily revenue reports
- Monthly revenue reports
- Patient statistics
- Monthly patient registrations
- Appointment analytics
- Top 5 prescribed medicines chart
- Month selection for detailed analysis

### 11. Design & Branding
- Green and lime green color theme
- Leaf icon logo
- Mobile-responsive design
- Professional UI with smooth transitions
- Clean, modern interface
- Intuitive navigation

---

## Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend & Database
- **Supabase** - PostgreSQL database, authentication, and real-time features
- **Supabase Auth** - User authentication and session management

### Deployment
- **Vercel** - Recommended for frontend hosting
- **Supabase** - Database and backend hosting

---

## Installation

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git
- A Supabase project (free tier available at https://supabase.com)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gyedie-herbal-centre-cms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

   Get these values from your Supabase project settings:
   - Go to https://app.supabase.com
   - Select your project
   - Go to Settings > API
   - Copy the Project URL and anon key

4. **Create test users**
   You need to create users in Supabase Auth for each role:

   a. Go to your Supabase project
   b. Navigate to Authentication > Users
   c. Create users with emails like:
      - admin@gyedie.com (password: your-password)
      - doctor@gyedie.com (password: your-password)
      - receptionist@gyedie.com (password: your-password)

   d. After users are created, add their profiles by running this SQL in the Supabase SQL Editor:

   ```sql
   -- Replace the user IDs with actual IDs from your created users
   INSERT INTO users (id, email, full_name, role, phone)
   VALUES
     ('user-id-1', 'admin@gyedie.com', 'Admin User', 'admin', '+233240000000'),
     ('user-id-2', 'doctor@gyedie.com', 'Dr. John Appiah', 'doctor', '+233241111111'),
     ('user-id-3', 'receptionist@gyedie.com', 'Mary Owusu', 'receptionist', '+233242222222');
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   ```

---

## Database Schema

The system uses 10 main tables:

- **users** - Staff accounts (admin, doctor, receptionist)
- **patients** - Patient information and medical history
- **appointments** - Appointment scheduling
- **consultations** - Consultation records
- **medicines** - Herbal medicine inventory
- **prescriptions** - Prescription records
- **prescription_items** - Details of medicines in prescriptions
- **laboratory_tests** - Laboratory test requests and results
- **invoices** - Billing records
- **invoice_items** - Details of services/medicines in invoices

All tables have Row Level Security (RLS) enabled for data protection.

---

## Deployment

### Deploying to Vercel

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Vercel will auto-detect Vite configuration

3. **Set Environment Variables**
   - In Vercel project settings, go to Environment Variables
   - Add:
     ```
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at the provided Vercel URL

### Supabase Database

1. **Database is already set up** - Your Supabase project includes:
   - PostgreSQL database
   - Pre-created tables with migrations
   - Row Level Security policies
   - Sample herbal medicines

2. **Backup your data**
   - Go to Supabase dashboard
   - Use the backups feature for regular backups

---

## Usage Guide

### First Login
1. Access the application
2. Use one of your created user credentials
3. Dashboard will display based on your role

### Adding Users (Admin Only)
1. Create new auth users via Supabase dashboard
2. Add user profiles via SQL or the system UI

### Registering Patients
1. Go to "Patients" section
2. Click "Register Patient"
3. Fill in patient details
4. Patient ID is auto-generated (PT0001, PT0002, etc.)

### Booking Appointments
1. Go to "Appointments"
2. Click "Book Appointment"
3. Select patient and doctor
4. Set date and time
5. Add optional notes

### Creating Consultations
1. Go to "Consultations"
2. Click "New Consultation"
3. Select patient and optional appointment
4. Record symptoms, diagnosis, treatment plan, and spiritual notes

### Creating Prescriptions
1. Go to "Prescriptions"
2. Click "New Prescription"
3. Select patient
4. Add medicines with dosage and duration
5. Save prescription

### Managing Inventory
1. Go to "Inventory"
2. View all medicines with stock levels
3. Click "Add Medicine" or "Edit" to manage stock
4. System alerts when stock is below threshold

### Requesting Laboratory Tests
1. Go to "Laboratory"
2. Click "Request Test"
3. Select patient and test type
4. When results are ready, click "Add Results"

### Creating Invoices
1. Go to "Billing"
2. Click "Create Invoice"
3. Select patient and payment method
4. Add services and medicines
5. Total calculates automatically
6. Click "Print Invoice" for hardcopy

### Viewing Reports
1. Go to "Reports"
2. Select a month to view statistics
3. View daily/monthly revenue, patient counts, and top medicines

---

## Color Scheme

The system uses a professional green and lime green theme:
- **Primary Green:** `#16a34a` (from-green-600)
- **Secondary Lime:** `#65a30d` (from-lime-600)
- **Background:** Light green/gray
- **Accents:** White and gray tones

---

## Security Features

- Row Level Security (RLS) on all database tables
- Authentication via Supabase Auth
- Password protection for user accounts
- Role-based access control
- Secure API communication
- No sensitive data in environment variables
- Client-side form validation

---

## Performance

- Built with Vite for fast development and optimized production builds
- Responsive design for all screen sizes
- Efficient database queries with Supabase
- CSS optimization via Tailwind
- Optimized bundle size (~94KB gzipped)

---

## Troubleshooting

### Can't log in
- Verify user exists in Supabase Auth
- Check user profile exists in users table
- Verify environment variables are set correctly

### Data not loading
- Check browser console for errors
- Verify Supabase credentials
- Ensure Row Level Security policies aren't blocking access
- Check database connection in Supabase dashboard

### Build errors
- Run `npm install` to ensure dependencies are installed
- Clear node_modules and reinstall if needed
- Check Node.js version (16+)

### Deployment issues
- Verify environment variables are set in Vercel
- Check Supabase project is active
- Review Vercel deployment logs
- Ensure domain is correctly configured

---

## Support & Contact

For issues or questions:
1. Check the troubleshooting section
2. Review Supabase documentation
3. Contact system administrator

---

## License

This system is proprietary software for Gyedie Herbal Centre.

---

## Version

**Version 1.0.0** - Initial Release

---

**Last Updated:** 2026-03-12
**Your Healing Is Our Testimony**
