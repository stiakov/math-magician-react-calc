import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, color, wide }) => {
  const orange = '#f6913f';
  const clearGrey = '#e0e0e0';
  const styles = {
    backgroundColor: color ? orange : clearGrey,
    width: wide ? '50%' : '25%',
    height: '100px',
  }
  return <button style={ styles } >{ name }</button>
};

Button.propTypes = { 
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
 };