import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reserve from './routes/Reserve';
import Layout from './components/layout/Layout';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reserve" element={<Reserve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
