import React from 'react';
import { Routes, Route } from "react-router-dom";
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route index element={<Home />} />  
        <Route path="*" element={<NotFound />} />      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
