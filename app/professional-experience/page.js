import Job from '@/components/job';
import { jobs } from '@/data/jobs';

export default function ProfessionalExperience() {
    return (
        <div>Professional Experience
            {jobs.map((job) => (
                    <Job title={job.title} company={job.company} dates={job.dates} points={job.points}></Job>
            ))}
        </div>
    )
}