import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const titleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderitems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : " ";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => titleClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="ui styled fluid accordion">{renderitems}</div>
    </>
  );
};

export default Accordion;
