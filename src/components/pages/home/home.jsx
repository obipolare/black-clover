import React from "react";
import Banner from "../../banner/banner.jsx";
import Cardcharacter from "../../cardCharacter/cardCharacter";

const imgcharacter1 =
  "https://64.media.tumblr.com/7236b8319140ad35522964564c452a41/0c71d8db0c621ce0-87/s1280x1920/b63853aaed3dc41f6ea49bd88f526b81dc913946.png";
const imgcharacter2 =
  "https://i.pinimg.com/originals/da/37/77/da37774c722990d0b9fa70e234b00850.jpg";

const home = () => {
  return (
    <main>
      <Banner />
      <section className="bg-gray-900 w-full h-screen text-white flex justify-center items-center">
        <article className="text-4xl text-center">
          <h2> Pronto voy a completar el Website...ya lo veréis</h2>
          <h2>Soon Imma complete this website :)</h2>
          <a
            target="_blank"
            href="https://twitter.com/obipolare"
            className="transition duration-200 hover:text-yellow-300 font-semibold"
          >
            <h2>@obipolare</h2>
          </a>
        </article>
      </section>
    </main>
  );
};

export default home;
