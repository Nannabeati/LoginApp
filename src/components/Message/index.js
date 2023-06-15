// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  state = {isLogin: true}

  render() {
    const {isLogin} = this.state
    let msg
    if (isLogin === true) {
      msg = <h1 className="text-message">Please Login</h1>
    } else {
      msg = <h1 className="text-message">Welcome User</h1>
    }

    return <div>{msg}</div>
  }
}

export default Message
