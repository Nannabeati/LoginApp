// Write your code here
import './index.css'

const Login = props => {
  const {text} = props
  return (
    <button className="login-button" type="button">
      {text}
    </button>
  )
}

export default Login
