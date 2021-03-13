import styled from "styled-components";
import Kanit from "../../assets/fonts/Kanit-bold.ttf";
export const Headerlayout = styled.header`
  @font-face {
    font-family: "Kanititalic";
    font-style: italic;
    src: url(${Kanit});
  }
  background-color: #fbfbfe;
  font-size: 18px;
  font-family: "Kanititalic";
  width: 100%;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 100;
`;
export const Logo = styled.img`
  width: 140px;
  height: 50px;
  cursor: pointer;
`;

export const Menunav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 75px;
  padding: 10px 0;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
export const ButtonToggle = styled.button`
  font-size: 1rem;
  outline: none;
  color: white;
  text-align: right;
  padding-right: 1rem;
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
`;
export const ButtonToggleOpen = styled.button`
  font-size: 1rem;
  outline: none;
  background-color: #333;
  color: white;
  text-align: center;
  //display: none;
  padding: 0.5rem;
  //@media (max-width: 680px) {
  // display: block;
  //}
  width: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  padding: 10px 0px;
  @media (max-width: 680px) {
    flex-direction: column;
    background-color: #333;
    width: 100%;
    border-radius: 4px;
  }
`;

export const List = styled.li`
  list-style: none;
  padding: 10px;
  &:hover {
    color: #22303aee;
    color: #58b3f3;
    text-decoration: none;
  }
  @media (max-width: 680px) {
    text-align: center;
  }
`;

export const Listitem = styled.span`
  font-size: 1em;
  transform-style: none;
  text-decoration: none;
  color: #22303aee;
  font-weight: bold;
  outline-style: none;
  &:hover {
    color: #22303aee;
    color: #58b3f3;
    text-decoration: none;
  }
  @media (max-width: 680px) {
    color: white;
  }
`;
