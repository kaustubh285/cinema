import React, { useState } from "react";
import Series from "./Series";

export default function Searcher() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("Submitting the query!!");

    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/tv?api_key=0d3ca7edae2d9cb14c86ce991530aee6&language=en-US&page=1&query=${query}&page=1&include_adult=true`;
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
    <div>
      <form className="Form pb-2" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Series Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="i.e the big bang theory"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button type="submit" className="btn btn-dark mybutton">
          Search
        </button>
      </form>

      <div className="">
        {movies.map((movie) => (
          <Series movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}