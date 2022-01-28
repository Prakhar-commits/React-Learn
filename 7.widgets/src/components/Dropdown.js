import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div key={option.value} className="item" data-value={option.value} onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field" ref={ref}>
          <label className="label">{label}</label>
          <input type="hidden" name="color" />
          <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? "active visible" : ""}`}>
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>{renderOptions}</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <h1 style={{ color: `${selected.value}` }}>Hello World!!!</h1> */}
    </div>
  );
};

export default Dropdown;
