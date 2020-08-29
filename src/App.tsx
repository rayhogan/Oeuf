import React from 'react';
import logo from './logo.svg';
import egg from './images/egg.svg'
import './App.css';
import { throws } from 'assert';

class App extends React.Component<any, any> {

  constructor(Props: any) {
    super(Props);

    this.state = {
      timer: 220,
      running: false,
      intervalTimer: null
    }

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer(e: any) {
    if (!this.state.running) {
      this.setState({
        running: true,
        intervalTimer: setInterval(this.countDown, 1000)
      })
    }
    else {

      clearInterval(this.state.intervalTimer);
      this.setState({
        running: false
      })

    }
  }

  countDown(e: any) {
    if (this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 1
      })
    }
    else {
      clearInterval(this.state.intervalTimer);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Title">Oeuf</div>
          <img src={egg} height="100" onClick={this.startTimer} />
          <p>{Math.floor(this.state.timer / 60)} mins {this.state.timer % 60} secs</p>
        </header>
      </div>
    );
  }
}

export default App;