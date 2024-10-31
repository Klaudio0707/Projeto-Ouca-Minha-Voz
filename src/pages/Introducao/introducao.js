import React from 'react';
import Logo from '../../components/Logo';
import Empresa from '../../../src/components/img/pessoas-empresas.jpg';
import Menu from '../../components/Menu';
import { NavLink } from 'react-router-dom';

const IntroducaoI = () => {
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
      <div className='navButtons'>
                <NavLink to="/" className='navButton'>Anterior</NavLink>
                <NavLink to="/IntroducaoII" className='navButton'>Próximo</NavLink>
           </div>
    </main>

    </div>

  );
}

export default IntroducaoI;

