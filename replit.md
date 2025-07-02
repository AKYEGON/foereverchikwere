# Love Website Project

## Overview
This is a personal romantic website built as a tribute to a loved one named Chikwere. The application is a full-stack web project that combines a React frontend with an Express.js backend, designed to showcase love through various interactive pages including poetry, photo galleries, and gratitude messages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: React Router for client-side navigation
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration
- **Static Serving**: Express serves built React application in production

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema management
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Pages and Features
1. **Landing Page**: Animated hero section with romantic quotes and floating hearts
2. **About Her**: Tribute page with personalized praise sections
3. **Love Poem**: Animated poetry display with staggered reveal
4. **Gratitude Wall**: Sequential display of thankfulness messages
5. **Gallery**: Photo showcase with romantic captions
6. **Navigation**: Responsive navigation with mobile support

### UI Components
- Custom floating hearts animation
- Gradient text effects and romantic styling
- Responsive design with mobile-first approach
- Toast notifications and interactive elements
- Card-based layouts with glassmorphism effects

### Technical Components
- Type-safe API interfaces
- Shared schema definitions between client and server
- Error handling and logging middleware
- Development vs production configuration

## Data Flow
1. **Client Requests**: React components make requests through TanStack Query
2. **API Layer**: Express.js handles HTTP requests with proper error handling
3. **Data Access**: Storage interface abstracts database operations
4. **Response Flow**: JSON responses with request logging and performance monitoring

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm & drizzle-zod**: Database ORM with Zod validation
- **@tanstack/react-query**: Server state management
- **react-router-dom**: Client-side routing

### UI Libraries
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety across the stack
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- Express server with TypeScript compilation via tsx
- Environment-based configuration
- Replit-specific development plugins and error handling

### Production Build
- Vite builds React app to static files
- esbuild bundles Express server
- Single Node.js process serves both API and static files
- PostgreSQL database connection via environment variables

### Environment Configuration
- `NODE_ENV` controls development vs production behavior
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific environment detection and tooling

## Changelog
- July 02, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.