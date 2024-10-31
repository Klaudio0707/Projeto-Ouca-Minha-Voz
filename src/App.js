import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ApresentacaoI from '../src/pages/Apresentação/ApresentacaoI';
import ApresentacaoII from '../src/pages/Apresentação/ApresentacaoII'; // Supondo que você tenha este componente
import IntroducaoI from '../src/pages/Introducao/introducao';
import IntroducaoII from '../src/pages/Introducao/introducaoII';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import Resources from './pages/resources';

import Home from '../src/pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApresentacaoI />} />
        <Route path="/ApresentacaoII" element={<ApresentacaoII />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/introducao" element={<IntroducaoI />}/>
        <Route path="/IntroducaoII" element={<IntroducaoII />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
