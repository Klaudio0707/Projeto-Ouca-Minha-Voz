import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ApresentacaoI from './components/Apresentação/ApresentacaoI';
import ApresentacaoII from './components/Apresentação/ApresentacaoII'; // Supondo que você tenha este componente
import IntroduçaoI from './components/Introducao/introducao';

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApresentacaoI />} />
        <Route path="/Introducao2" element={<ApresentacaoII />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/introducao" element={<IntroduçaoI />}/>
      </Routes>
    </Router>
  );
}

export default App;
