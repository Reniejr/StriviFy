import React, { PureComponent } from "react";

//REDUX IMPORTS
import { connect } from "react-redux";
import { setPlaylist } from "../../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import { getBrowseFetch, setNewToken, searchFetch } from "../../../__UTILITIES";

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
    topHits: [],
    top50: [],
  };

  browseFetch = async () => {
    if (this.props.spotify.token) {
      const results = await getBrowseFetch("toplists", 5);
      this.setState({ topHits: results.playlists.items });
      // console.log(results);
    } else {
      await setNewToken();
      const results = await getBrowseFetch("toplists", 5);
      this.setState({ topHits: results.playlists.items });
      // console.log(results);
    }
  };

  searchFetch = async () => {
    if (this.props.spotify.token) {
      const results = await searchFetch({
        query: "top 50",
        type: "playlist",
        limit: 2,
      });
      this.setState({ top50: results.playlists.items });
      // console.log(results.playlists.items);
    } else {
      await setNewToken();
      const results = await searchFetch({
        query: "top 50",
        type: "playlist",
        limit: 2,
      });
      this.setState({ top50: results.playlists.items });
      // console.log(results);
    }
  };

  componentDidMount = async () => {
    document.title = "Strivify | Trending";
    await this.browseFetch();
    await this.searchFetch();
  };

  render() {
    return (
      <div id="trending">
        <div className="top-hits">
          <h2>Top Hits</h2>
          <Row>
            {this.state.topHits.length > 0 ? (
              this.state.topHits.map((result) => {
                return (
                  <StrivifyCard
                    key={result.id}
                    type="playlist"
                    result={result}
                  />
                );
              })
            ) : (
              <p></p>
            )}
          </Row>
        </div>
        <div className="top-50">
          <h2>Top 50</h2>
          <Row>
            {this.state.top50.length > 0 ? (
              this.state.top50.map((result) => {
                return (
                  <StrivifyCard
                    key={result.id}
                    type="playlist"
                    result={result}
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
