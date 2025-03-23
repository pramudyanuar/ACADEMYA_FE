import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaBriefcase, FaRegWindowRestore } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 scroll-mt-20" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {/* Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <FaLink className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="text-gray-600 mt-2">
              StaffMerge's mission is to CONNECT Employers with Job Seekers in
              an effective and efficient platform, making it easier for both.
            </p>
          </motion.div>

          {/* Merge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <FaRegWindowRestore className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Merge</h3>
            <p className="text-gray-600 mt-2">
              Using Resumes, Video Introductions, Video Interviews, and Direct
              Messages, StaffMerge's platform goal is to MERGE Employers and Job
              Seekers.
            </p>
          </motion.div>

          {/* Work */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <FaBriefcase className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Work</h3>
            <p className="text-gray-600 mt-2">
              After Employers and Job Seekers have connected and merged, now it
              is time to WORK, mutually benefiting both.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
