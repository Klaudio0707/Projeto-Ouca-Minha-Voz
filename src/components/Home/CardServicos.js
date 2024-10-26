import React from "react";
import Selo from "../img/selo - 7ª edição.png"
import { NavLink } from "react-router-dom";
const CardServicos = () => {
  return (
    <div class="card">
      <img src={Selo} alt="Imagem do card" class="card-img" />
      <div class="card-body">
        <h3 class="card-title">Projeto Pró Equidade</h3>
        <p class="card-text">Projeto do governo federal com o intuito de promover a equidade de gênero nas empresas</p>
        <NavLink to="/introducao1">
          <button className="card-btn">Saiba Mais!</button>
          </NavLink>  
            </div>
    </div>


  );
};

export default CardServicos;
