
const About = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-20 py-20" id="about">
            <div className="text-gray-300 px-20 py-20 max-w-2xl">

                <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900">
                    About Me
                </h1>

                <p className="py-5 selection:text-blue-400 text-justify">
                    My name is <span className="font-semibold">Cristopher Herrera</span>, a Software Engineer based in Austin, TX.
                    I earned a Bachelor of Science in Computer Science degree from Pennsylvania
                    State University in 2022.
                </p>

                <p className="py-5 selection:text-blue-400 text-justify">
                    From an early age, my fascination with technology sparked a deep interest
                    that continued to grow. However, it wasn't until college that I finally
                    had the opportunity to write my first line of code. Since then, coding
                    has become my passion, fueling a sense of accomplishment that comes from
                    conquering intricate challenges.
                </p>

                <p className="py-5 selection:text-blue-400 text-justify">
                    During my senior year at Penn State, I had the good fortune to have met
                    excellent peers and with the help of our mentor, our team won the prestigious
                    Computer Science award at the 2022 Capstone Design conference.  This remarkable
                    achievement not only boosted my confidence but also showcased my ability to
                    learn and continuously improve my skills.
                </p>

                <p className="py-5 selection:text-blue-400 text-justify">
                    Following that summer, I had the incredible opportunity to contribute to the
                    creation of an innovative Web3 and Blockchain educational website for Carthago,
                    a dynamic startup. As the lead front-end developer, my responsibilities included
                    the design and development of wireframes, creation of new user interfaces, and
                    establishment of connections with the back-end database.
                </p>
            </div>

            <div className="px-20 py-20">
                <img className="h-[40rem] select-none" src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt=""/>
            </div>

        </div>
    )
}

export default About;
