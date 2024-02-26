import React from "react";

const AiSearchBar = () => {
  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="What would you like to wear Today" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
