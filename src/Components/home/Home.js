import React, { useState } from 'react'
import Card from '../card/Card'
import './home.css'
import Scroll from '../scroll/Scroll';
import axios from "axios";
import Aboutus from '../Aboutus';

const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  console.log(bookData);


  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAF04kX7w2WfBdIOzpiRDvOumsI5XbTlm4' + '&maxResults=40')
        .then(res => setData(res.data.items))
        .catch(err => console.log(err))
    }
  }



  return (
    <>
      <div className='header'>
        <div className='row1'>
        </div>
        <div className='row2'>
          <h2 className='hd'><b>Spot Your Book</b></h2>
          <div className='search'>
            <input type="text" placeholder="Enter Your Book"
              value={search} onChange={e => setSearch(e.target.value)}
              onKeyPress={searchBook}
            /><button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <img src="" alt='' />
        </div>
      </div>
      <h1 className='res'>Here are your results!</h1>
      <div className='container'>
        {
          <Card book={bookData} />
        }
      </div>
      <Scroll />
      <Aboutus />
    </>
  )
}

export default Home