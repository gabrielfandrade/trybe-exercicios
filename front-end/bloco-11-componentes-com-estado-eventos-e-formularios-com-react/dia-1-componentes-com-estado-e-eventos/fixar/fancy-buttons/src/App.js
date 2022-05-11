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
    }), () => {
      console.log(this.changeButtonColor(this.state.clickTimes));
    })
  }

  changeButtonColor(number){
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickTimes } = this.state;
    return (
      <div className="App">
        <button 
          onClick={this.changeClickTimes}
          className={this.changeButtonColor(clickTimes)}>
            {this.state.clickTimes}
        </button>
      </div>
    );
  }
}

export default App;
