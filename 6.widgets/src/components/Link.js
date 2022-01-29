import React from "react";

const Link = ({ path, children, className, setActiveTab, name }) => {
  const onClickItem = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    setActiveTab(name);
  };

  return (
    <a className={className} href={path} onClick={onClickItem} name={name}>
      {children}
    </a>
  );
};

export default Link;
