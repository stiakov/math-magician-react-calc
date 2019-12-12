import React from 'react';
import { Button } from './Button';

export class ButtonPanel extends React.Component {
  render() {
    const clearGrey = '#e0e0e0';
    return (
      <div id='panel'>
        <div className='row'>
          <Button name='AC' color={ clearGrey } />
          <Button name='+/-' color={ clearGrey } />
          <Button name='%' color={ clearGrey } />
          <Button name='/' />
        </div>
        <div className='row'>
          <Button name='7' color={ clearGrey } />
          <Button name='8' color={ clearGrey } />
          <Button name='9' color={ clearGrey } />
          <Button name='x' />
        </div>
        <div className='row'>
          <Button name='4' color={ clearGrey } />
          <Button name='5' color={ clearGrey } />
          <Button name='6' color={ clearGrey } />
          <Button name='–' />
        </div>
        <div className='row'>
          <Button name='1' color={ clearGrey } />
          <Button name='2' color={ clearGrey } />
          <Button name='3' color={ clearGrey } />
          <Button name='+' />
        </div>
        <div className='row'>
          <Button name='0' color={ clearGrey } wide={ true } />
          <Button name='.' color={ clearGrey } />
          <Button name='=' />
        </div>
      </div>
    )
  }
}