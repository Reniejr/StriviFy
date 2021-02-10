import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//UTILITIES IMPORTS
import { setNewToken, fetchNewReleases } from "../../../__UTILITIES";

//PERSONAL COMPONENTS IMPORTS
import StrivifyCard from "../../__MAIN/5.StrivifyCard/StrivifyCard";

//BOOTSTRAP IMPORTS
import { Row } from "react-bootstrap";

//STYLE
import "./NewReleases.scss";

export default function NewReleases() {
  const [newReleases, setNewReleases] = useState([]);
  const state = useSelector((state) => state);

  const getNewReleases = async () => {
    let result;
    if (state.spotify.token !== undefined || state.spotify.token !== null) {
      result = await fetchNewReleases(10);
      console.log(result);
    } else {
      setNewToken();
      result = await fetchNewReleases(10);
      console.log(result);
    }
    setNewReleases(result.albums.items);
  };

  useEffect(() => {
    getNewReleases();
  }, []);
  useEffect(() => {
    setNewToken();
  }, [state]);

  return (
    <div id="new-releases">
      <h2>New Releases</h2>
      <Row>
        {newReleases.map((result) => {
          return (
            <StrivifyCard
              key={result.id}
              type="album"
              result={result}
              artist={result.artists[0].name}
            />
          );
        })}
      </Row>
    </div>
  );
}
