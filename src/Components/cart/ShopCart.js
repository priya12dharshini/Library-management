import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../modal/Modal'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const ShopCart = () => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const [books, setBooks] = useState([]);
  const { cart, addToCart, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  const cartChecker = (id) => {
    const boolean = cart.some((book) => book.id === id);
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
    <div className='book-list'>
      {books.map((book) => (
        <div key={book.id} className='book'>
          <div>
            <h4>{book.volumeInfo.title || 'Unknown Title'}</h4>
          </div>
          <div className='card' onClick={() => { setShow(true); setItem(book) }}>
            <img
              className='image'
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt='#'
              onClick={() => navigate(`/modal`)}
            />
            <div className='bottom'>
              <h3 className='title'>{book.volumeInfo.title}</h3>
              <p className='amount'>&#8377;{(book.saleInfo.listPrice && book.saleInfo.listPrice.amount)}</p>
            </div>
          </div>
          <div>
            {cartChecker(book.id) ? (
              <button className='fbtn' onClick={() => removeFromCart(book.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className='fbtn' onClick={() => addToCart(book)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </div>
  );
};

export default ShopCart;
