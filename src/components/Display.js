import React from 'react';
import PropTypes from 'prop-types';

function Display({ text, color }) {
  const style = { backgroundColor: color };
  return (
    <>
        <div style={style}>
          <h2>{text}</h2>
        </div>
    </>
  );
}


Display.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string  
};

export default Display;
