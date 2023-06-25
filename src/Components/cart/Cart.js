import React from 'react';

import { useAppContext } from '../context/appContext';

const Favorites = () => {
  const { favorites, addToCart, removeFromCart } = useAppContext();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  const handleAddToCart = (book) => {
    addToCart(book); // Add the book to the cart
  };

  const handleRemoveFromCart = (book) => {
    removeFromCart(book.id); // Remove the book from the cart
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
                <button className='fbtn' onClick={() => handleRemoveFromCart(book)}>
                  Remove from Cart
                </button>
              ) : (
                <button className='fbtn' onClick={() => handleAddToCart(book)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any Cart Products yet!</h1>
      )}
    </div>
  );
};

export default Favorites;
