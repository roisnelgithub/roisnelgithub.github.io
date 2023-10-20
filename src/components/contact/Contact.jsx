import gitHub from "../../assets/icons/git_hub_icon.svg";
import linkIn from "../../assets/icons/link_in_icon.svg";

import "./contact.styles.css";

const Contact = () => {
  return (
    <div>
      <div className="social-media">
        <a
          href="https://github.com/roisnelgithub"
          target="_blank"
          rel="noreferrer"
          className="link-to-social-media"
        >
          <img className="linkButton" src={gitHub} alt="GitHub icon"></img>
        </a>
        <a
          href="https://linkedin.com/in/roisnel-adán-trenal-38b244295"
          target="_blank"
          rel="noreferrer"
          className="link-to-social-media"
        >
          <img className="linkButton" src={linkIn} alt="LinkIn icon"></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
