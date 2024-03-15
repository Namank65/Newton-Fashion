import React, { useRef } from "react";
import "./AiSearchBar.css";
import openai from "../../utils/openAiConfig";
import { UNSPLACH_KEY } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { aiSearchResults } from "../../utils/AiCompSlice";

const AiSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchClothsUnsplach = async (cloth) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${cloth}&client_id=${UNSPLACH_KEY}&per_page=10`
    );

    const json = await data.json();
    console.log(json.results?.[0]?.urls?.small)
    return json.results?.[0]?.urls?.small;
  };

  const handelClickGptSearch = async () => {
    const AiQuery = `Act as a cloth recommendation system and suggest some cloths for the query : ${searchText.current.value} only give me 10 names of cloths, comma seprated like the expample result given ahead. example result: jacket, sweater, t-shirt, pajama, jeans`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: AiQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) return "404 Something Went Wrong";

    const aiSuggestions = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArrayClothData = aiSuggestions.map((cloth) =>
      searchClothsUnsplach(cloth)
    );
    const unspalchData = await Promise.all(promiseArrayClothData);

    dispatch(
      aiSearchResults({ clothNames: aiSuggestions, clothpic: unspalchData })
    );
  };

  return (
    <div>
      <div className="AiSearch">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="aiHeadding">AI SEARCH</h1>
          <div className="aiInputAndBtn">
            <input
              ref={searchText}
              className="AiInput"
              type="text"
              placeholder="What would you like to wear Today?"
            />
            <button className="AiBtn" onClick={handelClickGptSearch}>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AiSearchBar;
