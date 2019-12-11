import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ id }) => <button>{ id }</button>

Button.propTypes = { id: PropTypes.string.isRequired };