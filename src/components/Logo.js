import React from "react";
import logo from './img/logo-remove.png';
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <h1 className="logo">
<img src={logo} alt="Logo" />
    </h1>
  </Link>
);

export default Logo;