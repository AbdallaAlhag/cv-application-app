import "../styles/LinkForm.css";

const LinkForm = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Links</h2>
      <form className="linkForm">
        <div className="outer-div">
          <p>Website</p>
          <div>
            <label className="title">
              <span>URL</span>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="https://www.MatthewAHill.com"
                value={formData.website}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label className="title">
              <span>Text</span>
              <input
                type="text"
                id="websiteText"
                name="websiteText"
                placeholder="MatthewAHill.com"
                value={formData.websiteText}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="outer-div">
          <p>Linkedin</p>
          <div className="inner-div">
            <label htmlFor="linkedin"></label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="https://www.linkedin.com/MatthewAHill-123"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="inner-div">
            <label htmlFor="linkedinText"></label>
            <input
              type="text"
              id="linkedinText"
              name="linkedinText"
              placeholder="MatthewAHill-123"
              value={formData.linkedinText}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="outer-div">
          <p>Github</p>
          <div className="inner-div">
            <label htmlFor="github"></label>
            <input
              type="text"
              id="github"
              name="github"
              placeholder="https://www.github.com/MatthewAHill"
              value={formData.github}
              onChange={handleChange}
            />
          </div>
          <div className="inner-div">
            <label htmlFor="githubText"></label>
            <input
              type="text"
              id="githubText"
              name="githubText"
              placeholder="MatthewAHill"
              value={formData.githubText}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default LinkForm;
