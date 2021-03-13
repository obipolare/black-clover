import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import {
  Headerlayout,
  Menunav,
  Logo,
  Menu,
  List,
  Listitem,
  ButtonToggle,
  ButtonToggleOpen,
} from "./header.js";
import imgClover from "../../assets/logo-black-clover.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeClassToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Fragment>
      <Headerlayout>
        <Menunav>
          <figure>
            <Link to="/">
              <Logo src={imgClover} />
            </Link>
          </figure>
          {toggle ? (
            <Menu>
              <ButtonToggle onClick={changeClassToggle}>X</ButtonToggle>
              <List>
                <Link to="/" className="textrouter">
                  <Listitem>Home</Listitem>
                </Link>
              </List>
              <List>
                <Link to="/characters" className="textrouter">
                  <Listitem>Personajes</Listitem>
                </Link>
              </List>
              <List>
                <Link to="/magic-knights" className="textrouter">
                  <Listitem>Magic Knights</Listitem>
                </Link>
              </List>
              <List>
                <Link to="/curiosities" className="textrouter">
                  <Listitem>Curiosities</Listitem>
                </Link>
              </List>
            </Menu>
          ) : (
            <div className="w-full rounded mt-2">
              <ButtonToggleOpen onClick={changeClassToggle}>
                Open Menu
              </ButtonToggleOpen>
            </div>
          )}
        </Menunav>
      </Headerlayout>
    </Fragment>
  );
};

export default Header;
