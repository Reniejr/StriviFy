import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { setPlaylist } from "../../../_STORE/Spotify/actions";

//STYLE
import "./StrivifyCard.scss";

export default function StrivifyCard({ result, artist, type }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const getPlaylist = useCallback((playlist) => {
    // console.log(playlist);
    dispatch(setPlaylist(playlist));
  });
  return (
    <div
      className="strivify-card"
      style={{
        backgroundImage: `url(${result.images[0].url})`,
        marginBottom: artist ? "3.5rem" : "2.5rem",
      }}
      onClick={() => getPlaylist({ id: result.id, playerType: type })}
    >
      <div
        className="strivify-card-header"
        style={{ bottom: artist ? "-2.75rem" : "-1.75rem" }}
      >
        <p>{result.name ? result.name : ""}</p>
        {artist ? <p>{artist}</p> : ""}
      </div>
    </div>
  );
}
