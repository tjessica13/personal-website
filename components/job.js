
const Job = ({id, title, company, dates, points}) => {
    return (
        <div className="p-5 sm:flex sm:p-15">
            <div className="sm:flex-1 sm:border-solid sm:border-r sm:border-(--fontcolor) p-5">
                <h1 className="text-2xl sm:text-4xl">{title}</h1>
                <h3>Co-op</h3>
                <h3>{company}</h3>
                <h3>{dates}</h3>
            </div>
            <ul className="list-disc flex-1 color-(--fontcolor) m-8">
                {points.map((point, index) => (
                    <li className="ml-6" key={index}><p>{point}</p></li>
                ))}
            </ul>
        </div>
    )
}

export default Job;