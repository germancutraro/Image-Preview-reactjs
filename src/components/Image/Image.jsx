import React from 'react';
import './Image.css';
import PropTypes from 'prop-types';
import defaultImage from '../../static/image-preview.png';

const Image = ({ image }) => (
    <div style={{ backgroundImage: `url(${ image })` }} className="Image-Preview">
      <img 
        src={ image === '' ? defaultImage : image } 
        alt="" 
        className="img"
      />
    </div>
);

Image.propTypes = {
  image: PropTypes.string.isRequired
};

export default Image;