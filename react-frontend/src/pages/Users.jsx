import { useEffect, useState } from 'react';
import API from '../api/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  
  useEffect(() => {
    API.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  
  const addUser = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/add', { name, email });
      setUsers([...users, res.data]);
      setName('');
      setEmail('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      
      <form onSubmit={addUser} className="flex flex-col gap-2 mb-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="px-2 py-1 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="px-2 py-1 border rounded"
        />
        <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded">
          Add User
        </button>
      </form>

      
      <ul className="w-full max-w-sm">
        {users.map(u => (
          <li key={u._id} className="py-1 flex justify-between border-b">
            <span>{u.name}</span>
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
