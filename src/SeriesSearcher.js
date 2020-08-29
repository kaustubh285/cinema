import React, { useState } from "react";
import Series from "./Series";
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
      errorDiv.setAttribute("class", "d-block alert alert-danger");
    } else {
      var loading = document.getElementById("Loader");
      var no_content = document.getElementById("no-content");
      loading.setAttribute("class", "d-block");
      errorDiv.setAttribute("class", "d-none");

      const url = `https://api.themoviedb.org/3/search/tv?api_key=0d3ca7edae2d9cb14c86ce991530aee6&language=en-US&page=1&query=${query}&page=1&include_adult=true`;
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
        <div className='d-none' id='errordiv'>
          <p className='text-center'>Please enter series name</p>
        </div>
        <form className='Form pb-2' onSubmit={searchMovies}>
          <label htmlFor='query' className='label'>
            Series Name
          </label>
          <input
            required
            type='text'
            name='query'
            placeholder='i.e the big bang theory'
            value={query}
            onChange={(event) => setQuery(event.target.value)}></input>
          <Button type='submit' color='default' size='large' variant='outlined'>
            Search
          </Button>
        </form>
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
            Sorry, No series found.
            <p style={{ fontSize: 15 }}>
              Maybe You'll find it in the <Link to='/'>movies section</Link>
            </p>
          </h4>
        </div>
        <div className=''>
          {movies.map((movie) => (
            <Series movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
