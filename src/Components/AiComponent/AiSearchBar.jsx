import React, { useRef } from "react";
import "./AiSearchBar.css";
import openai from "../../utils/openAiConfig";

const AiSearchBar = () => {
  const searchText = useRef(null);
  
  const handelClickGptSearch = async() => {
    console.log(searchText.current.value);

    const AiQuery = `Act as a cloth recommendation system and suggest some cloths for the query : ${searchText.current.value}`

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: AiQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
  }

  return (
    <div>
      <div className="AiSearch">
        <form onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} className="AiInput" type="text" placeholder="What would you like to wear Today?" />
          <button className="AiBtn" onClick={handelClickGptSearch}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
