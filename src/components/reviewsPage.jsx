import Stars from "./starsIcons";

const Recensioni = ({ data }) => {

    const { name, vote, text } = data;

    return <>
        <div>
            <h4>{name}</h4>
            <article>
                <Stars vote={vote} />
            </article>
            <p>{text}</p>
            <hr />
        </div>
    </>

};

export default Recensioni;