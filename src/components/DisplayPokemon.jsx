import { MinusOutlined, PlusOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import List from './List';

const { Meta } = Card;

const Pokemon = ({ data }) => {
  const initialDescription = {
    height: data.height,
  };
  const [description, setDescription] = useState(() => initialDescription);
  const [currentImage, setCurrentImage] = useState(data.sprites.front_default);

  useEffect(() => {
    const images = [data.sprites.front_default, data.sprites.back_default];
    let idx = 0;

    const switchImg = setInterval(() => {
      idx = (idx + 1 + images.length) % images.length;
      setCurrentImage(images[idx]);
    }, 2000);

    return () => {
      clearInterval(switchImg);
    };
  }, [data]);

  const showMore = () => {
    setDescription((desc) => ({
      ...desc,
      weight: data.weight,
    }));
    setToggleIcons([
      <MinusOutlined
        key="minus"
        onClick={() => {
          setDescription(initialDescription);
          setToggleIcons([<PlusOutlined key="plus" onClick={showMore} />]);
        }}
      />,
    ]);
  };

  const [toggleIcons, setToggleIcons] = useState([
    <PlusOutlined key="plus" onClick={showMore} />,
  ]);

  return (
    <Card
      style={{ width: 500 }}
      cover={
        <img
          alt={data.name}
          src={currentImage}
          style={{ width: 300, height: 'auto', margin: 'auto' }}
        />
      }
      actions={toggleIcons}
    >
      <Meta
        avatar={<Avatar src={currentImage} />}
        title={data.name}
        description={<List items={description} />}
      />
    </Card>
  );
};

const conditionalRender = ({ data, loading, error }) => {
  if (loading) {
    return <Card style={{ width: 500 }} loading={true} />;
  } else if (error) {
    return <Alert message={error.message} type="error" />;
  } else if (data) {
    return <Pokemon data={data} />;
  }
};

const DisplayPokemon = ({ state }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {conditionalRender(state)}
    </div>
  );
};

export default DisplayPokemon;
