import React, { useState, useEffect } from 'react';
import "./book.css"
import { useParams,useNavigate } from 'react-router-dom';
const Book = ({ }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const { moviename} = useParams();
  useEffect(() => {
    // Load user details from local storage
    const storedUserName = localStorage.getItem('userName') || '';
    const storedUserEmail = localStorage.getItem('userEmail') || '';

    setUserName(storedUserName);
    setUserEmail(storedUserEmail);
  }, []);

  const handleBookTicket = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    alert('Booking successful! You will receive a confirmation shortly.');
  };

  return (<div className='head'>
    <div className='ca'>
      <h2>Moviename:    {moviename}</h2>
      <form >
      <div className='form1'>
        <label>
          Name:
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </label>
        </div>
        <div className='form1'>
        <label>
          Email:
          <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        </div>
        <div className="butt">
        <button type="button" onClick={handleBookTicket}>
          Confirm Booking
        </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Book;
