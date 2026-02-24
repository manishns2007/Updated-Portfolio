import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 80 },
      ]
    },
    {
      category: "DSA & Problem Solving",
      skills: [
        { name: "Algorithms", level: 92 },
        { name: "Data Structures", level: 90 },
        { name: "Dynamic Programming", level: 85 },
        { name: "Graph Theory", level: 83 },
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "TypeScript", level: 87 },
        { name: "Next.js", level: 82 },
      ]
    },
    {
      category: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 85 },
        { name: "Cryptography", level: 80 },
        { name: "Penetration Testing", level: 78 },
        { name: "Secure Coding", level: 88 },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 88 },
      ]
    },
    {
      category: "System Design",
      skills: [
        { name: "Distributed Systems", level: 80 },
        { name: "Microservices", level: 78 },
        { name: "Database Design", level: 85 },
        { name: "Scalability", level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on project experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative overflow-hidden"
                      >
                        {/* Animated shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
