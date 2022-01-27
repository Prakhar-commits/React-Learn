import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";
// import Accordion from "./components/Accordion";

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
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
    </div>
  );
};

export default App;
