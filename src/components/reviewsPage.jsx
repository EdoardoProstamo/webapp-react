import Stars from "./starsIcons";

const Recensioni = ({ data }) => {

    const { name, vote, text } = data;

    return <>
        <div className="review-info">
            <div className="review-name">
                <h4>{name}</h4>
                <article>
                    <Stars vote={vote} />
                </article>
            </div>
            <p>{text}</p>
        </div>
    </>
};

export default Recensioni;