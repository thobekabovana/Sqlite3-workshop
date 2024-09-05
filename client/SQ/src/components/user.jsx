import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
}, []); // Run only once on component mount

const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const fetchUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(response.data);
    } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
    }
};


  const addUser = async () => {
    try {
        await axios.post('http://localhost:5000/users', { name, age });
        setName('');
        setAge('');
        fetchUsers();
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      margin: "4%",
      width: "40%",
      borderRadius: "5px",
      boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
      backgroundImage: "url('https://thumbs.dreamstime.com/b/collection-various-blank-white-book-white-background-clipping-path-30442934.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addUser}>Add</button>
    </div>
  );
};

export default User;