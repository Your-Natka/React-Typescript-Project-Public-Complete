import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditUserForm from './EditUserForm';
import User from '../models/User';


interface SingleUserProps {
  user: User;
  updateUser: (newUser: User) => void;
  deleteUser: (id: number) => void;
}

const SingleUser: FC<SingleUserProps> = 
({ user, updateUser, deleteUser }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    deleteUser(user.id);
  }
  

  return (
    <div className="user">

      <img src={`/images/${user.img}`} alt={user.title}/>
      <h2>{user.title}</h2>
      <span>{user.price} ₽</span>

      <div className="user-controls">
        <AiFillEdit onClick={handleToggleEdit}/>
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit
        ? <EditUserForm 
            data={user}
            updateUser={updateUser}
            handleToggleEdit={handleToggleEdit}
          />
        : null}
     
    </div>
  )
}

export default SingleUser;