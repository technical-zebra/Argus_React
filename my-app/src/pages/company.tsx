import drone from "../Images/company_drone.jpg";
import discount from "../Images/discount.jpg";
import member1 from "../Images/member1.png";
import member2 from "../Images/member2.png";
import member3 from "../Images/member3.png";
import member4 from "../Images/member4.png";
import coverImage from "../Images/company_cover.jpg";
import "./company.scss";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

import AnimatedText from "../components/AnimatedText";
import React from "react";

interface CoverImageProps {
  src: string;
  alt: string;
}

/**
 * Generate a cover image block that contains an image and a customized text block
 * @param props - CoverImageProps
 * @returns A div with a className of cover-image-container.
 */
const CoverImage: FC<CoverImageProps> = ({ src, alt }) => {
  return (
    <div className="cover-image-container">
      <img src={src} alt={alt} className="cover-image" />
      <div className="cover-image-mask"></div>
      <WhoAreWe />
    </div>
  );
};

/**
 * Generate who are we block
 * @returns A div with a className of "WhoAreWe-bgcolor d-flex justify-content-center cover-image-title"
 */
function WhoAreWe() {
  return (
    <div className="WhoAreWe-bgcolor d-flex justify-content-center cover-image-title">
      <div className="d-flex justify-content-center flex-column">
        <div style={{ height: "50px" }}></div>
        <AnimatedText>
          <h1>Who are we?</h1>
        </AnimatedText>
        <div className="gap"></div>
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
      <AnimatedText>
        <h1>Our Team</h1>
      </AnimatedText>
      <div style={{ height: "50px" }}></div>
      <div className="box">
        {members.names.map((item, index) => (
          <div className="d-flex justify-content-center flex-column" key={item}>
            <div className="row member">
              <div className="col-sm-auto col-md-auto col-lg-auto img-block">
                <img
                  className="member-img"
                  src={members.images[index]}
                  alt="the member"
                ></img>
              </div>
              <div className="col-sm-12 col-md-9 col-lg-9">
                <br></br>
                <h3 className="member-name">{item}</h3>
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
  );
}

/**
 * Generate News block
 * @returns A React component.
 */
function News() {
  return (
    <div className="news row">
      <div className="col-2 col-md-2"></div>
      <div className="col-12 col-md-8">
        <div style={{ height: "50px" }}></div>
        <h2>News</h2>
        <br></br>
        <img src={discount} alt="discount cards" className="img-fluid"></img>
        <br></br>
        <p>20% off discount for all models </p>
        <p>
          To celebrate the opening of the company, we provide a 20% off discount
          on all models until the end of July 2022.
        </p>
        <p>Published by Ke Zhang</p>
        <p className="u-l">Read more</p>
        <br></br>
        <div style={{ height: "50px" }}></div>
      </div>
      <div className="col-2 col-md-2"></div>
    </div>
  );
}

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="contact-us-block">
      <div className="row align-items-center">
        <div className="col-lg-6 d-flex justify-content-center no1">
          <AnimatedText>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Bring Realistic and detailed model to your business</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-outline-light button rounded-0 px-4 py-3"
                    type="button"
                    onClick={() => navigate("/contact")}
                  >
                    Get started -&gt;
                  </button>
                </div>
              </div>
            </div>
          </AnimatedText>
        </div>

        <div className="col-lg-6 d-flex flex-column no2">
          <img className="image" src={drone} alt="A man flying a drone"></img>
        </div>
      </div>
    </div>
  );
}

const Company: FC = () => {
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
};

export default Company;
