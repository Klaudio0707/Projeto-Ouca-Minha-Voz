import React from 'react'
import Empresa from "../../../src/components/img/fachada-empresa.png"
const CardSocial = () => {
    return (

        <div class="card">
            <img src={Empresa} alt="Imagem do card" class="card-img" />
            <div class="card-body">
                <h3 class="card-title">Título do Card</h3>
                <p class="card-text">Este é o conteúdo do card. Você pode incluir texto, links, botões, etc.</p>
                <a href="#" class="card-btn">Saiba mais</a>
            </div>
        </div>
    )
};

export default CardSocial;
