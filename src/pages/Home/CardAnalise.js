import React from 'react'
import { TbDeviceAnalytics } from "react-icons/tb";

const CardAnalise = () => {
  return (

         <div class="card">
            <TbDeviceAnalytics alt="Imagem do card" className="card-icon" />
            <div class="card-body">
                <h3 class="card-title">Título do Card</h3>
                <p class="card-text">Este é o conteúdo do card. Você pode incluir texto, links, botões, etc.</p>
                <a href="#" class="card-btn">Saiba mais</a>
            </div>
        </div>
  
  )
}

export default CardAnalise
