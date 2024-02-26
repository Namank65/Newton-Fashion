import React from 'react';
import AiSearchBar from './AiSearchBar';
import AiSearchSuggestion from './AiSearchSuggestion';
import "./AiComp.css";

const AiComp = () => {
  return (
    <div>
      <AiSearchBar/>
      <AiSearchSuggestion/>
    </div>
  )
}

export default AiComp;