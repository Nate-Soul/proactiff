import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer py-3 text-center">
        <div className="container">
          <p className="footer-copyright-text">
            Copyright &copy; 2022 <br/><br />
            {
              location.pathname === "/" 
              ? <Link to="/about" className="link"> About </Link>
              : <Link to="/" className="link"> Back to Home </Link>
            }
          </p>
        </div>
    </footer>
  )
}

export default Footer