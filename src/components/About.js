import Image from "next/image";
import cristopher from 'src/assets/cristopher.png'

const About = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-5 py-20" id="about">
            <div className="max-w-7xl flex flex-col md:flex-row">
                <div className="text-gray-300 max-w-2xl">

                    <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900">
                        About Me
                    </h1>

                    <p className="py-5 selection:text-blue-400 text-justify">
                        My name is <span className="font-semibold">Cristopher Herrera</span>, a Software Engineer based in Austin, Texas.
                        I earned a Bachelor of Science in Computer Science degree from Pennsylvania
                        State University in 2022.
                    </p>

                    <p className="py-5 selection:text-blue-400 text-justify">
                        Ever since I was young, I&rsquo;ve been fascinated by technology. However,
                        it wasn&rsquo;t until I reached college that I finally got the chance to write
                        my very first line of code. Since then, I have spent countless hours learning
                        new technologies and developing my passion for coding.
                    </p>

                    <p className="py-5 selection:text-blue-400 text-justify">
                        During my senior year at Penn State, I won the Computer Science award for the
                        Capstone Design project. I had very little knowledge about game development at
                        the start of the semester, but with the help of my team, I quickly picked it up
                        and excelled. This outstanding accomplishment not only increased my confidence
                        but also demonstrated my ability to learn and develop my skills.
                    </p>

                    <p className="py-5 selection:text-blue-400 text-justify">
                        Later that summer, I had the opportunity to contribute to the creation of an
                        innovative Web3 and blockchain educational website for a startup company. As the
                        lead front-end developer, I was responsible for designing and developing wireframes,
                        creating new user interfaces, and connecting to the back-end database. Throughout
                        the project, I learned how to work efficiently under tight deadlines while maintaining
                        a high level of quality in my work.
                    </p>

                    <p className="pt-5 pb-1 selection:text-blue-400 text-justify">
                        These are some of my favorite technical skills:
                    </p>

                    <ul className="columns-2">
                        <li><span className="text-blue-400 p-1">☉ </span>Javascript</li>
                        <li><span className="text-blue-400 p-1">☉ </span>Typescript</li>
                        <li><span className="text-blue-400 p-1">☉ </span>Python</li>
                        <li><span className="text-blue-400 p-1">☉ </span>Java</li>
                        <li><span className="text-blue-400 p-1">☉ </span>C++</li>
                        <li><span className="text-blue-400 p-1">☉ </span>C#</li>
                    </ul>

                </div>

                <div className="px-5 py-20 items-center justify-between">
                    <Image className="select-none"
                           src={cristopher}
                           alt="Cristopher"/>
                </div>
            </div>
        </div>
    )
}

export default About;
