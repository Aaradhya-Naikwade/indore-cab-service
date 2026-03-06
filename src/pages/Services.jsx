import ServicesHeroSection from "../components/services/ServicesHeroSection"
import ServiceCategoriesSection from "../components/services/ServiceCategoriesSection"
import HowItWorksSection from "../components/services/HowItWorksSection"
import WhyOurServiceSection from "../components/services/WhyOurServiceSection"
import CoverageAndPricingSection from "../components/services/CoverageAndPricingSection"
import TestimonialsSection from "../components/common/TestimonialsSection"
import CallToAction from "../components/common/CallToAction"

function Services() {
  return (
    <main>
      <ServicesHeroSection />
      <ServiceCategoriesSection />
      <WhyOurServiceSection />
      {/* <CoverageAndPricingSection /> */}
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
}

export default Services
