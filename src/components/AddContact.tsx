import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    let result = await fetch('/contacts', {
      method: 'post',
      body: JSON.stringify({
        name: name,
        surname: surname,
        nickname: nickname,
        email: email,
        dayB: day,
        monthB: month,
        yearB: year,
        phoneNumber: phone,
        adress: adress,
      }),
      headers: { 'content-type': 'application/json' },
    });
    result = await result.json();
    if (result) {
      navigate(`/contacts`);
    }
  };

  return (
    <div>
      <h1>Add a Contact</h1>
      <input
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        value={surname}
        type="text"
        placeholder="Surname"
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      ></input>
      <input
        value={nickname}
        type="text"
        placeholder="Nickname"
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      ></input>
      <input
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        value={day}
        type="number"
        placeholder="day"
        onChange={(e) => {
          setDay(e.target.value);
        }}
      ></input>
      <input
        value={month}
        type="number"
        placeholder="month"
        onChange={(e) => {
          setMonth(e.target.value);
        }}
      ></input>
      <input
        value={year}
        type="number"
        placeholder="year"
        onChange={(e) => {
          setYear(e.target.value);
        }}
      ></input>

      <input
        value={phone}
        type="number"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <input
        value={adress}
        type="text"
        placeholder="Adress"
        onChange={(e) => {
          setAdress(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
}

export default AddContact;
