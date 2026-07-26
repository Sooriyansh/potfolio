# Cinematic scroll journey

The homepage includes a reusable five-chapter WebGL section in `src/components/scroll-journey`. It is dynamically loaded client-side, consumes one normalized progress ref, and keeps every meaningful word and link in semantic HTML.

## Editing content and motion

- Chapter and project portal content: `src/data/scrollJourney.js`
- Camera position, target, and fog keyframes: `src/components/scroll-journey/journeyConfig.js`
- Procedural world: `src/components/scroll-journey/EnvironmentScene.js`
- Responsive presentation: `src/components/scroll-journey/scroll-journey.css`

Required packages are `three`, `@react-three/fiber`, and `@react-three/drei`; they are already installed.

## Adding original assets

Put optimized models in `public/models`. For Draco models, put decoder files in `public/draco` and load with `useGLTF('/models/environment.glb', '/draco/')` inside `EnvironmentScene`. Prefer meshopt or Draco compression, KTX2/WebP textures, baked lighting, merged static meshes, and textures no larger than 2K. Keep the procedural geometry as the error/loading fallback and preload only assets that are certain to appear.

## Performance and accessibility

The implementation uses adaptive DPR, reduced mobile geometry and particles, automatic performance downgrade, frustum culling, no post-processing, and a paused render loop while offscreen. It responds to `prefers-reduced-motion`, exposes visible motion/3D controls, detects WebGL, and retains the full story in semantic HTML when the canvas is unavailable.
