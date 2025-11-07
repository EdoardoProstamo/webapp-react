const Error = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light">
            <h1 className="display-1 text-warning">404</h1>
            <h2>Ops! Elemento non trovato.</h2>
            <p>La pagina che stai cercando non esiste o è stata rimossa.</p>
            <a href="/" className="btn btn-warning mt-3 text-dark">Torna alla Home</a>
        </div>
    );
};

export default Error;