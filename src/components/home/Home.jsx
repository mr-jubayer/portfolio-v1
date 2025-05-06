import { About, Banner, Projects } from "../";
import Contact from "./Contact/Contact";
import FixSocialIcon from "./fixedIcons/FixSocialIcon";
import ScrollToTop from "./fixedIcons/ScrollToTop";
import Footer from "./footer/Footer";
import Wave from "./Wave";
function Home() {
  return (
    <div className="font">
      <Banner />
      <Wave />

      <Projects />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default Home;
