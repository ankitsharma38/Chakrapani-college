import Hero from '../../components/Sections/Hero';
import Courses from '../../components/Sections/Courses';
import Admission from '../../components/Sections/Admission';
import Contact from '../../components/Sections/Contact';
import BlogList from '../Blog/BlogList';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Courses />
      <BlogList/>
      <Admission />
      <Contact />
    </div>
  );
}