import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const clearGrey = '#e0e0e0';
  return (
    <div id='panel'>
      <div className='row'>
        <Button name='AC' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='+/-' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='%' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='/' clickHandler={ clickHandler } />
      </div>
      <div className='row'>
        <Button name='7' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='8' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='9' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='x' clickHandler={ clickHandler } />
      </div>
      <div className='row'>
        <Button name='4' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='5' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='6' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='–' clickHandler={ clickHandler } />
      </div>
      <div className='row'>
        <Button name='1' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='2' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='3' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='+' clickHandler={ clickHandler } />
      </div>
      <div className='row'>
        <Button name='0' color={clearGrey} wide={true} clickHandler={ clickHandler } />
        <Button name='.' color={clearGrey} clickHandler={ clickHandler } />
        <Button name='=' clickHandler={ clickHandler } />
      </div>
    </div>
  )
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func }