import React from 'react';
import { Button } from './Button';

export class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button id='AC' />
          <Button id='+/-' />
          <Button id='%' />
          <Button id='/' />
        </div>
        <div>
          <Button id='7' />
          <Button id='8' />
          <Button id='9' />
          <Button id='X' />
        </div>
        <div>
          <Button id='4' />
          <Button id='5' />
          <Button id='6' />
          <Button id='–' />
        </div>
        <div>
          <Button id='1' />
          <Button id='2' />
          <Button id='3' />
          <Button id='+' />
        </div>
        <div>
          <Button id='.' />
          <Button id='0' />
          <Button id='=' />
        </div>
      </div>
    )
  }
}