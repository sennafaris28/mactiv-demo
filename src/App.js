import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      time: new Date()
    }
  }

  currentTime() {
    this.setState({
      time: new Date()
    })
  }

  UNSAFE_componentWillMount() {
    setInterval(() => this.currentTime(), 5000);
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.time.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default App;
