# Love Website for Chikwere 💕

A beautiful, romantic website built as a tribute to Chikwere, featuring animated poetry, photo galleries, and heartfelt messages.

## 🚀 Deployment on Vercel

This app is optimized for Vercel deployment. Follow these steps:

### Prerequisites
- Node.js 18+ 
- A Vercel account

### Quick Deploy to Vercel

1. **Fork or clone this repository**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect the framework (Vite/React)

3. **Configure Build Settings (if needed):**
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# In your project directory
vercel

# Follow the prompts
```

### Environment Variables
No environment variables are required for this static site.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   └── ...
├── server/           # Express server (not used in production)
├── shared/           # Shared types and schemas
├── vercel.json       # Vercel configuration
└── ...
```

## 🎨 Features

- **Landing Page**: Animated hero with floating hearts
- **About Her**: Personalized tribute sections
- **Love Poem**: Animated poetry display
- **Gratitude Wall**: Sequential thankfulness messages
- **Gallery**: Photo showcase with romantic captions
- **Responsive Design**: Mobile-first approach
- **Beautiful Animations**: Smooth transitions and effects

## 🔧 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Icons**: Lucide React

## 💝 About

This website was created as a love letter to Chikwere, showcasing the beauty of love through technology, design, and heartfelt words.