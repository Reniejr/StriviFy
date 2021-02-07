import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";

//REDUX IMPORTS
import { connect } from "react-redux";
import { refreshToken } from "../../../_STORE/Spotify/actions";

//UTILITIES IMPORTS
import { searchFetch } from "../../../__UTILITIES";

//STYLE
import "./SideBar.scss";

//PERSONAL COMPONENTS IMPORTS
import { FilterBox } from "../2.General/General";

//REDUX
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setRefreshToken: (token) => dispatch(refreshToken(token)),
});

class SideBar extends PureComponent {
  state = {
    showPlaylist: false,
    toggleBar: true,
    search: {
      query: "",
      type: ["artist"],
    },
    startCheck: true,
    showFilter: false,
  };

  showPlaylist = () => {
    this.setState({ showPlaylist: !this.state.showPlaylist });
  };

  showSidebar = () => {
    this.setState({ toggleBar: !this.state.toggleBar });
  };

  search = async (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      if (this.state.search.type.length > 0) {
        searchFetch(this.state.search);
      }
      // console.log(this.state.search);
    } else {
      let query = e.currentTarget.value;
      this.setState({
        search: { query: query, type: [...this.state.search.type] },
      });
      // console.log(query);
    }
  };

  type = (e) => {
    let type = [...this.state.search.type],
      currentId = e.currentTarget.id;
    if (e.currentTarget.checked) {
      type = [...this.state.search.type, currentId];
    } else {
      type = type.filter((type) => type !== currentId);
    }
    console.log(type);
    this.setState({ search: { ...this.state.search, type } });
  };

  showFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  render() {
    // console.log(this.props);
    return (
      <nav
        id="sidebar"
        style={{
          marginLeft: this.state.toggleBar ? "" : "-250px",
          display: this.props.location.pathname === "/" ? "none" : "",
        }}
      >
        <div className="toggle" onClick={() => this.showSidebar()}></div>
        <div className="logo-sidebar">
          <img src="./assets/spotify.png" alt="" />
          <span>Strivify</span>
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={this.search}
          onKeyDown={this.search}
        />
        <FilterBox
          type={this.type}
          search={this.search}
          start={this.state.search.type[0]}
          show={this.showFilter}
          showFilter={this.state.showFilter}
        />
        <div className="menu">
          <ul>
            <li>
              <Link to="/home">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/library">
                <ion-icon name="library-outline"></ion-icon>
                <span>Library</span>
              </Link>
            </li>
            <li onClick={() => this.showPlaylist()}>
              <i className="fas fa-plus-circle"></i>
              <span>Create Playlist</span>
            </li>
            <div
              id="create-playlist"
              style={{ display: this.state.showPlaylist ? "" : "none" }}
            >
              <input type="text" placeholder="Name" />
            </div>
            <li>
              <i className="fas fa-heart"></i>
              <span>Favourites</span>
            </li>
          </ul>
          <div className="install">
            <i className="fas fa-arrow-alt-circle-down"></i>
            <span>Install</span>
            <hr />
          </div>
        </div>
        <div className="login">
          <img src="" alt="" />
          <button>
            <span>Log in</span>
          </button>
        </div>
      </nav>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SideBar)
);
