import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
    console.log("sto montando recensioni");

    const { id } = useParams();
    const [reviews, setReviews] = useState({});


    function getReviews() {
        axios(`http://127.0.0.1:3001/movies/${id}`)
            .then(response => setReviews(response.data))
            .catch(err => console.log(err))
    };
    useEffect(getReviews, [id]);


    return <>
        <div>
            <img src={reviews.imagePath} alt={reviews.title} />
            <h2>{reviews.title}</h2>
            <article>Year: ({reviews.release_year})</article>
            <article>Genre: {reviews.genre}</article>
            <article>Director: {reviews.director}</article>
            <p>{reviews.abstract}</p>


            {reviews.reviews?.length ? <div>Recensioni</div> : <div>Non esistono recensioni per questo film</div>}
        </div>
    </>

};

export default MovieReviews;