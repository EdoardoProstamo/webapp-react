import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieReviews from './pages/movie-reviews';
import Movies from './pages/movies';
import Error from './pages/errors';
import DefaultLayout from './layout/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path='/' Component={Movies} />
          </Route>
          <Route path='/movies/:id' Component={MovieReviews} />
          <Route path='*' Component={Error} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
