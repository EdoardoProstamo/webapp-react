import { useState } from "react";

const ReviewsForm = () => {

    const [formData, setFormData] = useState({
        nome: '',
        voto: 1,
        testo: ''
    });

    const setCampoValue = (e) => {

        const { nome, value } = e.target;

        let currentValue = value;

        // Se il campo è voto, converto il valore in un numero intero
        if (nome === 'voto') {
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [nome]: currentValue,
        }));
    };

    return <>
        <div className="card">
            {/* titolo form */}
            <div className="card-header">Lascia una recensione:</div>
            <div className="card-body">
                {/* form */}
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="review-name" className="form-label">Nome utente</label>
                        <input type="text" className="form-control" id="review-name" placeholder="Nome utente" value={formData.nome} onChange={setCampoValue} name="nome" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-vote" className="form-label">Voto</label>
                        <input type="number" min={1} max={5} className="form-control" id="review-vote" placeholder="Voto" value={formData.voto} onChange={setCampoValue} name="voto" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label">Inserisci la tua recensione</label>
                        <textarea className="form-control" id="review-text" rows="3" value={formData.testo} onChange={setCampoValue} name="testo" ></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submitt" class="btn btn-primary">Aggiungi recensione</button>
                    </div>
                </form>
            </div>
        </div>
    </>
};

export default ReviewsForm;