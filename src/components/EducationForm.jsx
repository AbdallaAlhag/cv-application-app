import { useState } from "react";
import "../styles/EducationForm.css";

const EducationForm = ({ formData, handleChange }) => {
  const [activeForm, setActiveForm] = useState("degree1");

  const toggleForm = () => {
    setActiveForm(activeForm === "degree1" ? "degree2" : "degree1");
  };

  return (
    <div>
      <h1>Education Form</h1>
      <button onClick={toggleForm}>Toggle Form</button>
      {activeForm === "degree1" && (
        <FormA
          formData={formData.degree1}
          handleChange={handleChange("education", "degree1")}
        />
      )}
      {activeForm === "degree2" && (
        <FormB
          formData={formData.degree2}
          handleChange={handleChange("education", "degree2")}
        />
      )}
    </div>
  );
};

const FormA = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>
        Degree 1 <i>Most recent first</i>
      </h2>
      <form className="educationForm">
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="university">University Name</label>
            <input
              type="text"
              id="university"
              name="university"
              placeholder="San Diego State University"
              value={formData.university}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="MS, Computer Science"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="graduation">Graduation</label>
            <input
              type="text"
              id="graduation"
              name="graduation"
              placeholder="Winter 2024"
              value={formData.graduation}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="other">Other</label>
            <input
              type="text"
              id="other"
              name="other"
              placeholder="GPA, Classes, or Honors"
              value={formData.other}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const FormB = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Degree 2</h2>
      <form className="educationForm">
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="university">University Name</label>
            <input
              type="text"
              id="university"
              name="university"
              placeholder="Diablo Valley College"
              value={formData.university}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="BA, Physics"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor="graduation">Graduation</label>
            <input
              type="text"
              id="graduation"
              name="graduation"
              placeholder="Spring 2022"
              value={formData.graduation}
              onChange={handleChange}
            />
          </div>
          <div className="label-input">
            <label htmlFor="other">Other</label>
            <input
              type="text"
              id="other"
              name="other"
              placeholder="GPA, Classes, or Honors"
              value={formData.other}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
