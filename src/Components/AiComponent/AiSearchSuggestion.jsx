import React from "react";
import { useSelector } from "react-redux";
import "./AiSearchSuggestion.css";

const AiSearchSuggestion = () => {
  const { clothpic, clothNames } = useSelector((store) => store.ai);

  if (!clothpic) return null;

  return (
    <div>
      <div className="aiSuggestion">
        {clothNames.map((names) => (
          <h1 className="aiTitle">{names}</h1>
        ))}
        {clothpic.map((img) => (
          <img className="aiImg" src={img} alt="aiImg" />
        ))}
      </div>
    </div>
  );
};

export default AiSearchSuggestion;
