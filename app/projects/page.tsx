import DateComponent from '@/components/date';
import ThemeSwitch from '../ThemeSwitch';
import ProjectComponent from '@/components/project';
import { projects } from '@/data/projects';

//TODO: move date and theme switch to a combined component

export default function Projects() {
    return (
        <div>
            <div className="header flex justify-between m-5">
                <a href="./" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">HOME \ PROJECTS \</a>
                <div>
                    <DateComponent></DateComponent>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>

            {projects.map((project) => (
                <div key={project.id}>
                    <ProjectComponent title={project.title} dates={project.dates} github={project.github} points={project.points}></ProjectComponent>
                </div>
            ))}
            
        </div>
        
        
    )
}