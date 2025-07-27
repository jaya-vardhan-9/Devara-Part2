import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Cloud, 
  Terminal, 
  Settings, 
  Container, 
  Code, 
  Coffee, 
  Database 
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const navigate = useNavigate();

  const skills = [
    {
      name: 'AWS',
      icon: Cloud,
      description: 'Cloud infrastructure and services',
      projects: 12
    },
    {
      name: 'Linux',
      icon: Terminal,
      description: 'System administration and automation',
      projects: 25
    },
    {
      name: 'Jenkins',
      icon: Settings,
      description: 'CI/CD pipeline automation',
      projects: 18
    },
    {
      name: 'Kubernetes',
      icon: Container,
      description: 'Container orchestration',
      projects: 15
    },
    {
      name: 'Python',
      icon: Code,
      description: 'Automation and scripting',
      projects: 30
    },
    {
      name: 'Java',
      icon: Coffee,
      description: 'Enterprise applications',
      projects: 8
    },
    {
      name: 'SQL',
      icon: Database,
      description: 'Database management',
      projects: 20
    }
  ];

  const handleSkillClick = (skillName: string) => {
    navigate(`/skill/${skillName.toLowerCase()}`);
  };

  return (
    <section id="skills" className="section-height py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps practices, from cloud infrastructure 
            to automation and everything in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSkillClick(skill.name)}
                className="glass-effect rounded-xl p-6 cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-lg bg-white"
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <p className="text-gray-300 mb-4">{skill.description}</p>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    {skill.projects} projects
                  </div>
                  <div className="text-white font-medium terminal-font">
                    Learn More →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;