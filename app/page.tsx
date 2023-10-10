import React, { useState } from 'react';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';
import {useClient} from 'react-server';

const Home = () => {
  const [users, setUsers] = useState([]);

  const handleSaveUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserForm onSave={handleSaveUser} />
      <UserTable users={users} />
    </div>
  );
};

export default Home;