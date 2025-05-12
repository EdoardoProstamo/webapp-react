import { Link } from "react-router-dom";

const Box = ({ data }) => {

    const { id, director, title, abstract } = data;

    return <>
        <div className="movies">
            <img src="" alt="" />
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