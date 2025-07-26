import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Star, GitFork } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Kubernetes Multi-Cloud Deployment',
      description: 'Automated deployment pipeline for applications across multiple cloud providers using Terraform and Kubernetes.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Kubernetes', 'Terraform', 'AWS', 'GCP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 124,
      forks: 32,
      featured: true
    },
    {
      id: 2,
      title: 'CI/CD Pipeline with Jenkins & Docker',
      description: 'Complete CI/CD solution with automated testing, building, and deployment using Jenkins, Docker, and AWS ECS.',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Jenkins', 'Docker', 'AWS ECS', 'Python'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 89,
      forks: 21,
      featured: true
    },
    {
      id: 3,
      title: 'Infrastructure as Code Template',
      description: 'Comprehensive Terraform modules for AWS infrastructure provisioning with best practices and security configurations.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Terraform', 'AWS', 'Security', 'IaC'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 203,
      forks: 67,
      featured: false
    },
    {
      id: 4,
      title: 'Monitoring Stack with Prometheus',
      description: 'Complete monitoring solution using Prometheus, Grafana, and AlertManager for Kubernetes clusters.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Monitoring'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 156,
      forks: 43,
      featured: false
    },
    {
      id: 5,
      title: 'Serverless Log Processing',
      description: 'AWS Lambda-based log processing pipeline with real-time analytics and alerting capabilities.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AWS Lambda', 'Serverless', 'Python', 'Analytics'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 78,
      forks: 19,
      featured: false
    },
    {
      id: 6,
      title: 'GitOps Workflow with ArgoCD',
      description: 'GitOps implementation using ArgoCD for continuous deployment with automatic rollbacks and configuration management.',
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['ArgoCD', 'GitOps', 'Kubernetes', 'Helm'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      blog: 'https://hashnode.com',
      stars: 145,
      forks: 38,
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-height py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world DevOps solutions that demonstrate expertise in infrastructure automation, 
            container orchestration, and modern deployment practices.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-white">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2 }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.2 }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.blog}
                          whileHover={{ scale: 1.2 }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <BookOpen className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.2 }}
                    className="p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.2 }}
                    className="p-1.5 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-white/10 text-white text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-0.5 bg-gray-500/20 text-gray-400 text-xs rounded">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;