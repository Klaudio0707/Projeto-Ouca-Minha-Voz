import React from 'react';
import Logo from "../Logo";
import Selo from "../img/pessoa-com-selo.jpeg";
import { NavLink } from "react-router-dom";

const ApresentacaoII = () => {
  return (
    <main className='principal-Intro'>
      <Logo />
      <img src={Selo} className='foto-Intro' alt='Uma mulher com um selo' />
      <p className='paragrafo-Intro'>
        O programa Vozes por Equidade vai auxiliar sua empresa a ser reconhecida pelo governo com o selo Pró-Equidade.
      </p>
      <NavLink to="/">Anterior</NavLink>
      <NavLink to="/Home">Próximo</NavLink>
    </main>
  )
}

export default ApresentacaoII
