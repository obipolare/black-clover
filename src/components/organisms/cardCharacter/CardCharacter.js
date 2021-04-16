import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const CardCharacter = ({ id, name, img, birthdate, description }) => {
  const handleClickMore = () => {
    alert("this section is on Development yet");
  };
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

    <article className="flex flex-col mx-auto overflow-hidden bg-white rounded-lg shadow-lg w-72 md:w-80 dark:bg-gray-800">
      <figure className="w-full overflow-hidden h-60 ">
        <img alt={name} src={img} className="object-cover " />
      </figure>
      <div className="w-full p-4">
        <p className="font-medium text-indigo-500 text-md">{birthdate}</p>
        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
          {name}
        </p>

        {description.length > 190 ? (
          <p className="font-light text-gray-400 text-md dark:text-gray-300">
            {description.slice(0, 190)}
            {
              <Link onClick={handleClickMore} className="font-semibold">
                ...más
              </Link>
            }
          </p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </article>
  );
};
