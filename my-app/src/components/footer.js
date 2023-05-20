import Instagram from "../Images/instagram.png";
import Twitter from "../Images/twitter.png";
import Youtube from "../Images/youtube.png";
import "./style.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
 * It's a footer that has 3 columns, each with a title and a list of links.
 * @returns A footer with a bunch of links and icons.
 */
function ArgusFooter() {
  return (
    <footer className="footer-block">
      <div className="d-flex flex-column align-items-center footer-space"></div>
      <div className="row footer-links">
        <div className="col-md-4 col-lg-4">
          <div className="footer-col">
            <b>
              <Link to="/models" className="footer-link">
                Model
              </Link>
            </b>
            <div className="footer-link footer-pad">
              <Link to="/models">
                <p>Characters</p>
                <p>Items</p>
                <p>Environment</p>
                <p>Architectural Visualization</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="footer-col">
            <b>
              <Link to="/maas" className="footer-link">
                Modelling as a Service
              </Link>
            </b>
            <div className="footer-link footer-pad">
              <Link to="/maas">
                <p>What is MaaS?</p>
                <p>Testimonials</p>
                <p>Service & Support</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="footer-col">
            <b>
              <Link to="/company" className="footer-link">
                Company
              </Link>
            </b>
            <div className="footer-link footer-pad">
              <Link to="/company">
                <p>Who are we?</p>
                <p>Our team</p>
                <p>News</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-left">
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
          <Link to="/privacy_policy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
        <div className="col text-right">© 2023 Argus All rights reserved</div>
      </div>
      <div className="d-flex flex-column align-items-center footer-space"></div>
    </footer>
  );
}

export default ArgusFooter;
