import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from './Logo';

let linkCorrente = {
    color: "#027399",
  };

const Navegacao = () => {
  return (
    <div className='container-Home'>

    <Logo/>
    
    <ul>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
     Login/Registre-se
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Serviços
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Informações
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Contato
      </NavLink>
    </li>
    
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Sobre
      </NavLink>
    </li>
  </ul>
    </div>
  )
}

export default Navegacao