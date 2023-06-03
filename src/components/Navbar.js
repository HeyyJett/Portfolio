import Link from "next/link";
import Image from "next/image";
import HC from "src/assets/HC.png"

const Navbar = () => {

    return(
        <div className="bg-slate-800 sticky top-0 z-50">
            <nav className="flex flex-col md:flex-row md:px-4 items-center">

                <a className="m-1 w-9 h-9 md:py-0 md:w-14 md:h-14 select-none" href="#">
                    <Image src={HC} alt="Herrera Code"/>
                </a>

                <ol className="text-white md:px-2 md:ml-auto flex text-sm sm:text-xl md:text-2xl">
                    <li>
                        <a href="/#about" className="flex p-2 md:p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>ABOUT ME</span>
                        </a>
                    </li>

                    <li>
                        <a href="/#experience" className="flex p-2 md:p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#projects" className="flex p-2 md:p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>PROJECTS</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#contact" className="flex p-2 md:p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>CONTACT ME</span>
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar;
