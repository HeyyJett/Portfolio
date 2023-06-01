import Link from "next/link";
import Image from "next/image";
import HC from "src/assets/HC.png"

const Navbar = () => {

    return(
        <div className="bg-slate-800 sticky top-0 z-50">
            <nav className="flex px-4 items-center relative ">

                <a className="m-1 md:py-0 w-14 h-14 select-none" href="#">
                    <Image src={HC} alt="Herrera Code"/>
                </a>

                <ul className="text-xs text-white md:px-2 ml-auto flex md:text-2xl">
                    <li>
                        <a href="/#about" className="flex p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>ABOUT ME</span>
                        </a>
                    </li>

                    <li>
                        <a href="/#experience" className="flex p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#projects" className="flex p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>PROJECTS</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#contact" className="flex p-4 items-center hover:text-blue-400 selection:text-blue-200">
                            <span>CONTACT ME</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
