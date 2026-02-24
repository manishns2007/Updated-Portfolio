import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Trophy, Code, Target, Award, Users, Zap, Medal, Shield, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import contributorImg from 'figma:asset/b655cd39e1a8f7880ce2884d21a6367420487488.png';
import cybersecurityImg from 'figma:asset/eb94adffd51ce24df18b041142f0b6301c6f4ca9.png';
import evolveLabImg from 'figma:asset/3abfbf9cbd05ab62b1f5135dc39ad6caff7b7555.png';

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stats = [
    { icon: Code, value: "500+", label: "LeetCode Problems", color: "from-blue-500 to-cyan-500", link: null },
    { icon: Trophy, value: "15+", label: "Hackathons Participated", color: "from-purple-500 to-pink-500", link: "https://unstop.com/u/nman43336" },
    { icon: Award, value: "Top 20%", label: "LeetCode Rating", color: "from-indigo-500 to-purple-500", link: null },
    { icon: Medal, value: "5", label: "LeetCode Badges", color: "from-yellow-500 to-orange-500", link: "https://leetcode.com/u/manish_cyber07/" },
    { icon: Shield, value: "THM", label: "Cybersecurity", color: "from-green-500 to-emerald-500", link: "https://tryhackme.com/p/nsmanish2007" },
    { icon: Zap, value: "98%", label: "Problem Accuracy", color: "from-orange-500 to-red-500", link: null }
  ];

  const timeline = [
    {
      year: "2026",
      title: "Contributor - Elite Coders",
      description: "Jan: Contributing to open-source projects and collaborative coding initiatives",
      color: "cyan",
      image: contributorImg
    },
    {
      year: "2025",
      title: "Gen AI Intern - Evolve Robot Lab",
      description: "Nov - Dec: Worked on generative AI projects and robotic automation systems",
      color: "blue",
      image: evolveLabImg
    },
    {
      year: "2025",
      title: "Cybersecurity Intern - Razz Security",
      description: "Aug - Sep: Developed security solutions and performed vulnerability assessments",
      color: "purple",
      image: cybersecurityImg
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements & Stats
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Milestones that showcase dedication, consistency, and competitive excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
              onClick={() => stat.link && window.open(stat.link, '_blank')}
              style={{ cursor: stat.link ? 'pointer' : 'default' }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-transparent transition-all duration-300 overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                  </motion.div>
                  
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Link indicator */}
                  {stat.link && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-xs text-cyan-400 flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Profile
                    </motion.div>
                  )}
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Journey Highlights
            </h3>
          </motion.div>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
                    {/* Certificate Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-800">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                      
                      {/* View Certificate Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(item.image)}
                        className={`absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${
                          item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                          item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-indigo-500 to-purple-500'
                        } rounded-lg text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </motion.button>
                    </div>
                    
                    {/* Text Content */}
                    <div className="p-6">
                      <div className={`inline-block px-4 py-1 bg-gradient-to-r ${
                        item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                        'from-indigo-500 to-purple-500'
                      } rounded-full text-sm font-bold text-white mb-4`}>
                        {item.year}
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block relative">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${
                    item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                    'from-indigo-500 to-purple-500'
                  } border-4 border-gray-900 shadow-lg`} />
                  
                  <motion.div
                    className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${
                      item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                      item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                      item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                      'from-indigo-500 to-purple-500'
                    }`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal/Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-gray-900 rounded-2xl border-2 border-purple-500/50 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors duration-300 shadow-lg"
            >
              ✕
            </button>
            
            {/* Certificate Image */}
            <ImageWithFallback
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}