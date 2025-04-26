
const Job = ({id, title, company, dates, points}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{company}</h3>
            <p>{dates}</p>
            <ul>
                {points.map((point) => (
                    <li><p>{point}</p></li>
                ))}</ul>
            
        </div>
    )
}

export default Job;