# Raj Patel — Product-led Developer Portfolio

A premium, responsive Next.js portfolio organized around visitor intent and detailed case studies. The project uses JavaScript only, MongoDB/Mongoose persistence, protected admin routes, accessible interactions, Framer Motion, Tailwind CSS, and original AI-generated imagery.

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values.
3. Create a MongoDB Atlas database, allow your development IP, create a database user, and place its connection string in `MONGODB_URI`.
4. Start development: `npm run dev` (uses the Webpack compiler for reliable Windows native-module support)
5. Create a production build: `npm run build`
6. Run the production server: `npm start`

## Admin account

Create one document in the `admins` collection with a lowercase `email` and a bcrypt `passwordHash`. The login at `/admin/login` creates a secure, HTTP-only JWT cookie. Set a long random `JWT_SECRET` in every environment. The dashboard and its routes are protected by middleware.

## Content and data

- Portfolio seed content lives in `src/data/portfolio.js` and can later be migrated into the included Mongoose models.
- Contact submissions are validated in the browser and API, protected with a honeypot and per-IP rate limit, and stored in MongoDB.
- Models are included for Admin, Contact, Project, Skill, Timeline, Testimonial, and SiteContent.
- Generated project visuals are optimized by `next/image` in `public/images`.

## Deployment

Deploy to Vercel or any Node host. Add all environment variables in the provider dashboard and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Cloudinary variables are ready for extending the admin media uploader.
