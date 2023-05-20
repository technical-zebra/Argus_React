import logo from "../Images/logo.png";
import "./style.scss";
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

/**
 * The function returns a header component that contains a logo, and a navigation bar with links to
 * other pages.
 * @returns A header with a logo and a nav bar.
 */
function ArgusHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/argus-react" className="navbar-brand">
          <img className="logo" src={logo} alt="argus logo" />
        </Link>
        <Dropdown className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <Dropdown.Toggle
            variant="link"
            id="navbar-dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            <span className="navbar-toggler-icon"></span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/argus-react">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/models">
              Models
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/maas">
              Modelling as a Service
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/company">
              Company
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/argus-react" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/models" className="nav-link">
                Models
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/maas" className="nav-link">
                Modelling as a Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/company" className="nav-link">
                Company
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default ArgusHeader;
