'use client';
import { projectCategories } from '@/data/projects';
export default function ProjectFilters({ active, onChange, count }) { return <div className="project-filter-bar" aria-label="Filter projects"><div className="project-filter-buttons">{projectCategories.map(category => <button type="button" key={category} onClick={() => onChange(category)} aria-pressed={active === category}>{category}</button>)}</div><p aria-live="polite"><b>{String(count).padStart(2, '0')}</b> projects shown</p></div>; }
