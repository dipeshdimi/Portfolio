import Contact from "../components/Contact/Contact";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Timeline from "../components/Timeline/Timeline";
import Skills from "../components/Skills/skills";
import CancellationRefundPolicy from "../components/Refund/Refund";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Timeline />
      <Contact />
      <CancellationRefundPolicy />
    </>
  );
};

export default Home;
