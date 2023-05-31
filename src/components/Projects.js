import Dnh from '../assets/darknighthero.jpg';
import ariseDeck from '../assets/arisedeck.png'

import Image from "next/image";

const Projects = () => {

    return (
        <div className="flex bg-slate-800 items-center justify-center px-20" id="projects">
            <div className="px-24 py-20 max-w-7xl">

                <h1 className="text-5xl text-blue-400 font-semibold py-5 selection:text-blue-900 py-20">
                    Projects
                </h1>

                {/* Dark Night Hero */}
                <div className="py-2">
                    <div  className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <Image className="object-cover h-80 w-full rounded-t-lg md:rounded-none md:rounded-l-lg select-none" src={Dnh} alt="Dark Night Hero"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white selection:text-blue-400">
                                Dark Night Hero
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify selection:text-blue-400">
                                Dark Night Hero is a captivating 3D roguelike RPG that combines magic spells, intense combat, and a fantasy dungeon environment.
                                Engage in action-packed battles, navigate challenging levels, and face off against formidable boss enemies.
                                With a dynamic heads-up display, inventory system, and character progression, the game offers immersive gameplay.
                                Play alone or team up with friends in multiplayer mode for an unforgettable online adventure.
                            </p>

                            <div className="flex flex-row">
                                <span className='px-1' >
                                    <a href="https://sites.psu.edu/darknighthero/" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                        Learn More
                                    </a>
                                </span>

                                <span className='px-1'>
                                    <a href="https://github.com/RezyK2525/CapstoneGameProject" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                        Repository
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="py-2">
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                        <Image className="px-[12rem] object-cover h-80 w-full rounded-t-lg md:rounded-none md:rounded-l-lg select-none" src={ariseDeck} alt="Dark Night Hero"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white selection:text-blue-400">
                                AriseDeck
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify selection:text-blue-400">
                                AriseDeck is an Android application that provides a platform for self-improvement, progress tracking, and connecting with a community of fitness enthusiasts.
                                It offers personalized daily, weekly, and monthly challenges for users to conquer their fitness goals.
                                The app features a leaderboard system that tracks and ranks users based on their completed challenges, fostering a sense of competition and motivation.
                                With a seamless login system, users can easily manage their login information within the user-friendly interface.
                            </p>

                            <div className="flex flex-row">
                                <span className='px-1'>
                                    <a href="https://github.com/HeyyJett/AriseDeck" target="_blank" className="inline-flex items-center px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 selection:text-white">
                                        Repository
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
