import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const Form = ({ imageURLHandler }) => {

  const onPasteHandler = e => imageURLHandler(e.clipboardData.getData('text/plain'));

  return (
    <form>
      <input 
        type="search" 
        placeholder="Paste the image url here..." 
        className="Image-Input" 
        onPaste={ onPasteHandler } 
      />
    </form>
  );

};

Form.propTypes = {
  imageURLHandler: PropTypes.func.isRequired
};

export default Form;