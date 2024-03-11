import React, { useState } from 'react';
import Form from './form';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [info, setInfo] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div>
      <Form setName={setName} setSurname={setSurname} setInfo={setInfo} setAge={setAge} setGender={setGender} />
      <div>
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Info: {info}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
}

export default App;




