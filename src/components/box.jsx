import { Link } from "react-router-dom";
import Stars from "./starsIcons";

const Box = ({ data }) => {

    const { id, director, title, release_year, imagePath, media_voto_recensioni } = data;

    return <>
        <div className="movies">
            <Link to={`/movies/${id}`}>
                <img className="img" src={imagePath} alt={title} />
                <div className="box">
                    <h5 className="title">{title}</h5>
                    <article>{director}</article>
                    <article>({release_year})</article>
                    <article className="stars-review">
                        <Stars vote={media_voto_recensioni} />
                    </article>
                </div>
            </Link>
        </div >
    </>
};

export default Box;