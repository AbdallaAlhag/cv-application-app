// import './Navigation.css';
import PropTypes from "prop-types";

const Navigation = ({ setForm }) => {
  return (
    <nav className="navigation">
      <button className="nav-button" onClick={() => setForm("personal")}>
        Personal
      </button>
      <button className="nav-button" onClick={() => setForm("link")}>
        Link
      </button>
      <button className="nav-button" onClick={() => setForm("etc")}>
        Skills/Certs
      </button>
      <button className="nav-button" onClick={() => setForm("education")}>
        Education
      </button>
      <button className="nav-button" onClick={() => setForm("tech")}>
        Tech
      </button>
    </nav>
  );
};

Navigation.propTypes = {
  setForm: PropTypes.func.isRequired,
};

export default Navigation;
