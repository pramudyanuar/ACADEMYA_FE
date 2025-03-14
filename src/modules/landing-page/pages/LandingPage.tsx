import AboutSection from "../components/About";
import CareerSection from "../components/Career";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import JobSearchSection from "../components/SearchJob";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <AboutSection />
      <JobSearchSection />
      <CareerSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
