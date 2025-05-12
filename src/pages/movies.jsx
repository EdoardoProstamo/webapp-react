import { useEffect, useState } from "react";
import Box from "../components/box";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const url = 'http://127.0.0.1:3001/movies';

    function moviesList() {

        axios.get(url)
            .then(response => { setMovies(response.data) })
            .catch(err => console.log(err))

    };

    useEffect(moviesList, []);





    return (
        <>
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