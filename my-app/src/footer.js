import Instagram from "./Images/instagram.png";
import Twitter from "./Images/twitter.png";
import Youtube from "./Images/youtube.png";
import "./style.css";

function ArgusFooter() {
  return (
    <footer className="footer-block">
      <div className="row footer-links">
        <div className="col footer-col">
          <br></br>
          <b>
            <a>
              <span>Model</span>
            </a>
          </b>
          <div className="footer-space"></div>
          <p>Characters</p>
          <p>Items</p>
          <p>Environment</p>
          <p>Architectural Visualization</p>
        </div>
        <div className="col footer-col">
          <br></br>
          <b>
            <a>
              <span>Modelling as a Service</span>
            </a>
          </b>
          <div className="footer-space"></div>
          <p>What is MaaS?</p>
          <p>Testimonials</p>
          <p>Service & Support</p>
        </div>
        <div className="col footer-col">
          <br></br>
          <b>
            <a>
              <span>Company</span>
            </a>
          </b>
          <div className="footer-space"></div>
          <p>Who are we?</p>
          <p>Our team</p>
          <p>News</p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <img
            className="media-icon"
            src={Instagram}
            alt="icon link to Instagram"
          />
        </div>
        <div>
          <img
            className="media-icon"
            src={Youtube}
            alt="icon link to Youtube"
          />
        </div>
        <div>
          <img
            className="media-icon"
            src={Twitter}
            alt="icon link to Twitter"
          />
        </div>
      </div>
      <div className="row last-line">
        <div className="col">Privacy Policy</div>
        <div className="col">© 2023 Argus All rights reserved</div>
      </div>
    </footer>
  );
}

export default ArgusFooter;
