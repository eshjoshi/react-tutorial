import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import { connect } from 'react-redux';
// import { store } from './CreateStore';
import { setRotateData } from '../../Reducers/PuzzaleReducer';
import { withParams } from '../../utils/api';

const ImagePage = ({ src, alt, data, deg, scramble, setRotateData }) => {
  // const rotateData = props;
  console.log(scramble);
  console.log('inner child comp', deg);

  const [rotate, setRotate] = React.useState(deg);
  const anticlock = () => {
    setRotate(rotate - 90);
    // rotateData.setData(rotate - 90);
    // store.dispatch({ type: types.ADD_DATA, value: rotate });
    setRotateData(rotate);
  };

  return (
    <img
      style={{
        width: '100px',
        height: '100px',
        transform: `rotate(${scramble ? rotate - 90 : rotate}deg)`,
        position: 'static',
      }}
      src={src}
      alt={alt}
      onClick={() => anticlock()}
    />
  );
};

// Image.propTypes = {
//   rotateData: PropTypes.shape({
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.number.isRequired,
//     deg: PropTypes.object.isRequired,
//     // setRotateData: PropTypes.object.isRequired,
//   }).isRequired,
// };

const mapStateToProps = (state) => ({
  data: state.puzzaleReducer.data,
});

const mapDispatchToProps = {
  setRotateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);

// export default ImagePage;
