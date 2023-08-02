'use client';
import { Video } from './Video';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const Carousel = () => {
  const videos = [
    {
      id: 'video-1',
      src: 'aaZq6SXXNt4',
    },
    {
      id: 'video-2',
      src: 'dUiDZJMPh-s',
    },
    {
      id: 'video-3',
      src: 'X_fkh5VeOvI',
    },
    {
      id: 'video-4',
      src: 'lpUjrMxBX2E',
    },
  ];
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={63}
      totalSlides={4}
    >
      <Slider>
        {videos.map((video, idx) => (
          <Video slider={video} key={video.id} idx={idx} />
        ))}
      </Slider>
      <div className="flex flex-row gap-4 justify-center">
        <ButtonBack>
          <LeftIcon />
        </ButtonBack>
        <ButtonNext>
          <RightIcon />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
