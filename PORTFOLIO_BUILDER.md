# Portfolio Studio

The builder is available at `/builder` and remains visually isolated from the existing personal portfolio.

## Implemented

- DnD Kit visual editor at `/builder/editor`
- Three-panel component library, editable canvas, and selected-component inspector
- Drag new components onto the root canvas or compatible containers
- Sort root sections and inspect nested component layers
- Select, rename, lock, hide, duplicate, and delete components
- Inline content editing directly on the canvas
- Width, height, padding, margin, gap, colors, borders, radius, shadow, opacity, columns, typography, and alignment controls
- Desktop, tablet, and mobile canvas modes
- Entrance/hover animation configuration with reduced-motion support
- Fifty-step undo/redo history, automatic draft saving, named versions, and version restore
- Structured component-tree export without unsafe HTML
- Single-prompt AI redesign limited to the selected component, with preview/apply/reject/regenerate/restore flows
- Server-side AI response allowlists and removal of unsafe code-like values
- AI image generation route using GPT Image 2 with four variations, style and aspect controls
- Generated-image preview, download, and direct insertion into the selected component
- Validated local JPG/PNG/WebP/AVIF upload with a 5 MB limit
- Twenty searchable and filterable template directions with distinct layout behavior
- Template switching without content loss
- Manual profile, about, skills, contact, and multi-project editing
- Add and remove projects
- AI introduction/about rewriting through a server-only OpenAI Responses API route
- Professional, shorter, simple-English, and general improvement actions
- Prompt-injection-resistant grounding instruction: AI may only transform supplied facts
- Request size validation, action allowlists, server-side key use, error states, and per-IP rate limiting
- Primary color, theme, font, card-radius, and spacing controls
- Live mobile, tablet, laptop, and desktop previews
- Automatic device-local draft recovery
- Working portable HTML export
- Builder-specific Open Graph image and metadata
- MongoDB `Portfolio` and `AIUsage` schema foundations with indexes

## Environment

```env
MONGODB_URI=
JWT_SECRET=
NEXT_PUBLIC_SITE_URL=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.6-luna
OPENAI_IMAGE_MODEL=gpt-image-2
```

Keep `OPENAI_API_KEY` server-side. Never prefix it with `NEXT_PUBLIC_`.

## Schema shape

- `User`, `Portfolio`, `PortfolioPage`, `ComponentTree`, `PortfolioComponent`, and `PortfolioTemplate`
- `CustomComponent`, `GeneratedImage`, `UploadedAsset`, `AIUsage`, and `AIEditHistory`
- `VersionHistory`, `Deployment`, `CustomDomain`, and `AnalyticsEvent`

Content and design are deliberately stored separately so a portfolio can change templates without losing user data.

## Production integration still required

The existing project only has administrator authentication. Public email/password and Google authentication require an explicit auth-provider choice and credentials. Until that is connected, cloud save, publish, generated Next.js ZIPs, Vercel deployment, custom domains, public galleries, likes, analytics, referrals, and user/admin management are not exposed as fake UI. Editor drafts, named versions, generated previews, uploads, and component trees currently remain device-local for anonymous visitors.

Recommended sequence:

1. Add user authentication and ownership checks.
2. Add authenticated portfolio CRUD routes backed by the included schema.
3. Add publish/unpublish and slug-reservation transactions.
4. Generate source ZIPs in a background job with secrets excluded.
5. Connect the Vercel API with encrypted deployment credentials.
6. Add domain verification and deployment-history collections.
7. Add append-only analytics events and aggregated dashboard queries.

## Security checklist

- [x] OpenAI key is server-only
- [x] AI action/field allowlists and input-length validation
- [x] AI grounding rule forbids invented credentials and history
- [x] AI route rate limiting
- [x] Exported HTML escapes user content
- [x] Slug format and unique index defined
- [ ] Add authenticated owner checks before persistent writes
- [ ] Replace in-memory rate limiting with a shared production store
- [ ] Validate and scan production image uploads
- [ ] Add CSRF protections to authenticated write routes
- [ ] Encrypt deployment-provider credentials at rest

## Performance checklist

- [x] Builder is isolated to its route
- [x] No 3D runtime is loaded for decorative template thumbnails
- [x] CSS-only template previews
- [x] Responsive preview widths
- [x] Reduced-motion behavior
- [x] Existing Next.js production build passes
- [ ] Use dynamic imports when a real 3D template renderer is added
- [ ] Paginate persistent template and public-gallery queries

## Testing checklist

- [x] Production compilation and static generation
- [x] Builder/API routes included in the build
- [ ] Add browser interaction tests for all four builder steps
- [ ] Add API tests for validation, rate limiting, and upstream failures
- [ ] Add authenticated ownership and slug-collision integration tests
- [ ] Test generated downloads against hostile HTML input

## Vercel and custom domains

For the main site, deploy the existing Next.js project normally and set the environment variables in Vercel. One-click user deployments and custom-domain automation should be implemented only after authentication and a secure credential-storage strategy exist; do not send provider tokens to the browser.
