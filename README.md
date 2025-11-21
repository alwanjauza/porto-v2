# 🌐 Alwan Jauza Rosyad — Professional Portfolio (v2)

![Portfolio Preview](/public/og-image.jpg)

> **"Crafting robust systems with aesthetic precision."**

This is a high-performance, editorial-style personal portfolio built with the modern React ecosystem. It showcases my journey as a **Lead Full Stack Developer**, featuring interactive storytelling, minimalist design, and robust engineering practices.

## 🚀 Tech Stack & Tools

Built with performance, scalability, and type safety in mind:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Type Safety)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first architecture)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) (Complex scroll-linked & physics-based animations)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Geist Sans & Geist Mono (Optimized via `next/font`)
- **Deployment:** [Vercel](https://vercel.com) (Edge Network & CI/CD)

## ✨ Key Features

### 1. High-End Interactions

- **Velocity-aware Marquee:** An infinite scrolling tech stack ticker that reacts to user scroll speed (using `useVelocity`, `useSpring`, and `useAnimationFrame`).
- **Sticky Scroll Reveal:** Cinematic text reveal effect for storytelling sections using sticky positioning and scroll progress mapping.
- **Interactive Timeline:** A detailed career path visualization with a progressive filling line and horizontal "memory lane" gallery (Scroll Snap).
- **Parallax Effects:** Subtle depth movements in the About section.

### 2. Performance & SEO First

- **Dynamic Metadata:** Automated SEO titles and descriptions based on project data (`generateMetadata`).
- **JSON-LD Structured Data:** Implemented `Person` schema for Google Knowledge Graph.
- **Open Graph Support:** Custom 1200x630 OG images for professional social media sharing (WhatsApp, LinkedIn, X).
- **Image Optimization:** Utilization of `next/image` with proper sizing attributes (`sizes`) and automatic format conversion (WebP/AVIF).

### 3. Editorial Design System

- **Typography Driven:** Strong hierarchy using a mix of Sans-Serif and Serif Italic fonts.
- **Minimalist Palette:** A clean `#F8F7F3` (Bone White) and `#323131` (Soft Charcoal) theme.
- **Responsive Layout:** Fully optimized for mobile (using `dvh`, compact hero layouts) up to large 4K screens.

## 📂 Project Structure

This project follows the **Container/View Pattern** to separate SEO logic (Server) from UI animation logic (Client).

```bash
├── app/
│   ├── about/          # Career Path Page (Server Component for SEO)
│   ├── projects/       # Dynamic Project Details [id] (Server Component)
│   ├── layout.tsx      # Root Layout (Fonts, Analytics, SEO Template)
│   └── page.tsx        # Home Page
├── components/
│   ├── views/          # Client-side Logic Containers (AboutView, ProjectView)
│   ├── header.tsx      # Responsive Navigation with Framer Motion
│   ├── hero.tsx        # Landing Section
│   ├── about.tsx       # Philosophy & Tech Stack Marquee
│   ├── quote.tsx       # Reusable Scroll Reveal Component
│   └── ...
├── lib/
│   └── data.ts         # Centralized Data Source (Projects/Experience)
└── public/             # Static Assets & OG Images
```

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/alwanjauza/porto-v2.git
cd porto-v2
```

### 2. Install dependencies

_Note: Since this project uses Next.js 16/React 19 RC, some UI libraries might require legacy peer deps._

```bash
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory to configure the base URL for SEO/Open Graph:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# Change this to your production domain when deploying (e.g., [https://alwanjauza.com](https://alwanjauza.com))
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000]([http://localhost:3000]) with your browser to see the result.

## 🚢 Deployment

**The project is optimized for Vercel.**

1. Push code to GitHub.

2. Import project in Vercel Dashboard.

3. Important: Go to Settings > Environment Variables and set NEXT_PUBLIC_BASE_URL to your production domain (e.g., https://your-domain.vercel.app).

4. Deploy.

## 📄 License

This project is open source and available under the [MIT License.](LICENSE)

## 🧑‍💻 Crafted with ❤️ by [Alwan Jauza Rosyad](https://instagram.com/alwanjauza)

> **“Beautiful software is the harmony of logic and design.”**
