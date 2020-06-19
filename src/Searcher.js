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
    <div>
      <form className="Form pb-2" onSubmit={searchMovies}>
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

      <div className="">
        {movies.map((movie) => (
          <div
            className="bg-white container border mb-2 mt-1 shadow-sm rounded"
            // style={{ backgroundColor: "rgba(255, 242, 230,0.1)" }}
            key={movie.id}
          >
            <div className="row ">
              <div className="col-lg-12 d-flex justify-content-between">
                <p>
                  <small className="Movie-titles">
                    <b>
                      <u>{movie.title}</u>
                    </b>
                  </small>
                  <span></span>
                  <small> {"  (" + movie.release_date + ")"}</small>
                </p>
                <p>
                  <small>{"Movie rating: " + movie.vote_average}</small>
                </p>
              </div>
            </div>
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-lg-9">
                <p>
                  <small>{movie.overview}</small>
                </p>
              </div>
              <div className="col-lg-3">
                <img
                  className=""
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + " poster"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
