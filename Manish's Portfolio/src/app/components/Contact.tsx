import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manishns2007",
      color: "from-gray-400 to-gray-600",
      hoverColor: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/n-s-manish007/",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nsmanish2007@gmail.com",
      color: "from-purple-400 to-purple-600",
      hoverColor: "hover:text-purple-400"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+919789970655",
      color: "from-cyan-400 to-cyan-600",
      hoverColor: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Always open to discussing new projects, opportunities, or just tech in general. 
            Feel free to reach out!
          </p>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl px-8 py-4 hover:border-purple-500/50 transition-all duration-300 group">
              <Mail className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl text-gray-300 font-medium">nsmanish2007@gmail.com</span>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl" />

                  {/* Icon */}
                  <div className="relative z-10">
                    <link.icon className={`h-8 w-8 text-gray-400 ${link.hoverColor} transition-colors duration-300`} />
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${link.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                <p className="text-sm text-gray-400 text-center mt-3 group-hover:text-gray-300 transition-colors duration-300">
                  {link.label}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
            >
              <a 
                href="https://drive.google.com/file/d/1LpzS7YGElbIW_fseilTG-Zj6IhrRNzsL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2026 N S Manish Bhalajy. Built with React, Tailwind CSS, and Motion.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed for impact. Coded with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}