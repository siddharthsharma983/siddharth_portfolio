import { motion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux Toolkit",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Socket.io",
        "MVC Architecture",
      ],
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Git & GitHub",
        "Postman",
        "Vercel & Render Deployment",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Technical Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across the full development lifecycle — from
            crafting intuitive frontends to architecting scalable backend
            systems.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-gray-800/40 border border-white/5 rounded-2xl hover:border-purple-500/40 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 border border-white/5 rounded-full text-sm text-gray-300 hover:border-purple-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 italic">
            "Specialized in the <strong>MERN Stack</strong> with a strong focus
            on building secure, scalable, and production-ready web
            applications."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
