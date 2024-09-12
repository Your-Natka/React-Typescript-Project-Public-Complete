import React, { FC, useState } from 'react';
import AddUserForm from './components/AddUserForm';
import DisplayUsers from './components/DisplayUsers';
import User from './models/User';
import './App.css';


const App: FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsersList([...usersList, newUser]);
  }

  const updateUser = (newUser: User) => {
    setUsersList(usersList.map((user) => 
      (user.id === newUser.id ? newUser : user)));
  }

  const deleteUser = (id: number) => {
    const newUsersList = usersList.filter(user => user.id !== id);
    setUsersList(newUsersList);
  }

  console.log('usersList >>>>> ', usersList);

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Наша таблиця</span>
        <AddUserForm 
          addUser={addUser}
        />

        <DisplayUsers 
          usersList={usersList}
          deleteUser={deleteUser}
          updateUser={updateUser}
        />
      </div>
    </div>
  );
}

export default App;
