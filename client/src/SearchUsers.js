import React, { useState } from 'react';

export default function SearchUsers() {
  const [skill, setSkill] = useState('');
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {
    const res = await fetch(`http://localhost:5000/api/users/search?skill=${skill}`);
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div>
      <h2>Search Users by Skill</h2>
      <input
        value={skill}
        onChange={e => setSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <button onClick={searchUsers}>Search</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
} 