import { useState, useEffect } from 'react';

function About() {
  const [backendData, setBackendData]: any = useState({});

  useEffect(() => {
    fetch('/about')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <h1>{backendData.name}</h1>
      <p>
        author: {backendData.author}
        <br />
        version: {backendData.version} <br />
        {backendData.description}
      </p>
    </div>
  );
}

export default About;
