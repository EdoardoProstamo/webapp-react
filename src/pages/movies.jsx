import { useEffect, useState } from "react";
import Box from "../components/box";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    // campo di ricerca
    const [ricerca, setRicerca] = useState('');

    const { setIsLoading } = useContext(GlobalContext);

    const url = 'http://127.0.0.1:3001/movies';

    function moviesList() {

        setIsLoading(true);

        axios.get(url, {
            params: {
                ricerca
            }
        })
            .then(response => { setMovies(response.data) })
            .catch(err => console.log(err))
    };

    function movieSearch(event) {

        event.preventDefault();

        moviesList();
    };

    useEffect(moviesList, []);


    return (
        <>
            <header className="d-flex justify-content-between align-items-center">
                <h1 className="mb-3">Film disponibili</h1>
                <Link className="btn btn-primary" to="/movies/add" alt="Aggiungi un nuovo film">Aggiungi un nuovo film</Link>
            </header>

            <div className="d-flex justifu-content-between">
                <form className="row g-1" onSubmit={movieSearch}>
                    <div className="col-auto">
                        <label className="visually-hidden">Cerca film</label>
                        <input className="form-control" type="text" name="cerca" value={ricerca} onChange={(event) => setRicerca(event.target.value)} placeholder="Cerca film" />
                    </div>
                    <div className="col-auto">
                        <button type="submitt" className="btn btn-primary mb-3">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
            </div>

            <section>
                <div className="container">
                    {movies.length ? movies.map(movie => (
                        <div key={movie.id} className="container-box">
                            <Box data={movie} />
                        </div>
                    )) : <div>Al momento non abbiamo film disponibili</div>}
                </div>
            </section>
        </>
    )
};

export default Movies;