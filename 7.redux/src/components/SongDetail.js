import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <h2 className="ui block header olive center aligned">Select a Songs </h2>;
  }
  return (
    <>
      <h2 className="ui block header olive center aligned">Selected Songs Details</h2>
      <h3 className="ui header">Title : {selectedSong.title}</h3>
      <h4 className="ui header">Duration : {selectedSong.duration}</h4>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
