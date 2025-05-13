import { Link } from "react-router-dom";

const Box = ({ data }) => {

    const { id, director, title, abstract, imagePath } = data;

    return <>
        <div className="movies">
            <img className="img" src={imagePath} alt={title} />
            <div className="box">
                <h5>{title}</h5>
                <article>{director}</article>
                <p>{abstract}</p>
                <Link to={`/movies/${id}`}>Recensioni</Link>
            </div>
        </div>
    </>
};

export default Box;