import Image from "next/image";

import { JetBrains_Mono } from 'next/font/google';

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin']});

export default function Home() {
  return (
    <div className={`${jetBrains_Mono.className} m-5`}>
      <div className="flex justify-between">
        <ul>
          <li><a href="" className="hover:ml-12 hover:text-black text-(--fontcolor)">PROFESSIONAL EXPERIENCE \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-black text-(--fontcolor)">EDUCATION \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-black text-(--fontcolor)">SKILLS \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-black text-(--fontcolor)">PROJECTS \</a></li>
          <li><a href="" className="hover:ml-12 hover:text-black text-(--fontcolor)">CONTACT \</a></li>
        </ul>
        <p className="date">2025:04:26</p>
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
