// src/pages/Register.js
import React, { useState } from 'react';
import API from '../api';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/register', form);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;
