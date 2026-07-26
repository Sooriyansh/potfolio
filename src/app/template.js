'use client';
import { motion } from 'framer-motion';
export default function Template({children}){return <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.55,ease:[.22,1,.36,1]}}>{children}</motion.div>}
