import useWindowDimensions from '../hooks/useWindowDimensions';

const Gallery = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#90aaf5',
      }}
    >
      gallery
    </div>
  );
};

export default Gallery;
