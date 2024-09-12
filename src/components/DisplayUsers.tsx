import React, { FC } from 'react';
import SinglePizza from './SingleUser';
import User from '../models/User';


interface DisplayUsersProps {
  usersList: User[];
  updateUser: (newUser: User) => void;
  deleteUser: (id: number) => void;
}

const DisplayUsers: FC<DisplayUsersProps> = 
({ usersList, updateUser, deleteUser }) => {
  return (
    <div className="container">
      {usersList.map((user) => {
        return <SinglePizza 
                  key={user.id} 
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                  user={user} />
      })}
    </div>
  )
}

export default DisplayUsers;