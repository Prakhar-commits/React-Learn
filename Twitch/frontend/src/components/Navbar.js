import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import GoogleAuth from "../Auth/GoogleAuth";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("twitch");
  const handleClick = (e, { name }) => setActiveMenu(name);
  return (
    <Menu pointing secondary>
      <Menu.Item name="twitch" as={Link} to="/" active={activeMenu === "twitch"} onClick={handleClick}>
        <Icon name="twitch" />
        Twitch
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="create" as={Link} to="/stream/new" active={activeMenu === "create"} onClick={handleClick}>
          <Icon name="upload" />
          Upload
        </Menu.Item>
        <GoogleAuth />
        {/* <Menu.Item name="login" as={Link} to="/login" active={activeMenu === "login"} onClick={handleClick}>
          <Icon name="user plus" />
          Login
        </Menu.Item> */}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
