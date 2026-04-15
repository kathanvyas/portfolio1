'use client';
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        { 
            title: 'SNOOZE: LLM powered intelligent organizer', 
            date: 'Nov 2024',
            desc: 'Engineered an intelligent email organizer leveraging LangChain, agentic LLMs, and a graph-based LangGraph structure for automated email management, scheduling, summarization, and task creation. Integrated Google API management and authentication protocols.', 
        },
        { 
            title: 'Echoes of Choices: Behavior and stress analysis', 
            date: 'Nov 2024',
            desc: 'Developed an immersive, decision-based narrative game powered by LLMs that dynamically adapts storylines based on user choices. Created a custom dataset of 50 text-based stories incorporating behavior metrics and psychological evaluation to generate personalized reports.', 
        },
        { 
            title: 'Hybrid Branch Predictor', 
            date: 'Mar 2023',
            desc: 'Designed a high-performance branch predictor using a perceptron-based hybrid selection mechanism to meet industry benchmarks, optimizing machine-level code efficiency and predictive accuracy.', 
        }
    ];

    return (
        <section className="bg-[#121212] text-white py-24 px-8 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-right"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Academic Projects</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative p-8 h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div>
                                    <div className="text-xs font-mono text-pink-400 mb-4">{proj.date}</div>
                                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-pink-200 transition-colors">{proj.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{proj.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
