

const Total = (props) => {

    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <strong>
        Total of {total} excersices
        </strong>
    )
}

export default Total