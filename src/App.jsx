import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sermons from "./pages/Sermons"
import SermonDetails from "./pages/SermonDetails"
import BibleSchool from "./pages/BibleSchool"
import Prayer from "./pages/Prayer"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/sermons/:id" element={<SermonDetails />} />
        <Route path="/bible-school" element={<BibleSchool />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App