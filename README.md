# Stravinci Automotive Website

This is the official website for Stravinci Automotive, showcasing our revolutionary electric vehicle technology and providing information for potential investors and customers.

## Features

- Modern, responsive design
- Contact form with Firebase integration
- Investor inquiry form with Firebase integration
- Custom font implementation using local fonts
- Smooth animations and transitions

## Technology Stack

- React
- Vite
- Tailwind CSS
- Firebase (Firestore)
- GSAP for animations

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Firebase configuration (see below)
4. Start the development server: `npm run dev`

## Firebase Configuration

This project uses Firebase Firestore to store contact form submissions and investor inquiries. To set up Firebase:

1. Create a `.env` file in the root directory
2. Add your Firebase configuration variables (see `.env.example` for format)
3. For detailed setup instructions, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Custom Fonts

The website uses the following custom fonts from the `public/fonts` directory:
- Bank Gothic Medium BT
- Copperplate Gothic Std 30 AB
