import React, { useState } from "react";
import Movies from "./Movies";
import { Button } from "@material-ui/core";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import { Link } from "react-router-dom";

export default function Searcher() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const searchMovies = async (event) => {
    event.preventDefault();
    var errorDiv = document.getElementById("errordiv");
    if (query === "") {
      errorDiv.setAttribute("class", "d-block ");
    } else {
      var loading = document.getElementById("Loader");
      var no_content = document.getElementById("no-content");
      loading.setAttribute("class", "d-block");
      errorDiv.setAttribute("class", "d-none");

      const url = `https://api.themoviedb.org/3/search/movie?api_key=0d3ca7edae2d9cb14c86ce991530aee6&language=en-US&query=${query}&page=1&include_adult=false`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.total_results === 0) {
          no_content.setAttribute("class", "d-block text-center");
        } else {
          no_content.setAttribute("class", "d-none");
        }
        loading.setAttribute("class", "d-none");
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div>
        <form className='Form pb-2' onSubmit={searchMovies}>
          <label htmlFor='query' className='label'>
            Movie Name
          </label>
          <input
            required
            type='text'
            name='query'
            placeholder='i.e star wars'
            value={query}
            onChange={(event) => setQuery(event.target.value)}></input>
          <Button type='submit' color='default' size='large' variant='outlined'>
            Search
          </Button>
          {/* <button type="submit" className="btn btn-dark mybutton">
          Search
        </button> */}
        </form>
        <div
          className='d-none w-50'
          id='errordiv'
          style={{ maxWidth: "50%", alignContent: "center" }}>
          <p
            className='text-center alert alert-danger text-dark'
            style={{ fontSize: "small", height: 20, padding: 0 }}>
            Please enter Movie Name
          </p>
        </div>
        <div className='d-none pt-3' align='center' id='Loader'>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw'></i>
          <span className='sr-only'>Loading...</span>
        </div>
        <div id='no-content' className='d-none text-center'>
          <h4 className='alert alert-secondary pb-0'>
            <span role='img' aria-label='sad-face'>
              {" "}
              &#128577;{" "}
            </span>{" "}
            Sorry, No movie found.
            <p style={{ fontSize: 15 }}>
              Maybe You'll find it in the <Link to='/tv'>series section</Link>
            </p>
          </h4>
        </div>
        <div className='' id='contentHolder'>
          {movies.map((movie) => (
            <Movies movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
