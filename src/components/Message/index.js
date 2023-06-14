// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  state = {isLogin: true}

  textMessage = () => {
    const {isLogin} = this.state
    if (isLogin === true) {
      return <h1 className="text-message">Please Login</h1>
    }
    return <h1 className="text-message">Welcome User</h1>
  }

  render() {
    return <div>{this.textMessage()}</div>
  }
}

export default Message
