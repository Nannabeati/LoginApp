// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        <Message />
        {isLogin && <Login />}
        {!isLogin && <Logout />}
      </div>
    )
  }
}

export default Home
