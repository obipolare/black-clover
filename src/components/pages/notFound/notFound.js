import styled from "styled-components";
import Kanit from "../../../assets/fonts/Kanit-bold.ttf";
export const ContainerNotfound = styled.main`
  @font-face {
    font-family: Kanitbold;
    font-style: bold;
    src: url(${Kanit});
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22303a;
  font-family: Kanitbold;
  flex-direction: column;
  margin-top: 150px;
  height: 100%;

  @media (max-width: 520px) {
    width: 90%;
    margin: 150px auto 0 auto;
    font-size: 1em;
  }
`;

export const Animationlottie = styled.section`
  max-width: 100%;
  height: 20em;

  @media (max-width: 520px) {
    width: 13em;
    auto: auto;
  }
`;
export const Gohouse = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 638px) {
    font-size: 1em;
    padding: 8px 4px;
    height: 50px;
  }
`;
export const Buttongradient = styled.button`
  background-image: linear-gradient(
    to right,
    #1a2980 0%,
    #26d0ce 51%,
    #1a2980 100%
  );
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 15px 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 25px;
  &:hover {
    background-position: right center;
    text-decoration: none;
  }
  @media (max-width: 638px) {
    font-size: 1em;
    padding: 15px 30px;
  }
`;
