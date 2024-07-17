import "../styles/EtcForm.css";

const EtcForm = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Certifications, Skills & Interests</h2>
      <form className="etcForm">
        <div className="inner-div">
          <p>Certificates</p>
          <label htmlFor="certificate"></label>
          <textarea
            id="certificate"
            name="certificate"
            rows="6"
            cols="50"
            placeholder="If you have any relevant ones; otherwise leave blank"
            value={formData.certificate}
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
          <label htmlFor="interest"></label>
          <textarea
            id="interest"
            name="interest"
            rows="6"
            cols="50"
            placeholder="Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football"
            value={formData.interest}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default EtcForm;
