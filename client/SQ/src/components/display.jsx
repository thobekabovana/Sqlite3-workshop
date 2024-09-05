import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Display = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState('');
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      const usersData = response.data;
      setUsers(usersData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUser = async (id) => {
    try {
        await axios.put(`http://localhost:5000/users/${id}`, { name: editName, age: editAge });
        setEditUserId(null);
        setEditName('');
        setEditAge('');
        fetchUsers();
    } catch (error) {
        console.error('Error updating user:', error);
    }
};



  const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        fetchUsers();
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

const handleEditClick = (user) => {
    console.log('Edit button clicked!');
    setEditUserId(user.id);
    setEditName(user.name);
    setEditAge(user.age);
};


  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        users.map((user, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
            margin: "4%",
            width: "40%",
            borderRadius: "5px",
            boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
            backgroundImage: "url('https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>

            <h2 style={{ color: "black" }}>User {user.id}</h2>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Name: {user.name}</p>
            <p style={{ fontWeight: "bold" }}>Age: {user.age}</p>
            <hr style={{ width: "100%", marginBottom: "15px" }} />

            <>
           
            {editUserId === user.id ? (
                            <>
                                {/* <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editAge}
                                    onChange={(e) => setEditAge(e.target.value)}
                                />
                                <button onClick={() => updateUser(user.id)} style={{marginBottom: "10px"}}>Update</button>
                                <button onClick={() => setEditUserId(null)}>Cancel</button> */}
                            </>
                        ) : (
                            <>
      <Link to={`update/${user.id}`}>
        <button key={`${user.id}-${editUserId}`} onClick={() => handleEditClick(user)} style={{ marginBottom: "10px" }}>Edit</button>
      </Link>
      <button key={`${user.id}-${editUserId}`} onClick={() => deleteUser(user.id)}>Delete</button>
    </>
                        )}
          
                            </>

        </div>

          

        ))
      )}
    </div>
  );
};

export default Display;