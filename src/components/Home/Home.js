import React from 'react';
import Menu from '../Menu';
import CardServicos from "./CardServicos";
import CardContato from './CardContato';
import CardSocial from './CardSocial';
import CardAnalise from './CardAnalise';

const Home = () => {
  return (
    <div>

      <nav>
        <Menu />
      </nav>
      <main className='Home'>
        <CardServicos />
        <CardContato />
        <CardSocial />
        <CardAnalise />
      </main>
    </div>
  );
}

export default Home;