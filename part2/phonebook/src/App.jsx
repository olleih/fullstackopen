import axios from 'axios';

import { useEffect, useState } from "react";
import Numbers from "./Numbers";
import Form from "./Form";
import Notification from './Notification';

import personService from "../services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [msg, setMsg] = useState('Hi');
  

  useEffect(() => {
    personService.getPersons().then(data => {
      console.log('promise fulfilled');
      setPersons(data);
    });
  }, []);

    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete person?')) {
        console.log('deleting id', id);
        setMsg(`Deleted id ${id} information from server.`)
        personService.deletePerson(id).then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
      }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={msg}/>
      <Form setPersons={setPersons} persons={persons} setMsg={setMsg}/>
      <Numbers persons={persons} onDelete={handleDelete}/>
    </div>
  );
};

export default App;
