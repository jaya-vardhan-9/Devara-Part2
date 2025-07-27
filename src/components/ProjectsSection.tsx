import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    // ... (Your projects array remains the same)
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
      featured: true
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
      featured: true
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
      featured: false
    }
  ];

  const featured = projects.filter((p) => p.featured);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [projectWidth, setProjectWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const total = featured.length;
  // Create a looped array for the infinite effect. The middle section is the "real" one.
  const looped = total > 0 ? [...featured, ...featured, ...featured] : [];

  // 1. Calculate the responsive width of a single project card
  useLayoutEffect(() => {
    if (scrollRef.current) {
      // Find the first element with the 'project-card' class
      const firstProject = scrollRef.current.querySelector('.project-card');
      if (firstProject) {
        setProjectWidth(firstProject.clientWidth);
      }
    }
  }, [featured]); // Recalculate if the featured projects change

  // 2. Initialize scroll position to the start of the middle section
  useEffect(() => {
    if (projectWidth > 0 && scrollRef.current) {
      const baseOffset = total * projectWidth;
      scrollRef.current.scrollLeft = baseOffset;
    }
  }, [projectWidth, total]);

  // 3. Autoscroll logic with hover-to-pause
  useEffect(() => {
    if (isHovering || projectWidth === 0 || total === 0) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        // Use scrollBy for continuous movement
        scrollRef.current.scrollBy({ left: projectWidth, behavior: 'smooth' });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovering, projectWidth, total]);

  // 4. Main scroll handler to update active index and reset the loop
  const handleScroll = () => {
    // Clear any existing timeout to debounce
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const container = scrollRef.current;
    if (!container || projectWidth === 0) return;

    const baseOffset = total * projectWidth;
    const currentScroll = container.scrollLeft;

    // Update active index based on the closest card
    const relativeScroll = currentScroll - baseOffset;
    const newIndex = Math.round(relativeScroll / projectWidth);
    setActiveIndex((newIndex + total) % total);

    // Set a timeout to check for reset only after the scroll has stopped
    scrollTimeoutRef.current = setTimeout(() => {
      // Thresholds for jumping
      const scrollEndThreshold = baseOffset * 2 - projectWidth / 2;
      const scrollStartThreshold = baseOffset - projectWidth / 2;

      // If scrolled to the third block, jump back to the second
      if (container.scrollLeft >= scrollEndThreshold) {
        container.scrollLeft = container.scrollLeft - baseOffset;
      } 
      // If scrolled to the first block, jump forward to the second
      else if (container.scrollLeft <= scrollStartThreshold) {
        container.scrollLeft = container.scrollLeft + baseOffset;
      }
    }, 150); // 150ms delay is usually enough to detect scroll end
  };
    
  // Helper to navigate with arrows and dots
  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container || projectWidth === 0) return;

    const baseOffset = total * projectWidth;
    // Calculate the absolute target position in the middle block
    const targetScroll = baseOffset + (index * projectWidth);

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };
  
  const handlePrev = () => {
    // To handle the case where activeIndex is 0 and we want to go to the last item
    const newIndex = (activeIndex - 1 + total) % total;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % total;
    scrollToIndex(newIndex);
  };


  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>

        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-center">
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="p-2 mr-2 rounded-full glass-effect hover:bg-white/20 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            >
              <div className="flex w-full">
                {looped.map((project, index) => {
                  const isActive = index % total === activeIndex;
                  return (
                    <div
                      key={`${project.id}-${index}`}
                      // Added 'project-card' class for width calculation
                      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4 snap-center project-card"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`glass-effect rounded-xl overflow-hidden group transition-all duration-300 h-full transform ${
                          isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'
                        }`}
                      >
                        {/* ... Card content (unchanged) ... */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex space-x-4 text-white">
                                  <a
                                    href={project.github}
                                    className="p-2 bg-white/20 rounded-full hover:bg-white/40"
                                  >
                                    <Github className="w-5 h-5" />
                                  </a>
                                  <a
                                    href={project.demo}
                                    className="p-2 bg-white/20 rounded-full hover:bg-white/40"
                                  >
                                    <ExternalLink className="w-5 h-5" />
                                  </a>
                                  <a
                                    href={project.blog}
                                    className="p-2 bg-white/20 rounded-full hover:bg-white/40"
                                  >
                                    <BookOpen className="w-5 h-5" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
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
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="p-2 ml-2 rounded-full glass-effect hover:bg-white/20 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {featured.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-sky-400'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;