import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";

const ResumeButton = () => {
    return(
        <div className="content-center justify-center items-center">
                <a href='/static/resume.pdf' target="_blank" className="fixed flex flex-col items-center justify-center bottom-0 right-0 w-20 h-16 mr-6 mb-6 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-white hover:text-blue-400 selection:text-blue-400 z-50">
                    <FontAwesomeIcon icon={faFileLines} size="2xl" className="fa-fade"/>
                    <p>Resume</p>
                </a>
        </div>
    )
}

export default ResumeButton;
