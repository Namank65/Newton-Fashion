import React from "react";
import "./AiSearchSuggestion.css";
import { useSelector } from "react-redux";
import AiResult from "./AiResult";

const AiSearchSuggestion = () => {
  const { clothpic, clothNames } = useSelector((store) => store.ai);

  if (!(clothpic && clothNames)) return null;

  return (
    <div>
      <div className="aiSuggestion">
        {
          clothNames.map((cltname, index) => <AiResult key={cltname} name={cltname.toUpperCase()} pic={clothpic[index]} />)
        }
      </div>
    </div>
  );
};

export default AiSearchSuggestion;
