import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import BlogList from './pages/Blog/BlogList';
import SingleBlog from './pages/Blog/SingleBlog';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';


export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-green-50 to-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<AboutUs/>} />

            <Route path="/courses" element={<Course/>} />
            <Route path="/blogs" element={<BlogList/>} />
            <Route path="/blogs/:id" element={<SingleBlog/>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}