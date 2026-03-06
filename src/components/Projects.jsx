import { motion } from "framer-motion";
import { ExternalLink, Calendar, Github } from "lucide-react";

import flashmailImg from "../assets/Project_cover/flashmail.png";
import skillscanImg from "../assets/Project_cover/SkillScan.png";
import videotubeImg from "../assets/Project_cover/videotube.png";

const Projects = () => {
  const projectsData = [
    {
      title: "FlashMail",
      duration: "Feb 2025",
      description:
        "Real-time full stack messaging platform built with MERN and Socket.io featuring JWT authentication and scalable backend architecture.",
      image: flashmailImg,
      liveLink: "https://flashmail-six.vercel.app",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Full Stack",
    },
    {
      title: "SkillScan ATS – FitSense",
      duration: "Jan 2025",
      description:
        "AI-powered resume analyzer that evaluates job compatibility and generates ATS score using dynamic keyword matching logic.",
      image: skillscanImg,
      liveLink: "https://skill-scan-ats-coral.vercel.app",
      techStack: ["React", "Node.js", "Multer", "Keyword Engine"],
      category: "AI + Full Stack",
    },
    {
      title: "VideoTube Backend API",
      duration: "Mar 2025",
      description:
        "Scalable YouTube-style backend API built with Node.js, Express, and MongoDB featuring JWT authentication, Cloudinary upload, comments, likes, playlists, subscriptions, and watch history tracking.",
      image: videotubeImg,
      githubLink: "https://github.com/siddharthsharma983/videotube-backend",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      category: "Backend API",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-purple-500 text-xs font-bold mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col">
                  {/* Date + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                      <Calendar size={14} />
                      {project.duration}
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-300 font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wide text-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                    >
                      Live Preview
                      <ExternalLink className="inline ml-2" size={16} />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm uppercase tracking-wide text-center hover:opacity-90 transition-all duration-300"
                    >
                      View Repository
                      <Github className="inline ml-2" size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
