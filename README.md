# Raj Patel - Product-Led Developer Portfolio

A responsive, full-stack portfolio built with Next.js. The website combines project case studies, personal storytelling, certifications, hackathon documentation, AI-assisted tools, a portfolio builder, contact management, and protected administration in one product-focused experience.

## Table of Contents

1. [Core Features](#core-features)
2. [Portfolio Projects](#portfolio-projects)
3. [AI Website Prompt Generator](#ai-website-prompt-generator)
4. [Portfolio Studio](#portfolio-studio)
5. [Backend and Administration](#backend-and-administration)
6. [Design and Experience](#design-and-experience)
7. [Technology Stack](#technology-stack)
8. [Application Routes](#application-routes)
9. [Project Structure](#project-structure)
10. [Local Setup](#local-setup)
11. [Environment Variables](#environment-variables)
12. [Available Scripts](#available-scripts)
13. [Content Management](#content-management)
14. [Deployment](#deployment)

## Core Features

### Home Experience

- Full-screen developer introduction with animated content and clear calls to action.
- Visitor-intent navigation for recruiters, collaborators, project viewers, and people interested in the development process.
- Product proof section covering business visibility, communication, security, and performance.
- Personal profile section with Raj Patel's portrait, working philosophy, and journey link.
- Selected project case studies with responsive product visuals, technology tags, outcomes, and detailed project pages.
- Engineering process section explaining product thinking, technical priorities, and collaboration style.
- Skills grouped by interface systems, application logic, data foundations, mobile development, and delivery.
- Certificates section with full-size certificate viewing.
- Hackathon certificate and responsive event photo gallery.
- Current learning and exploration section.
- Development journey timeline.
- Interactive workspace shortcuts for projects, resume, process, experiments, and contact.
- Contact call to action and responsive global footer.

### Certificates and Hackathon Story

- Alpha DSA with Java course completion certificate from Apna College.
- Computer Hardware and Operating Systems workshop certificate.
- Oriental TechHack 2.0 National Level Hackathon participation certificate.
- Smart Samadhan Blind Hackathon event story and photo gallery.
- Full-size certificate and event image links.
- Responsive editorial gallery with a lead team image and supporting project, venue, and participant photographs.

### Project Case Studies

- Dedicated project archive with filters and an editorial scrolling layout.
- Project preview dialog on desktop and direct project navigation on mobile.
- Individual case-study pages covering:
  - Context and problem
  - Research and discovery
  - Technical decisions
  - Build challenges
  - Delivered solution
  - Outcome
  - Lessons learned
- Live project links for deployed applications.
- Static metadata and Open Graph images for project pages.

### Additional Portfolio Pages

- `/projects` - editorial project archive.
- `/projects/[slug]` - complete project case study.
- `/journey` - development and learning timeline.
- `/resume` - professional resume page.
- `/contact` - validated project enquiry form.
- Custom loading, transition, and not-found experiences.
- Generated `robots.txt` and `sitemap.xml` routes.

## Portfolio Projects

### Phone Call Tracking

A mobile operations platform that records call activity and turns it into useful reporting for sales teams and managers.

**Highlights:** React Native, Node.js, MongoDB, Android permissions, offline handling, reporting dashboards, and secure synchronization.

### Gyan Bhoomi

A responsive school information platform designed to make admissions, academics, notices, and family communication easier to access.

**Highlights:** Next.js, Tailwind CSS, MongoDB, responsive content architecture, and accessible navigation.

### FaceAI Attend

A face-recognition attendance and remote workforce activity management system.

**Features:**

- Employee sign-in using face recognition.
- Employee ID/email and password authentication.
- Attendance and work-session tracking.
- Laptop on, off, active, idle, and sleep-state records.
- Employee activity timelines and work-duration summaries.
- Administrator visibility across employee attendance and device activity.
- Remote-work monitoring designed around clear operational reporting.

**Live project:** [face-complete.onrender.com](https://face-complete.onrender.com/)

### ResumeLens AI

A free and ad-free AI resume builder for creating, evaluating, improving, rebuilding, and downloading professional resumes.

**Features:**

- Multiple professional resume templates.
- AI-supported writing and resume improvements.
- Resume and ATS readiness scoring.
- Keyword, formatting, readability, and section analysis.
- Evidence-based suggestions that do not invent experience.
- Resume rebuilding and optimization workflow.
- PDF download without advertisements.
- Private, user-scoped resume handling.

**Live project:** [resume-builder-8vdc.onrender.com](https://resume-builder-8vdc.onrender.com/)

### Secure Access

A reusable authentication foundation with secure credentials, protected routes, authorization, validation, recovery flows, and audit-friendly errors.

**Highlights:** Node.js, Express, JWT, MongoDB, password hashing, middleware, and role-based access control.

## AI Website Prompt Generator

The website includes a free planning tool at `/website-prompt-generator` for converting a rough website idea into a structured, build-ready prompt.

### Features

- Guided website-type selection.
- Technology stack planning.
- Page and feature selection.
- Design style and interaction preferences.
- Integration and deployment planning.
- Detailed and concise prompt modes.
- Presets and reusable prompt templates.
- Drag-and-drop page organization.
- Prompt library and filtering.
- AI-assisted prompt improvement through an API route.
- Local draft persistence.
- Copy-ready output for ChatGPT, Claude, Cursor, Gemini, Bolt, Lovable, Replit, and similar tools.

## Portfolio Studio

The Portfolio Studio at `/builder` provides a guided portfolio creation workflow.

### Features

- 20 portfolio design directions.
- Template search and category filtering.
- Light, dark, 3D, and editorial presentation options.
- Editable personal, project, skill, and experience content.
- AI-assisted content generation and improvement.
- AI-generated site and component design plans.
- Image generation integration.
- Desktop, tablet, and mobile previews.
- Theme, typography, spacing, radius, and accent controls.
- Drag-and-drop editing with DnD Kit.
- Local draft persistence.
- Export-oriented responsive portfolio output.

## Backend and Administration

### Contact Management

- Browser-side and server-side validation.
- Honeypot spam protection.
- Per-IP request rate limiting.
- MongoDB storage through Mongoose.
- Contact submissions available in the protected admin dashboard.

### Admin Authentication

- Admin login at `/admin/login`.
- Bcrypt password verification.
- JWT-based authentication.
- Secure HTTP-only authentication cookie.
- Middleware-protected administration routes.
- Dashboard view for recent contact enquiries.

### Database Models

The project includes Mongoose models for:

- Admin
- Contact
- Project
- Skill
- Timeline
- Testimonial
- Site content

### API Routes

- `POST /api/admin/login` - admin authentication.
- `POST /api/contact` - validated contact submission.
- `POST /api/builder/ai` - portfolio content assistance.
- `POST /api/builder/site-design` - structured site planning.
- `POST /api/builder/component-design` - component design planning.
- `POST /api/builder/images` - builder image generation.
- `POST /api/website-prompt-generator/improve` - AI prompt improvement.

## Design and Experience

- Responsive desktop, tablet, and mobile layouts.
- Dark and light theme support.
- Accessible semantic structure, labels, focus states, and keyboard interactions.
- Reduced-motion preference support.
- Framer Motion page transitions and interface animation.
- GSAP-powered scroll journey and interactive storytelling.
- React Three Fiber and Drei support for 3D experiences.
- Optimized images through `next/image`.
- Editorial project layouts and responsive image galleries.
- Sticky navigation, progress indicators, filters, previews, and modal focus management.
- Custom fonts, metadata, sitemap, robots route, and SEO-friendly static generation.

## Technology Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16, React 19 |
| Language | JavaScript |
| Styling | Tailwind CSS 4, custom CSS |
| Animation | Framer Motion, GSAP |
| 3D | Three.js, React Three Fiber, Drei |
| Drag and Drop | DnD Kit |
| Database | MongoDB, Mongoose |
| Authentication | JWT with Jose, bcryptjs |
| Icons | Lucide React |
| AI | OpenAI-compatible text and image routes |
| Deployment | Vercel or any Node.js 22 host |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Main portfolio and selected work |
| `/projects` | Filterable editorial project archive |
| `/projects/[slug]` | Detailed project case study |
| `/case-studies/[slug]` | Compatibility aliases for project case studies |
| `/journey` | Learning and development timeline |
| `/resume` | Resume and professional background |
| `/contact` | Project enquiry form |
| `/website-prompt-generator` | AI-assisted website planning tool |
| `/builder` | Portfolio template selection and setup |
| `/builder/editor` | Advanced portfolio editor |
| `/admin/login` | Administrator authentication |
| `/admin/dashboard` | Protected enquiry dashboard |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Search-engine crawling instructions |

## Project Structure

```text
potfolio/
|-- public/
|   `-- images/                 # Portfolio, project, certificate, and hackathon assets
|-- src/
|   |-- app/                    # Next.js routes, pages, API handlers, and global styles
|   |-- components/             # Shared UI, home, builder, project, and journey components
|   |-- data/                   # Portfolio, project, template, and journey content
|   |-- hooks/                  # Reusable React hooks
|   |-- lib/                    # Database, authentication, and shared utilities
|   |-- models/                 # Mongoose database models
|   `-- styles/                 # Feature-specific stylesheets
|-- .env.example                # Environment variable template
|-- next.config.mjs             # Next.js configuration
|-- postcss.config.mjs          # PostCSS and Tailwind configuration
|-- PORTFOLIO_BUILDER.md        # Portfolio Studio documentation
`-- SCROLL_JOURNEY.md           # Scroll journey documentation
```

## Local Setup

### Requirements

- Node.js `22.x`
- npm
- MongoDB database for contact and admin functionality

### Installation

```powershell
cd "C:\Users\raj patel\Desktop\potfolio\potfolio"
npm install
```

Create the local environment file:

```powershell
Copy-Item .env.example .env.local
```

Update the values in `.env.local`, then start development:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `MONGODB_URI` | Yes for database features | MongoDB connection string |
| `JWT_SECRET` | Yes for admin access | Signs and verifies admin authentication tokens |
| `NEXT_PUBLIC_SITE_URL` | Yes for production | Canonical public website URL |
| `CLOUDINARY_CLOUD_NAME` | Optional | Cloudinary media configuration |
| `CLOUDINARY_API_KEY` | Optional | Cloudinary API access |
| `CLOUDINARY_API_SECRET` | Optional | Cloudinary API secret |
| `OPENAI_API_KEY` | Required for AI features | Text and image generation access |
| `OPENAI_MODEL` | Required for AI text features | AI text model identifier |
| `OPENAI_IMAGE_MODEL` | Required for generated images | AI image model identifier |

Never commit real secrets or production database credentials.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server with Webpack |
| `npm run build` | Creates an optimized production build with Webpack |
| `npm start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint across the project |

## Content Management

- Main project case-study data: `src/data/portfolio.js`
- Editorial project archive data: `src/data/projects.js`
- Journey content: `src/data/portfolio.js` and `src/data/scrollJourney.js`
- Portfolio builder templates: `src/data/builderTemplates.js`
- Homepage composition: `src/components/HomeClient.js`
- Global styling: `src/app/globals.css`
- Project archive styling: `src/styles/projects.css`
- Static media: `public/images/`

When adding a project, update both project data sources if it should appear on the homepage, editorial archive, and case-study routes.

## Admin Account Setup

Create an admin document in the MongoDB `admins` collection with:

- A lowercase `email` field.
- A bcrypt-generated `passwordHash` field.

Set a long random `JWT_SECRET` in every environment. Successful login creates a secure HTTP-only cookie used by the protected dashboard and middleware.

## Deployment

The application can be deployed to Vercel or another Node.js 22-compatible host.

1. Create an optimized build with `npm run build`.
2. Configure every required environment variable in the hosting dashboard.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
4. Allow the deployment environment to connect to MongoDB.
5. Run the application with `npm start` when using a traditional Node host.

Cloudinary variables are included for future media-management extensions.
