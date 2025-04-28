import Link from 'next/link';

import ThemeSwitch from './ThemeSwitch';

import DateComponent from '@/components/date';

export default function Home() {
  return (
    <div className="m-5">
      <div className="flex justify-between">
        <ul>
          <li><Link href="./professional-experience" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">PROFESSIONAL EXPERIENCE \</Link></li>
          <li><a href="./projects" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">PROJECTS \</a></li>
          <li><a href="./" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">ABOUT ME \</a></li>
          <li><a href="./" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">CONTACT \</a></li>
        </ul>
        <div>
          <DateComponent></DateComponent>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
      
      <div className="sm:flex justify-center pt-20">
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
