import React, { useState } from "react";
// import Search from "./components/Search";
// import Accordion from "./components/Accordion";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "It is a framework for webdev",
  },
  {
    title: "Why use React?",
    content: "It is a famous library ammong engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "RED",
    value: "red",
  },
  {
    label: "BLUE",
    value: "Blue",
  },
  {
    label: "GREEN",
    value: "green",
  },
  {
    label: "YELLOW",
    value: "yellow",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropDown(!showDropDown)}>Toogle Dropdown </button> */}
      {/* {showDropDown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select Colors" /> : null} */}
      <Translate />
    </div>
  );
};

export default App;
