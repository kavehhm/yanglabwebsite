import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="info-contact">
        <div className="contact-req">
          <p>
            If you're interested in joining The Yang Lab, please email our
            medical student research fellow at{" "}
            <a
              className="email-click"
              href="mailto:YMalkhasyan@mednet.ucla.edu?subject=Subject&body=Message%20goes%20here"
            >
              YMalkhasyan@mednet.ucla.edu
            </a>
          </p>
        </div>
        <div className="socialmedias">
          <div className="profiles">
            <h2>Instagram</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/theyanglab1"
            >
              @TheYanglab1
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/isaacyangmd"
            >
              @IsaacYangMD
            </a>
          </div>
          <div className="profiles">
            <h2>Twitter</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/theyanglab1"
            >
              @TheYanglab1
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/IsaacYangMD"
            >
              @IsaacYangMD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
