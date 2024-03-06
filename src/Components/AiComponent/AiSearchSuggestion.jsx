import React from 'react';
import { useSelector } from "react-redux";

const AiSearchSuggestion = () => {
 
  const {clothpic, clothNames} = useSelector((store) => store.ai);


  return (
    <div>
      <img src={clothpic} alt="" />
      <h1>{clothNames}</h1>
    </div>
  )
}

export default AiSearchSuggestion;