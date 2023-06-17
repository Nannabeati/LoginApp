// Write your code here
import './index.css'

const Login = props => {
  const {buttonEl, loginButton} = props
  console.log(loginButton) // getting undefined in the console
  const login = () => {
    loginButton()
  }
  return (
    <button type="button" className="login-button" onClick={login}>
      {buttonEl}
    </button>
  )
}

Login.defaultProps = {
  buttonEl: 'Login',
}

export default Login
