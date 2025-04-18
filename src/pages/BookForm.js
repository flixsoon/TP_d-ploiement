import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';

const BookForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
  });

  useEffect(() => {
    if (id) {
      fetchBook();
    }
  }, [id]);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
    } catch (error) {
      setAlert({
        type: 'danger',
        message: 'Erreur lors de la récupération du livre'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id) {
        await axios.put(`http://localhost:5000/api/books/${id}`, book);
        setAlert({
          type: 'success',
          message: 'Livre mis à jour avec succès'
        });
      } else {
        await axios.post('http://localhost:5000/api/books', book);
        setAlert({
          type: 'success',
          message: 'Livre ajouté avec succès'
        });
      }
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      setAlert({
        type: 'danger',
        message: 'Erreur lors de la sauvegarde du livre'
      });
    } finally {
      setLoading(false);
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };

  if (loading && !book.title) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mt-4">
      <h2>{id ? 'Modifier le Livre' : 'Ajouter un Livre'}</h2>
      
      {alert && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Auteur</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
            required
            disabled={loading}
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publishedYear" className="form-label">Année de Publication</label>
          <input
            type="number"
            className="form-control"
            id="publishedYear"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
            required
            disabled={loading}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
            disabled={loading}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              id ? 'Mettre à jour' : 'Ajouter'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm; 