// import './Navigation.css';
import '../styles/button.css';
import PropTypes from "prop-types";

const Navigation = ({ setForm }) => {
  return (
    <nav className="navigation">
      <button className="nav-button ui-btn" onClick={() => setForm("personal")}>
        <span>Personal</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("link")}>
        <span>Link</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("education")}>
        <span>Education</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("tech")}>
        <span>Tech</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("work")}>
        <span>Work</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("project")}>
        <span>Project</span>
      </button>
      <button className="nav-button ui-btn" onClick={() => setForm("etc")}>
        <span>Skills/Certs</span>
      </button>
    </nav>
  );
};

Navigation.propTypes = {
  setForm: PropTypes.func.isRequired,
};

export default Navigation;
