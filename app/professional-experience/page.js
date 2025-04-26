import Job from '@/components/job';
import { jobs } from '@/data/jobs';

export default function ProfessionalExperience() {
    return (
        <div>
            <a href="/" className="hover:ml-12 hover:text-(--hovercolor) text-(--fontcolor)">HOME \ PROFESSIONAL EXPERIENCE \</a>
            {jobs.map((job) => (
                <div key={job.id}>
                    <Job title={job.title} company={job.company} dates={job.dates} points={job.points}></Job>
                </div>
            ))}
        </div>
    )
}