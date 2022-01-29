import React from "react";
import Accordion from "./components/Accordion";

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

const App = () => {
  return (
    <div className="ui container">  
      <Accordion items={items} />
    </div>
  );
};

export default App;
