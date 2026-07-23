import React from "react";

const About = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Java Spring Boot", "REST APIs", "MQTT", "Python"],
    databases: ["PostgreSQL", "MySQL"],
    scadaAutomation: ["SCADA UI/HMI", "PLC Automation", "IoT Integration"],
    tools: ["Git", "Postman", "Selenium", "Docker"]
  };

  return (
    <section id="about" className="bg-zinc-900 text-white px-6 md:px-8 py-16 md:py-20 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

          <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center max-w-4xl mx-auto">
            <span className="text-blue-400 font-medium">Software Engineer</span> at Terracos Technologies, specializing in building responsive web applications and robust backend systems. My background combines strong Computer Science fundamentals with practical experience in <span className="text-cyan-400">React</span>, <span className="text-cyan-400">Java Spring Boot</span>, and <span className="text-cyan-400">IoT integration</span>.
          </p>
          <p className="leading-relaxed text-lg text-gray-300 text-center max-w-4xl mx-auto mb-16">
            I enjoy taking ownership of <span className="text-purple-400 font-medium">the entire development lifecycle</span>—from designing intuitive user interfaces to architecting scalable databases. My goal is to build secure, efficient, and user-friendly software that solves real-world problems.
          </p>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Developed full-stack HRMS and Payroll applications using React and Spring Boot",
              "Integrated IoT hardware with web dashboards using MQTT and REST APIs",
              "Built interactive, real-time monitoring interfaces for industrial systems",
              "Managed entire feature lifecycles from database design to UI implementation",
              "Optimized PostgreSQL queries to improve application performance",
              "Implemented custom SEO strategies and pre-rendering for React apps",
              "Built secure backend systems with role-based access control and audit logs",
              "Designed scalable, responsive user interfaces with Tailwind CSS"
            ].map((item, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 text-xl">▹</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-semibold text-blue-400">Frontend</h4>
              </div>
              <ul className="space-y-2">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                <h4 className="text-xl font-semibold text-purple-400">Backend</h4>
              </div>
              <ul className="space-y-2">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Databases Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 border border-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h4 className="text-xl font-semibold text-green-400">Databases</h4>
              </div>
              <ul className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* SCADA & Automation Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-300 border border-orange-500/20 hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h4 className="text-xl font-semibold text-orange-400">SCADA & Automation</h4>
              </div>
              <ul className="space-y-2">
                {skills.scadaAutomation.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Card */}
            <div className="glass-effect rounded-xl p-6 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-xl font-semibold text-cyan-400">DevOps & Tools</h4>
              </div>
              <ul className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;