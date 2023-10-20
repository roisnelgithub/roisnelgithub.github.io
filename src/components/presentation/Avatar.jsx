import PropTypes from "prop-types";

import "./presentation.styles.css";
import avatar from "../../assets/images/avatar.png";

import Contact from "../contact/Contact";

const Avatar = ({ width }) => {
  return (
    <div className="avatar-container">
      <img
        className="avatar--img"
        src={avatar}
        alt="Roisnel's photo"
        width={width}
      />
      <p className="presentation-name">Roisnel Adán Trenal</p>
      <span className="presentation-email">roy.adan.trenal@gmail.com</span>
      <div className="avatar-contact-container">
        <Contact />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  width: PropTypes.string,
};

export default Avatar;
