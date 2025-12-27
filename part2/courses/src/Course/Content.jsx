import Part from "./Part"

const Content = (props) => {

    const parts = props.course.parts;
    const showParts = parts && parts.length > 0;

    return showParts ? (
        <>
            {parts.map(p => (
                <Part key={p.name} part={p}/>
            ))}
        </>
    ) : (
        <p>The course has no parts</p>
    );
}

export default Content;