import PropTypes from "prop-types";
import Icons from "../assets/sprite.svg";

const Icon = ({ id, className = "" }) => (
  <svg className={className}>
    <use href={Icons + "#" +  id} />
  </svg>
);

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Icon;