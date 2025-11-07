const Loader = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-warning">
            <div className="spinner-border text-warning mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4>Caricamento in corso...</h4>
        </div>
    );
};

export default Loader;