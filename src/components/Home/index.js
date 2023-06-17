// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  loginButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        <Message />
        {isLogin && <Login loginButton={this.loginButton} />}
        {!isLogin && <Logout loginButton={this.loginButton} />}
      </div>
    )
  }
}

export default Home
