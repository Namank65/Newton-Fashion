import React from "react";

const AiResult = ({ name, pic }) => {
  if (!(pic && name)) return null;

  return (
    <div>
      <div className="AiResult">
        <h1 className="AiTitle">{name}</h1>
        <img className="AiPic" src={pic} alt="AiPic" />
      </div>
    </div>
  );
};

export default AiResult;
