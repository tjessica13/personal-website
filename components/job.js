
const Job = ({id, title, company, dates, points}) => {
    return (
        <div className="flex p-15">
            <div className="flex-1 border-solid border-r border-(--fontcolor)">
                <h1>{title}</h1>
                <p>Co-op</p>
                <h3>{company}</h3>
                <p>{dates}</p>
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