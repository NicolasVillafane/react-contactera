import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SendMail() {
  const { id } = useParams();
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    let result = await fetch(`/contacts/${id}/mail`, {
      method: 'post',
      body: JSON.stringify({
        subject: subject,
        text: text,
      }),
      headers: { 'content-type': 'application/json' },
    });
    result = await result.json();
    if (result) {
      navigate(`/contacts/${id}`);
    }
  };

  return (
    <div>
      <h2>Send Mail</h2>
      <label>Subject </label>
      <input
        value={subject}
        type="text"
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <br />
      <label>Text </label>
      <input
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleClick}>Send Mail</button>
    </div>
  );
}

export default SendMail;
