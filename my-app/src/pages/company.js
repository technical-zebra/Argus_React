import drone from "../Images/company_drone.jpg";
import discount from "../Images/discount.jpg";
import member1 from "../Images/member1.png";
import member2 from "../Images/member2.png";
import member3 from "../Images/member3.png";
import member4 from "../Images/member4.png";
import coverImage from "../Images/company_cover.jpg";
import "./company.css";

/**
 * It returns a div with a background image, a mask, and a WhoAreWe component
 * @param props - {
 * @returns A div with a class of cover-image-container.
 */
function CoverImage(props) {
  return (
    <div className="cover-image-container">
      <img src={props.src} alt={props.alt} className="cover-image" />
      <div className="cover-image-mask"></div>
      <WhoAreWe />
    </div>
  );
}

/**
 * It returns a div with a background image and some text
 * @returns A div with a className of "WhoAreWe-bgcolor d-flex justify-content-center
 * cover-image-title"
 */
function WhoAreWe() {
  return (
    <div className="WhoAreWe-bgcolor d-flex justify-content-center cover-image-title">
      <div className="d-flex justify-content-center flex-column">
        <div style={{ height: "50px" }}></div>
        <h1>Who are we?</h1>
        <div style={{ height: "50px" }}></div>
        <p>
          Argus is an innovative company that uses intelligent and automative
          drone modelling system to create a new era for the file, show,
          animation, and game industry. With state of the art artificial
          intelligent technologies, we can turn real-world objects into high
          quality and interactive 3D models.
        </p>
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
}

/**
 * Generate Our team block
 * @returns A React component.
 */
function OurTeam() {
  const members = {
    names: ["Meng Lai", "Alex Smith", "Jeanette Keng", "Tom Feng"],
    roles: [
      "Co-Founder, Computer vision specialist",
      "Co-Founder, 3D modelling and simulation specialist",
      "Co-Founder, CAD, GIS and photogrammetry specialist",
      "Co-Founder, Drone mechanics specialist",
    ],
    intros: [
      "Meng draws on his 20 years of experience as a technology researcher and executive to develop stand out, award-winning computer vision applications. He is delicated to apply deep learning to shape Argus's solutions that meet stakeholder needs.",
      "Alex is a software developer at Argus, Alex has worked with Unity for nearly a decade, having built interactive, immersive simulations for both training and gaming industry.",
      "Jeanette is an experienced 3D designer focusing on 3D art, UI/UX design and game development. Her passion is in creating immersive experience through the power of 3D modelling, inspired by travels and the different cultures from various countries.",
      "Tom is an experienced robot mechanics engineer and robot program developer with over 20 years of experience implementing enterprise robotic systems, as well as 6 years of experience implementing drone systems.",
    ],
    images: [member1, member2, member3, member4],
  };

  return (
    <div className="our-team-block">
      <div style={{ height: "50px" }}></div>
      <h1>Our Team</h1>
      <div className="box">
        <div className="box-in-box" style={{ width: "70%" }}>
          {members.names.map((item, index) => (
            <div className="d-flex justify-content-center flex-column">
              <div className="row member">
                <div class="col-md-auto img-block">
                  <img
                    class="member-img"
                    src={members.images[index]}
                    alt="image of the member"
                  ></img>
                </div>
                <div class="col-md-9">
                  <br></br>
                  <h3 class="member-name">{item}</h3>
                  <br></br>
                  <p>{members.roles[index]}</p>
                  <br></br>
                  <p>{members.intros[index]}</p>
                </div>
              </div>
              <div style={{ height: "30px" }}></div>
            </div>
          ))}
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
    </div>
  );
}

/**
 * Generate News block
 * @returns A React component.
 */
function News() {
  return (
    <div className="news row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div style={{ height: "50px" }}></div>
        <h2>News</h2>
        <br></br>
        <img
          src={discount}
          alt="discount cards"
          style={{ width: "100%" }}
        ></img>
        <br></br>
        <p>20% off discount for all models </p>
        <p>
          To celebrate the open up of the company we provide 20% off discount to
          all models until end of July, 2022
        </p>
        <p>publish by Ke Zhang</p>
        <p className="u-l">read more</p>
        <br></br>
        <div style={{ height: "50px" }}></div>
      </div>

      <div className="col-md-2"></div>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="contact-us-block">
      <div className="row h-100">
        <div className="col-6 d-flex justify-content-center h-100 flex-column no1">
          <h2>Enable a new era of your business</h2>
          <br></br>
          <button className="btn btn-outline-light button" type="button">
            Contact us -&gt;
          </button>
        </div>
        <div className="col-6 d-flex justify-content-center h-100 flex-column">
          <img className="image" src={drone} alt="A man flying a drone"></img>
        </div>
      </div>
    </div>
  );
}

function Company() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <CoverImage src={coverImage} alt="office" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <OurTeam />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <News />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Company;
