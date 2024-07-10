const EtcForm = () => {
  return (
    <>
      <h2>Certifications, Skills & Interests</h2>
      <form>
        <div>
          <p>Certificates</p>
          <label htmlFor="certificates"></label>
          <textarea id="certificates" name="certificates" rows="4" cols="50" placeholder="If you have any relevant ones; otherwise leave blank"></textarea>
        </div>
        <div>
          <p>Skills</p>
          <label htmlFor="Skills"></label>
          <textarea id="Skills" name="Skills" rows="4" cols="50" placeholder="If you have any relevant ones; otherwise leave blank"></textarea>
        </div>
        <div>
          <p>Interests</p>
          <label htmlFor="Interests"></label>
          <textarea id="Interests" name="Interests" rows="4" cols="50" placeholder="Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football"></textarea>
        </div>
      </form>
    </>
  );
};

export default EtcForm;
<div>
  <label htmlFor="summary">Professional Summary</label>
  <textarea id="summary" name="summary" rows="4" cols="50"></textarea>
</div>;
