import "../styles/PersonalForm.css";

const PersonalForm = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Personal Details</h2>
      <form className="personalForm">
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Lori A Grimes"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="JobTitle">
              Job Title <i>optional</i>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Software Engineer"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="LoriAGrimes@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="310-666-4587"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inner-div address">
          <div className="label-input ">
            <label htmlFor="address">City, State, Zip</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Burbank, California(CA), 91505"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="summary">
              Professional Summary <i>optional</i>
            </label>
            <textarea
              id="summary"
              name="summary"
              rows="3"
              cols="50"
              placeholder="Technology-driven Software Engineer with 4 years of experience in..."
              value={formData.summary}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalForm;
