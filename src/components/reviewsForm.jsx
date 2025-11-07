import axios from "axios";
import { useState } from "react";

// movie_id è l'id del FILM al quale lasciamo la recensione, non l'id della recensione stessa!
const ReviewsForm = ({ slug, refreshMovie }) => {

    const valoriIniziali = {
        name: '',
        vote: 1,
        text: ''
    };

    const [formData, setFormData] = useState(valoriIniziali);

    const setCampoValue = (e) => {

        const { name, value } = e.target;

        let currentValue = value;

        // Se il campo è vote, converto il valore in un numero intero
        if (name === 'vote') {
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }));
    };

    const invioInformazioni = (e) => {

        e.preventDefault();

        axios.post(`http://127.0.0.1:3001/movies/slug/${slug}/reviews`, formData)
            .then(response => {
                refreshMovie();
                setFormData(valoriIniziali);
            })
            .catch(err => console.log(err));
    }

    return <>
        <div className="card">
            {/* titolo form */}
            <div className="card-header">Lascia una recensione:</div>
            <div className="card-body">
                {/* form */}
                <form onSubmit={invioInformazioni}>
                    <div className="mb-3">
                        <label htmlFor="review-name" className="form-label">Nome utente</label>
                        <input type="text" className="form-control" id="review-name" placeholder="Nome utente" value={formData.name} onChange={setCampoValue} name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-vote" className="form-label">Voto</label>
                        <input type="number" min={1} max={5} className="form-control" id="review-vote" placeholder="Voto" value={formData.vote} onChange={setCampoValue} name="vote" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label">Inserisci la tua recensione</label>
                        <textarea className="form-control" id="review-text" rows="3" value={formData.text} onChange={setCampoValue} name="text" ></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Aggiungi recensione</button>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default ReviewsForm;