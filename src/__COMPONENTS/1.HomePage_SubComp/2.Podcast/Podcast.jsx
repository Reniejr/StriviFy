import React, { useSelector, useDispatch } from "react";

//STYLE
import "./Podcast.scss";

export default function Podcast() {
  return (
    <div id="podcast">
      <i className="fas fa-satellite-dish"></i>
      <h2>Follow your first podcast</h2>
      <p>Follow your favourite podcast, clicking on the button</p>
      <p>[Unfortunately, this feature is not available.]</p>
      <button>Find Podcast</button>
    </div>
  );
}
