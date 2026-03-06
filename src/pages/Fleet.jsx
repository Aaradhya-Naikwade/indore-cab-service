import FleetHeroSection from "../components/fleet/FleetHeroSection"
import FleetCategoriesSection from "../components/fleet/FleetCategoriesSection"
import FleetWhyUsSection from "../components/fleet/FleetWhyUsSection"
import FleetBookingStepsSection from "../components/fleet/FleetBookingStepsSection"
import TestimonialsSection from "../components/common/TestimonialsSection"
import CallToAction from "../components/common/CallToAction"

function Fleet() {
  return (
    <main>
      <FleetHeroSection />
      <FleetCategoriesSection />
      <FleetWhyUsSection />
      <FleetBookingStepsSection />
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
}

export default Fleet
