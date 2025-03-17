import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Contact Us
        </motion.h2>
        
        {/* Use items-stretch so both columns expand equally */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Card: Map & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-white p-6 rounded-xl shadow-lg"
          >
            {/* Upper Section: Google Map */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Location</h3>
              <iframe
                title="Google Map Location"
                src="https://maps.google.com/maps?q=28,%20Central%20Railway%20Colony,%20Onkar%20Nagar%20Road,%20Nagpur-440027&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            {/* Lower Section: Contact Details */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Get in Touch</h3>
              <div className="space-y-3 text-gray-600">
                <p>📞 <span className="font-medium">9890101609 / 7796187169</span></p>
                <p>📧 <a href="mailto:chakrapani615@gmail.com" className="text-green-600 hover:underline">chakrapani615@gmail.com</a></p>
                <p>🏫 28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center bg-white p-6 rounded-xl shadow-lg"
          >
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-green-800">Send a Message</h3>
              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" 
                  placeholder="Your Email" 
                />
              </div>
              <div>
                <label className="text-gray-700 font-medium">Message</label>
                <textarea 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" 
                  rows="4" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
