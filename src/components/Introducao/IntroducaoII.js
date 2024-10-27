import React from 'react';
import Logo from '../Logo';
import Empresa from '../img/pessoas-empresas.jpg';
import Menu from '../Menu';
import { NavLink } from 'react-router-dom';

const IntroducaoII = () => {
    return (
        <div className='container-Introducao'>

            <nav>

                <Menu />
            </nav>
            <main className='principal-Intro'>
                <Logo />
                <img src={Empresa} className='foto-Intro' alt='Cumprimento entre colaboradores' />
                <ol>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>

                </ol>
                <button> <NavLink to="/">Anterior</NavLink> </button>
                <button> <NavLink to="/IntroducaoII">Próximo</NavLink> </button>
            </main>

        </div>
    )
}

export default IntroducaoII
