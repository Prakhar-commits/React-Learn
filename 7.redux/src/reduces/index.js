import { combineReducers } from "redux";

// Redux Reducers

const songsReduces = () => {
  return [
    { title: "Happy Birthday", duration: "4:05" },
    { title: "I Will Always Love You", duration: "3:05" },
    { title: "You're My Everything", duration: "3:05" },
    { title: "I'm Yours", duration: "3:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReduces,
  selectedSong: selectedSongReducer,
});
