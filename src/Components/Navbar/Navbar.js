import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <Link to="/">
          <h2 className="navbarHead">ANNAPURTI</h2>
        </Link>
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
            <Link to="/maps">MAPS</Link>
          </li>
          <li className="topListItem dropdown">
            <span className="dropbtn">SIGN IN/UP</span>
            <div className="dropdown-content">
              <Link to="/sign">USER</Link>
              <Link to="/">NGO</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <button className="donate">Donate Now</button>
      </div>
    </div>
  );
}

export default Navbar;
