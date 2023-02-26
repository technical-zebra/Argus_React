import "./style.css";
import Gallery from "./gallery";
import home1 from "./Images/home1.jpg";
import home2 from "./Images/home2.jpg";
import home3 from "./Images/home3.png";
import home4 from "./Images/home4.png";
import homeDrone from "./Images/home_drone.jpg";

function VideoIframe() {
  return (
    <iframe
      className="cover-video"
      src="https://www.youtube.com/embed/DJ2hcC1orc4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

function MaaSIntro() {
  return (
    <div className="text-content saas-intro">
      <div>
      <div className="saas-intro-space2"></div>
        <div className="saas-intro-title">
          <br></br>
          <h1><b>Start your intelligent modelling now!</b></h1>
          <br></br>
        </div>
        <div className="saas-intro-space2"></div>
        <div className="row saas-intro-content">
          <div className="col saas-intro-col">
            <h3>Modelling for flexible needs</h3>
            <br></br>
            <p>
              Customize to model different objects and different environments
              that specify by customers
            </p>
          </div>
          <div className="col saas-intro-col">
            <h3>Cost reduction</h3>
            <br></br>
            <p>
              30-80% reduction in manual modelling time and 30-80% cost for
              purchase models
            </p>
          </div>
          <div className="col saas-intro-col">
            <h3>High resolution and realistic shape</h3>
            <br></br>
            <p>
              AI-powered drone and Intelligent modelling on real objects provide
              high resolution and realistic details on model
            </p>
          </div>
        </div>
        <div className="saas-intro-title">
          <br></br>
          <button className="btn btn-primary saas-intro-btn" type="button">
            Explore Modelling as a Service
          </button>
          <div className="saas-intro-space"></div>
        </div>
      </div>
    </div>
  );
}

function GetStart() {
  return (
    <div className="get-start-block">
      <div class="row h-100">
        <div class="col-6 d-flex justify-content-center h-100 flex-column no1">
          <h2>Bring Realistic and detailed model to your business</h2>
          <br></br>
          <button className="btn btn-outline-light button" type="button">
            Get started -&gt;
          </button>
        </div>
        <div class="col-6 d-flex justify-content-center h-100 flex-column no2">
          <img className="image" src={homeDrone}></img>
        </div>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <VideoIframe />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <MaaSIntro />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <Gallery
            title="Characters / Items / Environment / Architectural Visualization"
            images={[home1, home2, home3, home4]}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center home-col">
          <GetStart />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
