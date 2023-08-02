'use client';
import { Carousel } from '@trendyol-js/react-carousel';
import { VideoOne } from './VideoOne';
import { useState } from 'react';

export const CarouselComp = () => {
  const [videos, setVideos] = useState([
    {
      id: 'video-1',
      src: 'aaZq6SXXNt4',
    },
    {
      id: 'video-2',
      src: '4evV8Fr5A8U',
    },
    {
      id: 'video-3',
      src: 'X_fkh5VeOvI',
    },
    {
      id: 'video-4',
      src: 'dsK8SsfqdHE',
    },
  ]);
  return (
    <Carousel show={1} slide={2} transition={0.5}>
      {videos.map((video) => (
        <VideoOne slider={video} key={video.id} />
      ))}
    </Carousel>
  );
};
