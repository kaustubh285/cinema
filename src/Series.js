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
                <u>{movie.name}</u>
              </b>
            </small>
            <span></span>
            <small> {"  (" + movie.first_air_date + ")"}</small>
          </p>
          <p>
            <small>{"Series rating: " + movie.vote_average}</small>
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
              <p className="mytitles">
                <small className="Movie-titles">
                  <b>
                    <u>{movie.name}</u>
                  </b>
                </small>

                <small className="movie-date pt-2">
                  {"  (" + movie.first_air_date + ")"}
                </small>
              </p>
            </div>
            <p>
              <small>{"Series rating: " + movie.vote_average}</small>
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
