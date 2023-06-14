// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {isLogin: true}

  loginButton = () => {
    this.setState(prevState => ({isLogin: !prevState.login}))
  }

  clickButton = () => {
    const {isLogin} = this.state
    if (isLogin === true) {
      return (
        <button
          type="button"
          className="login-button"
          onClick={this.loginButton}
        >
          Login
        </button>
      )
    }
    return (
      <button type="button" className="login-button" onClick={this.clickButton}>
        Logout
      </button>
    )
  }

  render() {
    return <div>{this.clickButton()}</div>
  }
}

export default Login
