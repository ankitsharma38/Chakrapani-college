import Hero from "../../components/Sections/Hero";
import Courses from "../../components/Sections/Courses";
import Admission from "../../components/Sections/Admission";
import Contact from "../../components/Sections/Contact";
import BlogList from "../Blog/BlogList";
import Course from "../../components/Course/Course";
import Testimonial from "../../components/Testimonials/Testimonial";
import Eligibility from "../../components/Criteria/Eligibility";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Course/>
      {/* <Courses /> */}
      <BlogList />
      <Eligibility/>
      {/* <Admission /> */}
      <Testimonial/>
      <Contact />
    </div>
  );
}
