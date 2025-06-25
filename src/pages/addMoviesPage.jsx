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
        setFormData((prevFormData) => ({
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
            .then(response => {
                setFormData(valoriIniziali);
            })
            .catch(err => console.log(err))
    }

    return <>

        <article>
            <h1>Aggiungi un nuovo film</h1>
            <section id="add-movie">
                <form onSubmit={invioInformazioni}>
                    <div className="mb-3">
                        <label htmlFor="new-movie-title" className="form-label">Titolo</label>
                        <input type="text" className="form-control" id="new-movie-title" name="title" placeholder="Inserisci il titolo del film" value={formData.title} onChange={setCampoValue} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="new-movie-director" className="form-label">Regista</label>
                        <input type="text" className="form-control" id="new-movie-director" name="director" placeholder="Inserisci il nome del regista" value={formData.director} onChange={setCampoValue} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="new-movie-release_year" className="form-label">release_year</label>
                        <input type="text" className="form-control" id="new-movie-relase_year" name="release_year" placeholder="Inserisci il release_year" value={formData.release_year} onChange={setCampoValue} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="new-movie-genre" className="form-label">genre</label>
                        <input type="text" className="form-control" id="new-movie-genre" name="genre" placeholder="Inserisci il genre" value={formData.genre} onChange={setCampoValue} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="new-movie-abstract" className="form-label">Trama</label>
                        <textarea className="form-control" id="new-movie-abstract" rows="3" name="abstract" placeholder="Inserisci la trama del film" value={formData.abstract} onChange={setCampoValue}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="new-movie-image" className="form-label">Copertina film</label>
                        <input className="form-control" type="file" id="new-movie-image" name="image" onChange={setCampoValue} />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Aggiungi film</button>
                    </div>
                </form>
            </section>
        </article>

    </>
};

export default AddMoviesPage;