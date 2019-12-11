import React from 'react';
import { Button } from './Button';

export class ButtonPanel extends React.Component {
  render() {
    return (
      <div id='panel'>
        <div className='row'>
          <Button name='AC' />
          <Button name='+/-' />
          <Button name='%' />
          <Button name='/' color={ true } />
        </div>
        <div className='row'>
          <Button name='7' />
          <Button name='8' />
          <Button name='9' />
          <Button name='x' color={ true } />
        </div>
        <div className='row'>
          <Button name='4' />
          <Button name='5' />
          <Button name='6' />
          <Button name='–' color={ true } />
        </div>
        <div className='row'>
          <Button name='1' />
          <Button name='2' />
          <Button name='3' />
          <Button name='+' color={ true } />
        </div>
        <div className='row'>
          <Button name='0' wide={ true } />
          <Button name='.' />
          <Button name='=' color={ true }/>
        </div>
      </div>
    )
  }
}