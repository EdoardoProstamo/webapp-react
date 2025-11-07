import { useState } from "react";
import axios from "axios";

const AddMoviesPage = () => {

    const valoriIniziali = {
        title: '',
        director: '',
        image: '',
        abstract: '',
        genre: '',
        release_year: '',
    };

    const [formData, setFormData] = useState(valoriIniziali);

    function setCampoValue(e) {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: value
        }));
    }

    const invioInformazioni = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3001/movies`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => setFormData(valoriIniziali))
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex flex-column align-items-center my-5">
            <h1 className="text-warning mb-4">Aggiungi un nuovo film</h1>

            <div className="card bg-light text-dark rounded shadow-sm p-4 w-75">
                <form className="d-flex flex-column gap-3" onSubmit={invioInformazioni}>
                    <input type="text" className="form-control" name="title" placeholder="Titolo" value={formData.title} onChange={setCampoValue} />
                    <input type="text" className="form-control" name="director" placeholder="Regista" value={formData.director} onChange={setCampoValue} />
                    <input type="text" className="form-control" name="release_year" placeholder="Anno di uscita" value={formData.release_year} onChange={setCampoValue} />
                    <input type="text" className="form-control" name="genre" placeholder="Genere" value={formData.genre} onChange={setCampoValue} />
                    <textarea className="form-control" name="abstract" rows="3" placeholder="Trama" value={formData.abstract} onChange={setCampoValue}></textarea>
                    <input type="file" className="form-control" name="image" onChange={setCampoValue} />
                    <button type="submit" className="btn btn-warning text-dark w-100">Aggiungi film</button>
                </form>
            </div>
        </div>
    );
};

export default AddMoviesPage;