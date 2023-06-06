import vue from '../assets/vue.png';
import python from '../assets/python.png';
import unity from '../assets/Unity.png';

import Image from "next/image";

const Experience = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-5 py-20" id="experience">
            <div className="max-w-7xl">

                <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900">
                    Experience
                </h1>

                <ol className="px-1 relative border-l border-gray-200 dark:border-gray-700 my-5">

                    {/* Research */}
                    <li className="mb-10 ml-6 selection:text-blue-400">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-2 ring-blue-400">
                            <Image className="h-5 w-5" src={python} alt="Python">

                            </Image>
                        </span>

                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Undergraduate Independent Study - Hien Nguyen, Ph.D.
                            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3 selection:text-white">Research</span>
                        </h3>

                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            August 2022 - December 2022
                        </time>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            • Developed and implemented two models, CITEseq and Multiome, to predict the co-variation of DNA, RNA, and protein measurements in single cells as bone marrow stem cells transition into mature blood cells. <br/>
                            • Conducted feature selection and preprocessing on a subset of a 300,000-cell time course dataset of CD34+ hematopoietic stem and progenitor cells (HSPC) <br/>
                            • Designed and executed a cross-validation strategy by converting the data into a sparse matrix, normalizing the targets, and processing each feature using relevant libraries. <br/>
                            • Implemented correlation scoring techniques, such as loss of correlation score and correlation score, to determine optimal model parameters for both CITEseq and Multiome models. <br/>
                            • Successfully trained the models using the gathered data, with the Multiome model leveraging the results from the CITEseq, accurately predicting genetic information mapping. <br/>
                            • Addressed the challenge of predicting a paired modality measured in the same cell using test data from a later time point than any in the training data. <br/>
                        </p>

                        <div className="flex flex-wrap">
                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    Python
                                </a>
                            </span>
                        </div>
                    </li>

                    {/* Internship */}
                    <li className="mb-10 ml-6 selection:text-blue-400">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-2 ring-blue-400">
                            <Image className="h-4 w-5" src={vue} alt="Vue">

                            </Image>
                        </span>

                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Front-End Developement
                            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3 selection:text-white">Internship</span>
                        </h3>

                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            June 2022 - August 2022
                        </time>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            • Designed and developed a web application using Vue as the lead Front-End developer, resulting in an enhanced user experience and improved functionality. <br/>
                            • Collaborated with the content team to implement a dynamic display of articles and blog cards, showcasing web3 content and information on blockchain technology. <br/>
                            • Implemented a secure and user-friendly register, login, and forgot password system, ensuring a smooth user authentication experience. <br/>
                            • Designed wireframes and new UI elements to ensure a visually appealing and intuitive interface for users. <br/>
                            • Integrated animations to add fluidity and interactivity to the web application, enhancing user engagement and overall usability. <br/>
                            • Implemented a responsive database search feature in the UI, enabling users to efficiently retrieve and filter information from the database. <br/>
                        </p>

                        <div className="flex flex-wrap">
                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    Vue
                                </a>
                            </span>

                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    Javascript
                                </a>
                            </span>

                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    HTML
                                </a>
                            </span>

                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    CSS
                                </a>
                            </span>

                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    Firebase
                                </a>
                            </span>
                        </div>
                    </li>

                    {/* Capstone */}
                    <li className="mb-10 ml-6 selection:text-blue-400">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-2 ring-blue-400">
                            <Image className="h-5 w-5" src={unity} alt="Unity">

                            </Image>
                        </span>

                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Dark Night Hero
                            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3 selection:text-white">Capstone Award</span>
                        </h3>

                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            January 2022 - May 2022
                        </time>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            • Conducted extensive research on assets for weapons, terrain, characters, enemies, and UI elements, selecting and integrating them into a Unity 3D multiplayer project. <br/>
                            • Developed the player screen UI, including the implementation of health bar, mana bar, and cross hair, ensuring a seamless and intuitive user experience. <br/>
                            • Designed and implemented an equipment system, enabling players to equip weapons and items, enhancing gameplay and customization options. <br/>
                            • Created a hot bar and inventory system, allowing players to manage and access their items and abilities efficiently during gameplay. <br/>
                            • Implemented animations for both player characters and enemies, utilizing box colliders to accurately calculate and apply damage. <br/>
                            • Designed and constructed each level, providing engaging and challenging environments for players to explore. <br/>
                            • Developed a shop and currency system, enabling players to purchase items, enhancing the game&rsquo;s progression and economy. <br/>
                            • Collaborated with the team to ensure seamless integration of all components, optimizing performance and ensuring a cohesive gaming experience.
                        </p>

                        <div className="flex flex-wrap">
                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    Unity
                                </a>
                            </span>

                            <span className='px-1 py-1'>
                                <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                    C#
                                </a>
                            </span>
                        </div>

                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Experience;
