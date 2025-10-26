import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingEventsSection from "@/components/UpcomingEvents";
import CreateEvent from "@/components/CreateEvent";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import About from "@/components/About";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <UpcomingEventsSection />
      <CreateEvent/>
      <About />
      <TeamSection />
      <Footer />

    </div>
  );
};

export default Index;
