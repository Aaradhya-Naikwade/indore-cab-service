import ContactHeroSection from "../components/contact/ContactHeroSection"
import ContactInfoSection from "../components/contact/ContactInfoSection"
import ContactFormSection from "../components/contact/ContactFormSection"
import CallToAction from "../components/common/CallToAction"

function Contact() {
  return (
    <main>
      <ContactHeroSection />
            <ContactFormSection />

      <ContactInfoSection />
      <CallToAction />
    </main>
  )
}

export default Contact
