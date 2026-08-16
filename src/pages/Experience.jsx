import React, { useState } from "react";

const Experience = () => {
    const [expandedProjects, setExpandedProjects] = useState([]);

    const experiences = [
        {
            title: "Software Engineer – SE-1",
            company: "Terracos Technologies Pvt Ltd",
            location: "Hyderabad",
            period: "Jul 2025 – Present",
            type: "Full-time",
            responsibilities: [
                "Developing full-stack web applications for HRMS, Payroll, and IoT platforms using React, TypeScript, Spring Boot, and PostgreSQL",
                "Designed and implemented responsive, user-friendly frontend interfaces using Tailwind CSS",
                "Implemented custom SEO strategies and Static Site Generation (SSG), reducing page load times by 40%",
                "Built real-time dashboards with Supabase for monitoring alarms and device data",
                "Developed complex backend logic for payroll calculations and automated reporting",
                "Integrated IoT hardware devices using MQTT and REST APIs for environmental monitoring",
                "Developed and maintained automation and manual testing workflows to improve software quality",
                "Collaborated in sprint planning, feature estimation, and Agile software delivery"
            ],

            color: "blue"
        },
        {
            title: "Software Engineer Intern",
            company: "Terracos Technologies Pvt Ltd",
            location: "Hyderabad",
            period: "Apr 2025 – Jun 2025",
            type: "Internship",
            responsibilities: [
                "Developed React + TypeScript dashboards for Building Management Systems (BMS)",
                "Built AMS UI and database using Supabase and SQL",
                "Integrated IoT services using REST APIs"
            ],
            color: "purple"
        }
    ];

    const achievements = [
        {
            title: "Delivered Enterprise Web Apps",
            description: "Successfully built and launched full-stack platforms for HRMS, BMS, and IoT.",
            icon: "🚀"
        },
        {
            title: "Improved Website Performance",
            description: "Used custom SEO strategies to make web pages load 40% faster.",
            icon: "⚡"
        }
    ];

    const certifications = [
        "Full Stack Development with Cloud Computing – EY-GDS (AICTE, Skill India)",
        "Data Structures & Algorithms in Java – Geeks For Geeks",
        "Java Fundamentals – Oracle Academy",
        "Cloud Computing – IBM via Coursera",
        "CCNA: Introduction to Networks – CISCO",
        "Claude 101 Certification – Anthropic"
    ];

    return (
        <section id="experience" className="bg-black text-white px-6 md:px-8 py-16 md:py-20 w-full">
            <div className="max-w-6xl mx-auto">
                {/* Professional Experience */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    Professional <span className="text-gradient">Experience</span>
                </h2>
                <div className="flex justify-center mb-12">
                    <a
                        href="/Tatrasi_Amar_Resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-zinc-700 rounded-lg text-blue-400 font-bold transition-all hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Full Resume (PDF)
                    </a>
                </div>

                <div className="space-y-8 mb-20">
                    {experiences.map((exp, expIndex) => (
                        <div
                            key={expIndex}
                            className="glass-effect rounded-xl p-6 md:p-8 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div className="flex-1 mb-4 md:mb-0">
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {exp.title}
                                    </h3>
                                    <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                                    <p className="text-gray-400">{exp.location}</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-blue-400 font-semibold mb-1">{exp.period}</p>
                                    <span
                                        className={`inline-block px-3 py-1 text-sm rounded-full ${exp.type === "Full-time"
                                            ? "bg-green-500/10 text-green-400 border border-green-500/30"
                                            : "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                                            }`}
                                    >
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-blue-400 mr-3 mt-1">▹</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    <span className="text-gradient">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{achievement.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{achievement.title}</h3>
                                    <p className="text-gray-300">{achievement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    <span className="text-gradient">Certifications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-lg p-4 border border-zinc-700 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-gray-300">{cert}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
