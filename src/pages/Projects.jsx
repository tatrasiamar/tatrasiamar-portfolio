import React from "react";

const Projects = () => {
  const professionalEcosystem = {
    title: "Terracos B2B SaaS Ecosystem",
    subtitle: "Enterprise-Grade Industrial Solutions",
    description: "A unified suite of high-performance monitoring and management platforms built for industrial automation and workforce optimization. Features real-time Supabase integrations, IIoT connectivity, and multi-tenant architecture.",
    products: [
      { name: "AMS", full: "Attendance Management", icon: "📊", color: "blue" },
      { name: "BMS", full: "Building Management", icon: "🏢", color: "red" },
      { name: "CMS", full: "Clean Room Monitoring", icon: "🧪", color: "emerald" },
      { name: "HMS", full: "Smart House Management", icon: "🏠", color: "purple" }
    ]
  };



  return (
    <section id="projects" className="bg-zinc-900 text-white px-6 md:px-8 py-16 md:py-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Professional Ecosystem Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-stack SaaS platforms built for industrial automation and enterprise workforce management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* HMS - Smart House Management */}
            <div className="glass-effect rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">🏠</span>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">IoT & Automation</span>
              <h3 className="text-2xl font-bold mb-3 text-white">HMS – Smart Home Management</h3>
              <p className="text-gray-400 text-sm mb-6">Full-stack IoT application for residential automation, device management, and real-time syncing.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Developed dynamic React UI for end-users to control devices</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Engineered Spring Boot backend to reduce data latency by 50% using MQTT</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Spring Boot", "Zustand", "MQTT"].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* HRMS/AMS - Enterprise Payroll */}
            <div className="glass-effect rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">📊</span>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Enterprise SaaS</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Enterprise HRMS & Payroll</h3>
              <p className="text-gray-400 text-sm mb-6">End-to-end Full-Stack platform for payroll processing and automated biometric attendance.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Built the entire React/TypeScript frontend for complex dashboard analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Architected Spring Boot backend with Spring Data JPA for strict multi-tenant isolation</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Spring Boot", "Quartz", "PostgreSQL"].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* BMS - SCADA & Industrial UI */}
            <div className="glass-effect rounded-3xl p-8 border border-red-500/20 hover:border-red-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">🏢</span>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">SCADA / HMI</span>
              <h3 className="text-2xl font-bold mb-3 text-white">BMS – Building Monitoring</h3>
              <p className="text-gray-400 text-sm mb-6">Full-stack IoT SCADA system for monitoring building utilities and hardware alarms.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-red-400 font-bold">✓</span>
                  <span>Developed real-time React & Recharts frontend dashboards for visualization</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-red-400 font-bold">✓</span>
                  <span>Built asynchronous MQTT message processors in Spring Boot for live telemetry</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Spring Boot", "MQTT", "Razorpay"].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* SEO & Performance Framework */}
            <div className="glass-effect rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">⚡</span>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Web Performance</span>
              <h3 className="text-2xl font-bold mb-3 text-white">SEO & Performance Architecture</h3>
              <p className="text-gray-400 text-sm mb-6">Implemented React SEO strategies to ensure fast page loads and good search engine ranking.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Made pages load 40% faster</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ensured dynamic pages are easily found by search engines</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Pre-rendering", "Meta Manager", "Vite", "Netlify"].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>

            {/* Terracos AI - Agentic AI B2B Marketing & Sales Platform */}
            <div className="glass-effect rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">🤖</span>
              </div>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Agentic AI & Automation</span>
              <h3 className="text-2xl font-bold mb-3 text-white">Terracos AI – B2B Marketing Platform</h3>
              <p className="text-gray-400 text-sm mb-6">Autonomous marketing platform that researches prospects, scores leads, and drafts hyper-personalized outreach using AI.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Integrated Gemini LLM for dynamic lead research and custom email drafting</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Built a persistent background queue system in PostgreSQL using Drizzle ORM</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js App Router", "TypeScript", "PostgreSQL", "Gemini AI", "Resend API"].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
            >
              Explore Full Case Studies in Experience
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;