import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ApresentacaoI from './components/Apresentação/ApresentacaoI';
import ApresentacaoII from './components/Apresentação/ApresentacaoII'; // Supondo que você tenha este componente
import IntroducaoI from './components/Introducao/introducao';
import IntroducaoII from './components/Introducao/IntroducaoII';


import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApresentacaoI />} />
        <Route path="/Introducao2" element={<ApresentacaoII />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/introducao" element={<IntroducaoI />}/>
        <Route path="/IntroducaoII" element={<IntroducaoII />}/>
      </Routes>
    </Router>
  );
}

export default App;
