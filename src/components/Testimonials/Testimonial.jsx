// Testimonial.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from './testimonialData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Testimonial = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-2"
        >
          <Quote className="h-8 w-8 text-green-600" />
          Student Testimonials
        </motion.h2>
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-center justify-center"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`w-full md:w-96 bg-white rounded-xl shadow-xl p-6 ${
                  index === 1 ? 'md:-mt-8 z-20' : 'z-10'
                } hover:scale-105 transition-transform duration-300`}
                style={{
                  backgroundImage: 'radial-gradient(circle at top right, #f0fdf4, white)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-500"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic relative">
                  <Quote className="w-8 h-8 text-green-200 absolute -top-4 -left-2 -z-10" />
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;