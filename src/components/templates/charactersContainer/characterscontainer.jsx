import React from "react";
import CardCharacter from "../../cardCharacter/cardCharacter.jsx";
import loadingSVG from "../../../assets/loading.svg";
const Characterscontainer = React.memo(({ characters }) => {
  const { data, loading } = characters;
  console.log(data, loading);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-11/12 mt-10">
      {loading ? (
        <figure className="col-span-3 flex justify-center w-full items-center h-screen">
          <img className="w-24" src={loadingSVG} />
        </figure>
      ) : (
        data.map(({ id, name, img, birthdate, description }) => {
          return (
            <CardCharacter
              key={id}
              name={name}
              img={img}
              birthdate={birthdate}
              description={description}
            />
          );
        })
      )}
    </section>
  );
});

export default Characterscontainer;
