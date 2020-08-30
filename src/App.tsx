import React from 'react';
import logo from './logo.svg';
import egg from './images/egg.svg'
import './App.css';
import { throws } from 'assert';

class App extends React.Component<any, any> {

  constructor(Props: any) {
    super(Props);

    this.state = {
      timer: 186,
      running: false,
      intervalTimer: null,
      eggSize: 186,
      eggTemp: 0,
      eggConsistency: 0
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
          <div className="Egg-Control">
            <div className="Egg-Property">
              <p>Size</p>
              <input type="radio" value="Small" name="eggsize" /> Small<br />
              <input type="radio" value="Medium" name="eggsize" /> Medium<br />
              <input type="radio" value="Large" name="gender" /> Large<br />
            </div>

            <div className="Egg-Property">
              <p>Temperature</p>
              <input type="radio" value="Room" name="eggtemp" /> Room<br />
              <input type="radio" value="Fridge" name="eggtemp" /> Fridge<br />
            </div>

            <div className="Egg-Property">
              <p>Consistency</p>
              <input type="radio" value="Soft" name="eggresult" /> Soft<br />
              <input type="radio" value="Medium" name="eggresult" /> Medium<br />
              <input type="radio" value="Hard" name="eggresult" /> Hard<br />
            </div>
          </div>
          <img src={egg} height="100" onClick={this.startTimer} />
          <p>{Math.floor(this.state.timer / 60)} mins {this.state.timer % 60} secs</p>
        </header>
      </div >
    );
  }
}

export default App;