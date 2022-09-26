import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import GoogleAuth from "../Auth/GoogleAuth";

const Navbar = ({ isSignedIn }) => {
  const [activeMenu, setActiveMenu] = useState("twitch");
  const handleClick = (e, { name }) => setActiveMenu(name);
  return (
    <Menu pointing secondary>
      <Menu.Item name="twitch" as={Link} to="/" active={activeMenu === "twitch"} onClick={handleClick}>
        <Icon name="twitch" />
        Twitch
      </Menu.Item>
      <Menu.Menu position="right">
        {isSignedIn ? (
          <Menu.Item name="create" as={Link} to="/stream/new" active={activeMenu === "create"} onClick={handleClick}>
            <Icon name="upload" />
            Upload
          </Menu.Item>
        ) : null}
        <GoogleAuth />
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Navbar);
