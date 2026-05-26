import Contact from "../components/Contact/Contact";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Timeline from "../components/Timeline/Timeline";
import Skills from "../components/Skills/skills";
import CancellationRefundPolicy from "../components/Refund/Refund";
import TermsOfUse from "../components/Terms/Terms";

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
      <TermsOfUse />
    </>
  );
};

export default Home;
