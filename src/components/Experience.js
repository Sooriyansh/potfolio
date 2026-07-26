'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience(){const pathname=usePathname();const progress=useRef(null);useEffect(()=>{gsap.registerPlugin(ScrollTrigger);if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const context=gsap.context(()=>{gsap.utils.toArray('.section-head,.proof-grid,.project-feature,.thinking-grid,.skill-grid,.journey-row,.folders,.cta').forEach(element=>gsap.fromTo(element,{y:48,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:element,start:'top 88%',once:true}}));gsap.to(progress.current,{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.15}})});return()=>context.revert()},[pathname]);return <div ref={progress} className="scroll-progress" aria-hidden="true"/>}
