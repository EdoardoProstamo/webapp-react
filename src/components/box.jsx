import { Link } from "react-router-dom";
import Stars from "./starsIcons";

const Box = ({ data }) => {
    const { director, title, release_year, imagePath, media_voto_recensioni, slug } = data;

    return (
        <div className="card bg-dark text-light h-100 shadow-lg border-warning">
            <Link to={`/movies/${slug}`} className="text-decoration-none text-light">
                <img
                    src={imagePath}
                    className="card-img-top"
                    alt={title}
                    style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mb-1"><strong>Director:</strong> {director}</p>
                    <p className="card-text mb-2"><strong>Year:</strong> {release_year}</p>
                    <div className="stars-review">
                        <Stars vote={media_voto_recensioni} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Box;