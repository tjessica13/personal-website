
// get the current date
const date = new Date();

const DateComponent = () => {
    return (
        <p className="date text-center">{date.getFullYear()}:{date.getMonth()+1}:{date.getDate()}</p>
    )
}

export default DateComponent;