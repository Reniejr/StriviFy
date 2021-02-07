import React from "react";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getSearch } from "../../../__UTILITIES/Spotify";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({});

function SearchFetch(props) {
  console.log(this.props.spotify);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFetch);
