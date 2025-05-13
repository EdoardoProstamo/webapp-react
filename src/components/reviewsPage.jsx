const Recensioni = ({ data }) => {

    const { name, vote, text } = data;

    return <>
        <div>
            <h4>{name}</h4>
            <article>{vote}</article>
            <p>{text}</p>
            <hr />
        </div>
    </>

};

export default Recensioni;