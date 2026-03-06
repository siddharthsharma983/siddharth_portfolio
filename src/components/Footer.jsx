import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/siddharthsharma983",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/siddharth-sharma-12514337b",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/sidsharma981",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:gs7248543@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Siddharth Sharma
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              MERN Stack Developer building scalable, high-performance web
              applications with clean architecture and modern UI/UX principles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-white transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm text-gray-400">📍 Chandigarh, India</p>
            <p className="text-sm text-gray-400">📧 gs7248543@gmail.com</p>
            <p className="text-sm text-green-400 mt-2">
              ● Available for Projects
            </p>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-purple-600 transition-all transform hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm">
            <span>© {currentYear} Siddharth. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind</span>
          </div>
        </div>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all transform hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
