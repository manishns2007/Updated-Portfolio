import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Shield, Network, Database, Lock, MessageSquare, Activity } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Shield,
      title: "Cyber Security Chatbot",
      description: "Designed and developed an AI-powered chatbot to assist users providing real-time guidance and awareness on cybersecurity topics",
      impact: "Provides instant security guidance and threat awareness to users",
      tags: ["AI", "NLP", "Python", "Security"],
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/manishns2007/Cybersecurity-Chatbot"
    },
    {
      icon: Network,
      title: "DormFix",
      description: "Intelligent Hostel Administration System digitizing complaint reporting, tracking, and resolution workflows through a centralized dashboard",
      impact: "Reduced hostel officials manual workload by 45% and improved task completion by 45%",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/manishns2007/DormFix"
    },
    {
      icon: Database,
      title: "FinScoreX",
      description: "AI-Driven Creditworthiness Analyzer with credit scoring, risk analysis, and loan eligibility modules built with ML models",
      impact: "Accelerated credit decisions by 40%, lowered default risk by 30%, achieved 85% accuracy",
      tags: ["Python", "ML", "Flask", "Finance"],
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/manishns2007/Project_credit-scoring-model"
    },
    {
      icon: Lock,
      title: "FutureMap",
      description: "AI-Based Career Decision System delivering personalized career-fit recommendations through interactive assessments and real-time tracking",
      impact: "Enhanced career-fit by 35%, improved decision accuracy by 40%, reduced uncertainty by 50%",
      tags: ["AI", "React", "Python", "Analytics"],
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/manishns2007/Future-Map"
    },
    {
      icon: Activity,
      title: "PulmoDetect",
      description: "AI-Driven Medical Imaging Diagnostic System analyzing lung scans to detect early-stage tumors with interactive dashboards",
      impact: "Analyzed 10K+ lung scans enabling faster and more accurate diagnosis",
      tags: ["Python", "TensorFlow", "Medical AI", "Computer Vision"],
      gradient: "from-red-500 to-orange-500",
      github: "https://github.com/manishns2007/Lung-Cancer-Detector"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world solutions demonstrating expertise in system design, security, and scalable architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative h-full"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-transparent">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-xl mb-6`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className={`bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-lg p-3 mb-6`}>
                    <p className="text-sm text-gray-300 font-medium">
                      💡 {project.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs font-medium rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons - shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={hoveredProject === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
                      onClick={() => project.github !== '#' && window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}