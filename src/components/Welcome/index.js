// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribeButton = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  onClickChangeButton = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.onClickChangeButton()
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          className="subscribe-button"
          type="button"
          onClick={this.onClickSubscribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
