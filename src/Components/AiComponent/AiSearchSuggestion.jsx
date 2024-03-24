import React, { useState } from "react";
import "./AiSearchSuggestion.css";
import { useDispatch, useSelector } from "react-redux";
import AiResult from "./AiResult";
import { removeAiSearchResults } from "../../utils/AiCompSlice";

const AiSearchSuggestion = () => {
  const { clothpic, clothNames } = useSelector((store) => store.ai);
  const [removeAiBtn, setRemoveAiBtn] = useState(false);
  const dispatch = useDispatch();

  if (!(clothpic && clothNames)) return null;

  const removeDataHandel = () => {
    dispatch(removeAiSearchResults());
    setRemoveAiBtn(!removeAiBtn);
  };

  return (
    <div>
      <div className="suggestionParent">
        <button
          style={{ display: removeAiBtn ? "none" : "block" }}
          className="removeAiBtn"
          onClick={removeDataHandel}
        >
          Remove
        </button>
        <div className="aiSuggestion">
          {clothNames.map((cltname, index) => (
            <AiResult
              key={cltname}
              name={cltname.toUpperCase()}
              pic={clothpic[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiSearchSuggestion;
