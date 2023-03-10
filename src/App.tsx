import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { useEffect, useState } from 'react';
import ShowContact from './components/ShowContact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import SendMail from './components/SendMail';
import UpdateContact from './components/UpdateContact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="contacts/:id" element={<ShowContact />} />
          <Route path="contacts/:id/update" element={<UpdateContact />} />
          <Route path="contacts/:id/mail" element={<SendMail />} />
          <Route path="add" element={<AddContact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
