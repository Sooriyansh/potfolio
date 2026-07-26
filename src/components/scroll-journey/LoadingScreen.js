'use client';
import { Html, useProgress } from '@react-three/drei'; export default function LoadingScreen() { const { progress } = useProgress(); return <Html center><div className="journey-loader" role="status" aria-live="polite"><span>Mapping world</span><b>{Math.round(progress)}%</b></div></Html>; }
