import ThemeSwitch from '../ThemeSwitch';
import DateComponent from '@/components/date';
import { Sedgwick_Ave_Display } from 'next/font/google';

// adding a new font
const sedgwick_Ave_Display = Sedgwick_Ave_Display({
    subsets: ['latin'],
    weight: "400"
});

export default function AboutMe() {
    return (
        <div className="m-5">
            <div className="header flex justify-between m-5">
                <a href="./" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">HOME \ ABOUT ME \</a>
                <div>
                    <DateComponent></DateComponent>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>

            <div className="text-center mt-25 mb-25"><h2 className={`${sedgwick_Ave_Display.className} name text-6xl`}>Jessica Tan</h2>
                <h3>[Software Developer, Web Developer]</h3>
                <p>
                    I have a combined 1.5 years of co-op work experience with 2 terms at Ross Video,<br />
                    and 3 terms at the University of Ottawa Faculty of Medicine.
                </p>
                <p>
                    I am interested in full-stack web development and I am continuously <br />
                    seeking new opportunities to learn more technologies. 
                </p>

                <h3>[EDUCATION]</h3>

                <p>
                    Honours Bachelor of Science in Computer Science (2024)<br />
                    University of Ottawa<br />
                    CGPA: 9.2 / 10<br />
                    Summa Cum Laude
                </p>
            </div>
            <footer><p className="copyright flex justify-end">&copy; Jessica Tan</p></footer>
      </div>
    )
}