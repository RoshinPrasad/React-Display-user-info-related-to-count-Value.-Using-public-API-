import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/styles.css';

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <h2 className="username">{user.username}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website} </p>
    </div>
  );
}


export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); 
        setData(response.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>1</h1>
        {isLoading ? (
          <p>WAITING Dear...</p>
        ) : isError ? (
          <p>Error occurred Poyi API sheriyakkade.</p>
        ) : (
          <>
            {data && <ProfileCard user={data} />}
            <div className="button-container">
              <button>-</button>
              <button>+</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
     }