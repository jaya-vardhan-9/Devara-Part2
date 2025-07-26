import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Calendar, Eye, Clock } from 'lucide-react';

const ContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'blogs'>('videos');

  // Mock data - replace with real API calls
  const videos = [
    {
      id: 1,
      title: 'Kubernetes Security Best Practices',
      description: 'Learn how to secure your Kubernetes clusters with RBAC, network policies, and security contexts.',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '15:32',
      views: '2.3K',
      publishedAt: '2024-01-15',
      url: 'https://youtube.com'
    },
    {
      id: 2,
      title: 'AWS EKS Setup with Terraform',
      description: 'Complete guide to setting up Amazon EKS cluster using Terraform with all the necessary configurations.',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '22:45',
      views: '4.1K',
      publishedAt: '2024-01-10',
      url: 'https://youtube.com'
    },
    {
      id: 3,
      title: 'CI/CD Pipeline with GitHub Actions',
      description: 'Build automated deployment pipelines using GitHub Actions for containerized applications.',
      thumbnail: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '18:21',
      views: '3.7K',
      publishedAt: '2024-01-05',
      url: 'https://youtube.com'
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Mastering Docker Multi-Stage Builds',
      description: 'Optimize your Docker images and reduce build times with multi-stage builds. Learn advanced techniques for production-ready containers.',
      coverImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedAt: '2024-01-20',
      readTime: '8 min read',
      views: '1.2K',
      url: 'https://hashnode.com'
    },
    {
      id: 2,
      title: 'Infrastructure as Code: Terraform vs Pulumi',
      description: 'Comprehensive comparison of Terraform and Pulumi for infrastructure automation. Which one should you choose?',
      coverImage: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedAt: '2024-01-18',
      readTime: '12 min read',
      views: '2.8K',
      url: 'https://hashnode.com'
    },
    {
      id: 3,
      title: 'Monitoring Microservices with Prometheus',
      description: 'Set up comprehensive monitoring for your microservices architecture using Prometheus, Grafana, and AlertManager.',
      coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedAt: '2024-01-15',
      readTime: '10 min read',
      views: '3.4K',
      url: 'https://hashnode.com'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="content" className="section-height py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Content & Tutorials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge through video tutorials and in-depth blog posts. 
            Learn DevOps concepts, best practices, and hands-on implementations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-lg p-1 flex">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>YouTube Videos</span>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('blogs')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'blogs'
                  ? 'bg-white text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Blog Posts</span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeTab === 'videos' ? (
            videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(video.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full py-2 bg-white text-black rounded-lg font-semibold"
                      >
                        Read Article
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{blog.views} views</span>
                      </div>
                    </div>
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-sky-400">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Subscribe to my YouTube channel and follow my blog for the latest DevOps tutorials, 
              industry insights, and hands-on guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200"
              >
                Subscribe on YouTube
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-200 border border-white/20"
              >
                Follow on Hashnode
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;