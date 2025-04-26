import Link from 'next/link';

import { JetBrains_Mono } from 'next/font/google';

import ThemeSwitch from "./ThemeSwitch";

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin']});

// get the current date
const date = new Date();

export default function Home() {
  return (
    <div className={`${jetBrains_Mono.className} m-5`}>
      
      <div className="flex justify-between">
        <ul>
          <li><Link href="/professional-experience" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">PROFESSIONAL EXPERIENCE \</Link></li>
          <li><a href="" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">EDUCATION \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">SKILLS \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">PROJECTS \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">CONTACT \</a></li>
        </ul>
        <div>
          <p className="date">{date.getFullYear()}:{date.getMonth()+1}:{date.getDate()}</p>
          <ThemeSwitch></ThemeSwitch>
        </div>
        
      </div>
      
      <div className="flex justify-center pt-20">
        <h3>a website created by</h3>
        <h1>Jessica Tan</h1>
      </div>

      <footer className="flex justify-between p-5">
        <p>All content was created using nextjs, html, css, and tailwind css.</p>
        <p className="copyright">&copy; Jessica Tan</p>
      </footer>
      
    </div>
  );
}
