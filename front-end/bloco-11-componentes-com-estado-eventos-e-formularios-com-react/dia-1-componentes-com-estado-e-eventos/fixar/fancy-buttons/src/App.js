import './App.css';
import React from 'react';

class App extends React.Component{

  constructor() {
    super()
    this.changeClickTimes = this.changeClickTimes.bind(this)
    this.state = {
      clickTimes: 0
    }
  }

  changeClickTimes() {
    this.setState((state, _props) => ({
      clickTimes: state.clickTimes + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeClickTimes}>{this.state.clickTimes}</button>
      </div>
    );
  }
}

export default App;
