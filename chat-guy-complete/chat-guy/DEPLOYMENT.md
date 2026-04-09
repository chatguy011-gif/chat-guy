# Chat Guy — Deployment Guide

## What's in this folder

```
chat-guy/
├── index.html        ← Your entire frontend app
├── api/
│   └── chat.js       ← Secure backend (hides your API key)
├── vercel.json       ← Vercel deployment config
└── DEPLOYMENT.md     ← This guide
```

---

## Step 1 — Get your Anthropic API Key (Free)

1. Go to https://console.anthropic.com
2. Sign up for a free account
3. Click "API Keys" → "Create Key"
4. Copy the key (starts with `sk-ant-...`)
5. Keep it secret — never share it publicly

---

## Step 2 — Deploy to Vercel (Free)

### Option A — Drag & Drop (Easiest)
1. Go to https://vercel.com and sign up free
2. Click "Add New Project" → "Deploy from folder"
3. Drag your entire `chat-guy` folder onto the page
4. Before clicking Deploy, click **"Environment Variables"**
5. Add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-your-key-here`
6. Click **Deploy**
7. Your app is live at `yourapp.vercel.app` 🎉

### Option B — GitHub (Recommended for updates)
1. Create a free account at https://github.com
2. Create a new repository called `chat-guy`
3. Upload all files in this folder to the repo
4. Go to https://vercel.com → "Add New Project"
5. Connect your GitHub and select `chat-guy`
6. Add environment variable: `ANTHROPIC_API_KEY` = your key
7. Click Deploy — done!
8. Every time you update files on GitHub, Vercel auto-redeploys

---

## Step 3 — Get a Custom Domain (Optional)

- Vercel gives you a free `.vercel.app` domain automatically
- To use your own domain (e.g. `chatguy.co.za`):
  1. Buy a domain at https://domains.google.com or https://afrihost.com
  2. In Vercel → your project → "Domains" → add your domain
  3. Follow the DNS instructions — takes ~10 minutes

---

## How to Earn Money

### 1. Freemium (Already built in!)
The app already limits free users to 10 messages/day.
To collect real payments:
- Sign up at https://paystack.com (works in South Africa)
- Or use https://stripe.com
- Add a payment link to the "Get Pro" button

### 2. Niche it down
- "Chat Guy for Students" — homework help
- "Chat Guy for Job Seekers" — CV and interview prep
- "Chat Guy for Small Businesses" — customer support bot
Charge businesses R200–R500/month per bot

### 3. Sell to businesses
Reach out to local businesses and offer Chat Guy as their
customer support assistant. Charge a setup fee + monthly fee.

### 4. Affiliate links
When Chat Guy recommends products or services, include
affiliate links to earn commission.

---

## Estimated Costs

| Usage | Anthropic API Cost |
|-------|-------------------|
| 100 users × 10 msgs/day | ~$5/month |
| 500 users × 10 msgs/day | ~$25/month |
| Pro users (unlimited) | ~$0.01 per conversation |

Charge R99/month Pro = break even at just 3 paying users!

---

## Need Help?

- Anthropic Docs: https://docs.anthropic.com
- Vercel Docs: https://vercel.com/docs
- Paystack (SA payments): https://paystack.com
