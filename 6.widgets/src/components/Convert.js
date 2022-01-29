import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [output, setOutput] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timmerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timmerId);
    };
  }, [text]);

  useEffect(() => {
    const translateapi = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setOutput(data.data.translations[0].translatedText);
    };
    translateapi();
  }, [language, debouncedText]);

  return (
    <div className="ui segment">
      <h4>{output}</h4>
    </div>
  );
};

export default Convert;
