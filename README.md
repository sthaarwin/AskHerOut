# AskHerOut 💕

A romantic and interactive web application designed to help you ask someone special out on a date in the most charming way possible!

## ✨ Features

- **Interactive Love Letter**: Beautiful animated envelope that opens to reveal a personalized message
- **Random Pickup Lines**: Curated collection of witty and charming pickup lines
- **Playful UI**: The "Close" button playfully dodges the cursor to encourage a "Yes" response
- **Beautiful Animations**: Smooth transitions and floating hearts for a magical experience
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Themed Notifications**: Elegant toast notifications that match the romantic aesthetic

## 🚀 Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion for smooth interactions
- **Typography**: Custom fonts for romantic appeal
- **TypeScript**: Full type safety throughout the application

## 🎨 Design Features

- **Color Palette**: Romantic pink and rose gradients
- **Typography**: Beautiful font combinations for readability and charm
- **Micro-interactions**: Hover effects, button animations, and floating elements
- **Mobile-First**: Responsive design that works on all screen sizes

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sthaarwin/AskHerOut.git
   cd AskHerOut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the magic happen!

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main interactive letter page
│   ├── admin/             # Admin dashboard
│   ├── form/              # Contact form page
│   ├── joke/              # Joke generator page
│   └── thanks/            # Thank you page
├── components/            # Reusable React components
│   ├── ui/                # shadcn/ui components
│   ├── FloatingHeart.tsx  # Animated heart component
│   └── PageTransition.tsx # Page transition animations
├── data/                  # Static data and content
│   └── pickupLines.ts     # Collection of pickup lines
├── hooks/                 # Custom React hooks
│   └── use-toast.ts       # Toast notification hook
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## 🎯 How It Works

1. **Landing Page**: Displays a beautiful animated envelope
2. **Open Letter**: Click to reveal the romantic message with a random pickup line
3. **Interactive Buttons**: 
   - "Yes" button triggers celebration notifications
   - "Close" button playfully dodges the cursor (because who wants to close this?)
4. **Responsive Experience**: Optimized for both desktop and mobile users

## 🎨 Customization

### Adding New Pickup Lines
Edit `/data/pickupLines.ts` to add your own creative pickup lines:

```typescript
export const pickupLines = [
  "Your new pickup line here!",
  // Add more lines...
];
```

### Styling
The project uses Tailwind CSS with custom configurations. Main color scheme can be modified in `tailwind.config.ts`.

## 🚀 Deployment

The application is ready to deploy on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

Simply connect your repository and deploy!

## 🤝 Contributing

Feel free to contribute to make this even more romantic and charming:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Perfect For

- Asking someone out on a first date
- Valentine's Day surprises
- Anniversary celebrations
- Just spreading some love and joy!

---

Made with 💕 and lots of coffee ☕

*Remember: The best pickup line is genuine interest and respect!*
