# Portfolio Website

Modern, responsive portfolio website for Sameera Roshan Dias built with Next.js, TypeScript, and shadcn UI.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Docker
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📦 Features

- ✨ Modern, animated UI with Framer Motion
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Built with shadcn UI components
- ⚡ Optimized with Next.js 15+
- 🐳 Docker-ready for easy deployment
- 🚀 CI/CD with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/          # shadcn UI components
│   │   └── *.tsx        # Custom components
│   └── lib/             # Utility functions
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions
├── Dockerfile           # Docker configuration
└── docker-compose.yml   # Docker Compose setup
```

## 🚢 Deployment

### Automated Deployment with GitHub Actions

The repository includes a GitHub Actions workflow for automated deployment to your server.

#### Required GitHub Secrets

Add these secrets in **Settings → Secrets and variables → Actions**:

| Secret | Required | Description |
|--------|----------|-------------|
| `SERVER_HOST` | ✅ | Server IP or domain |
| `SERVER_USERNAME` | ✅ | SSH username |
| `SERVER_SSH_KEY` | ✅ | SSH private key |
| `SERVER_PORT` | ❌ | SSH port (default: 22) |
| `APP_PORT` | ❌ | App port (default: 3000) |

📖 **Full deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Manual Deployment

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -d -p 3000:3000 --name portfolio-app portfolio
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```env
# Add any environment variables here
```

### Next.js Config

The app uses standalone output for optimized Docker builds. See `next.config.ts`.

## 📝 Development

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Customizing Theme

Edit colors in `src/app/globals.css` under `:root` and `.dark` classes.

## 🧪 Testing

```bash
# Build test
npm run build

# Type check
npx tsc --noEmit
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sameera Roshan Dias**
- Email: sameeradias98@gmail.com
- LinkedIn: [sameera-dias-387943110](https://www.linkedin.com/in/sameera-dias-387943110)
- GitHub: [@sameeradias](https://github.com/sameeradias)

---

Built with ❤️ using Next.js and shadcn UI
