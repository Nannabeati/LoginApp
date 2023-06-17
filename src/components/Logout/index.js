// Write your code here
import './index.css'

const Logout = props => {
  const {buttonEl, loginButton} = props
  const logout = () => {
    loginButton()
  }
  return (
    <button type="button" className="login-button" onClick={logout}>
      {buttonEl}
    </button>
  )
}

Logout.defaultProps = {
  buttonEl: 'Logout',
}

export default Logout
