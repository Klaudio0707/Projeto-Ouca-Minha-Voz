import React from 'react';
import logo from '../img/logo-remove.png';
import PessoasI from "../img/pessoas.png";

const IntroducaoI = () => {
  return (
    <main className='principal-Intro'>
      <img  className="logo" src={logo} alt="logo ouca minha voz"/>

      <img src={PessoasI} className='PessoasI' alt='Foto de trÊs pessoas' />
      <p className='paragrafo-Intro'>Já pensou em como seria ter o poder de mudar o mundo,
         começando pela sua empresa?</p>
    </main>
  )
}

export default IntroducaoI
