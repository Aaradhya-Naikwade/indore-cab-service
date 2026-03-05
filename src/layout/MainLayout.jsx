import Navbar from "./Navbar"
import FloatingContactWidget from "../components/common/FloatingContactWidget"
import Footer from "../components/common/Footer"

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingContactWidget />
    </>
  )
}

export default MainLayout
