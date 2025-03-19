// Eligibility.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, FileText } from 'lucide-react';
import { eligibilityCriteria, documents } from './eligibilityData';

const Eligibility = () => {
  return (
    <section 
      id="eligibility" 
      className="py-16 bg-gradient-to-b from-gray-50 to-white scroll-mt-16 relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90" 
        style={{ backgroundImage: `url('https://ik.imagekit.io/julyhwpbw/new.svg?updatedAt=1742383406707')` }}
      ></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-green-600">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Scroll className="h-6 w-6" />
                Eligibility Criteria
              </h2>

              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                      <span className="text-white">✓</span>
                    </div>
                    <span>{criteria.text}</span>
                  </li>
                ))}
              </ul>

              
            </div>
            <div className="p-8 bg-white">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <FileText className="h-6 w-6 text-green-600" />
                Required Documents
              </h2>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
