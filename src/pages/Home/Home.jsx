import Hero from "../../components/HeroSection/Hero";
import BlogList from "../Blog/BlogList";
import Course from "../../components/Course/Course";
import Testimonial from "../../components/Testimonials/Testimonial";
import Eligibility from "../../components/Criteria/Eligibility";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Course/>
      <BlogList />
      <Eligibility/>
      <Testimonial/>
    </div>
  );
}
