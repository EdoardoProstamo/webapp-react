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
            <form onSubmit={movieSearch}>
                <div>
                    <input type="text" name="cerca" value={ricerca} onChange={(event) => setRicerca(event.target.value)} />
                    <button type="submitt">Cerca</button>
                </div>
            </form>

            <h1>Film disponibili</h1>

            <section>
                <div className="container">
                    {movies.length ? movies.map(movie => (
                        <div key={movie.id}>
                            <Box data={movie} />
                        </div>
                    )) : <div>Al momento non abbiamo film disponibili</div>}
                </div>
            </section>
        </>
    )
};

export default Movies;