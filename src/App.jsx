import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Experience from "./components/Experience.jsx"
import Skills from "./components/Skills.jsx"
import About from "./components/About.jsx"
import Project from "./components/Project.jsx"
import Certifications from "./components/Certifications.jsx"
import Contact from "./components/Contact.jsx"

function App(){
  return(
    <div className="bg-black text-white ">
      
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Certifications/>
      <Contact/>
    </div>
  )
}
export default App


