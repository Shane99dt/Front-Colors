const Button = ({ type, text, disabled, handleClick, Myclass }) => {
    return <button type={type} disabled={disabled} onClick={handleClick} className={Myclass}>{text}</button>
  }
  
  export default Button