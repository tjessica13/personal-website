import { FaRegFolder, FaRegWindowClose } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ProjectComponent = ({title, dates, github, points}) => {
    return (
        <div className="flex justify-center w-full m-10">
            <div className="mr-10 place-items-center"><FaRegFolder size={40}/><div><h3>{title}</h3></div></div>
            <div className="w-2xl border border-solid border-(--fontcolor)">
                <div className="flex justify-between items-center border-b border-solid border-(--fontcolor) 
                w-full p-2">
                    <h3>{title}</h3>
                    <a href="./"><FaRegWindowClose size={40}></FaRegWindowClose></a>
                </div>
                <div className="p-5">
                    {dates}
                    {points.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
                    <div className="flex justify-end">
                        <a href={github}>
                            <FiGithub></FiGithub>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;