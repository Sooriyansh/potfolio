import { notFound, redirect } from 'next/navigation';
const routes = { 'phone-call-tracking': 'phone-call-tracker', 'gyan-bhoomi': 'gyan-bhoomi-school', 'faceai-attend': 'faceai-attend', 'resume-lens-ai': 'resume-lens-ai', 'secure-access': 'mern-auth-system' };
export function generateStaticParams() { return Object.keys(routes).map(slug => ({ slug })); }
export default async function CaseStudyAlias({ params }) { const { slug } = await params; if (!routes[slug]) notFound(); redirect(`/projects/${routes[slug]}`); }
