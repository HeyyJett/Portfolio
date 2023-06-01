import vue from '../assets/vue.png';
import python from '../assets/python.png';
import unity from '../assets/Unity.png';

import Image from "next/image";

const Experience = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-20 py-20" id="experience">
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
                            • Developed a predictive model to study the co-variation of DNA, RNA, and protein measurements in single cells during the development of bone marrow stem cells into mature blood cells. <br/>

                            • Trained the model on a subset of a 300,000-cell time course dataset of CD34+ hematopoietic stem and progenitor cells (HSPC) from four human donors at five time points. <br/>
                            • Utilized data provided by Cellarity, a cell-centric drug creation company, for a competition focused on mapping genetic information across cellular states. <br/>
                            • Successfully addressed the challenge of predicting a paired modality measured in the same cell using test data from a later time point than any in the training data. <br/>
                            • Contributed to accelerating innovation in the understanding of complex regulatory processes by enabling the prediction of one modality from another. <br/>
                        </p>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                Python
                            </a>
                        </span>
                    </li>

                    {/* Internship */}
                    <li className="mb-10 ml-6 selection:text-blue-400">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-2 ring-blue-400">
                            <Image className="h-4 w-5" src={vue} alt="Vue">

                            </Image>
                        </span>

                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Lead Front-End Developement
                            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3 selection:text-white">Internship</span>
                        </h3>

                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            June 2022 - August 2022
                        </time>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            • Designed and developed a web application using the Vue framework as a Lead Front-End Intern, resulting in an enhanced user experience and improved functionality. <br/>
                            • Designed wireframes and crafted new UI elements to ensure a visually appealing and intuitive interface for users. <br/>
                            • Integrated animations to add fluidity and interactivity to the web application, enhancing user engagement and overall usability. <br/>
                            • Implemented a responsive database search feature in the UI, enabling users to efficiently retrieve and filter information from the database. <br/>
                            • Collaborated with the development team to ensure seamless integration of front-end components with back-end functionalities, ensuring a cohesive and efficient web application.

                        </p>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                Vue
                            </a>
                        </span>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                Javascript
                            </a>
                        </span>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                HTML
                            </a>
                        </span>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                CSS
                            </a>
                        </span>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                Firebase
                            </a>
                        </span>

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
                            • Conducted extensive research on assets for weapons, terrain, characters, enemies, and UI elements, selecting and integrating them into a Unity 3D roguelike project. <br/>
                            • Developed the player screen UI, including the implementation of health bar, mana bar, and crosshair, ensuring a seamless and intuitive user experience. <br/>
                            • Designed and implemented an equipment system, enabling players to equip weapons and items, enhancing gameplay and customization options. <br/>
                            • Created a hot bar and inventory system, allowing players to manage and access their items and abilities efficiently during gameplay. <br/>
                            • Implemented animations for both player characters and enemies, utilizing box colliders to accurately calculate and apply damage dealt. <br/>
                            • Designed and constructed diverse maps and levels, providing engaging and challenging environments for players to explore. <br/>
                            • Developed a shop and currency system, enabling players to purchase items, enhancing the game's progression and economy. <br/>
                            • Collaborated with the team to ensure seamless integration of all components, optimizing performance and ensuring a cohesive gaming experience.
                        </p>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                Unity
                            </a>
                        </span>

                        <span className='px-1'>
                            <a className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                C#
                            </a>
                        </span>

                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Experience;
