import "./styles.css";
import React, { useState } from "react";

const moviesDictionary = {
  action: [
    {
      name: "Bell Bottom",
      rating: "4/5"
    },
    {
      name: "Baby",
      rating: "5/5"
    }
  ],
  comedy: [
    {
      name: "Good newwz",
      rating: "4/5"
    },
    {
      name: "Despicable Me",
      rating: "5/5"
    }
  ],
  drama: [
    {
      name: "Shakuntala Devi",
      rating: "5/5"
    },
    {
      name: "Gully Boy",
      rating: "4/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("drama");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Movies Recomendation</h1>
      <h2>Select a genre to get started</h2>
      <div>
        {Object.keys(moviesDictionary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {moviesDictionary[selectedGenre].map((movie) => (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={movie.name}
            >
              {" "}
              <div>{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
