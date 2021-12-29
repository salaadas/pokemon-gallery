import React from 'react';

const List = ({ items }) => {
  return (
    <ul>
      {Object.keys(items).map((k) => (
        <li key={k}>
          {k}: {items[k]}
        </li>
      ))}
    </ul>
  );
};

export default List;
