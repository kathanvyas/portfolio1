'use client';
import { motion } from 'framer-motion';

export default function SkillsEducation() {
    return (
        <section className="bg-[#121212] text-white py-24 px-8 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Skills */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Competencies</h2>
                    
                    <div className="space-y-6 text-gray-300">
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">Machine Learning</h4>
                            <p className="leading-relaxed">Deep Learning, CNN, Time series inference, NLP, RNN, LLM, Generative AI, interpretability, unsupervised learning</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">Languages & Frameworks</h4>
                            <p className="leading-relaxed">Python (Keras, PyTorch, TensorFlow), Langchain, R, C++</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">Databases</h4>
                            <p className="leading-relaxed">MySQL, PostgreSQL, MongoDB</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-2">Datatypes</h4>
                            <p className="leading-relaxed">Physiology signals, electronic health records, medical images, Log data, point cloud</p>
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
                    
                    <div className="space-y-8">
                        <div className="border-l-2 border-emerald-500 pl-6">
                            <h3 className="text-xl font-bold text-white mb-1">Texas A&M University</h3>
                            <p className="text-emerald-400 font-mono text-sm mb-2">PhD in Computer Science, Expected May 2026</p>
                            <p className="text-gray-400 text-sm italic">Dissertation: Bridging The Valley Of Impracticality: A Progressive Disclosure And XAI Framework For Actionable Clinical Decision Review System</p>
                        </div>

                        <div className="border-l-2 border-white/20 pl-6">
                            <h3 className="text-xl font-bold text-white mb-1">Northeastern University</h3>
                            <p className="text-gray-400 font-mono text-sm mb-2">Master of Science in Electrical and Computer Engineering (May 2021)</p>
                            <p className="text-gray-400 font-mono text-sm">Master of Professional Studies in Informatics - Data Science track (May 2018)</p>
                        </div>
                    </div>
                </motion.div>
                
                {/* Awards & Pubs Footer */}
                <motion.div 
                    className="md:col-span-2 pt-16 mt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                     <h2 className="text-2xl font-bold mb-6 text-center text-gray-500 uppercase tracking-widest">Selected Accolades</h2>
                     <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-400">
                         <div>
                             <h4 className="text-white font-semibold mb-4 text-base">Key Publications & Patents</h4>
                             <ul className="space-y-4 list-disc pl-4">
                                 <li>Patent: &quot;Multi-sensor upper arm band for physiological measurements... predict hypoglycemia/hyperglycemia&quot;</li>
                                 <li>Vyas, K. et al. (2019). Recognition of atypical behavior in autism diagnosis from video. IEEE MLSP.</li>
                                 <li>Dave, D., Vyas, K. et al. (2024). FedGlu: A personalized federated learning-based glucose forecasting algorithm.</li>
                                 <li>Vyas, K. et al. (2020). Additional value of augmenting current subscales in braden scale... for pressure injury risk assessment. IEEE BIBM.</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="text-white font-semibold mb-4 text-base">Honors & Awards</h4>
                             <ul className="space-y-4">
                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Aggie Core Values Award</span> <span>2025</span></li>
                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Graduate Leadership Excellence Award</span> <span>2025</span></li>
                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Buck Weirus Spirit Award</span> <span>2025</span></li>
                                 <li className="flex justify-between border-b border-white/5 pb-2"><span>ASIE Scholarship Recipient</span> <span>2024</span></li>
                             </ul>
                         </div>
                     </div>
                </motion.div>
            </div>
        </section>
    );
}
