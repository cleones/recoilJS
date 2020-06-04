import React, { useState } from 'react';
import UserList from './componets/UserList';
import { useRecoilState } from 'recoil';
import { userNamesList } from '../../atoms/users';

const InputUser = () => {
  const [name, setName] = useState('');
  const [userNames, setUserNames] = useRecoilState(userNamesList);

  return (
    <div style={{ display: 'flex' }}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        style={{
          marginLeft: '5px',
          background: '#7159c1',
          color: '#fff',
          padding: '12px',
          borderRadius: '4px',
        }}
        onClick={() => {
          setUserNames([...userNames, name]);
          setName('');
        }}
      >
        Add User
      </button>
    </div>
  );
};

const Users = () => {
  return (
    <>
      <InputUser />
      <React.Suspense fallback={<h1>Loading.....</h1>}>
        <UserList />
      </React.Suspense>
    </>
  );
};

export default Users;
