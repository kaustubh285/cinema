import React from "react";

export default function Movies({ movie }) {
  // const {movie} = props;
  return (
    <div
      className="bg-white container border mb-2 mt-1 shadow-sm rounded"
      // style={{ backgroundColor: "rgba(255, 242, 230,0.1)" }}
    >
      <div className="row ">
        <div className="col-lg-12 d-flex justify-content-between card-meta1">
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
          <p style={{ textAlign: "justify" }}>
            <small>{movie.overview}</small>
          </p>
        </div>
        <div className="col-lg-3 text-center">
          <div className="col-sm-12 card-meta2 text-left">
            <div>
              <p class="d-flex">
                <small className="Movie-titles w-100">
                  <b>
                    <u>{movie.title}</u>
                  </b>
                </small>

                <small className="movie-date pt-2">
                  {"  (" + movie.release_date + ")"}
                </small>
              </p>
            </div>
            <p>
              <small>{"Movie rating: " + movie.vote_average}</small>
            </p>
          </div>
          <img
            className="pb-1"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + " poster"}
          />
        </div>
      </div>
    </div>
  );
}
