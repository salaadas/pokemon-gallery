import useWindowDimensions from '../hooks/useWindowDimensions';

const Daily = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#90aaf5',
      }}
    >
      Pokemon of the day
    </div>
  );
};

export default Daily;
