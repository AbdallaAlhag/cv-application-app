const LinkForm = () => {
  return (
    <>
      <h2>Links</h2>
      <form>
        <div>
          <p>website</p>
          <div>
            <label>
              <span>URL</span>
              <input type="text" id="website" name="website" />
            </label>
          </div>
          <div>
            <label>
              <span>Text</span>
              <input type="text" id="websiteText" name="websiteText" />
            </label>
          </div>
        </div>

        <div>
          <p>Linkedin</p>
          <div>
            <label htmlFor="linkedin"></label>
            <input type="text" id="linkedin" name="linkedin" />
          </div>
          <div>
            <label htmlFor="linkedinText"></label>
            <input type="text" id="linkedinText" name="linkedinText" />
          </div>
        </div>

        <div>
          <p>GitHub</p>
          <div>
            <label htmlFor="GitHub"></label>
            <input type="text" id="GitHub" name="GitHub" />
          </div>
          <div>
            <label htmlFor="GitHubText"></label>
            <input type="text" id="GitHubText" name="GitHubText" />
          </div>
        </div>
      </form>
    </>
  );
};

export default LinkForm;
