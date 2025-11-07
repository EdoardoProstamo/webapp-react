import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Recensioni from "../components/reviewsPage";
import Stars from "../components/starsIcons";
import ReviewsForm from "../components/reviewsForm";
import GlobalContext from "../context/GlobalContext";

const MovieReviews = () => {
    const { slug } = useParams();
    const [reviews, setReviews] = useState({});
    const { setIsLoading } = useContext(GlobalContext);

    function getReviews() {
        setIsLoading(true);
        axios(`http://127.0.0.1:3001/movies/${slug}`)
            .then(response => setReviews(response.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => { getReviews(); }, [slug]);

    return (
        <div className="container my-4">
            {/* Film info */}
            <div className="row mb-4">
                <div className="col-md-4 text-center mb-3">
                    <img
                        src={reviews.imagePath}
                        alt={reviews.title}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-8">
                    <h2>{reviews.title}</h2>
                    <p><strong>Anno:</strong> {reviews.release_year}</p>
                    <p><strong>Genere:</strong> {reviews.genre}</p>
                    <p><strong>Regista:</strong> {reviews.director}</p>
                    <p>{reviews.abstract}</p>
                    <div className="my-2">
                        <strong>Media recensioni:</strong> <Stars vote={reviews.media_voto_recensioni} />
                    </div>
                </div>
            </div>

            {/* Recensioni */}
            <div className="mb-4">
                <h3>Recensioni utenti</h3>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {reviews.reviews?.length ? (
                        reviews.reviews.map(review => <Recensioni key={review.id} data={review} />)
                    ) : (
                        <p className="text-warning">Nessuna recensione disponibile.</p>
                    )}
                </div>
            </div>
            {/* Form recensione */}
            {reviews.slug && <ReviewsForm slug={reviews.slug} refreshMovie={getReviews} />}
        </div>
    );
};

export default MovieReviews;