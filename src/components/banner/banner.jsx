import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import "./styles.css";
const Banner = () => (
  <section className="grid-container">
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
    <article className="article">
      <button className="button button-left">
        <Link to="/characters" className="link">
          personajes
        </Link>
      </button>
      <button className="button button-right">
        <Link to="/characters" className="link">
          Secretos
        </Link>
      </button>
    </article>
    <figure className="article">
      <img
        className="article__img"
        src="https://www.funimation.com/blog/wp-content/uploads/2020/04/Black_Clover_Zoom_Background_5.jpg"
        alt=""
      />
    </figure>
  </section>
);

export default Banner;
