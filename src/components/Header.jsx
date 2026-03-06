import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg tracking-tight">
              SIDDHARTH
            </span>
            <span className="text-xs text-purple-400 uppercase tracking-widest">
              MERN Stack Developer
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-4 px-6 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-500"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-center mt-4 px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
