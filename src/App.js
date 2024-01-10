import React from 'react'
import Home from './Components/home/Home';
import Scroll from './Components/scroll/Scroll'
import Modal from './Components/modal/Modal';
import Register from './Components/register/Register'
import Login from './Components/login/Login'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Favorites from './Components/scroll/Favorites';
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus';


const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/modal' element={<Modal/>} />
        <Route path='/about' element={<Aboutus/>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App