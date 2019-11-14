import React, { Component } from 'react';
import './App.css';
import BasicLayout from './Components/basicES6/BasicLayout';
import Activation from './Components/basicES6/Activation';
import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActivated: false,
      serialNumber: 'CSyn5tSKH5HMLH8bQ0FS'
    }

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        if (!this.state.isActivated) this.checkStatus();
      }
      , 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  checkStatus() {
    const serialNumber = this.state.serialNumber;
    Axios.post('https://devMactiv.mybluemix.net/api/masjidBox/sync',
      {
        serialNumber,
        force: 1
      }).then(res => {
        console.log(res);
        if (res.data.masjidId) {
          this.setState({
            isActivated: true
          })
        }
      }).catch(err => {
        console.log("Serial Number Not Found");
      })
  }

  render() {
    const { isActivated, serialNumber } = this.state;
    return (
      <div>
        {isActivated ? <BasicLayout /> : <Activation serialNumber={serialNumber} />}
      </div>
    )
  }
}

export default App;
