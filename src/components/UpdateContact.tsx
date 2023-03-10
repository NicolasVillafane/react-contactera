import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateContact() {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [dayB, setDay] = useState('');
  const [monthB, setMonth] = useState('');
  const [yearB, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    let today: Date | string = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    let age = yyyy - Number(yearB);
    if (mm <= monthB || dd < dayB) {
      age -= 1;
    }

    let result = await fetch(`/contacts/${id}`, {
      method: 'put',
      body: JSON.stringify({
        name,
        surname,
        nickname,
        dayB,
        monthB,
        yearB,
        email,
        bornDate: `${dayB}/${monthB}/${yearB}`,
        age,
        phone,
        adress,
      }),
      headers: { 'content-type': 'application/json' },
    });
    result = await result.json();
    if (result) {
      navigate(`/contacts/${id}`);
    }
  };

  useEffect(() => {
    getContactDetails();
  }, []);

  const getContactDetails = async () => {
    let result: any = await fetch(`/contacts/${id}`);
    result = await result.json();
    setName(result.name);
    setSurname(result.surname);
    setNickname(result.nickname);
    setDay(result.dayB);
    setMonth(result.monthB);
    setYear(result.yearB);
    setEmail(result.email);
    setPhone(result.phoneNumber);
    setAdress(result.adress);
  };

  return (
    <div>
      <h1>Update a Contact</h1>
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
        value={dayB}
        type="number"
        placeholder="day"
        onChange={(e) => {
          setDay(e.target.value);
        }}
      ></input>
      <input
        value={monthB}
        type="number"
        placeholder="month"
        onChange={(e) => {
          setMonth(e.target.value);
        }}
      ></input>
      <input
        value={yearB}
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
      <button onClick={handleClick}>Update Product</button>
    </div>
  );
}

export default UpdateContact;
