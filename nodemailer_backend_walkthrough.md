# Walkthrough: Nodemailer Express Backend Migration & Vercel Deployment

This walkthrough details the migration from client-side EmailJS to a secure, server-side Express backend utilizing Nodemailer for SMTP email dispatch, as well as Vercel Serverless Function deployment.

---

## 🏗️ Architecture Design

```mermaid
graph TD
    A[React Client] -->|POST /api/contact| B[Express/Serverless Backend]
    A -->|POST /api/quote| B
    B -->|Nodemailer / SMTP| C[SMTP Server (Hostinger)]
    C -->|Deliver Email| D[info@srivarahiagrofoods.in]
```

By routing contact and quotation submissions through a server-side handler, we:
1. **Secure SMTP Credentials**: Avoid sending mail server passwords or tokens to the browser.
2. **Standardize Email Layouts**: Dispatch clean, responsive, and responsive HTML emails to the sales desk.
3. **Handle Fallbacks Elegantly**: Run in a safe **Simulation Mode** (which logs incoming data directly to the server terminal) if SMTP settings are not configured in the local developer's `.env`.

---

## 🛠️ Modified and New Files

### 1. Backend Server (Local Development)
- **File Link**: [server/server.js](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/server/server.js)
- **Features**:
  - Exposes `POST /api/contact` and `POST /api/quote` endpoints.
  - Generates HTML templates containing organized tables for incoming RFQs (Request for Quotations).
  - Validates fields to ensure incomplete forms do not trigger SMTP calls.

### 2. Vercel Serverless Endpoints (Production Deployment)
- **Contact Endpoint**: [api/contact.js](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/api/contact.js) mapped automatically to `/api/contact`
- **Quotation Endpoint**: [api/quote.js](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/api/quote.js) mapped automatically to `/api/quote`

### 3. Frontend Pages
- **Contact Form**: [src/pages/Contact.jsx](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/src/pages/Contact.jsx)
- **Quotation Form**: [src/pages/Quotation.jsx](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/src/pages/Quotation.jsx)
- **Changes**:
  - Removed EmailJS client SDK dependency.
  - Rewrote the `handleSubmit` routine to perform a standard `fetch` call to `${apiUrl}/api/contact` or `/api/quote`.

### 4. Configuration Templates
- **File Link**: [.env.example](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/.env.example)
- **File Link**: [.env](file:///c:/Users/LENOVO/Desktop/sri-varahi-agro/.env)

---

## 🚀 How to Run & Test Locally

### Step 1: Install Dependencies
Run in your project directory:
```bash
npm install
```

### Step 2: Start the Express Backend
Run the backend server on port `5001`:
```bash
npm run server
```

### Step 3: Run the React Development Frontend
Run in another terminal window:
```bash
npm start
```

---

## ⚡ Vercel Serverless Function Deployment Instructions

We have created native **Vercel Serverless Functions** to host your email dispatch endpoints directly on Vercel without requiring a separate server.

### ⚙️ Vercel Environment Variables Configuration
Go to your Vercel Dashboard, select your project, go to **Settings > Environment Variables**, and add the following 6 keys:

1. `SMTP_HOST` = `smtp.hostinger.com`
2. `SMTP_PORT` = `465`
3. `SMTP_USER` = `info@srivarahiagrofoods.in`
4. `SMTP_PASS` = `Varahi@2026`
5. `RECEIVER_EMAIL` = `info@srivarahiagrofoods.in`
6. `REACT_APP_API_URL` = `""` *(an empty string, so the React client makes relative calls directly to the same Vercel domain)*

Once these variables are added, trigger a redeploy of your project on Vercel, and both the forms will work instantly and securely!
