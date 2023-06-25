import React from 'react'
import './about.css'

const Aboutus = () => {
  return (
    <>
    <div className='about'>
      <h1>About Us</h1><hr /> 
      <h2><b>Welcome to Modern Library!</b></h2><br/>
      <h2>Our Mission</h2><br />
      <p className='mission'>At Modern Library, our Mission is to foster a love for reading by 
      making books accessible to everyone, regardless of their location 
      or background.<br/> We believe that books have the power to inspire,
      educate, entertain, and we strive to be the go-to destination for
      book enthusiasts worldwide.</p><br/>
      <h2>Contact Information</h2>
      <ul className='icons'>
        <li><i class="fa-solid fa-envelope"></i>Email: info@librarysystem.com</li>
        <li><i class="fa-solid fa-phone"></i>Phone: 123-456-7890</li>
        <li><i class="fa-light fa-location-dot"></i>Address: 123 Library Street, City, Country</li>
        <li><i class="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-square-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-square-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-square-pinterest"></i></li>&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
    </div>
    </>
  )
}

export default Aboutus

