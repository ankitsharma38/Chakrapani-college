import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './components/Sections/Contact';
import Courses from './components/Sections/Courses';
import AboutUs from './pages/About/AboutUs';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-green-50 to-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/about" element={<AboutUs/>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}