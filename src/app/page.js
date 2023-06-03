import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ResumeButton from "../components/ResumeButton";

const Home = () => {
  return (
    <div className="min-w-min">
            <ResumeButton/>
            <Navbar/>
            <Intro/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
    </div>
  )
}


export default Home;
