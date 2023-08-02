type Props = {
  slider: {
    id: string;
    src: string;
  };
};

export const VideoOne = ({ slider }: Props) => {
  const { id, src } = slider;
  return (
    <div id={id} style={{ width: 1000, height: 480, background: '#ff80ed' }}>
      <iframe
        width="1000"
        height="480"
        // className="aspect-video"
        src={`https://www.youtube.com/embed/${src}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
