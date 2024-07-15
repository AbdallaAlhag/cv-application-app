import "../styles/EtcForm.css";

const EtcForm = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Certifications, Skills & Interests</h2>
      <form className="etcForm">
        <div className="inner-div">
          <p>Certificates</p>
          <label htmlFor="certificates"></label>
          <textarea
            id="certificates"
            name="certificates"
            rows="6"
            cols="50"
            placeholder="If you have any relevant ones; otherwise leave blank"
            value={formData.certificates}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="inner-div">
          <p>Skills</p>
          <label htmlFor="skills"></label>
          <textarea
            id="skills"
            name="skills"
            rows="6"
            cols="50"
            placeholder="If you have any relevant ones; otherwise leave blank"
            value={formData.skills}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="inner-div">
          <p>Interests</p>
          <label htmlFor="interests"></label>
          <textarea
            id="interests"
            name="interests"
            rows="6"
            cols="50"
            placeholder="Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football"
            value={formData.interests}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default EtcForm;
