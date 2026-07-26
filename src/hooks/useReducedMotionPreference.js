'use client';
import { useEffect, useState } from 'react';
export default function useReducedMotionPreference() { const [reduced, setReduced] = useState(false); useEffect(() => { const query = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = event => setReduced(event.matches); queueMicrotask(() => setReduced(query.matches)); query.addEventListener('change', update); return () => query.removeEventListener('change', update); }, []); return [reduced, setReduced]; }
