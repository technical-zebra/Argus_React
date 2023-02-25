import "./style.css";

function VideoIframe() {
  return (
    <iframe
      className="cover-video"
      src="https://www.youtube.com/embed/DJ2hcC1orc4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}

function MaaSIntro() {
  return (
    <div className="text-content saas-intro">
      <div>
        <div className="saas-intro-title">
          <br></br>
          <h2>Start your intelligent modelling now!</h2>
          <br></br>
        </div>
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
          <button class="btn btn-primary saas-intro-btn" type="button">Explore Modelling as a Service</button>
          <div className="saas-intro-space"></div>
        </div>
      </div>
    </div>
  );
}

function GalleryHomepage(){
    return(
        <div></div>
    );
}

function Homepage() {
  return (
    <div className="row flex-wrap justify-content-center">
      <div class="col d-flex justify-content-center">
        <VideoIframe />
      </div>
      <div class="col d-flex justify-content-center">
        <MaaSIntro />
      </div>
      <div class="col d-flex justify-content-center">
        <GalleryHomepage />
      </div>
    </div>
  );
}

export default Homepage;
