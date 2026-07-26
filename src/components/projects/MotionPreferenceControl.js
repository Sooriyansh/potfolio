import { Gauge } from 'lucide-react';
export default function MotionPreferenceControl({ reduced, onChange }) { return <button className="motion-control" type="button" aria-pressed={reduced} onClick={() => onChange(!reduced)}><Gauge/>{reduced ? 'Enable enhanced motion' : 'Reduce motion'}</button>; }
