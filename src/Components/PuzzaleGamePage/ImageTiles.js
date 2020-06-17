import React from 'react';
import ImagePage from './Image';

function ImageTiles(props) {
  return (
    <div>
      {' '}
      {props.tiles.map((x) => (
        <th>
          <ImagePage
            src={x}
            alt={x}
            style={{
              width: '100px',
              height: '100px',
              position: 'static',
              transform: `rotate(${props.scramble}deg)`,
            }}
          />
        </th>
      ))}
    </div>
  );
}

export default ImageTiles;
