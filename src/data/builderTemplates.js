const categories = [
  ['orbit', 'Orbit Developer', 'Modern developer', 'split', '#6ea8ff', true],
  ['atelier', 'Atelier', 'UI UX designer', 'editorial', '#ff8fb3', false],
  ['terminal', 'Terminal One', 'Backend developer', 'terminal', '#70e1a1', false],
  ['nova', 'Nova Depth', '3D interactive', 'immersive', '#a78bfa', true],
  ['mono', 'Mono Journal', 'Minimal', 'journal', '#111111', false],
  ['vertex', 'Vertex Grid', 'Frontend developer', 'bento', '#f97316', false],
  ['signal', 'Signal Dark', 'Dark technology', 'sidebar', '#22d3ee', false],
  ['horizon', 'Horizon', 'Futuristic', 'panorama', '#818cf8', true],
  ['glass', 'Glass Current', 'Glassmorphism', 'glass', '#38bdf8', true],
  ['boardroom', 'Boardroom', 'Corporate', 'corporate', '#1d4ed8', false],
  ['collage', 'Creative Collage', 'Creative', 'collage', '#e11d48', false],
  ['solo', 'Solo Studio', 'Freelancer', 'services', '#f59e0b', false],
  ['campus', 'Campus Story', 'Student', 'timeline', '#10b981', false],
  ['launchpad', 'Launchpad', 'Fresher', 'stacked', '#8b5cf6', false],
  ['fullstack', 'Full Stack OS', 'Full stack developer', 'dashboard', '#06b6d4', false],
  ['pocket', 'Pocket Native', 'Mobile application developer', 'mobile', '#fb7185', true],
  ['canvas', 'Canvas Casebook', 'Graphic designer', 'gallery', '#d946ef', false],
  ['growth', 'Growth Lab', 'Digital marketer', 'metrics', '#84cc16', false],
  ['broadcast', 'Broadcast', 'Content creator', 'media', '#ef4444', false],
  ['signature', 'Signature', 'Personal brand', 'signature', '#c084fc', false],
];
export const builderTemplates = categories.map(([id,name,category,layout,accent,is3D],index)=>({id,name,category,layout,accent,is3D,free:true,theme:['mono','boardroom','campus','signature'].includes(id)?'light':'dark',previewImage:`/images/templates/${id}.webp`,previewAlt:`${name} ${category.toLowerCase()} website template preview`,features:[layout==='bento'?'Bento grid':`${layout[0].toUpperCase()}${layout.slice(1)} layout`,is3D?'Depth motion':'Fast motion',index%2?'Editorial type':'Responsive']}));
export const initialPortfolio={name:'Alex Morgan',title:'Product designer & creative developer',intro:'I turn complex ideas into digital products people understand and enjoy using.',about:'I work across product strategy, interface design, and front-end development to create clear, useful experiences.',email:'hello@example.com',location:'Based in India · Working worldwide',skills:['Product design','React','Design systems','Motion'],projects:[{id:'p1',title:'Northstar Finance',description:'A clearer way for growing teams to understand cash flow.',tech:'Product design · Next.js'},{id:'p2',title:'Field Notes',description:'A calm research workspace built for distributed teams.',tech:'UX research · Prototyping'}]};
