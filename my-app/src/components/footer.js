import Instagram from "../Images/instagram.png";
import Twitter from "../Images/twitter.png";
import Youtube from "../Images/youtube.png";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ArgusFooter() {
  const navigate = useNavigate();

  function goToModel(history) {
    history.push("/models");
  }
  
  function goToMaaS(history) {
    history.push("/maas");
  }
  
  function goToCompany(history) {
    history.push("/company");
  }
  

  return (
    <footer className="footer-block">
      <div style={{ height: "3em" }}></div>
      <div className="row footer-links">
        <div className="col footer-col">
          <br></br>
          <b>
            <Link to="/models">
              <span className="footer-link">Model</span>
            </Link>
          </b>
          <div style={{ height: "3em" }}></div>
          <div className="footer-link">
          <Link to="/models">
            <p>Characters</p>
            <p>Items</p>
            <p>Environment</p>
            <p>Architectural Visualization</p>
            </Link>
          </div>
        </div>
        <div className="col footer-col">
          <br></br>
          <b>
            <Link to="/maas">
              <span className="footer-link">Modelling as a Service</span>
            </Link>
          </b>
          <div style={{ height: "3em" }}></div>
          <div className="footer-link">
          <Link to="/maas">
            <p>What is MaaS?</p>

            <p>Testimonials</p>

            <p>Service & Support</p>
            </Link>
          </div>
        </div>
        <div className="col footer-col">
          <br></br>
          <b>
            <Link to="/company">
              <span className="footer-link">Company</span>
            </Link>
          </b>
          <div style={{ height: "3em" }}></div>
          <div className="footer-link">
          <Link to="/company">
            <p>Who are we?</p>

            <p>Our team</p>

            <p>News</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <Link to="https://www.instagram.com/">
            <img
              className="media-icon"
              src={Instagram}
              alt="icon link to Instagram"
            />
          </Link>
        </div>
        <div>
          <Link to="https://www.youtube.com/">
            <img
              className="media-icon"
              src={Youtube}
              alt="icon link to Youtube"
            />
          </Link>
        </div>
        <div>
          <Link to="https://twitter.com/?lang=en">
            <img
              className="media-icon"
              src={Twitter}
              alt="icon link to Twitter"
            />
          </Link>
        </div>
      </div>
      <div className="row last-line">
        <div className="col">
          <Link to="/privacy_policy">
            <span className="footer-link">Privacy Policy</span>
          </Link>
        </div>
        <div className="col">© 2023 Argus All rights reserved</div>
      </div>
      <div style={{ height: "3em" }}></div>
    </footer>
  );
}

export default ArgusFooter;
