import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//UTILITIES IMPORTS
import { getPlaylistFetch, setNewToken } from "../../../__UTILITIES";

//PERSONAL COMPONENTS IMPORTS
import StrivifyCard from "../../__MAIN/5.StrivifyCard/StrivifyCard";

//BOOTSTRAP IMPORTS
import { Row } from "react-bootstrap";

//STYLE
import "./Moods.scss";

export default function Moods() {
  const [moods, setMoods] = useState([]);
  const [genres, setGenres] = useState([]);
  const state = useSelector((state) => state);

  const allMoods = [
    "37i9dQZF1DXdHKb3VkLtuj",
    "37i9dQZF1DX6e7ijUUjT0E",
    "37i9dQZF1DXaXB8fQg7xif",
    "37i9dQZF1DWTKktnMCmHx1",
    "37i9dQZF1DXc0aozDLZsk7",
  ];

  const allGenres = [
    "2f4SnTZElqO1V6RqpdsiuW",
    "0AoFXPuDaPw0JFsX8T3ZgE",
    "37i9dQZF1DX92MLsP3K1fI",
    "1kMyrcNKPws587cSAOjyDP",
    "0bSKISIIcNQMc1EVaYVNul",
  ];

  const moodsFetch = async () => {
    let responses = [];
    Promise.all(
      allMoods.map(async (mood) => {
        if (state.spotify.token !== undefined || state.spotify.token !== null) {
          const response = await getPlaylistFetch(mood);
          console.log(response);
          responses.push(response);
        } else {
          setNewToken();
          const response = await getPlaylistFetch(mood);
          console.log(response);
          responses.push(response);
        }
      })
    );
    await setMoods(responses);
  };
  const genresFetch = async () => {
    let responses = [];
    Promise.all(
      allGenres.map(async (mood) => {
        if (state.spotify.token !== undefined || state.spotify.token !== null) {
          const response = await getPlaylistFetch(mood);
          console.log(response);
          responses.push(response);
        } else {
          setNewToken();
          const response = await getPlaylistFetch(mood);
          console.log(response);
          responses.push(response);
        }
      })
    );
    await setGenres(responses);
  };

  useEffect(() => {
    moodsFetch();
    genresFetch();
  }, []);

  useEffect(() => {
    setNewToken();
  }, [state]);

  return (
    <div id="moods-genres">
      <div className="moods">
        <h2>Follow your moods</h2>
        <Row>
          {moods.map((result) => {
            return (
              <StrivifyCard key={result.id} type="playlist" result={result} />
            );
          })}
        </Row>
      </div>
      <div className="genres">
        <h2>Best Genres</h2>
        <Row>
          {genres.map((result) => {
            return (
              <StrivifyCard key={result.id} type="playlist" result={result} />
            );
          })}
        </Row>
      </div>
    </div>
  );
}
