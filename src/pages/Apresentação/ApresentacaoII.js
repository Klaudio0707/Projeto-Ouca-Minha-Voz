import React from 'react';
import Logo from "../../components/Logo";
import Selo from "../../../src/components/img/pessoa-com-selo.jpeg";
import { NavLink } from "react-router-dom";

const ApresentacaoII = () => {
  return (
    <main className="principal-Intro">
      <section>
        <Logo />
        <img src={Selo} alt="Uma mulher negra recebendo o selo Pró-Equidade" />
        <p>
          O programa Vozes por Equidade vai auxiliar sua empresa a ser reconhecida pelo governo com o selo Pró-Equidade.
        </p>
      </section>
      <nav aria-label="Navegação">
        <NavLink to="/" className="nav-button">Voltar para a página anterior</NavLink>
        <NavLink to="/Home" className="nav-button">Ir para a página inicial</NavLink>
      </nav>
    </main>
  );
};

export default ApresentacaoII
