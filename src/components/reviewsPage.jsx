import Stars from "./starsIcons";

const Recensioni = ({ data }) => {
    const { name, vote, text } = data;

    return (
        <div className="card mb-3 bg-light text-dark rounded shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{name}</h5>
                    <div className="ms-5"><Stars vote={vote} /></div>
                </div>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Recensioni;