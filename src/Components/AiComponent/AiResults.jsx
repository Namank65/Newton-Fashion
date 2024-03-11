import React from "react";
import { useSelector } from "react-redux";
import './AiResults';

const AiResults = () => {
  const { clothpic, clothNames } = useSelector((store) => store.ai);

  if (!(clothpic && clothNames)) return null;

  return (
    <div>
      <div className="aiResultCard">
        {clothNames.map((name, index) => (
         <h1 key={index} className="aiTitle">{name}</h1>
        ))}
        {clothpic.map((img, index) => (
          <img key={index} className="aiImg" src={img} alt="aiImg" />
        ))}
      </div>
    </div>
  );
};

export default AiResults;
