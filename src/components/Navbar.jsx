import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/95 z-50 backdrop-blur-md shadow-lg border-b border-zinc-800">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-white text-xl md:text-2xl font-bold cursor-pointer"
        >
          <span className="text-gradient">Amar Tatrasi</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          {["home", "about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative cursor-pointer transition-colors duration-200 
                           ${activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}
                            before:absolute before:-bottom-1 before:left-0 
                            before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-purple-400
                            before:transition-[width] before:duration-300 
                            ${activeSection === item ? 'before:w-full' : 'before:w-0 hover:before:w-full'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900/98 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6">
          {["home", "about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`block text-lg transition-colors duration-200 
                           ${activeSection === item ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;