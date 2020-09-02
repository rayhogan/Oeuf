import React from 'react';
import egg from './images/egg.svg'
import twitter from './images/twitter.svg'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'
import './App.css';

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

    this.resetSettings = this.resetSettings.bind(this);
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
      return { timer: Math.floor(((state.eggSize * 0.155) * .75) * Math.log(0.76 * (state.eggTemp - 100) / (state.eggConsistency - 100)) * 60) }
    })

  }

  resetSettings(e: any) {
    clearInterval(this.state.intervalTimer);
    this.updateCookingTime(this);

    this.setState({
      running: false
    })

  }


  render() {
    var settingClassName = "Egg-Control " + (this.state.running ? "disableSettings" : null);
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Title">
            <div><img src={egg} height="20" onClick={this.startTimer} /></div>
            <div>euf</div>
          </div>
          <div className={settingClassName}>
            <div className="Egg-Property" onChange={this.onSizeValue}>
              <p>Size</p>
              <input type="radio" value="47" name="eggsize" /> Small<br />
              <input type="radio" value="57" name="eggsize" defaultChecked /> Medium<br />
              <input type="radio" value="67" name="eggsize" /> Large<br />
            </div>

            <div className="Egg-Property" onChange={this.onTemperatureValue}>
              <p>Temperature</p>
              <input type="radio" value="21" name="eggtemp" defaultChecked /> Room<br />
              <input type="radio" value="4" name="eggtemp" /> Fridge<br />
            </div>

            <div className="Egg-Property" onChange={this.onConsistencyValue}>
              <p>Consistency</p>
              <input type="radio" value="67" name="eggresult" defaultChecked /> Soft<br />
              <input type="radio" value="70" name="eggresult" /> Medium<br />
              <input type="radio" value="75" name="eggresult" /> Hard<br />
            </div>
          </div>
          <div>Cooking Time</div>
          <div>{Math.floor(this.state.timer / 60)} mins {this.state.timer % 60} secs</div>
          <div className="App-Buttons">
            <div><button className="myButton Stop" type="button" onClick={this.resetSettings} disabled={!this.state.running}>Reset</button></div>
            <div><button className="myButton Go" type="button" onClick={this.startTimer} disabled={this.state.running}>Start</button></div>
          </div>
          <div className="Social-Buttons">
            <div>
              <a href="https://www.github.com/rayhogan">
                <img src={github}/>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ray-hogan/">
              <img src={linkedin}/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/rayhogan">
              <img src={twitter}/>
              </a>
            </div>
          </div>
        </header>
      </div >
    );
  }
}

export default App;