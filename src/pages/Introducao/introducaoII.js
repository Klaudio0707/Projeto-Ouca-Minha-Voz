import React from 'react';
import Logo from '../../components/Logo';
import Empresa from '../../components/img/pessoas.png';
import Menu from '../../components/Menu';
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
                <ol className='introducaoList'>
                    <li>Reconhecimento público com o Selo Pró-Equidade.</li>
                    <li>Melhoria da imagem institucional como promotora de inclusão e diversidade.</li>
                    <li>Atração de talentos e retenção de colaboradores pela criação de um ambiente de trabalho mais inclusivo.</li>
                    <li>Apoio técnico para implementar práticas de equidade de gênero e raça.</li>
                    <li>Fortalecimento da cultura organizacional com políticas mais justas e inclusivas.</li>
                    <li>Vantagem competitiva no mercado por promover responsabilidade social.</li>

                </ol>
                <div className='navButtons'>
                <NavLink to="/" className='navButton'>Anterior</NavLink>
                    <NavLink to="/IntroducaoII" className='navButton'>Próximo</NavLink>
           </div>
            </main>

        </div>
    )
}

export default IntroducaoII
