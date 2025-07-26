import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Server, Cloud } from 'lucide-react';

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="section-height flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center float-animation"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-gray-300 p-1 pulse-animation">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="DevOps Engineer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Server className="w-6 h-6 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Alex Thompson</span>
              <span className="text-gray-300"> | </span>
              <span className="text-white">DevOps Engineer</span>
            </h1>
            
            <div className="flex justify-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Cloud className="w-5 h-5" />
                <span className="terminal-font">AWS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span className="terminal-font">5+ Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5" />
                <span className="terminal-font">Kubernetes Expert</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate DevOps engineer with 5+ years of experience building scalable infrastructure and automating deployments. 
              I bridge the gap between development and operations, creating robust CI/CD pipelines and cloud-native solutions.
            </p>
            <p className="text-lg text-gray-400">
              Specialized in AWS, Kubernetes, and Infrastructure as Code. Always exploring the latest technologies to optimize 
              performance and reduce operational overhead.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200 pulse-animation"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;