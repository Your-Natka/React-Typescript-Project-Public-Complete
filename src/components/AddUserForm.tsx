import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import User from '../models/User';
import './styles.css';


interface AddUserFormProps {
  addUser: (newUser: User) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
}

const AddUserForm: FC<AddUserFormProps> = ({ addUser }) => {
  const [newUser, setNewUser] = 
    useState<{title: string, price: string, img: string}>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setNewUser({
      ...newUser,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = newUser;

    if (title && price && img) {
      addUser({
        title,
        img,
        price: Number(price),
        id: Date.now()
      });
      setNewUser(initState);
    }
  }

  console.log('new user>>>>', newUser)

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newUser.title}
      />
      <input 
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newUser.price}
      />
      <input 
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newUser.img}
      />
      <button type="submit">
        + Добавить в меню
      </button>
    </form>
  )
}


export default AddUserForm;