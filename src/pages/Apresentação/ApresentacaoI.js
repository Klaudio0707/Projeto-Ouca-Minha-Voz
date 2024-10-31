import React from 'react';
import Logo from "../../components/Logo";
import PessoasI from "../../../src/components/img/pessoas-empresas.jpg";
import { NavLink } from "react-router-dom";

const Apresentacao = () => {
  return (
    <main className='principal-Intro'>
      <Logo />
      <img src={PessoasI} className='foto-Intro' alt='Foto de três pessoas' />
      <p className='paragrafo-Intro'>
        Já pensou em como seria ter o poder de mudar o mundo, começando pela sua empresa?
      </p>
      <div className='navButtons'>
        <NavLink to="/ApresentacaoII" className='navBtnInicio'>Próximo</NavLink>
      </div>
    </main>
  );
};

export default Apresentacao;

