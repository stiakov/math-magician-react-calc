import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';
import { calculate } from '../logic/calculate';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: "0", next: "0", operation: "", displayed: false };
  }
  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }
  
  render() {
    return(
      <div id='calc' >
        <Display result={ this.state.next }/>
        <ButtonPanel clickHandler={ buttonName => this.handleClick(buttonName) }/>
      </div>
    )
  }
}