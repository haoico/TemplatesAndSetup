# Nuxt 3 Starter Template

OG-Creator[https://github.com/ayaremin/modern-nuxt-starter]

A modern, production-ready Nuxt 3 starter template with TypeScript, Tailwind CSS, Pinia state management, Firebase authentication, and best practices built-in.

## ✨ Features

- **⚡ Nuxt 3** - The latest version with Vue 3 and modern development experience
- **🎨 Tailwind CSS** - Utility-first CSS framework with dark mode support
- **📱 Responsive Design** - Mobile-first approach with beautiful UI components
- **🌙 Dark Mode** - Built-in dark/light mode toggle with system preference detection
- **🗃️ Pinia Store** - Modern state management with TypeScript support
- **🔥 Firebase Auth** - Ready-to-use authentication with Google sign-in
- **📦 Headless UI** - Accessible UI components that work seamlessly with Tailwind
- **🎯 TypeScript** - Full TypeScript support with proper types and IntelliSense
- **🎭 Heroicons** - Beautiful, hand-crafted SVG icons
- **📊 SEO Optimized** - Meta tags, Open Graph, and structured data ready
- **🚀 Production Ready** - Optimized builds and deployment configurations

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **State Management**: Pinia
- **Authentication**: Firebase Auth (optional)
- **Icons**: Heroicons
- **Build Tool**: Vite
- **Package Manager**: npm/yarn/pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm**, **yarn**, or **pnpm**

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nuxt-starter-template
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# App Configuration
APP_URL=http://localhost:3000

# Firebase Configuration (Optional)
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (Server-side, Optional)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_STORAGE_BUCKET=your_storage_bucket
```

### Firebase Setup (Optional)

If you want to use Firebase authentication:

1. **Create a Firebase project** at [Firebase Console](https://console.firebase.google.com/)

2. **Enable Authentication** and configure Google sign-in provider

3. **Get your config** from Project Settings > General > Your apps

4. **Add the config** to your `.env` file

5. **Update the plugin** in `plugins/firebase.client.ts` if needed

## 📁 Project Structure

```
nuxt-starter-template/
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS imports
├── components/               # Vue components
├── composables/             # Vue composables
│   ├── useAuth.ts           # Authentication logic
│   ├── useDarkMode.ts       # Dark mode toggle
│   ├── useNavigationStore.ts # Navigation state
│   └── useNotification.ts   # Notification system
├── layouts/
│   └── default.vue          # Default layout
├── middleware/
│   └── auth.ts              # Authentication middleware
├── pages/
│   └── index.vue            # Homepage
├── plugins/
│   ├── firebase.client.ts   # Firebase initialization
│   └── pinia.ts             # Pinia store setup
├── types/                   # TypeScript definitions
├── utils/
│   └── logger.ts            # Logging utility
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Tailwind CSS

- **Configuration**: Edit `tailwind.config.js`
- **Custom styles**: Add to `assets/css/main.css`
- **Dark mode**: Already configured and working

### Components

The starter includes example components showcasing:
- Responsive design patterns
- Dark mode integration
- Accessibility best practices
- TypeScript usage

### State Management

Pinia stores are set up in the `composables/` directory:
- `useAuth.ts` - Authentication state
- `useDarkMode.ts` - Theme management
- `useNavigationStore.ts` - Navigation state

## 🔒 Authentication

The template includes Firebase Authentication setup:

1. **Sign in with Google** - Ready to use
2. **Auth middleware** - Protect routes
3. **Auth composable** - Manage auth state
4. **User session** - Persist authentication

To use authentication:

```vue
<script setup>
const { signInWithGoogle, signOut, user, isAuthenticated } = useAuth()
</script>
```

## 🎯 SEO & Meta

The template includes comprehensive SEO setup:

- **Meta tags** - Title, description, keywords
- **Open Graph** - Social media sharing
- **Twitter Cards** - Twitter sharing
- **Structured data** - Search engine optimization

Update meta information in `nuxt.config.ts` and page-specific meta in components.

## 📱 Responsive Design

The template is built mobile-first with:
- **Responsive grid systems**
- **Mobile navigation patterns**
- **Touch-friendly interactions**
- **Optimized typography scales**

## 🌙 Dark Mode

Dark mode is implemented with:
- **System preference detection**
- **Manual toggle**
- **Persistent user choice**
- **Smooth transitions**

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Code Quality
npm run type-check   # Type checking
npm run lint         # ESLint
npm run lint:fix     # Fix ESLint issues
```

## 🚀 Deployment

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run generate`
3. **Set publish directory**: `dist`
4. **Add environment variables** in Netlify dashboard

### Vercel

1. **Import your repository** to Vercel
2. **Framework preset**: Nuxt.js
3. **Add environment variables** in Vercel dashboard

### Traditional Hosting

```bash
# Generate static files
npm run generate

# Upload the dist/ folder to your hosting provider
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The Vue framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Headless UI](https://headlessui.com/) - Accessible UI components
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons
- [Pinia](https://pinia.vuejs.org/) - State management
- [Firebase](https://firebase.google.com/) - Backend services

## 📞 Support

If you have any questions or need help, please:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** if needed

---

**Happy coding!** 🎉

Built with ❤️ using Nuxt 3
