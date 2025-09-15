# 🚀 CodeKnox Website - Vercel Deployment Guide

## **Your Setup:**
- ✅ **Domain**: codeknox.lk (from register.lk)
- ✅ **Email**: sales@codeknox.lk (from register.lk)
- ✅ **Backend**: Converted to Vercel serverless functions
- ✅ **Frontend**: Ready for Vercel deployment

---

## **Step 1: Prepare Your Project**

### **✅ What I've Done:**
- ✅ Converted Express.js backend to Vercel serverless functions
- ✅ Updated contact form to use `/api/contact` endpoint
- ✅ Created `vercel.json` configuration
- ✅ Created environment variables template

### **📁 New Files Created:**
- `api/contact.js` - Contact form serverless function
- `api/health.js` - Health check serverless function
- `vercel.json` - Vercel configuration
- `vercel-env-example.txt` - Environment variables template

---

## **Step 2: Deploy to Vercel**

### **Option A: Deploy via Vercel CLI (Recommended)**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your project:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name: **codeknox-website**
   - Directory: **./** (current directory)

### **Option B: Deploy via GitHub (Alternative)**

1. **Push your code to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure build settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

---

## **Step 3: Configure Environment Variables**

### **In Vercel Dashboard:**
1. **Go to your project**
2. **Click "Settings"**
3. **Click "Environment Variables"**
4. **Add these variables:**

```
FRONTEND_URL = https://codeknox.lk
EMAIL_HOST = mail.register.lk
EMAIL_PORT = 587
EMAIL_USER = sales@codeknox.lk
EMAIL_PASS = your_register_lk_email_password
EMAIL_FROM = sales@codeknox.lk
EMAIL_TO = sales@codeknox.lk
```

### **Get Email Password from Register.lk:**
1. **Login to register.lk**
2. **Go to "My Products & Services"**
3. **Click on your domain**
4. **Go to "Email Accounts"**
5. **Find your email password**

---

## **Step 4: Configure Custom Domain**

### **In Vercel Dashboard:**
1. **Go to your project**
2. **Click "Settings"**
3. **Click "Domains"**
4. **Add domain: `codeknox.lk`**
5. **Add domain: `www.codeknox.lk`**

### **Update DNS in Register.lk:**
1. **Login to register.lk**
2. **Go to "My Domains"**
3. **Click on codeknox.lk**
4. **Update DNS records:**

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## **Step 5: Test Your Deployment**

### **Test Contact Form:**
1. **Go to your website**
2. **Fill out the contact form**
3. **Submit and check if you receive email**

### **Test API Endpoints:**
- **Health check**: `https://codeknox.lk/api/health`
- **Contact form**: `https://codeknox.lk/api/contact`

---

## **Step 6: Configure Email (Register.lk)**

### **Create Email Account:**
1. **Login to register.lk**
2. **Go to "My Products & Services"**
3. **Click on your hosting**
4. **Go to "Email Accounts"**
5. **Create email: `sales@codeknox.lk`**
6. **Set password and note it down**

### **SMTP Settings:**
- **Host**: mail.register.lk
- **Port**: 587
- **Security**: STARTTLS
- **Username**: sales@codeknox.lk
- **Password**: (your email password)

---

## **🎉 You're Done!**

### **What You Get:**
- ✅ **Free hosting** on Vercel
- ✅ **Global CDN** for fast loading
- ✅ **Automatic deployments** from GitHub
- ✅ **Custom domain** (codeknox.lk)
- ✅ **SSL certificate** (automatic)
- ✅ **Professional email** (sales@codeknox.lk)
- ✅ **Contact form** working with your email
- ✅ **Newsletter signup** working with EmailJS

### **Your Website URL:**
- **Main site**: https://codeknox.lk
- **Admin panel**: https://codeknox.lk/admin/login

---

## **🔧 Troubleshooting**

### **Contact Form Not Working:**
1. **Check environment variables** in Vercel
2. **Verify email password** from register.lk
3. **Test SMTP settings** manually

### **Domain Not Working:**
1. **Check DNS records** in register.lk
2. **Wait 24-48 hours** for DNS propagation
3. **Verify domain** in Vercel dashboard

### **Need Help?**
- **Vercel Docs**: https://vercel.com/docs
- **Register.lk Support**: Contact their support team

---

## **🚀 Next Steps**

1. **Deploy to Vercel** (follow steps above)
2. **Configure environment variables**
3. **Set up custom domain**
4. **Test everything**
5. **Go live!** 🎉
