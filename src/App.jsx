import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieReviews from './pages/movie-reviews';
import Movies from './pages/movies';
import Error from './pages/errors';
import DefaultLayout from './layout/DefaultLayout';
import addMoviesPage from './pages/addMoviesPage';
import GlobalContext from './context/GlobalContext';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout} >
              <Route path='/' Component={Movies} />
              <Route path='/movies/:id' Component={MovieReviews} />
              <Route path='/movies/add' Component={addMoviesPage} />
              <Route path='*' Component={Error} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
};

export default App;
