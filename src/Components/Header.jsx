import Button from "./Button"
import {useLocation} from "react-router-dom"

const Header = ({title, onShow, toggleShow}) => {

  const location = useLocation();

  return (
      <header id="mainHeader" className="text-center py-2">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="heading-one">{title}</h1>
                </div>
                <div className="col-md-6">
                    {location.pathname === "/" &&
                      <Button 
                      text={toggleShow ? "Close" : "Add Tasks"}
                      color={toggleShow ? "danger" : "primary"}
                      onClick={onShow}
                    />}
                </div>
            </div>
        </div>
      </header>
  )
}

export default Header