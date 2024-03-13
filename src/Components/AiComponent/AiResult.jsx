import React from "react";
import "./AiResult.css";

const AiResult = ({ name, pic }) => {
  if (!(pic && name)) return null;

  return (
    <div>
      <div className="AiResult">
        <div className="AiTitleAndPic">
          <h2 className="AiTitle">{name}</h2>
          <img className="AiPic" src={pic} alt="AiPic" />
        </div>
      </div>
    </div>
  );
};

export default AiResult;
