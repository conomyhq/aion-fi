# AionFi - DeFi Investment Platform

## 🏗 Architecture

This project follows Clean Architecture principles with a clear separation of concerns:

```
src/
├── domain/              # Business logic and entities
│   ├── entities/        # Core business objects
│   └── services/        # Domain service interfaces
├── application/         # Use cases and application logic
│   └── use-cases/       # Business use case implementations
├── infrastructure/      # External concerns
│   ├── adapters/        # Service implementations
│   └── api/            # API layer and mock services
├── presentation/        # UI components and pages
│   ├── components/      # Reusable UI components
│   └── pages/          # Page-level components
└── shared/             # Shared utilities and types
    ├── types/          # TypeScript type definitions
    ├── schemas/        # Zod validation schemas
    └── utils/          # Utility functions
```

## 🚀 Features

- **Investment Pools**: Diversified yield farming opportunities with professional management
- **Real-time Dashboard**: Track investments, earnings, and portfolio performance
- **Distribution System**: Automated reward distributions and claiming
- **Transaction Explorer**: Live feed of platform activity and analytics
- **User Profiles**: KYC verification and account management
- **Security**: Multi-layer security with wallet integration

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aionfi-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🗂 Project Structure

### Core Components

- **Layout Components**: Navbar, Footer, and main Layout wrapper
- **Page Components**: Pools, Dashboard, Distributions, Explore, Profile, Settings
- **Domain Entities**: User, Pool, Distribution models
- **Services**: Clean interfaces for business logic
- **Mock API**: Simulated backend for development

### Key Features by Page

- **Pools**: Browse and invest in yield farming pools
- **Dashboard**: Portfolio overview and position management  
- **Distributions**: View and claim reward distributions
- **Explore**: Live transaction feed and market analytics
- **Profile**: User account and KYC status management
- **Settings**: Account preferences and security settings

## 🎨 Design System

The project uses a comprehensive design system inspired by modern fintech applications:

- **Colors**: HSL-based color system with semantic tokens
- **Typography**: Inter font family with responsive scale
- **Components**: shadcn/ui components with custom variants
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first responsive design

### Design Tokens

Custom CSS properties in `src/index.css`:
- Primary colors for brand identity
- Success/warning/error states
- Muted tones for subtle elements
- Shadow system for depth
- Transition timing functions

## 🔐 Security Considerations

- Input validation with Zod schemas
- TypeScript for type safety
- Clean Architecture for maintainable code
- Separation of concerns between layers
- Mock services for safe development

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Configure the following for production:
- Database connection strings
- Web3 provider endpoints  
- KYC service credentials
- Email service configuration
- Security tokens and keys
