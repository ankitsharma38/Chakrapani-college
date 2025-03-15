import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './components/Sections/Contact';
import YogaSymbol from './components/3d/YogaSymbol'; // Import your 3D component
import Courses from './components/Sections/Courses';

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* 3D Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <YogaSymbol /> {/* Add your 3D component here */}
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>

        {/* Layout and Routes */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/courses" element={<Courses/>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}