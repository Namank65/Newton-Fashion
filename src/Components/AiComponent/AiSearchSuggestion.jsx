import React from "react";
import { useSelector } from "react-redux";
import "./AiSearchSuggestion.css";

const AiSearchSuggestion = () => {
  const { clothpic, clothNames } = useSelector((store) => store.ai);

  return (
    <div>
      <div className="aiSuggestion">
        <h1 className="aiTitle">{clothNames}</h1>
        <img className="aiImg" src={clothpic} alt="aiImg" />
      </div>
    </div>
  );
};

export default AiSearchSuggestion;
