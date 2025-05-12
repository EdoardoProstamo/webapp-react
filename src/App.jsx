import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      Movies
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Homepage</div>} />
          <Route path='/movies/:id' element={<div>Movie review</div>} />
          <Route path='*' element={<div>Errore! Elemento non trovato.</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
