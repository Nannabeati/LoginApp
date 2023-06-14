// Write your code here
import './index.css'

const Logout = props => {
  const {text} = props
  return (
    <button className="logout-button" type="button">
      {text}
    </button>
  )
}

export default Logout
