import axios from "axios";
import { useState } from "react";
import personService from '../services/persons'

const Form = ({ setPersons, persons, setMsg }) => {
//   const baseUrl = "http://localhost:3001/persons";
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    // Used some to loop through the array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
      )
    ) {
      window.alert(`${newPerson.name} is already in the phonebook!`);
    } else {
        personService.addPerson(newPerson)
    //   axios.post(baseUrl, newPerson).then((response) => {
    //     console.log("täällä axios post response", response);
    //   });
      setPersons(
        persons.concat({ name: newPerson.name, number: newPerson.number })
      );
      setMsg(`Added ${newPerson.name} to the list`);
    }
    setNewPerson({ name: "", number: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input
          value={newPerson.name}
          onChange={(e) =>
            setNewPerson({
              ...newPerson,
              name: e.target.value,
            })
          }
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newPerson.number}
          onChange={(e) =>
            setNewPerson({
              ...newPerson,
              number: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
