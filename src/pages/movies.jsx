import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "../components/Box";
import GlobalContext from "../context/GlobalContext";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [ricerca, setRicerca] = useState('');
    const { setIsLoading } = useContext(GlobalContext);

    const url = 'http://127.0.0.1:3001/movies';

    const moviesList = () => {
        setIsLoading(true);
        axios.get(url, { params: { ricerca } })
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    };

    const movieSearch = (e) => {
        e.preventDefault();
        moviesList();
    };

    useEffect(() => { moviesList(); }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link className="btn btn-warning text-dark" to="/movies/add">Aggiungi nuovo film</Link>
            </div>

            <form className="row g-2 mb-4" onSubmit={movieSearch}>
                <div className="col-auto flex-grow-1">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca film"
                        value={ricerca}
                        onChange={e => setRicerca(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-warning text-dark">Cerca</button>
                </div>
            </form>

            <div className="row">
                {movies.length ? movies.map(movie => (
                    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <Box data={movie} />
                    </div>
                )) : (
                    <div className="text-warning">Al momento non abbiamo film disponibili.</div>
                )}
            </div>
        </>
    );
};

export default Movies;