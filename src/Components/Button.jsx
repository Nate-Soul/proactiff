const Button = ({color, text, onClick}) => {
  return (
    <>
        <button className={`btn btn-${color}`} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button