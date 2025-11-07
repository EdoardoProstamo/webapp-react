import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recensioni from "../components/reviewsPage";
import Stars from "../components/starsIcons";
import ReviewsForm from "../components/reviewsForm";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const MovieReviews = () => {
    console.log("sto montando recensioni");

    const { slug } = useParams();
    const [reviews, setReviews] = useState({});

    const { setIsLoading } = useContext(GlobalContext);

    function getReviews() {

        setIsLoading(true);

        axios(`http://127.0.0.1:3001/movies/${slug}`)
            .then(response => setReviews(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    };
    useEffect(getReviews, [slug]);


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
        <section>
            {/* movie_id ci aiuta con la chiamata api, facilitando il riconoscimento della pagina in cui siamo tramite la prop id  */}
            {reviews.slug && <ReviewsForm slug={reviews.slug} refreshMovie={getReviews} />}
            {/* refreshMovie è la funzione che ci permette di rifare la chiamata al server e aggiorna la variabile di stato che contiene le informazioni del film e delle recensioni: genera un rerander della pagina, il che ci permette di aggiornare le recensioni e la media voto nello stesso istante in cui si invia una nuova recensione */}
        </section>
    </>

};

export default MovieReviews;