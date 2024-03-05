import React from 'react';
import { useSelector } from "react-redux";

const AiSearchSuggestion = () => {

  const ai = useSelector((store) => store.ai);
  console.log(ai)

  // const {clothpic, clothNames} = ai;

  return (
    <div>AiSearchSuggestion</div>
  )
}

export default AiSearchSuggestion;