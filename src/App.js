import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introducao from '../src/components/Apresentação/Introducao';
import Introducao2 from '../src/components/Apresentação/Introducao2'; // Supondo que você tenha este componente
import Home from '../src/components/Home';

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
