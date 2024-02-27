import React from "react";
import "./AiSearchBar.css";

const AiSearchBar = () => {
  return (
    <div>
      <div className="AiSearch">
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="AiInput" type="text" placeholder="What would you like to wear Today?" />
          <button className="AiBtn">Search</button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
