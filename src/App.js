import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Introducao from './components/Apresentação/Apresentacao1';
import Introducao2 from './components/Apresentação/Apresentacao2'; // Supondo que você tenha este componente


import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introducao />} />
        <Route path="/Introducao2" element={<Introducao2 />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
