import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const seacrhres = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      seacrhres();
    } else {
      const timerId = setTimeout(() => {
        if (term) {
          seacrhres();
        }
      }, 500);
      return () => clearInterval(timerId);
    }
  }, [term]);

  const renderResults = results.map((res) => {
    return (
      <div key={res.pageid} className="ui segment raised padded">
        <a href={`https://en.wikipedia.org?cruid=${res.pageid}`}>
          <h4 className="ui header">{res.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: res.snippet }} style={{ color: "#000" }}></p>
        </a>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Seach word</label>
          <input className="input" type="text" placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      {renderResults}
    </div>
  );
};

export default Search;
