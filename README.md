# DAY-2

## FRONTEND della Web App.

> MILESTONE 1

- Creare un nuovo progetto React con Vite
- Ripulire l’app da file e codice di esempio non necessari
- Installare il necessario: React Router, Axios e Bootstrap(non obbligatorio)

> MILESTONE 2

- Creare un layout di base per l'applicazione ed impostare le rotte per le diverse pagine.
- Creare 2 pagine:
    - La home, che mostrerà la lista dei film
    - La pagina di dettaglio di un singolo film

> MILESTONE 3

- Configurare l’app di backend (repo webapp-express) a ricevere chiamate dall'applicazione React, installando e impostando il middleware CORS
- Efffettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

> Bonus

- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
- Aggiungere, nella pagina dei film, un campo per cercare su tutti i campi utili del db (es. titolo, abstract)
- Curare l’aspetto estetico dell'applicazione

# DAY-3

> MILESTONE 1

- Colleghiamo la lista dei movies a una pagina di dettaglio movie.
- Effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

> MILESTONE 2

- Rappresentiamo le informazioni del movie

> MILESTONE 3

- Creiamo un componente ReviewCard per rappresentare le informazioni delle recensioni

> BONUS

- Rappresentiamo tutti i voti delle recensioni con un componente StarRating

> BONUS BONUS

- Sul backend, iniziamo a realizzare una rotta /movies/:id/reviews per aggiungere una nuova recensione.
- Può restituire un semplice testo "Rotta per aggiungere una recensione";


# DAY-4 (FRONTEND):

- Creiamo un componente che contenga il form per le recensioni
- Inseriamo questo componente nella pagina di dettaglio del film
- All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

> BONUS:

- Provate a creare un nuovo film con upload immagine (multer)!