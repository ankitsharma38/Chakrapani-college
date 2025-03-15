import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Chakrapani Panchakarma Yoga Nisargopchar Mahavidyalaya
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Affiliated with Kavi Kulguru Kalidas Sanskrit University, Ramtek
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            Admissions Open 2024-25
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
