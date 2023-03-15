import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ShowContact() {
  let { id } = useParams();
  const [backendData, setBackendData]: any = useState({});

  useEffect(() => {
    fetch(`/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const handleClickDelete = async (id: any) => {
    let result = await fetch(`/contacts/${id}`, {
      method: 'delete',
    });
    result = await result.json();
  };

  return (
    <div>
      <h2>
        {backendData.name} {backendData.surname}
      </h2>
      <ul key={backendData._id}>
        <li>Nickname: {backendData.nickname}</li>
        <li>Age: {backendData.age}</li>
        <li>Birth Date: {backendData.bornDate}</li>
        <li>Email: {backendData.email}</li>
        <li>Phone Number: {backendData.phoneNumber}</li>
        <li>Adress: {backendData.adress}</li>
      </ul>
      <Link to={`/contacts/${id}/mail`}>Send Mail</Link>
      <Link to={'/contacts'} onClick={() => handleClickDelete(backendData._id)}>
        Delete
      </Link>
      <Link to={`/contacts/${id}/update`}>Update</Link>
    </div>
  );
}

export default ShowContact;
