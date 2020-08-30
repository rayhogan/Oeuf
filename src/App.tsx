import React from 'react';
import logo from './logo.svg';
import egg from './images/egg.svg'
import './App.css';
import { throws } from 'assert';

class App extends React.Component<any, any> {

  constructor(Props: any) {
    super(Props);

    this.state = {
      timer: 237,
      running: false,
      intervalTimer: null,
      eggSize: 57,
      eggTemp: 21,
      eggConsistency: 67
    }

    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.onSizeValue = this.onSizeValue.bind(this);
    this.onTemperatureValue = this.onTemperatureValue.bind(this);
    this.onConsistencyValue = this.onConsistencyValue.bind(this);

    this.updateCookingTime = this.updateCookingTime.bind(this);

    // Formula: ((57*0.155)*.75)*Math.log(0.76 * (21 - 100)/(63 - 100))*60
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

  onSizeValue(event: any) {
    console.log(event.target.value);
    this.setState({
      eggSize: event.target.value
    })
    this.updateCookingTime(this);
  }
  onTemperatureValue(event: any) {
    console.log(event.target.value);
    this.setState({
      eggTemp: event.target.value
    })
    this.updateCookingTime(this);
  }
  onConsistencyValue(event: any) {
    console.log(event.target.value);
    this.setState({
      eggConsistency: event.target.value
    })

    this.updateCookingTime(this);

  }

  updateCookingTime(e: any) {
    this.setState((state: any) => {
      return {timer: Math.floor(((state.eggSize * 0.155) * .75) * Math.log(0.76 * (state.eggTemp - 100) / (state.eggConsistency - 100)) * 60) }
    })

    console.log(this.state.timer);
    
    console.log(this.state.eggSize);
    console.log(this.state.eggTemp);
    console.log(this.state.eggConsistency);
    console.log(Math.floor(this.state.timer / 60) +"mins+ " +this.state.timer % 60+" secs");
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Title">Oeuf</div>
          <div className="Egg-Control">
            <div className="Egg-Property" onChange={this.onSizeValue}>
              <p>Size</p>
              <input type="radio" value="47" name="eggsize" /> Small<br />
              <input type="radio" value="57" name="eggsize" defaultChecked/> Medium<br />
              <input type="radio" value="67" name="eggsize" /> Large<br />
            </div>

            <div className="Egg-Property" onChange={this.onTemperatureValue}>
              <p>Temperature</p>
              <input type="radio" value="21" name="eggtemp" defaultChecked/> Room<br />
              <input type="radio" value="4" name="eggtemp" /> Fridge<br />
            </div>

            <div className="Egg-Property" onChange={this.onConsistencyValue}>
              <p>Consistency</p>
              <input type="radio" value="67" name="eggresult" defaultChecked/> Soft<br />
              <input type="radio" value="70" name="eggresult" /> Medium<br />
              <input type="radio" value="75" name="eggresult" /> Hard<br />
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