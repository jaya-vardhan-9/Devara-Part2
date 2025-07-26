import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  BookOpen,
  Star,
  Calendar,
  Eye,
  Clock
} from 'lucide-react';

const SkillPage: React.FC = () => {
  const { skillName } = useParams<{ skillName: string }>();
  
  // Mock data - in real app, this would come from API or props
  const skillData = {
    aws: {
      name: 'AWS (Amazon Web Services)',
      description: 'Comprehensive cloud computing platform offering 200+ services for computing, storage, databases, networking, analytics, and more.',
      level: 'Expert',
      experience: '5+ years',
      certifications: ['AWS Solutions Architect Professional', 'AWS DevOps Engineer Professional'],
      projects: [
        {
          id: 1,
          title: 'Multi-Region EKS Deployment',
          description: 'Deployed scalable Kubernetes clusters across multiple AWS regions with auto-scaling and disaster recovery.',
          technologies: ['EKS', 'ALB', 'Route53', 'RDS', 'ElastiCache'],
          github: 'https://github.com',
          demo: 'https://demo.com'
        },
        {
          id: 2,
          title: 'Serverless Data Pipeline',
          description: 'Built real-time data processing pipeline using Lambda, Kinesis, and DynamoDB for IoT data ingestion.',
          technologies: ['Lambda', 'Kinesis', 'DynamoDB', 'S3', 'CloudWatch'],
          github: 'https://github.com',
          demo: 'https://demo.com'
        }
      ],
      videos: [
        {
          id: 1,
          title: 'AWS EKS Setup with Terraform',
          description: 'Complete guide to setting up Amazon EKS cluster using Terraform',
          thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
          duration: '22:45',
          views: '4.1K',
          publishedAt: '2024-01-10'
        }
      ],
      blogs: [
        {
          id: 1,
          title: 'AWS Cost Optimization Strategies',
          description: 'Learn how to reduce AWS costs by 40% using these proven strategies',
          publishedAt: '2024-01-15',
          readTime: '8 min read',
          views: '2.3K'
        }
      ]
    }
  };

  const currentSkill = skillData[skillName?.toLowerCase() as keyof typeof skillData] || skillData.aws;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Skills</span>
          </Link>
        </motion.div>

        {/* Skill Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="glass-effect rounded-xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {currentSkill.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl">
              {currentSkill.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-sky-500/10 rounded-lg p-4 border border-sky-500/30">
                <div className="text-sm text-gray-400">Proficiency Level</div>
                <div className="text-2xl font-bold text-sky-400">{currentSkill.level}</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                <div className="text-sm text-gray-400">Experience</div>
                <div className="text-2xl font-bold text-emerald-400">{currentSkill.experience}</div>
              </div>
              <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
                <div className="text-sm text-gray-400">Projects Completed</div>
                <div className="text-2xl font-bold text-orange-400">{currentSkill.projects.length}+</div>
              </div>
            </div>

            {currentSkill.certifications.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {currentSkill.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 text-white text-sm rounded-full border border-sky-500/30"
                    >
                      🏆 {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentSkill.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl p-6 group hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* YouTube Videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-sky-400">YouTube Tutorials</h2>
            <div className="space-y-6">
              {currentSkill.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="flex">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-48 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold mb-2 group-hover:text-sky-400 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {video.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{video.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-sky-400">Related Blog Posts</h2>
            <div className="space-y-6">
              {currentSkill.blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl p-6 group cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="w-5 h-5 text-sky-400" />
                    <span className="text-sm text-gray-400">{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{blog.views} views</span>
                      </div>
                    </div>
                    <div className="text-sky-400 font-medium">
                      Read More →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-sky-400">
              Need Help with {currentSkill.name}?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm available for consultation, code reviews, and hands-on implementation. 
              Let's discuss how I can help you succeed with your {skillName?.toUpperCase()} projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Consultation
              </motion.button>
              <Link to="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass-effect hover:bg-white/10 text-sky-400 font-semibold rounded-lg transition-all duration-200 border border-sky-500/30"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillPage;