import React, { Component } from 'react';
import './App.css';
import BasicLayout from './Components/basicES6/BasicLayout';
import Activation from './Components/basicES6/Activation';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActivated: true
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);

  }

  handleStatusChange(isActivated) {
    console.log(isActivated);
    this.setState({ isActivated: isActivated });
  }

  render() {
    const isActivated = this.state.isActivated;
    return (
      <div>
        {this.state.isActivated ? <BasicLayout /> : <Activation onStatusChange={this.handleStatusChange} isActivated={isActivated} />}
      </div>
    )
  }
}

export default App;
