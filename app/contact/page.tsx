import DateComponent from '@/components/date';
import ThemeSwitch from '../ThemeSwitch';

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
            
            <h1 className="text-right text-8xl">jessicatan.business@gmail.com</h1>
            <a href="https://www.linkedin.com/in/t-jessica/"><h1 className="text-8xl">https://www.linkedin.com/in/t-jessica/</h1></a>
            <a href="https://github.com/tjessica13"><h1 className="text-right text-8xl">https://github.com/tjessica13</h1></a>

            <p className="copyright flex justify-end">&copy; Jessica Tan</p>
        </div>
    )
}