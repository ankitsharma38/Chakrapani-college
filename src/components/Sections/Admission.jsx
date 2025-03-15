import { motion } from 'framer-motion';

export default function Admission() {
  return (
    <section className="py-20 px-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Admission Requirements</h2>
            <ul className="space-y-4 text-gray-600">
              <li>✔️ 10th & 12th Marksheets</li>
              <li>✔️ Leaving Certificate</li>
              <li>✔️ Aadhar Card Copy</li>
              <li>✔️ 3 Sets of Xerox Documents</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Contact Details</h3>
            <div className="space-y-3 text-gray-600">
              <p>📞 9890101609 / 7796187169</p>
              <p>📧 chakrapani615@gmail.com</p>
              <p>🏫 28, Central Railway Colony, Onkar Nagar Road, Nagpur-440027</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}