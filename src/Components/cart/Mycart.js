import React, { Component } from 'react';

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCart: [],
      total: 0,
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=Novel' // Modify the query parameters as per your requirements
      );
      const data = await response.json();
      const myCart = data.items.map((item) => {
        const cart = {
          id: item.id,
          title: item.volumeInfo.title,
          amount: item.saleInfo.listPrice?.amount || 0, // Use the book price from the API response
          quantity: 1,
          image: item.volumeInfo.imageLinks?.thumbnail || '', // Set the image URL
        };
        return cart;
      });
      const total = this.totalAmount(myCart);
      this.setState({ myCart, total });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  decrement = (e, id) => {
    const { myCart } = this.state;
    const selectedCartIndex = myCart.findIndex((cart) => cart.id === id);
    const selectedCart = myCart[selectedCartIndex];
    const myQuantity = selectedCart.quantity - 1;
    if (myQuantity !== 0) {
      selectedCart.quantity = myQuantity;
      myCart[selectedCartIndex] = selectedCart;
      const total = this.totalAmount(myCart);
      this.setState({ myCart, total });
    }
  };

  increment = (e, id) => {
    const { myCart } = this.state;
    const selectedCartIndex = myCart.findIndex((cart) => cart.id === id);
    const selectedCart = myCart[selectedCartIndex];
    const myQuantity = selectedCart.quantity + 1;
    selectedCart.quantity = myQuantity;
    myCart[selectedCartIndex] = selectedCart;
    const total = this.totalAmount(myCart);
    this.setState({ myCart, total });
  };

  totalAmount = (cart) => {
    const total = cart.reduce((a, b) => {
      return a + b.amount * b.quantity;
    }, 0);
    return total;
  };

  render() {
    const { myCart, total } = this.state;
    return (
      <div className="container">
        <h3>My Cart</h3>
        <div className="row mt-5">
          <div className="col-md-6" style={{ height: '558px', overflowY: 'scroll' }}>
            {myCart.length !== 0 ? (
              myCart.map((cart, index) => (
                <div className="card mb-3" style={{ maxWidth: 540 }} key={index}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={cart.image} className="img-fluid rounded-start" alt={cart.title} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{cart.title}</h5>
                        <p>₹ {cart.amount}</p>
                        <label className="form-label">Quantity</label>
                        <input className="form-control mb-3" type="text" value={cart.quantity} readOnly />
                        <button
                          className="cbtn"
                          style={{ marginRight: '5px' }}
                          onClick={(e) => this.decrement(e, cart.id)}
                        >
                          -
                        </button>
                        <button className="cbtn" onClick={(e) => this.increment(e, cart.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading....</div>
            )}
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Total ₹ {total} </h5>
                    <button className="btn btn-info">Confirm Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


