import { Suspense } from 'react';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import '@/styles/projects.css';

export const metadata = {
  title: 'Selected Projects',
  description: 'Each project starts with a real constraint and ends with a clearer, more useful experience.',
};

export default function Page() {
  return <Suspense fallback={<div className="projects-page-loading" role="status">Loading selected projects…</div>}><ProjectShowcase/></Suspense>;
}
