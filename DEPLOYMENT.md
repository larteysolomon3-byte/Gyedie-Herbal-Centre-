# Deployment Guide - GYEDIE HERBAL CENTRE CMS

Complete step-by-step deployment instructions for production environments.

---

## Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Test users created in Supabase
- [ ] Sample data verified
- [ ] Build completes without errors
- [ ] No console errors or warnings

---

## Step 1: Prepare for Production

### 1.1 Test the Build
```bash
npm run build
```

Verify output:
- No errors
- Output in `dist/` folder
- Bundle size reasonable (~94KB gzipped)

### 1.2 Review Environment Variables
Ensure `.env` contains:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Never commit `.env` to version control.

### 1.3 Final Local Testing
```bash
npm run dev
```

Test all features:
- [ ] Login works
- [ ] Patient registration works
- [ ] Appointments can be booked
- [ ] Prescriptions can be created
- [ ] Invoices can be generated and printed
- [ ] Reports display correctly

---

## Step 2: Deploy to Vercel

### 2.1 Prepare GitHub Repository

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GYEDIE HERBAL CENTRE CMS v1.0"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

### 2.2 Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Authorize GitHub access
5. Select your repository
6. Click "Import"

### 2.3 Configure Environment Variables

In Vercel Dashboard:
1. Go to project settings
2. Select "Environment Variables"
3. Add:
   ```
   Name: VITE_SUPABASE_URL
   Value: https://your-project.supabase.co

   Name: VITE_SUPABASE_ANON_KEY
   Value: your-anon-key
   ```
4. Select which environments: Production, Preview, Development
5. Save

### 2.4 Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 1-2 minutes)
3. Verify deployment succeeded
4. Access your live URL provided by Vercel
5. Test key features in production

### 2.5 Configure Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update your domain DNS records
5. Wait for DNS propagation (up to 48 hours)

---

## Step 3: Verify Production Deployment

### 3.1 Functionality Check

Test in production:
- [ ] Login with test credentials
- [ ] Create test patient
- [ ] Book test appointment
- [ ] Create test consultation
- [ ] Add test prescription
- [ ] Create test invoice and print
- [ ] View reports

### 3.2 Performance Check

Check with Vercel Analytics:
1. Go to project settings
2. Enable Web Analytics
3. Monitor page load times
4. Check Core Web Vitals

### 3.3 Security Check

- [ ] Verify HTTPS enabled
- [ ] Check no sensitive data in browser console
- [ ] Verify environment variables not exposed
- [ ] Test login session expiry
- [ ] Verify role-based access works

---

## Step 4: Database Backups

### 4.1 Set Up Automated Backups

In Supabase Dashboard:
1. Go to project settings
2. Select "Backups"
3. Enable automated daily backups
4. Configure backup retention (recommended: 30 days)

### 4.2 Manual Backup

To manually backup:
1. Go to Supabase Dashboard
2. Select your project
3. Go to Settings > Database > Backups
4. Click "Create backup" or "Download latest"

### 4.3 Restore from Backup

In case of data loss:
1. Go to Backups in Supabase
2. Select backup to restore
3. Click "Restore"
4. Confirm restoration
5. Database will be restored (may take several minutes)

---

## Step 5: Production Configuration

### 5.1 Update Clinic Information

Update in `src/components/Dashboard.tsx` and `src/components/LoginPage.tsx`:
- Clinic name
- Clinic location
- Owner name
- Contact information

### 5.2 Configure Admin Users

In Supabase:
1. Create admin user accounts
2. Set roles to 'admin'
3. Add full names and phone numbers

### 5.3 Add Initial Staff

Create doctor and receptionist accounts:
1. Go to Supabase Authentication > Users
2. Create accounts for each staff member
3. Create user profiles with roles

### 5.4 Populate Initial Medicines

Medicines are already pre-loaded. To add more:
1. Go to "Inventory" in application
2. Click "Add Medicine"
3. Fill in details
4. Or use Supabase SQL Editor:

```sql
INSERT INTO medicines (name, quantity, price, expiry_date, low_stock_threshold)
VALUES
  ('Medicine Name', 100, 50.00, '2025-12-31', 10);
```

---

## Step 6: Monitoring & Maintenance

### 6.1 Monitor Application

Daily:
- [ ] Check Vercel deployment health
- [ ] Monitor user activity
- [ ] Review error logs

Weekly:
- [ ] Check Supabase database usage
- [ ] Review backup status
- [ ] Check failed transactions

Monthly:
- [ ] Review analytics
- [ ] Verify all features working
- [ ] Update medicines with low stock

### 6.2 Uptime Monitoring

Set up alerts:
1. In Vercel, enable Uptime Monitoring
2. Configure email alerts
3. Set up phone notifications for critical issues

### 6.3 Database Monitoring

In Supabase:
1. Monitor storage usage
2. Check database connections
3. Review slow queries (if enabled)
4. Monitor authentication usage

---

## Step 7: Updates & Patches

### 7.1 Update Dependencies

Monthly security updates:
```bash
npm update
npm audit
npm audit fix
```

### 7.2 Deploy Updates

To deploy new version:
1. Make changes to code
2. Test locally
3. Commit and push to main branch
4. Vercel automatically deploys
5. Verify in production

### 7.3 Rollback (If Needed)

In Vercel Dashboard:
1. Go to project > Deployments
2. Find previous successful deployment
3. Click "Redeploy"
4. Select the deployment to restore

---

## Step 8: Scaling & Optimization

### 8.1 Database Scaling

As user base grows:
- Monitor database storage in Supabase
- Implement pagination for large data lists
- Archive old data if needed
- Consider database optimization

### 8.2 Performance Optimization

Monitor and improve:
- [ ] Database query performance
- [ ] API response times
- [ ] Frontend load times
- [ ] CSS/JS bundle size

### 8.3 Capacity Planning

Plan for growth:
- Estimate user growth
- Monitor current usage
- Plan hardware/database upgrades
- Budget for services

---

## Troubleshooting Deployment Issues

### Build Fails on Vercel
- Check Node.js version compatibility
- Verify environment variables set
- Check for missing dependencies
- Review build logs in Vercel

### Environment Variables Not Working
- Verify variables are added in Vercel
- Check spelling exactly
- Ensure variables are added to correct environments
- Redeploy after adding variables

### Database Connection Fails
- Verify SUPABASE_URL is correct
- Check SUPABASE_ANON_KEY is valid
- Ensure Supabase project is active
- Check network connectivity

### Login Not Working
- Verify users created in Supabase Auth
- Check user profiles exist in users table
- Verify email is correct
- Check password requirements

### Data Not Displaying
- Check database queries in browser console
- Verify Row Level Security policies
- Ensure user has permission to view data
- Check Supabase dashboard for errors

---

## Post-Deployment Checklist

- [ ] All features tested in production
- [ ] Admin users created
- [ ] Initial staff accounts added
- [ ] Domain configured (if custom)
- [ ] SSL/HTTPS verified
- [ ] Backups configured
- [ ] Monitoring enabled
- [ ] Users trained on system
- [ ] Documentation provided
- [ ] Support contacts established

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## Contact Information

For deployment assistance:
1. Review this guide
2. Check Vercel and Supabase dashboards
3. Review application logs
4. Contact system administrator

---

**Your Healing Is Our Testimony**
