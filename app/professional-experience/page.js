import Job from '@/components/job';
import DateComponent from '@/components/date';
import { jobs } from '@/data/jobs';
import ThemeSwitch from '../ThemeSwitch';

export default function ProfessionalExperience() {
    return (
        <div>
            <div className="header flex justify-between m-5">
                <a href="/" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">HOME \ PROFESSIONAL EXPERIENCE \</a>
                <div>
                    <DateComponent></DateComponent>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>
            
            {jobs.map((job) => (
                <div key={job.id}>
                    <Job title={job.title} company={job.company} dates={job.dates} points={job.points}></Job>
                </div>
            ))}
            <p className="copyright flex justify-end m-5">&copy; Jessica Tan</p>
        </div>
    )
}