import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songsList, selectSong }) => {
  const renderSongs = () => {
    return songsList.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={() => selectSong(song)} className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return (
    <>
      <h2 className="ui block header olive center aligned">Songs List</h2>
      <div className="ui divided list">{renderSongs()}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songsList: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
