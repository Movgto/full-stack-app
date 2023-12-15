import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reserve from './routes/Reserve';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
