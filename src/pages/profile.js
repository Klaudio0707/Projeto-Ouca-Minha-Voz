// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import API from '../api';

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get('/profile');
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Perfil da Empresa</h2>
      <p>Nome: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Adicione mais campos conforme necessário */}
    </div>
  );
}

export default Profile;

