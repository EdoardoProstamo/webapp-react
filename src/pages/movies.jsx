import { useEffect, useState } from "react";
import Box from "../components/box";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    // campo di ricerca
    const [ricerca, setRicerca] = useState('');

    const url = 'http://127.0.0.1:3001/movies';

    function moviesList() {

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
            <div className="search">
                <h1>Film disponibili</h1>

                <form onSubmit={movieSearch}>
                    <div className="form">
                        <label className="hidden">Cerca film</label>
                        <input type="text" name="cerca" value={ricerca} onChange={(event) => setRicerca(event.target.value)} placeholder="Cerca film" />
                        <button type="submitt" className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
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