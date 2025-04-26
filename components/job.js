
const Job = ({id, title, company, dates, points}) => {
    return (
        <div className="flex p-15">
            <div className="flex-1">
                <h1>{title}</h1>
                <h3>{company}</h3>
                <p>{dates}</p>
            </div>
            <ul className="list-disc flex-1">
                {points.map((point, index) => (
                    <li className="ml-6" key={index}><p>{point}</p></li>
                ))}
            </ul>
        </div>
    )
}

export default Job;