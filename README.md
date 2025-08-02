
# Frontend App

A modern, highly interactive **Next.js 15** frontend powered by **React 19**, **Tailwind CSS 4**, **Radix UI**, and real-time communication via **Socket.IO**.  
Built for scalability, accessibility, and great user experience.

---

## 🚀 Features

- ⚡ **Next.js 15** with Turbopack support  
- 🎨 **Tailwind CSS 4** with custom animation utilities (`tw-animate-css`)  
- 🧱 UI components powered by **Radix UI** and **Lucide Icons**  
- 🔌 Real-time communication with **Socket.IO**  
- 🧠 Interactive animations via **Framer Motion**  
- 🔐 OAuth login support (Google, etc.)  
- ☁️ `.env`-based configuration using `dotenv`  
- 🧹 Linting with ESLint (Next.js config)  

---

## 📁 Project Structure

```bash
frontend/
├── public/               # Static assets (images, icons, etc.)
├── src/
│   ├── components/       # UI and reusable components
│   ├── pages/            # Next.js page routes
│   ├── styles/           # Tailwind and global styles
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context providers
│   └── utils/            # Helper functions
├── .env.local            # Environment variables
├── tailwind.config.ts    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS plugins
└── next.config.js        # Next.js configuration

└── next.config.js # Next.js configuration

```

--- 

---

## 🧑‍💻 Development

### 1. Clone the repo

```bash
git clone https://github.com/rolandiartmeladze/social-chat-integration-frontend.git
cd social-chat-integration-frontend
```
## Install dependencies
```bash
npm install
# or
yarn install
```
3. Set up environment
```bash
Create a .env.local file in the root:
```
## 📦 Build for Production
```bash
npm run build
npm run start
```

📚 Scripts
Command	Description
npm run dev	Start dev server (Turbopack)
npm run build	Build production app
npm run start	Start production server
npm run lint	Run ESLint checks

## 🧩 Tech Stack

- Next.js 15	React framework
- React 19	UI Library
- Tailwind CSS 4	Utility-first CSS framework
- Radix UI	Accessible UI primitives
- Socket.IO	Real-time communication
- Framer Motion	Animation engine
- Lucide Icons	Icon set
- dotenv	Environment variable management
- ESLint	Linting and code quality
  
---

## 📸 UI Libraries Used
- @radix-ui/*: dialogs, tooltips, avatars, scroll-areas, etc.
- lucide-react: icon system
- tw-animate-css: predefined utility animation classes
- cmdk: command palette component
- @heroui/badge: badge UI component
---
📄 License
This project is private or licensed under your preferred license.

---
## 🗣 Contact
- Made with ❤️ by Roland Artmeladze
- Website: https://portfolio-inky-tau-14.vercel.app/
- Email: Rartmeladze@gmail.com
