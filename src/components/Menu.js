import React, { useState } from 'react';
import './Menu.css'; // Importa o arquivo CSS para estilos
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar se o menu está aberto ou não

  // Função que alterna o estado do menu
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      <button className="menu-btn" onClick={alternarMenu}>
  {menuAberto ? <IoClose /> : <IoMenu />} 
</button>


      {menuAberto && ( // Renderiza o menu se o estado for 'true'
        <ul className="menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Login">Login/Registre-se</NavLink></li>
          <li><NavLink to="/Serviços">Serviços</NavLink></li>
          <li><NavLink to="/Informações">Informações</NavLink></li>
          <li><NavLink to="/Contato">Contato</NavLink></li>
          <li><NavLink to="/Sobre">Sobre</NavLink></li>
        </ul>
      )}
    </div>
  );
};

export default Menu;