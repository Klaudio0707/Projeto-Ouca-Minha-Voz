import React from 'react';
import Logo from "../Logo";
import PessoasI from "../img/pessoas.png";
import { NavLink } from "react-router-dom";

const Apresentacao = () => {
  return (
    <main className='principal-Intro'>
      <Logo />
      <img src={PessoasI} className='foto-Intro' alt='Foto de três pessoas' />
      <p className='paragrafo-Intro'>
        Já pensou em como seria ter o poder de mudar o mundo, começando pela sua empresa?
      </p>
      <NavLink to="/Introducao2">Próximo</NavLink>
    </main>
  );
};

export default Apresentacao;

