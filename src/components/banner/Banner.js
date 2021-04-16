import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import liebe from "../../assets/liebe.jpg";
import asta from "../../assets/asta-banner.jpg";

import "./styles.css";
import { useState, useEffect } from "react";
const Banner = () => {
  // const [pictures, setPictures] = useState([liebe,asta]);
  // const [indexArray, setIndexArray] = useState(0);
  // const changePicture = () => {
  //   if (indexArray < pictures.length - 1) setIndexArray(indexArray + 1);
  //   else setIndexArray(0);
  // };
  // useEffect(() => {
  //   setInterval(changePicture, 10000);
  // }, [pictures]);
  return (
    <section className="duration-200 grid-container bg-light-gray dark:bg-dark-banner dark:text-white transtision">
      <article className="article">
        <h1 className="article__h1">Black Clover</h1>
        <p className="article__p">¿Qué personajes buscas?</p>
      </article>
      <article className="article">
        <p className="article__p2">
          Esta pagina te ayudara a conocer tus personajes favoritos de Black
          Clover , ademas te entaras de las Curiosidades que no sabias de este
          maravilloso Anime
        </p>
      </article>
      <div className="buttons-banner">
        <button className="button-banner button-banner--left">
          <Link to="/characters" className="link">
            personajes
          </Link>
        </button>
        <button className="button-banner button-banner--right">
          <Link to="/characters" className="link">
            Secretos
          </Link>
        </button>
      </div>
      <figure className=" article">
        <img
          name="bannerSlider"
          src={liebe}
          className=" article__img"
          alt="Liebe"
        />
      </figure>
    </section>
  );
};

export default Banner;
