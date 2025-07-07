import DateComponent from '@/components/date';
import ThemeSwitch from '../ThemeSwitch';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <div className="header flex justify-between m-5">
                <a href="./" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">HOME \ PROFESSIONAL EXPERIENCE \</a>
                <div>
                    <DateComponent></DateComponent>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>
            
            <div className="mt-60">
                <h1 className="text-center text-2xl">jessicatan.business@gmail.com</h1>
                <div className="flex justify-center gap-5 m-5">
                    <a href="https://www.linkedin.com/in/t-jessica"><FaLinkedin className="icon"/></a>
                    <a href="https://github.com/tjessica13"><FaGithub className="icon"/></a>
                </div>
            </div>
        </div>
    )
}