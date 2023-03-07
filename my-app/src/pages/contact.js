import pin from "../Images/pin.png";
import email from "../Images/mail.png";
import phone from "../Images/phone.png";
import { useNavigate } from 'react-router-dom';


function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-block" style={{ width: "60%", margin: "auto" }}>
      <section className="mb-4">
        <h1 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h1>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div style={{ height: "50px" }}></div>
            <div className="text-center text-md-left">
              <button 
                href="#"
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/argus-react")}
                style={{padding: "10px 90px"}}
              >
                Send
              </button>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <img src={pin} alt="pin"></img>
                <p>101 San Francisco Rd, 194126, Singapore</p>
              </li>

              <li>
                <img src={phone} alt="phone"></img>
                <p>+ 65 0000 0000</p>
              </li>

              <li>
                <img src={email} alt="email"></img>
                <p>contact@argus.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
