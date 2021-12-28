import { MinusOutlined, PlusOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Card } from 'antd';
import React, { useState } from 'react';

const { Meta } = Card;

const Pokemon = ({ data }) => {
  const initialDescription = {
    height: data.height,
  };
  const [description, setDescription] = useState(() => initialDescription);

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

  const showDescription = () => {
    return (
      <ul>
        {Object.keys(description).map((k) => (
          <li key={k}>
            {k}: {description[k]}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card
      style={{ width: 500 }}
      cover={
        <img
          alt={data.name}
          src={data.sprites.front_default}
          style={{ width: 300, height: 'auto', margin: 'auto' }}
        />
      }
      actions={toggleIcons}
    >
      <Meta title={data.name} description={showDescription()} />
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
