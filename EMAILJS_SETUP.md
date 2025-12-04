# EmailJS Setup Instructions

The contact form uses EmailJS to send emails directly from your website. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Booking Request

**Subject:** New Booking Request from {{from_name}}

**Content:**
```
New booking request received!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service: {{service}}
Vehicle Type: {{vehicle_type}}
Preferred Date: {{preferred_date}}

Additional Details:
{{message}}

---
This email was sent from your website contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. **Copy your Public Key** (also called API Key)

## Step 5: Update Contact.jsx

1. Open `src/components/Contact.jsx`
2. Find these lines (around line 22-24):
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

3. Replace with your actual values:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxx'
   const EMAILJS_TEMPLATE_ID = 'template_xxxxx'
   const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx'
   ```

## Step 6: Test

1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the booking request

## Troubleshooting

- **"Email service is not configured" error:** Make sure you've replaced all three placeholder values in Contact.jsx
- **Email not received:** Check your spam folder and verify your EmailJS service connection
- **Form shows error:** Check the browser console (F12) for detailed error messages

## Free Tier Limits

- 200 emails per month (free)
- Upgrade available if you need more

## Security Note

The Public Key is safe to use in your frontend code. EmailJS handles authentication securely.

