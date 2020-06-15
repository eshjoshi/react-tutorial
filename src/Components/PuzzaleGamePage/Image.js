import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';

const ImagePage = (props) => {
  const rotateData = props;
  const [rotate, setRotate] = React.useState(rotateData.deg);
  const anticlock = () => {
    setRotate(rotate - 90);
  };

  return (
    rotateData && (
      <Image
        style={{ transform: `rotate(${rotate}deg)`, position: 'static' }}
        src={rotateData.src}
        alt={rotateData.alt}
        onClick={() => anticlock()}
      />
    )
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
