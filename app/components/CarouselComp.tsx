'use client';
import { Carousel } from '@trendyol-js/react-carousel';
import { VideoOne } from './VideoOne';
import { useState } from 'react';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';

export const CarouselComp = () => {
  const [videos, setVideos] = useState([
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
  ]);
  return (
    <Carousel
      show={1}
      slide={1}
      transition={0.5}
      leftArrow={
        <div className="flex justify-center items-center">
          <LeftIcon />
        </div>
      }
      rightArrow={<RightIcon />}
    >
      {videos.map((video) => (
        <VideoOne slider={video} key={video.id} />
      ))}
    </Carousel>
  );
};
