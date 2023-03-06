import logo from "../Images/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function ArgusHeader() {
  return (
    <header>
      <br></br>
      <div className="d-flex justify-content-between align-items-center">
        <div className="header-logo-block">
          <Link to="/argus-react">
            <img className="logo" src={logo} alt="argus logo" />
          </Link>
        </div>

        <nav className="header-nav-block">
          <ul className="d-flex flex-row mp-1 nav-ul">
            <li>
              <Link to="/argus-react">
                <span className="header-link">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/models">
                <span className="header-link">Models</span>
              </Link>
            </li>
            <li>
              <Link to="/maas">
                <span className="header-link">Modelling as a Service</span>
              </Link>
            </li>
            <li>
              <Link to="/company">
                <span className="header-link">Company</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
    </header>
  );
}

export default ArgusHeader;
