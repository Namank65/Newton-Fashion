import React from 'react';
import AiSearchBar from './AiSearchBar';
import AiSearchSuggestion from './AiSearchSuggestion';
import "./AiComp.css";

const AiComp = () => {
  return (
    <div className='AiComp'>
      <div className='AiCompBg'>
      <AiSearchBar/>
      <AiSearchSuggestion/>
      </div>
      
    </div>
  )
}

export default AiComp;