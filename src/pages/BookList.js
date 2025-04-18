import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      setAlert({
        type: 'danger',
        message: 'Erreur lors de la récupération des livres'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${id}`);
        setAlert({
          type: 'success',
          message: 'Livre supprimé avec succès'
        });
        fetchBooks();
      } catch (error) {
        setAlert({
          type: 'danger',
          message: 'Erreur lors de la suppression du livre'
        });
      }
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Liste des Livres</h2>
        <Link to="/books/new" className="btn btn-primary">
          Ajouter un Livre
        </Link>
      </div>

      {alert && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}

      {books.length === 0 ? (
        <div className="alert alert-info">
          Aucun livre trouvé. Ajoutez votre premier livre !
        </div>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Année de publication: {book.publishedYear}
                    </small>
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/books/${book._id}/edit`} className="btn btn-primary">
                      Modifier
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-danger"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList; 