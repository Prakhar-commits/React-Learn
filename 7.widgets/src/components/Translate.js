import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Chinese",
    value: "zh",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [text, setText] = useState("");
  const [language, setlanguage] = useState(options[0]);

  return (
    <div>
      <h2>Translator</h2>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" placeholder="Type" value={text} onChange={(e) => setText(e.target.value)} />
          <br />
          <br />
          <Dropdown options={options} selected={language} onSelectedChange={setlanguage} label="Select language" />
        </div>
      </div>
      <h2>Output</h2>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
