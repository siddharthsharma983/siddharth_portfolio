import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0b1120]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 leading-relaxed">
              Frontend Developer specializing in React.js & modern web
              technologies, currently pursuing MCA
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate Frontend Developer with expertise in React.js, Tailwind
              CSS, and modern JavaScript for building responsive, dynamic, and
              user-friendly web applications. Focused on creating clean UI,
              smooth user experiences, and performance-optimized frontend
              solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently pursuing Master of Computer Applications (MCA) at
              Chandigarh University. Actively expanding my skill set by learning
              modern frontend technologies, including React.js and UI/UX Best
              Practices. Focused on designing and developing responsive,
              interactive, and user-centric web interfaces using modern frontend
              technologies.
            </p>

            {/* Tags */}
            <div className="flex gap-6 mt-8 text-blue-400">
              <span>Problem Solver</span>
              <span>Tech Enthusiast</span>
              <span>Goal-Oriented</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Quick Facts */}
            <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Facts
              </h4>

              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="text-white font-medium">Location:</span>{" "}
                  Chandigarh, India
                </p>
                <p>
                  <span className="text-white font-medium">Degree:</span> MCA
                  (Chandigarh University)
                </p>
                <p>
                  <span className="text-white font-medium">Status:</span>{" "}
                  <span className="text-green-400">Open to Opportunities</span>
                </p>
                <p>
                  <span className="text-white font-medium">Email:</span>{" "}
                  gs7248543@gmail.com
                </p>
              </div>
            </div>

            {/* Resume Card */}
            <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Resume</h4>

              <p className="text-gray-400 mb-5">
                Download or view my complete resume with detailed experience and
                skills.
              </p>

              <div className="flex gap-4 flex-wrap">
                {/* Download PDF */}
                <a
                  href="/Siddharth_Sharma_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                >
                  <Download size={16} />
                  Download PDF
                </a>

                {/* View Online */}
                <a
                  href="/Siddharth_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  View Online
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
