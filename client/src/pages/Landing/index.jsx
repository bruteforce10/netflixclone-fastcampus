import DefaultLayout from "@layouts/DefaultLayout";
import Footer from "@mods/LandingPage/Footer";
import SectionDownload from "@mods/LandingPage/SectionContents/SectionDownload";
import SectionEnjoy from "@mods/LandingPage/SectionContents/SectionEnjoy";
import SectionFAQ from "@mods/LandingPage/SectionContents/SectionFAQ";
import SectionProfile from "@mods/LandingPage/SectionContents/SectionProfile";
import SectionWatch from "@mods/LandingPage/SectionContents/SectionWatch";
import Jumbotron from "@mods/LandingPage/Jumbotron";
import Navbar from "@/pages/Landing/Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </>
  );
}

export default Landing;
