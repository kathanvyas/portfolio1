'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function TextSection({ children, align, offsetCls }: { children: React.ReactNode, align: 'center' | 'left' | 'right', offsetCls: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    let alignCls = 'text-center flex justify-center';
    if (align === 'left') alignCls = 'text-left mr-auto md:ml-32 px-10';
    if (align === 'right') alignCls = 'text-right ml-auto md:mr-32 px-10';

    return (
        <div className={`absolute w-full flex ${align === 'center' ? 'justify-center' : ''} ${offsetCls}`}>
            <motion.div 
               ref={ref}
               style={{ opacity, y }}
               className={`w-full max-w-5xl text-white text-5xl md:text-7xl font-bold tracking-tight ${alignCls}`}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default function Overlay() {
    return (
        <div className="absolute inset-0 pointer-events-none w-full h-full z-10 flex flex-col">
            <TextSection align="center" offsetCls="top-[10%]">
                <div>
                    <span className="block text-2xl md:text-4xl font-medium text-gray-400 mb-4 tracking-normal">Kathan Vyas</span>
                    Ph.D. Researcher in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Responsible AI</span> for Healthcare.
                </div>
            </TextSection>
            
            <TextSection align="left" offsetCls="top-[40%]">
                <div>
                    Decoding <span className="italic font-light">physiological signals</span> <br/>into actionable <span className="font-mono text-4xl md:text-6xl">clinical insights</span>.
                </div>
            </TextSection>
            
            <TextSection align="right" offsetCls="top-[70%]">
                 <div>
                    Bridging the valley of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">impracticality</span>.
                 </div>
            </TextSection>
        </div>
    );
}
