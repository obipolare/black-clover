import React, { useState, useEffect } from "react";
import Containercharacters from "../../templates/charactersContainer/characterscontainer.jsx";

const Characters = () => {
  const [characters, setCharacters] = useState({
    data: [],
    loading: true,
  });

  const url = `https://my-json-server.typicode.com/obipolare/json-db/db`;
  const charactersData = async (url) => {
    const res = await fetch(url);
    const { characters } = await res.json();
    setCharacters({
      data: characters,
      loading: false,
    });
  };
  useEffect(() => {
    charactersData(url);
  }, [url]);
  return <Containercharacters characters={characters} />;
};
export default Characters;
