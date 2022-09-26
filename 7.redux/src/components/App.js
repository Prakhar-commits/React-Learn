import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui grid container">
      <div className="ui row">
        <div className="eight wide column ui segment">
          <SongList />
        </div>
        <div className="eight wide column ui segment">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
