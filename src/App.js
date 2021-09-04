import "./styles_grid.scss";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState("");
  console.log(cards);

  const Card = (props) => {
    return (
      <div>
        {cards !== "" && (
          <div className="card">
            <div className="card-container">
              <img
                alt="avatar"
                style={{ width: "10em" }}
                src={props.avatar_url}
              />
            </div>

            <div className="name">
              <p>{props.name}</p>
            </div>

            <div className="container">
              <div className="insideContainer">
                <span>
                  <p>Repos</p> {props.public_repos}
                </span>
                <span>
                  <p>Followers</p> {props.followers}
                </span>
                <span>
                  <p>Following</p> {props.following}
                </span>
              </div>
            </div>
            <div className="location">
              <p>
                &#127968;
                <strong>{props.location}</strong>
              </p>

              <a
                alt={props.html_url}
                href={`${props.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>&#128279; </span>
                {props.html_url}{" "}
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Form = (props) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();

      axios.get(`https://api.github.com/users/${username}`).then((resp) => {
        const myRepo = resp.data;
        setCards(myRepo);
        setUsername("");
      });
    };

    return (
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button className="Bsubmit" type="submit">
          <strong>Search</strong>
        </button>
      </form>
    );
  };

  return (
    <div className="wrapper">
      <Form />
      <Card {...cards} />
    </div>
  );
}

export default App;
