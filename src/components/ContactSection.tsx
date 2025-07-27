import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Youtube, 
  BookOpen,
  Send,
  Calendar,
  Clock,
  DollarSign
} from 'lucide-react';

// Form validation schemas
const generalContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const bookingSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  purpose: yup.string().required('Please select a purpose'),
  preferredTime: yup.string().required('Please select a preferred time'),
  additionalInfo: yup.string(),
});

const ContactSection: React.FC = () => {
  const generalForm = useForm({
    resolver: yupResolver(generalContactSchema),
  });

  const bookingForm = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onGeneralSubmit = (data: any) => {
    console.log('General Contact:', data);
    alert('Thank you for your message! I\'ll get back to you soon.');
    generalForm.reset();
  };

  const onBookingSubmit = (data: any) => {
    console.log('Booking Request:', data);
    alert('Booking request received! I\'ll contact you to confirm the details.');
    bookingForm.reset();
  };

  const socialLinks = [
    {
      name:'email',
      icon:Mail,
      url:'',
      color:'hover:text-white',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-white',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'hover:text-white',
    },
    {
      name: 'Hashnode',
      icon: BookOpen,
      url: 'https://hashnode.com',
      color: 'hover:text-white',
    },
  ];

  const bookingPurposes = [
    'DevOps Consultation',
    'Infrastructure Review',
    'CI/CD Pipeline Setup',
    'Kubernetes Training',
    'Cloud Migration Planning',
    'Security Assessment',
    'Career Mentoring',
    'Technical Interview Prep',
  ];

  const availableTimes = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (1:00 PM - 5:00 PM)',
    'Evening (6:00 PM - 8:00 PM)',
    'Weekend (Flexible)',
  ];

  return (
    <section id="contact" className="section-height py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you need DevOps consultation, want to collaborate on a project, 
            or just want to chat about technology, I'd love to hear from you.
          </p>
        </motion.div>

       
        {/* Dual Contact Forms */}
        <div className="">
          {/* General Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl  p-8 slide-in-left"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">General Contact</h3>
                <p className="text-gray-400 text-sm">Send me a message</p>
              </div>
            </div>

            <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  {...generalForm.register('name')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 hover:bg-white/10"
                  placeholder="Enter your full name"
                />
                {generalForm.formState.errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {generalForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  {...generalForm.register('email')}
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 hover:bg-white/10"
                  placeholder="your@email.com"
                />
                {generalForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {generalForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  {...generalForm.register('message')}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 resize-none hover:bg-white/10"
                  placeholder="How can I help you? Please provide details about your project or inquiry..."
                />
                {generalForm.formState.errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {generalForm.formState.errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* 1:1 Booking Form
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-8 slide-in-right"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1:1 Consultation</h3>
                <p className="text-gray-400 text-sm">Professional DevOps guidance</p>
              </div>
            </div>

            <div className="mb-6 p-4 bg-white/5 border border-white/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-lg font-bold text-white">$150/hour</span>
              </div>
              <p className="text-sm text-gray-300">
                Get expert DevOps consultation tailored to your specific needs. 
                Includes follow-up resources and actionable recommendations.
              </p>
            </div>

            <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  {...bookingForm.register('name')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 hover:bg-white/10"
                  placeholder="Enter your full name"
                />
                {bookingForm.formState.errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {bookingForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  {...bookingForm.register('email')}
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 hover:bg-white/10"
                  placeholder="your@email.com"
                />
                {bookingForm.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {bookingForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Consultation Purpose *
                </label>
                <select
                  {...bookingForm.register('purpose')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white hover:bg-white/10"
                >
                  <option value="" className="bg-black">Select consultation type</option>
                  {bookingPurposes.map((purpose) => (
                    <option key={purpose} value={purpose} className="bg-black">
                      {purpose}
                    </option>
                  ))}
                </select>
                {bookingForm.formState.errors.purpose && (
                  <p className="mt-1 text-sm text-red-400">
                    {bookingForm.formState.errors.purpose.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Preferred Time *
                </label>
                <select
                  {...bookingForm.register('preferredTime')}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white hover:bg-white/10"
                >
                  <option value="" className="bg-black">Select preferred time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time} className="bg-black">
                      {time}
                    </option>
                  ))}
                </select>
                {bookingForm.formState.errors.preferredTime && (
                  <p className="mt-1 text-sm text-red-400">
                    {bookingForm.formState.errors.preferredTime.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  {...bookingForm.register('additionalInfo')}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder-gray-400 resize-none hover:bg-white/10"
                  placeholder="Any specific topics, challenges, or questions you'd like to discuss?"
                />
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Consultation</span>
              </motion.button>
            </form>
          </motion.div> */}
        </div>
      </div>

       {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="w-1/2 glass-effect rounded-xl p-8 max-w-4xl mx-auto">
              {/* Social Links */}
              <div className="space-y-6">
                <div className="flex justify-center justify-around">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-4 p-4 glass-effect rounded-lg transition-all duration-200 ${social.color} border border-white/10 hover:border-white/30`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
          </div>
        </motion.div>

    </section>
  );
};

export default ContactSection;