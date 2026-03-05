import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Fleet from "../pages/Fleet"
import Contact from "../pages/Contact"
import BookNow from "../pages/BookNow"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-now" element={<BookNow />} />
    </Routes>
  )
}

export default AppRoutes
