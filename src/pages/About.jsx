import AboutHeroSection from "../components/about/AboutHeroSection"
import AboutUsSection from "../components/about/AboutUsSection"
import OurCommitmentSection from "../components/about/OurCommitmentSection"
import CoFounderSection from "../components/about/CoFounderSection"
import CallToAction from "../components/common/CallToAction"


function About() {
  return (
    <main>
      <AboutHeroSection />
      <AboutUsSection />
      <OurCommitmentSection />
      <CallToAction/>
      <CoFounderSection />
    </main>
  )
}

export default About
