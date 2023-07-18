const Intro = () => {
    return(
      <div className="bg-slate-800" id="home">
          <div className="flex flex-col flex-grow justify-center items-center min-h-screen">
              <div className="px-5 flex-nowrap">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-semibold selection:text-blue-400">Cristopher Herrera,</h1>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-blue-400 font-light selection:text-blue-900">Software Engineer</h1>
                  <h3 className="text-2xl sm:text-3xl text-gray-400 mt-2 selection:text-gray-300">Proud Penn State Alumnus</h3>
              </div>
          </div>
      </div>
    );
}

export default Intro;
