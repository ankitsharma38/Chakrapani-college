import Hero from "../../components/HeroSection/Hero";
import BlogList from "../Blog/BlogList";
import Course from "../../components/Course/Course";
import Testimonial from "../../components/Testimonials/Testimonial";
import Eligibility from "../../components/Criteria/Eligibility";
import Achievements from "../../components/Achievements/Achievements";
import SlidingText from "../../components/SlidingText/SlidingText";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <SlidingText/>
      <Course/>
      <Achievements/>
      <BlogList />
      <Eligibility/>
      <Testimonial/>
    </div>
  );
}
