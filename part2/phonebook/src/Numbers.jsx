
const Numbers = ({persons, onDelete}) => {

  return (
    <>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <div key={p.id}>
        <p>
          {p.name} {p.number}
        </p>
        <button onClick={() => onDelete(p.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Numbers;
