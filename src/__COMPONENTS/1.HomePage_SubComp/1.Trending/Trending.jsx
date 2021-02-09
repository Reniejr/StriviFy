import React, { PureComponent } from "react";

//REDUX IMPORTS
import { connect } from "react-redux";
import { setPlaylist } from "../../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import {
  getBrowseFetch,
  getTracksPlaylistFetch,
  setNewToken,
} from "../../../__UTILITIES";

//PERSONAL COMPONENTS
import StrivifyCard from "../../__MAIN/5.StrivifyCard/StrivifyCard";

//STYLE
import "./Trending.scss";

//BOOTSTRAP IMPORTS
import { Row } from "react-bootstrap";

//REDUX
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setPlaylist: (playlist) => dispatch(setPlaylist(playlist)),
});

class Trending extends PureComponent {
  state = {
    results: [],
  };

  componentDidMount = async () => {
    document.title = "Strivify | Trending";
    if (this.props.spotify.token) {
      const results = await getBrowseFetch("toplists");
      this.setState({ results: results.playlists.items });
      // console.log(results.playlists.items);
    } else {
      await setNewToken();
      const results = await getBrowseFetch("toplists");
      this.setState({ results: results.playlists.items });
      // console.log(results);
    }
    let player = document.getElementById("player-from-spotify");
    console.log(player);
  };

  render() {
    return (
      <div id="trending">
        <div className="top-hits">
          <h2>Top Hits</h2>
          <Row>
            {this.state.results.length > 0 ? (
              this.state.results.map((result) => {
                return (
                  <StrivifyCard
                    key={result.id}
                    image={result.images[0].url}
                    title={result.name}
                    id={result.id}
                    type="playlist"
                    // artist={result.type}
                  />
                );
              })
            ) : (
              <p></p>
            )}
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
