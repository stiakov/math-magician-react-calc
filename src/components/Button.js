import React from 'react';
import PropTypes from 'prop-types';
const orange = '#f6913f';

export const Button = ({ name, color, wide }) => {
  const styles = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
    height: '100px',
  }
  return <button style={ styles } >{ name }</button>
};

Button.propTypes = { 
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
 };

 Button.defaultProps = { wide: false, color: orange };