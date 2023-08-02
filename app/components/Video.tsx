import { Slide } from 'pure-react-carousel';

type Props = {
  slider: {
    id: string;
    src: string;
  };
  idx: number;
};

export const Video = ({ slider, idx }: Props) => {
  const { id, src } = slider;
  return (
    <Slide index={idx}>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${src}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Slide>
  );
};
