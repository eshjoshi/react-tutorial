import React from 'react';
import PropTypes from 'prop-types';

function Rotate(props) {
  const img = props;
  return (
    <img
      style={{
        width: 100,
        height: 100,
        position: 'static',
      }}
      src={img.img.img}
      alt={img.img.id}
    />
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    deg: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rotate;
