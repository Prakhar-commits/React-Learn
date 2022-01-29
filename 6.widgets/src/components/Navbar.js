import React, { useState } from "react";
import Link from "./Link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("/");

  return (
    <div className="ui menu tabular">
      <Link path="/" className={`item ${activeTab === "/" ? "active" : ""}`} name="/" setActiveTab={setActiveTab}>
        Accordion
      </Link>
      <Link path="/search" className={`item ${activeTab === "search" ? "active" : ""}`} name="search" setActiveTab={setActiveTab}>
        Search
      </Link>
      <Link path="/dropdown" className={`item ${activeTab === "dropdown" ? "active" : ""}`} name="dropdown" setActiveTab={setActiveTab}>
        Dropdowm
      </Link>
      <Link path="/translate" className={`item ${activeTab === "translate" ? "active" : ""}`} name="translate" setActiveTab={setActiveTab}>
        Translate
      </Link>
    </div>
  );
};

export default Navbar;
