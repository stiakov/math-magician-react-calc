import React from 'react';
import PropTypes from 'prop-types';

export const Display =({ result }) => <div id='display'>{ result }</div>;

Display.propTypes = { result : PropTypes.string };
Display.defaultProps = { result: '0' };