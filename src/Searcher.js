import React, { useState } from "react";

export default function Searcher() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("Submitting the query!!");

    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=0d3ca7edae2d9cb14c86ce991530aee6&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="Form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        placeholder="i.e star wars"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-dark mybutton">
        Search
      </button>
    </form>
  );
}
