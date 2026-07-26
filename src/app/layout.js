import { Manrope, DM_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Link from 'next/link';
const sans=Manrope({subsets:['latin'],variable:'--font-sans'});const mono=DM_Mono({weight:['300','400','500'],subsets:['latin'],variable:'--font-mono'});
export const metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),title:{default:'Raj Patel — Full-Stack Developer',template:'%s — Raj Patel'},description:'Full-stack developer building thoughtful web, mobile, and backend products that solve real business problems.',openGraph:{title:'Raj Patel — Full-Stack Developer',description:'Products built around real problems, clear decisions, and measurable outcomes.',type:'website',images:['/images/hero-workspace.png']},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}){return <html lang="en" className={`${sans.variable} ${mono.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><Experience/><Navbar/><main id="main">{children}</main><footer><div className="brand"><span>RP</span><b>RAJ PATEL</b></div><p>Building useful things with care.</p><div><Link href="/projects">Work</Link><Link href="/contact">Contact</Link><a href="https://github.com" rel="noreferrer" target="_blank">GitHub</a></div><small>© {new Date().getFullYear()} Raj Patel</small></footer></body></html>}
