import React from "react";
import "./styles.css";

export const CardCharacter = ({ id, name, img, birthdate, description }) => {
  return (
    // <div className="card vov fade-in" key={id}>
    //   <figure className="card__header">
    //     <img src={img} alt={name} loading="lazy" />
    //   </figure>
    //   <div className="card__body">
    //     <h2 className="card__title">{name}</h2>
    //     <p className="card__subtitle">{birthdate}</p>
    //     <p className="card__info">{description}</p>
    //   </div>
    //   <div className="card__footer">
    //     <button className="button button--dark">Compartir</button>
    //     <button className="button button--ghost">Compartir</button>
    //   </div>
    // </div>

    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
      <a href="#" className="block w-full h-full">
        <img alt={name} src={img} className="object-cover w-full max-h-60" />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-indigo-500 text-md">{birthdate}</p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {name}
          </p>
          <p className="font-light text-gray-400 dark:text-gray-300 text-md">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};
