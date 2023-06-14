// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  loginButton = () => {
    this.setState(prevState => ({isLogin: !prevState.login}))
  }

  textMessage = () => {
    const {isLogin} = this.state
    if (isLogin === true) {
      return <h1 className="heading">Please Login</h1>
    }
    return <Message />
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        {this.textMessage()}
        {isLogin && <Login />}
        {!isLogin && <Logout />}
      </div>
    )
  }
}

export default Home
