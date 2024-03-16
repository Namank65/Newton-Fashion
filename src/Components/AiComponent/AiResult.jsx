import React from "react";
import "./AiResult.css";

const AiResult = ({ name, pic }) => {
  if (!(pic && name)) return null;

  return (
    <div>
      <div className="AiResult">
          <h3 className="AiTitle">{name}</h3>
          <img className="AiPic" src={pic} alt="AiPic" />
      </div>
    </div>
  );
};

export default AiResult;
