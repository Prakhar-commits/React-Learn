import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

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
      <h2>Dropdown</h2>
      <div className="ui form">
        <div className="field">
          <label className="label">Select colour</label>
          <input type="hidden" name="color" />
          <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? "active visible" : ""}`}>
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>{renderOptions}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
