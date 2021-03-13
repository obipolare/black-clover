import styled from "styled-components";
import Kanit from "../../assets/fonts/Kanit-bold.ttf";
import Kanitalic from "../../assets/fonts/Kanit-regular.ttf";

export const Containerbanner = styled.section`
  @font-face {
    font-family: Kanitbold;
    font-style: bold;
    src: url(${Kanit});
  }
  display: grid;
  grid-template-rows: auto auto 50px;
  grid-template-columns: 50% 50%;
  padding: 50px;
  font-family: Kanitalic;
  background-color: #22303a;
  color: white;
  font-size: 17px;
  @media (max-width: 805px) {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    padding: 26px;
  }
`;

export const Article = styled.article`
  padding: 5px 20px 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 805px) {
    align-items: center;
    padding: 10px;
  }
`;
export const BannerImage = styled.img`
  width: 100%;
  align-self: center;
`;
