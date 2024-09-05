import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GetUsers = () => {
  const [userId, setUserId] = useState(1); // Initial user ID
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserById();
  }, [userId]);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className="card">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <label>
            Enter User ID:
            <input type="number" value={userId} onChange={handleUserIdChange} />
          </label>
          <>
            <p>ID: {userData.id}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
          </>
          
        </div>
        
      )}
    </div>
  );
};
export default GetUsers;