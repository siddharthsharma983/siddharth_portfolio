import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      duration: "2025 - 2027",
      status: "Pursuing • 9.0 CGPA (1st Sem)",
      description:
        "Currently pursuing MCA with strong focus on modern frontend development, UI/UX best practices, and scalable web applications.",
      coursework: [
        "Frontend Development",
        "Web Technologies",
        "JavaScript & Modern Frameworks",
        "Data Structures & Algorithms",
        "Database Management Systems",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vaish College of Engineering (MDU)",
      location: "Rohtak, Haryana",
      duration: "2022 - 2025",
      status: "Completed • 63.3%",
      description:
        "Focused on full-stack fundamentals, software engineering principles, and responsive web development.",
      coursework: [
        "Advanced Web Development",
        "Software Engineering",
        "Computer Graphics",
        "Client-Side Scripting",
        "Agile Development",
      ],
    },
    {
      id: 3,
      degree: "Senior Secondary (12th – Arts)",
      institution: "A.F.C. Sr. Sec. School",
      location: "Sampla, Rohtak",
      duration: "2021 - 2022",
      status: "Completed • 71%",
      description:
        "Completed Intermediate education with strong academic consistency.",
      coursework: [
        "Hindi Core",
        "Political Science",
        "Geography",
        "Physical Education",
        "English Core",
      ],
    },
    {
      id: 4,
      degree: "Secondary School (10th)",
      institution: "A.F.C. Sr. Sec. School",
      location: "Sampla, Rohtak",
      duration: "2019 - 2020",
      status: "Completed • 57%",
      description: "Built strong foundation in core academic subjects.",
      coursework: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Hindi",
      ],
    },
  ];

  const certifications = [
    {
      name: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2025",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-5afa46ff-2689-4212-95eb-ac6ec4461b65/",
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Education & Background</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation combined with continuous skill development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="p-8 bg-gray-800 rounded-2xl border border-white/5 hover:border-purple-500 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-purple-400">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-400">{edu.duration}</span>
                </div>

                <div className="flex gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={14} /> {edu.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 text-sm">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/5 px-3 py-1 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-800 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-purple-500" /> Certifications
              </h3>

              {certifications.map((cert, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mt-2"
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gray-800 rounded-2xl border border-white/5">
              <BookOpen className="text-blue-500 mb-4" size={28} />
              <h3 className="font-bold mb-2">Learning Philosophy</h3>
              <p className="text-sm text-gray-400">
                I believe in continuous learning, practical implementation, and
                building real-world projects to stay industry-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
