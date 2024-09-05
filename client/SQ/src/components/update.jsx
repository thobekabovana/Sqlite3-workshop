import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Update = () => {
  const { id } = useParams();
  const [user, setUser] = useState(getUserById(id)); // assume this function retrieves the user data
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/users/${id}`, { name, age });
      // handle success response
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User {id}</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default Update;