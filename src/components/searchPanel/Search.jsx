import React, { useState } from "react";
import "./searchPanel.css";

const Search = ({ updateSearch }) => {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (e) => {
    setTerm(e.target.value);
    updateSearch(term);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Пошук по запису"
      onChange={onUpdateSearch}
      value={term}
    />
  );
};

export default Search;
