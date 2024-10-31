// src/pages/Login.js
import React, { useState } from 'react';
import API from '../api';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/login', form);
      localStorage.setItem('token', data.token);
      alert('Login realizado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;

