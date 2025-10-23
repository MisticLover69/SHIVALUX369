# SHIVALUX 369 - Electricidad Honesta

## Overview

SHIVALUX 369 is a professional electrical services company based in Madrid, Spain. The web application serves three distinct customer segments (particulares/residential, negocios/businesses, and contratistas/contractors) with a focus on trust, transparency, and professional credibility. The platform features a modern, accessible design with service showcases, contact forms, project portfolios, and company information structured around the "369 Commitment" brand philosophy (3 customer types, 6 core commitments, 9 foundational pillars).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety and modern component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application architecture)

**UI Component Strategy:**
- Shadcn/ui component library (Radix UI primitives) providing accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Design system based on "New York" style variant with dark mode support
- Custom CSS variables for theming (primary gold accent `#e1b12c`, chart colors for segment differentiation)

**State Management:**
- TanStack Query (React Query) for server state management, data fetching, and caching
- React Hook Form with Zod resolvers for form validation and state
- Local component state using React hooks for UI interactions

**Typography & Design:**
- IBM Plex Serif (700 weight) for headings to convey authority
- Inter (400, 600, 700 weights) for body text and modern readability
- Responsive spacing system using Tailwind's scale (focused on 2, 4, 8, 12, 16, 20, 24 units)
- Custom max-width container (`max-w-container` = 1100px) for content consistency

**Key Design Patterns:**
- Floating/sticky header with glassmorphic effect that collapses to FAB on scroll
- Section-based layout with smooth scroll navigation
- Color-coded service cards for customer segment differentiation (gold/teal/purple accents)
- Hover elevation effects for interactive elements
- Mobile-first responsive design with breakpoint at 768px

### Backend Architecture

**Server Framework:**
- Express.js (Node.js) as the web server and API framework
- ESM module system (type: "module" in package.json)
- TypeScript for type-safe server-side code

**API Structure:**
- RESTful API endpoint pattern (`/api/*`)
- Single POST endpoint `/api/contacto` for contact form submissions
- Request/response logging middleware for monitoring
- JSON body parsing with raw body capture for webhook support

**Email Service:**
- Nodemailer for SMTP email delivery
- Configured to send contact form submissions to `luismiguel.leal@shivalux369.com`
- HTML email templates with branded styling
- Reply-to header set to customer email for direct responses

**Development Setup:**
- Vite middleware integration for development mode with HMR
- Separate development and production build processes
- Static file serving in production mode
- Custom error handling and logging

### Data Storage Solutions

**Database Technology:**
- PostgreSQL as the primary relational database
- Neon Serverless (@neondatabase/serverless) for database connectivity
- Connection pooling via DATABASE_URL environment variable

**ORM & Schema Management:**
- Drizzle ORM for type-safe database queries and migrations
- Schema-first approach with TypeScript definitions in `shared/schema.ts`
- Drizzle Kit for schema migrations (`drizzle.config.ts`)
- Database migrations output to `./migrations` directory

**Current Schema:**
- Users table with UUID primary keys, username/password authentication
- Contact form data validated via Zod schemas (not persisted, sent via email)
- Session storage prepared with `connect-pg-simple` package

**Data Validation:**
- Zod for runtime schema validation
- `drizzle-zod` for generating Zod schemas from Drizzle table definitions
- Type inference from schemas for compile-time safety

### Authentication and Authorization

**Current Implementation:**
- Basic user schema prepared (users table with username/password)
- No active authentication flow implemented in current codebase
- In-memory storage adapter (`MemStorage`) as fallback/development option
- Session management dependencies installed (`connect-pg-simple`) but not yet configured

**Prepared Infrastructure:**
- User CRUD operations defined in `server/storage.ts` interface
- Password storage field (assumes hashing will be added)
- Session persistence to PostgreSQL prepared

### External Dependencies

**Third-Party Services:**
- SMTP email service (configurable via environment variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
- Default SMTP configuration: Gmail (smtp.gmail.com:587)
- Google Fonts API for typography (IBM Plex Serif, Inter)

**Development Tools:**
- Replit-specific plugins for development environment:
  - `@replit/vite-plugin-runtime-error-modal` for error overlay
  - `@replit/vite-plugin-cartographer` for code mapping
  - `@replit/vite-plugin-dev-banner` for development indicators

**UI Component Dependencies:**
- Radix UI primitives (20+ component packages for accessible UI patterns)
- Lucide React for icon library
- `cmdk` for command palette functionality
- `react-day-picker` for date selection
- `embla-carousel-react` for carousel components
- `vaul` for drawer/bottom sheet components
- `recharts` for potential data visualization

**Utility Libraries:**
- `class-variance-authority` for component variant management
- `clsx` and `tailwind-merge` for conditional class composition
- `date-fns` for date manipulation
- `nanoid` for unique ID generation

**Build & Development:**
- `esbuild` for server bundle compilation
- `tsx` for TypeScript execution in development
- PostCSS with Tailwind and Autoprefixer for CSS processing

**Notable Configuration:**
- Path aliases configured: `@/*` → `client/src/*`, `@shared/*` → `shared/*`, `@assets/*` → `attached_assets/*`
- Dark mode support via class-based strategy
- Monorepo structure with shared schema between client and server
- Environment-based conditional plugin loading for Replit features