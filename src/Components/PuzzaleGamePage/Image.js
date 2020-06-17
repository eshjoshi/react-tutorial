import React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import { connect } from 'react-redux';
// import { store } from './CreateStore';
import { addData } from './reducer';

const ImagePage = (props) => {
  const rotateData = props;
  const [rotate, setRotate] = React.useState(rotateData.deg);
  const anticlock = () => {
    setRotate(rotate - 90);
    // rotateData.setData(rotate - 90);
    // store.dispatch({ type: types.ADD_DATA, value: rotate });
    addData(rotate);
  };

  return (
    rotateData && (
      <img
        style={{
          width: '100px',
          height: '100px',
          transform: `rotate(${rotate}deg)`,
          position: 'static',
        }}
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
    deg: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {
  addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);

// export default ImagePage;
