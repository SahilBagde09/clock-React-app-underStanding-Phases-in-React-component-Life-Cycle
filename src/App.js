import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isDisplay: false,
  }

  changeDisplayClock = () => {
    this.setState(prevState => ({
      isDisplay: !prevState.isDisplay,
    }))
  }

  render() {
    const {isDisplay} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.changeDisplayClock}
        >
          {isDisplay ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isDisplay && <Clock />}
      </div>
    )
  }
}

export default App
