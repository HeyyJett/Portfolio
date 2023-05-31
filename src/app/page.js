import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main>
        <Navbar/>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
    </main>
  )
}


export default Home;
