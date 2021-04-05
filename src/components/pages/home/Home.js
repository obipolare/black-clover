import React, { useState } from "react";
import Banner from "../../banner/Banner";
import "./styles.css";

const Home = () => {
  const [slider, setSlider] = useState([
    {
      id: "video-1",
      src: "aaZq6SXXNt4",
    },
    {
      id: "video-2",
      src: "4evV8Fr5A8U",
    },
    {
      id: "video-3",
      src: "X_fkh5VeOvI",
    },
    {
      id: "video-4",
      src: "dsK8SsfqdHE",
    },
  ]);
  return (
    <>
      <Banner />
      <section class="slider">
        <scroll-container class="slider-container">
          {slider.map(({ id, src }) => {
            return (
              <scroll-page id={id}>
                <iframe
                  width="560"
                  height="315"
                  class="video"
                  src={`https://www.youtube.com/embed/${src}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </scroll-page>
            );
          })}
        </scroll-container>
        <div class="slider-bullet-list">
          {slider.map(({ id }) => {
            return <a href={`#${id}`} class="slider-bullet" />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
