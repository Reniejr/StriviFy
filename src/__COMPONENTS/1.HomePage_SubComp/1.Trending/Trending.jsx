import React, { PureComponent } from "react";

//REDUX IMPORTS
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getBrowseFetch, getTracksPlaylistFetch } from "../../../__UTILITIES";

//PERSONAL COMPONENTS
import { StrivifyCard } from "../../__MAIN/2.General/General";

//STYLE
import "./Trending.scss";

//BOOTSTRAP IMPORTS
import { Row } from "react-bootstrap";

//REDUX
const mapStateToProps = (state) => state;

class Trending extends PureComponent {
  state = {
    results: [],
  };

  componentDidMount = async () => {
    document.title = "Strivify | Trending";
    if (this.props.spotify.token) {
      const results = await getBrowseFetch("toplists");
      this.setState({ results: results.playlists.items });
      //   console.log(results.playlists.items);
    }
  };

  getTracks = async (url) => {
    const results = await getTracksPlaylistFetch(url);
    let audio = new Audio(results.items[0].track.preview_url);
    audio.play();
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
                    image={result.images[0].url}
                    title={result.name}
                    tracks={result.tracks.href}
                    onClick={this.getTracks}
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

export default connect(mapStateToProps)(Trending);
