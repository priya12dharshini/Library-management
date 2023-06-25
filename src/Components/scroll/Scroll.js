import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal';
import './style1.css';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Scroll = (book) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: 'Novel', // Query parameter (modify as needed)
            maxResults: 40, // Number of results to retrieve (adjust as needed)
          },
        });
        console.log(response.data.items);
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      {books.map((book) => (
        <div key={book.id} className='book'>
          <div className='card' onClick={() => { setShow(true); setItem(book) }}>
            <img
              className='image'
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt='#'
            />
            <div className='bottom'>
              <h3 className='title'>{book.volumeInfo.title}</h3>
              <p className='amount'>&#8377;{(book.saleInfo.listPrice && book.saleInfo.listPrice.amount)}</p>
            </div>
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button className='fbtn' onClick={() => removeFromFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button className='fbtn' onClick={() => addToFavorites(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      <hr />
    </div>

  );
};

export default Scroll;





