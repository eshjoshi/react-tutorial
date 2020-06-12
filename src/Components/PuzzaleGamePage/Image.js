import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';

const ImagePage = (props) => {
  const rotateData = props;

  const [rotate, setRotate] = React.useState(rotateData.deg);
  const anticlock = () => {
    setRotate(rotate - 90);
  };

  return (
    <div
      style={{
        width: 100,
        height: 100,
        padding: 0,
      }}
    >
      <Image
        style={{ transform: `rotate(${rotate}deg)`, position: 'static' }}
        src={rotateData.src}
        alt={rotateData.alt}
        onClick={() => anticlock()}
      />
    </div>
  );
};

Image.propTypes = {
  rotateData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
  }).isRequired,
};
export default ImagePage;
