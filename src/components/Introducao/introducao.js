import React from 'react';
import Logo from '../Logo';
import Empresa from '../img/pessoas-empresas.jpg';
import Menu from '../Menu';
import { NavLink } from 'react-router-dom';
const Introducao = () => {
  return (
    <div className='container-Introducao'>

    <nav>

<Menu/>
    </nav>
    <main className='principal-Intro'>
      <Logo />
      <img src={Empresa} className='foto-Intro' alt='Cumprimento entre colaboradores' />
      <p className='paragrafo-Intro'>
        E se eu te dissesse que todo ano o governo federal lança um programa para que empresas
        privadas ou públicas sejam reconhecidas por promover um ambiente de trabalho melhor e mais
        inclusivo? Ficou interessado? Conheça mais sobre esse programa que já está em sua 7ª edição.
      </p>
      <button> <NavLink to="/">Anterior</NavLink> </button> 
      <button> <NavLink to="/IntroducaoII">Próximo</NavLink> </button>
    </main>

    </div>

  );
}

export default Introducao;

