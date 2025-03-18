// Course.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen,
  Clock,
  GraduationCap,
  Bot as Lotus,
  Brain,
  Heart,
  Leaf,
  Cog as Yoga,
  Sparkles,
  Microscope,
  Activity,
  Syringe,
  Shield
} from "lucide-react";
import { courses } from "./courseData";

// Create icon map
const iconComponents = {
  lotus: Lotus,
  brain: Brain,
  heart: Heart,
  leaf: Leaf,
  yoga: Yoga,
  sparkles: Sparkles,
  microscope: Microscope,
  activity: Activity,
  syringe: Syringe,
  shield: Shield
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Course = () => {
  return (
    <section id="courses" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2"
        >
          <BookOpen className="h-8 w-8 text-green-600" />
          Our Courses
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => {
            const Icon = iconComponents[course.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    {Icon && <Icon className="h-6 w-6 text-green-600" />}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="h-5 w-5" />
                    <span>{course.fees}</span>
                  </div>
                  {course.scholarship && (
                    <div className="mt-4 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Scholarship Available
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Course;