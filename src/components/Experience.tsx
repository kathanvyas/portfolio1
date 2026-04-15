'use client';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            role: "Graduate Research Assistant",
            org: "Shipman Lab & Erraguntla Lab, Texas A&M",
            date: "Jan 2024 – present",
            bullets: [
                "Performed K-fold cross-validation over an ensemble network (using VAE and 12-lead ECG spectrograms) achieving AUC > 90% for cardiovascular classification.",
                "Utilized LIME analysis for explainability and engineered an LLM integration for doctor's notes, improving real-time multi-modal predictions.",
                "Built an ECG-to-text model leveraging LLMs, trained on ~50,000 samples for automated text-based clinical interpretations.",
                "Led ML research for a $1M FDA-funded project on infant Aortopulmonary Shunt occlusion, architecting an XGBoost ensemble scoring peak AUC 0.867.",
                "Implemented a multi-layered XAI framework using SHAP to generate actionable clinical narratives for PICU teams."
            ]
        },
        {
            role: "Data Science Intern",
            org: "Delfina",
            date: "May 2025 – Sept 2025",
            bullets: [
                "Developed a Gradient Boosting Classifier predicting Gestational Weight Gain via clinical EHR and self-reported data across 4 clinics (AUC 0.85).",
                "Engineered longitudinal weight trajectory features combined with multi-modal predictors such as BMI and parity.",
                "Conducted rigorous bias/stability analysis utilizing DeLong’s test, proving model stability (p > 0.05) across diverse racial and BMI categories."
            ]
        },
        {
            role: "Graduate Research Assistant",
            org: "Perception, Sensing, and Instrumentation Lab, Texas A&M",
            date: "Sept 2021 – Dec 2023",
            bullets: [
                "Engineered CNN and LSTM models to analyze ECG morphology and HRV features to achieve multi-threshold glycemic classification (hypo, normo, hyper).",
                "Led protocol development of multi-modal physiological data for 12 T1D subjects over a 14-day tracking period.",
                "Designed a custom 3-way classification loss function for federated learning, preserving privacy for 120 patients."
            ]
        },
        {
            role: "Clinical Research Intern",
            org: "Edwards Life Sciences",
            date: "May 2022 – Aug 2022",
            bullets: [
                "Designed an ensemble deep learning model to automate heart murmur detection from phonocardiograms using Mel spectrograms and YAM Net.",
                "Developed interpretable ML models (AdaBoost, XGBoost) for pacemaker complication prediction.",
                "Constructed robust automated PyCaret pipelines using bootstrap sampling to validate predictive capabilities for cardiac care support."
            ]
        },
        {
            role: "AI Research Intern",
            org: "Philips",
            date: "Feb 2020 – June 2020",
            bullets: [
                "Engineered an IoT-driven AI pipeline using GNNs and Raspberry Pi for real-time anomaly detection in veterans' utility usage.",
                "Developed an infrared (IR) CNN-based eye-temperature detection system to perform real-time screening at building entrances."
            ]
        }
    ];

    return (
        <section className="bg-[#121212] text-white py-24 px-8 md:px-24 border-t border-white/5 relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Focused Experience</h2>
                </motion.div>

                <div className="space-y-12 md:space-y-24">
                    {experiences.map((exp, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid flex flex-col md:grid-cols-[1fr_3fr] gap-4 md:gap-16">
                                {/* Left Timeline / Title Sidebar */}
                                <div className="border-l border-white/10 pl-6 md:border-l-0 md:pl-0 md:text-right md:border-r md:pr-12 relative">
                                    <div className="absolute left-[-5px] top-2 md:left-auto md:right-[-5px] w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-300 italic mb-4">{exp.org}</h4>
                                    <div className="text-sm font-mono text-gray-500 bg-white/5 inline-block px-3 py-1 rounded-md">{exp.date}</div>
                                </div>
                                {/* Right Detail Side */}
                                <div>
                                    <ul className="space-y-4">
                                        {exp.bullets.map((bullet, j) => (
                                            <li key={j} className="text-gray-400 flex items-start gap-4">
                                                <span className="text-emerald-400 mt-1">▹</span>
                                                <span className="leading-relaxed text-base md:text-lg">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
