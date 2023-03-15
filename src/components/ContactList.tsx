import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactList() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/contacts')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const contacts = backendData.map((contact: any) => (
    <ul key={contact._id}>
      <li>
        <Link to={`/contacts/${contact._id}`}>
          {contact.name} {contact.surname}
        </Link>
      </li>
    </ul>
  ));

  return (
    <div>
      <Link to="/add">add Contact</Link>

      {contacts}
    </div>
  );
}

export default ContactList;
