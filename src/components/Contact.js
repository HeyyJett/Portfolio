import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faMobileButton} from "@fortawesome/free-solid-svg-icons";

import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const Contact = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-20 select:text-blue-400" id="contact">
            <div className="px-24 py-20 max-w-7xl">

                <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900">
                    Contact Me
                </h1>

                <div className="flex flex-wrap py-5 items-center justify-center">

                    {/*     Email Card      */}
                    <div className="px-8 py-5">

                        <div className="w-[30rem] h-[20rem] p-3 rounded-lg shadow-md bg-gray-600 content-center flex items-center justify-center
                        bg-[url('https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                        bg-no-repeat bg-cover bg-blend-multiply ">


                            <div className="text-center font-semibold">

                                <FontAwesomeIcon icon={faEnvelope} size="2x" color="white"/>

                                <div className="text-4xl text-blue-400 leading-tight py-3 selection:text-white">
                                    Send me an email
                                </div>

                                <div>
                                    <a href="mailto:crisherrera024@gmail.com" target="_top" className="pb-1 text-lg text-gray-300 hover:text-blue-400 cursor-pointer py-3 underline selection:text-blue-400">
                                        crisherrera024@gmail.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/*     Linkedin Card      */}
                    <div className="px-8 py-5">
                        <div className="w-[30rem] h-[20rem] p-3 rounded-lg shadow-md bg-gray-600 content-center flex items-center justify-center
                        bg-[url('https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                        bg-no-repeat bg-cover bg-blend-multiply ">

                            <div className="text-center font-semibold">

                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white"/>

                                <div className="text-4xl text-blue-400 leading-tight py-3 selection:text-white">
                                    Connect on Linkedin
                                </div>

                                <div>
                                    <a href="https://www.linkedin.com/in/cristopher-herrera-urena/" target="_blank" className="pb-1 text-lg text-gray-300 hover:text-blue-400 cursor-pointer py-3 underline selection:text-blue-400">
                                        in/cristopher-herrera-urena/
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*     GitHub Card      */}
                    <div className="px-8 py-5">
                        <div className="w-[30rem] h-[20rem] p-3 rounded-lg shadow-md bg-gray-600 content-center flex items-center justify-center
                        bg-[url('https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                        bg-no-repeat bg-cover bg-blend-multiply ">

                            <div className="text-center font-semibold">

                                <FontAwesomeIcon icon={faGithub} size="2x" color="white"/>

                                <div className="text-4xl text-blue-400 leading-tight py-3 selection:text-white">
                                    Follow my GitHub
                                </div>

                                <div>
                                    <a href="https://github.com/HeyyJett" target="_blank" className="pb-1 text-lg text-gray-300 hover:text-blue-400 cursor-pointer py-3 underline selection:text-blue-400">
                                        github.com/HeyyJett
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*     Phone Card      */}
                    <div className="px-8 py-5">
                        <div className="w-[30rem] h-[20rem] p-3 rounded-lg shadow-md bg-gray-600 content-center flex items-center justify-center
                        bg-[url('https://images.pexels.com/photos/2937792/pexels-photo-2937792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
                        bg-no-repeat bg-cover bg-blend-multiply ">

                            <div className="text-center font-semibold">

                                <FontAwesomeIcon icon={faMobileButton} size="2x" color="white"/>

                                <div className="text-4xl text-blue-400 leading-tight py-3 selection:text-white">
                                    Call me (or text me)
                                </div>

                                <div>
                                    <a href="tel:310-728-0282" className="pb-1 text-lg text-gray-300 hover:text-blue-400 cursor-pointer py-3 underline selection:text-blue-400">
                                        (310) 728-0282
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
