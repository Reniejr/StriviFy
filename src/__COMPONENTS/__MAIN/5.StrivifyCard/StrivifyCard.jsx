import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { setPlaylist } from "../../../_STORE/Spotify/actions";

//STYLE
import "./StrivifyCard.scss";

export default function StrivifyCard({ image, artist, id, title, type }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const getPlaylist = useCallback((playlist) => {
    console.log(playlist);
    dispatch(setPlaylist(playlist));
  });
  return (
    <div
      xs={12}
      md={3}
      className="strivify-card"
      style={{
        backgroundImage: `url(${image})`,
        marginBottom: artist ? "3.5rem" : "2.5rem",
      }}
      onClick={() => getPlaylist({ id: id, playerType: type })}
    >
      <div
        className="strivify-card-header"
        style={{ bottom: artist ? "-2.75rem" : "-1.75rem" }}
      >
        <p>{title ? title : ""}</p>
        {artist ? <p>{artist}</p> : ""}
      </div>
    </div>
  );
}
