import React, { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
  }

  render() {
    let tempArray = [...this.props.movieData];
    return (
      <div>
        <span className="bold">Favorite Movies: </span>
        <ol className="moviesList">
          {tempArray.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Movies;
