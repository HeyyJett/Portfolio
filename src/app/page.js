import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <main>
        {/*<Resume/>*/}
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
