import React from 'react';
import './style1.css'
import { useAppContext } from '../context/appContext';
import axios from 'axios';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  const fetchBookDetails = async (bookId) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const bookData = response.data;

      // Extract necessary information from bookData
      const book = {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        image_url: bookData.volumeInfo.imageLinks.thumbnail,
      };

      addToFavorites(book);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='favorites'>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className='book'>
            <div>
              <h4>{book.volumeInfo.title}</h4>
            </div>
            <div>
              <img className='image' src={book.volumeInfo.imageLinks?.thumbnail} alt='#' />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button className='fbtn' onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button className='fbtn' onClick={() => fetchBookDetails(book.id)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any Favorites yet!</h1>
      )}
    </div>
  );
};

export default Favorites;



