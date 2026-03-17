import { motion } from "framer-motion";
import { Cpu, Database, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-white/10 text-purple-400 text-sm font-medium mb-8">
            Available for Full Stack Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Building Robust <br />
            <span className="gradient-text">Full Stack Applications</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am a{" "}
            <span className="text-white font-semibold">
              MERN Stack Developer
            </span>{" "}
            specialized in building scalable web solutions. From pixel-perfect
            frontends to high-performance REST APIs and database architecture, I
            handle the complete development lifecycle.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all w-full sm:w-auto text-center"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white w-full sm:w-auto text-center"
            >
              Let's Talk
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60 text-gray-400">
            <div className="flex items-center gap-2">
              <Globe size={20} />
              <span className="text-sm font-medium">React & Next.js</span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu size={20} />
              <span className="text-sm font-medium">Node.js & Express</span>
            </div>

            <div className="flex items-center gap-2">
              <Database size={20} />
              <span className="text-sm font-medium">MongoDB & PostgreSQL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
