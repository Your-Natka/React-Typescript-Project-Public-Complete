import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import User from '../models/User';
import './styles.css';


interface EditUserFormProps {
  data: User;
  updateUser: (newUser: User) => void;
  handleToggleEdit: () => void;
}


const EditUserForm: FC<EditUserFormProps> = 
({ data, updateUser, handleToggleEdit }) => {
  const [editUser, setEditUser] = 
    useState<User>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setEditUser({
      ...editUser,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = editUser;

    if (title && price && img) {
      updateUser(editUser);
      handleToggleEdit();
    }
  }

  console.log('edit user>>>>', editUser)

  return (
    <form 
      className="edit-form"
      onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editUser.title}
      />
      <input 
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editUser.price}
      />
      <input 
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editUser.img}
      />
      <button type="submit">
        Подтвердить
      </button>
    </form>
  )
}


export default EditUserForm;