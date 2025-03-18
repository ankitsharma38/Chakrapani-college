import { motion } from 'framer-motion';
import bookIcon from '/icons/book.png'; // Add icons in public/icons folder
import durationIcon from '/icons/duration.png';
import feesIcon from '/icons/fees.png';
import scholarshipIcon from '/icons/scholarship.png';
// const courses = [
//   { 
//     name: 'MA In Yogashatra',
//     duration: '2 Years',
//     fees: '25000/year',
//     icon: Lotus,
//     image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Advanced studies in yoga philosophy and practice'
//   },
//   { 
//     name: 'B.Sc. In Yoga & Naturopathy',
//     duration: '3 Years',
//     fees: '25000/year',
//     icon: Brain,
//     image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Comprehensive program combining yoga and natural healing'
//   },
//   { 
//     name: 'BA In Yogashatra',
//     duration: '3 Years',
//     fees: '17000/year',
//     scholarship: true,
//     icon: Heart,
//     image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Foundation course in yoga studies'
//   },
//   { 
//     name: 'Diploma In Yoga Application',
//     duration: '1 Year',
//     fees: '20000/-',
//     icon: Yoga,
//     image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Practical yoga application techniques'
//   },
//   { 
//     name: 'Diploma in Yoga, Naturopathy & Dietetics (DYND)',
//     duration: '2 Years',
//     fees: '20000/-',
//     icon: Leaf,
//     image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Integrated approach to wellness and nutrition'
//   },
//   { 
//     name: 'Diploma In Panchakarma',
//     duration: '2 Years',
//     fees: '25000/year',
//     icon: Sparkles,
//     image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Specialized training in traditional healing methods'
//   },
//   { 
//     name: 'Diploma In Ayurved Massage & Panchakarma Technician',
//     duration: '1 Year',
//     fees: '20000/-',
//     icon: Heart,
//     image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Professional training in therapeutic techniques'
//   },
  

// ];



const courses = [
  {
    name: "MA In Yogashatra",
    duration: "2 Years",
    fees: "25000/year",
    scholarship: "Scholarship Available",
  },
  {
    name: "B.Sc. In Yoga & Naturopathy",
    duration: "3 Years",
    fees: "25000/year",
  },
  {
    name: "BA In Yogashatra",
    duration: "3 Years",
    fees: "17000/year",
    scholarship: "Scholarship Available",
  },
  {
    name: "Diploma In Yoga Application",
    duration: "1 Year",
    fees: "20000",
  },
  {
    name: "Diploma in Yoga, Naturopathy & Dietetics (DYND)",
    duration: "2 Years",
    fees: "20000/year",
  },
  {
    name: "Diploma In Panchakarma",
    duration: "2 Years",
    fees: "25000/year",
  },
  {
    name: "Diploma In Ayurved Massage & Panchakarma Technician",
    duration: "1 Year",
    fees: "20000",
  },
  {
    name: "Diploma Course in Medical Lab Technician (DMLT)",
    duration: "2 Years",
    fees: "45000",
  },
  {
    name: "Diploma Course in Physiotherapy",
    duration: "2 Years",
    fees: "45000",
  },
  {
    name: "Diploma Course in Naturopathy and Yogic Science (DNYS)",
    duration: "2 Years",
    fees: "40000",
  },
  {
    name: "Certificate Course in Operation Theatre Assistant",
    duration: "1 Year",
    fees: "25000",
  },
  {
    name: "Certificate Course in Health Sanitary Inspector",
    duration: "1 Year",
    fees: "25000",
  },
];

export default function Courses() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Our Courses
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-green-300 flex flex-col items-start space-y-4"
            >
              <div className="flex items-center gap-3">
                <img src={bookIcon} alt="Course" className="w-10 h-10" />
                <h3 className="text-xl font-bold text-green-800">{course.name}</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <img src={durationIcon} alt="Duration" className="w-6 h-6" />
                  <p className="text-md">Duration: {course.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={feesIcon} alt="Fees" className="w-6 h-6" />
                  <p className="text-md">Fees: ₹{course.fees}</p>
                </div>
                {course.scholarship && (
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <img src={scholarshipIcon} alt="Scholarship" className="w-6 h-6" />
                    <p>{course.scholarship}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
