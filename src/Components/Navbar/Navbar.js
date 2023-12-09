import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/sign">SIGN</Link>
          </li>
          <li className="topListItem">
            <Link to="/signup">SIGN UP</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <h2 className="navbarHead">ATMANIRBHAR BHARAT</h2>
      </div>
    </div>
  );
}

export default Navbar;
