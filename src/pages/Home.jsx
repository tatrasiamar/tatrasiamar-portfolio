import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen text-white flex flex-col justify-center items-center px-6 py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
      }}
    >
      {/* Animated Background Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
            <img
              src="/profile_image1.png"
              alt="Tatrasi Amar"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h3 className="text-lg md:text-xl text-blue-400 mb-2 font-medium">
            Hello, I'm
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tatrasi Amar
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-200">
            Software Engineer | Full Stack Developer
          </h2>

          <div className="space-y-4 text-base md:text-lg text-gray-300 mb-8">
            <p>
              <span className="text-blue-400 font-semibold">Software Engineer</span> at Terracos Technologies, building enterprise SaaS applications including HRMS, Payroll, Building Management Systems, and Industrial IoT dashboards.
            </p>
            <p>
              Specializing in <span className="text-purple-400 font-medium">full-stack development</span>—building scalable web applications, integrating IoT devices, and designing complex backend systems for enterprise clients.
            </p>
          </div>

          {/* Recent Highlights / Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-colors group">
              <p className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform">6+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Enterprise Modules</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-purple-500/50 transition-colors group">
              <p className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">10+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">IoT Integrations</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-pink-500/50 transition-colors group hidden md:block">
              <p className="text-xl font-bold text-pink-400 group-hover:scale-110 transition-transform mt-1 mb-1">React</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Spring Boot</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/Tatrasi_Amar_Resume.pdf"
              download
              className="px-8 py-3 border-2 border-blue-400 rounded-lg font-bold text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/tatrasiamar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/amar-tatrasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:tatrasiamar123@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
