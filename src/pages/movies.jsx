import { useEffect, useState } from "react";
import Box from "../components/box";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    // campo di ricerca
    const [search, setSearch] = useState('');

    const url = 'http://127.0.0.1:3001/movies';

    function moviesList() {

        axios.get(url)
            .then(response => { setMovies(response.data) })
            .catch(err => console.log(err))
    };

    function movieSearch() {

    };

    useEffect(moviesList, []);


    return (
        <>
            <form action="" onSubmit={movieSearch}>
                <div>
                    <input type="text" name="cerca" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button>Cerca</button>
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