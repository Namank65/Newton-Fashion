import React from 'react';
import AiSearchBar from './AiSearchBar';
import AiSearchSuggestion from './AiSearchSuggestion';
import "./AiComp.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AiComp = () => {
  return (
    <div className='AiComp'>
      <Navbar/>
      <div className='AiCompBg'>
      <AiSearchBar/>
      <AiSearchSuggestion/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default AiComp;