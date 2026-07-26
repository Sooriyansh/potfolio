'use client';
import { PerformanceMonitor as DreiPerformanceMonitor } from '@react-three/drei'; export default function PerformanceMonitor({ onLowPerformance }) { return <DreiPerformanceMonitor flipflops={2} onDecline={onLowPerformance}/>; }
