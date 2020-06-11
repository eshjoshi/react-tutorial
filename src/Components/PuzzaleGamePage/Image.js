import React from 'react';
//  import PropTypes from 'prop-types';

const Image = (props) => {
  //  const { src, alt, deg } = props;

  const [rotate, setRotate] = React.useState(props.deg);
  const anticlock = () => {
    setRotate(rotate - 90);
  };
  return (
    <img
      className="image"
      style={{ width: 100, height: 100, transform: `rotate(${rotate}deg)` }}
      src={props.src}
      alt={props.alt}
      onClick={() => anticlock()}
    />
  );
};
// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.number.isRequired
// }
export default Image;
