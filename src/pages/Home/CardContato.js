import React from 'react'
import Fachada from "../../../src/components/img/selo-fachada.png"
const CardContato = () => {
    return (

        <div class="card">
            <img src={Fachada} alt="Imagem do card" class="card-img" />
            <div class="card-body">
                <h3 class="card-title">Título do Card</h3>
                <p class="card-text">Este é o conteúdo do card. Você pode incluir texto, links, botões, etc.</p>
                <a href="#" class="card-btn">Saiba mais</a>
            </div>
        </div>

    )
}

export default CardContato;
