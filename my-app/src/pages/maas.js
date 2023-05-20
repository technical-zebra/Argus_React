import React from "react";
import { useNavigate } from "react-router-dom";
import "./maas.scss";
import coverImage from "../Images/flying drone.jpg";
import comparsion from "../Images/comparsion.png";
import drone from "../Images/drone on hand.jpg";

function CoverImage(props) {
  return (
    <div className="cover-image-container">
      <img src={props.src} alt={props.alt} className="cover-image" />
      <div className="cover-image-mask"></div>
      <div className="cover-image-title">{props.title}</div>
    </div>
  );
}

function Intro() {
  return (
    <div className="text-content saas-intro">
      <div>
        <div className="saas-intro-space2"></div>
        <div className="saas-intro-title">
          <br></br>
          <h3>
            <b>What is Modelling as a Service?</b>
          </h3>
          <br></br>
        </div>
        <div className="saas-intro-space2"></div>
        <div className="row">
          <div className="col-md-4 col-lg-4 saas-col">
            <h4>Pay a fee for each unit successfully modeled</h4>
          </div>
          <div className="col-md-4 col-lg-4 saas-col">
            <h4>
              Half the cost of Modelling with AI-powered drone modelling
              technology
            </h4>
          </div>
          <div className="col-md-4 col-lg-4 saas-col">
            <h4>Instant savings starting your first customed model</h4>
          </div>
        </div>
        <div className="saas-intro-space"></div>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="testimonial-bgcolor d-flex justify-content-center">
      <div className="testimonial-block">
        <br></br>
        <h2>Hear it from our customers</h2>
        <br></br>
        <p>
          Don’t just take it from us. Listen to what some of our customers are
          saying about Modelling as a Service with Argus.
        </p>
        <div className="customer-comment d-flex justify-content-center">
          <div>
            <p className="comment-text">
              “We had wanted to automate these repetitive tasks for years;
              however, spending vast amount of a capital expenditures for
              intelligent modelling didn’t make sense. When Argus presented us
              with its Modelling-as-a-Service model, it provided Blizzard a
              fantastic opportunity to automate our operation.”
            </p>
            <br></br>
            <p className="customer-name">
              <span>Bobby Kotick</span> --- CEO at Activision Blizzard
            </p>
          </div>
        </div>
        <div className="spacing-50"></div>
      </div>
    </div>
  );
}

function GetStart() {
  const navigate = useNavigate();

  return (
    <div className="get-start-block">
      <div className="row">
        <div className="col-md-6 col-lg-6 left-side">
          <h1>Discover advantages of Modelling as a Service</h1>
          <br />
          <p>
            Contact our team to see how we can help with intelligent automation
            at your facility.
          </p>
          <br />
          <button
            className="btn btn-outline-light button rounded-0 px-4 py-3"
            type="button"
            onClick={() => navigate("/contact")}
          >
            <h3>Get started -&gt;</h3>
          </button>
        </div>
        <div className="col-md-6 col-lg-6 right-side">
          <img className="image" src={drone} alt="A man flying a drone"></img>
        </div>
      </div>
    </div>
  );
}

function MaaS() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <CoverImage
            src={coverImage}
            alt="a drone image"
            title="Rapid and low cost modelling at minimum labor effort"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <Intro />
        </div>
      </div>
      <div className="row justify-content-center">
        <br></br>
        <div className="d-flex justify-content-center">
          <img className="comparsion-graph"
            src={comparsion}
            alt="maas comparsion"
          ></img>
        </div>
        <div className="spacing-50"></div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <Testimonial />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <GetStart />
        </div>
      </div>
    </div>
  );
}

export default MaaS;
