import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recensioni from "../components/reviewsPage";
import Stars from "../components/starsIcons";

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
        <div className="container-review">
            <div className="container-info">
                <img src={reviews.imagePath} alt={reviews.title} className="img-review" />
                <div>
                    <h2>{reviews.title}</h2>
                    <article>Year: ({reviews.release_year})</article>
                    <article>Genre: {reviews.genre}</article>
                    <article>Director: {reviews.director}</article>
                    <p>{reviews.abstract}</p>
                </div>
            </div>
            <div>
                <div className="reviews-average-rating">
                    <h2>Recensioni:</h2>
                    <Stars vote={reviews.media_voto_recensioni} />
                </div>
                {reviews.reviews?.map(review => <Recensioni key={review.id} data={review} />)}
            </div>
        </div>
    </>

};

export default MovieReviews;