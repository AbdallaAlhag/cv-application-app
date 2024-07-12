import  { useState } from "react";

const TechForm = ({ formData, handleChange }) => {
  const [activeForm, setActiveForm] = useState("complex");

  const toggleForm = () => {
    setActiveForm(activeForm === "complex" ? "simple" : "complex");
  };

  return (
    <div>
      <h1>Technical Skills</h1>
      <button onClick={toggleForm}>Toggle Simple/Complex</button>
      {activeForm === "complex" && (
        <ComplexForm formData={formData.complex} handleChange={handleChange} />
      )}
      {activeForm === "simple" && (
        <SimpleForm formData={formData.simple} handleChange={handleChange} />
      )}
    </div>
  );
};

const ComplexForm = ({ formData, handleChange }) => {
  const forms = ["language", "external", "tool"];
  const headers = ["Languages", "Frameworks, Libraries, & Databases", "Tools"];

  const [index, setIndex] = useState(0);
  const hasPrev = index > 0;
  const hasNext = index < forms.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (hasNext) setIndex(index + 1);
  };

  return (
    <>
      <div className="complex-header">
        <h2>{headers[index]}</h2>
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
      </div>
      {index === 0 && (
        <LanguageForm
          formData={formData.language}
          handleChange={handleChange("tech", "complex", "language")}
        />
      )}
      {index === 1 && (
        <ExternalForm
          formData={formData.external}
          handleChange={handleChange("tech", "complex", "external")}
        />
      )}
      {index === 2 && (
        <ToolForm
          formData={formData.tool}
          handleChange={handleChange("tech", "complex", "tool")}
        />
      )}
    </>
  );
};

const LanguageForm = ({ formData, handleChange }) => (
  <div>
    <form>
      <div className="inner-div">
        {Object.keys(formData).map((key) => (
          <div className="input" key={key}>
            <label htmlFor={key}></label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder="language"
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </form>
  </div>
);

const ExternalForm = ({ formData, handleChange }) => (
  <div>
    <form>
      <div className="inner-div">
        {Object.keys(formData).map((key) => (
          <div className="input" key={key}>
            <label htmlFor={key}></label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder="external"
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </form>
  </div>
);

const ToolForm = ({ formData, handleChange }) => (
  <div>
    <form>
      <div className="inner-div">
        {Object.keys(formData).map((key) => (
          <div className="input" key={key}>
            <label htmlFor={key}></label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder="tool"
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </form>
  </div>
);

const SimpleForm = ({ formData, handleChange }) => (
  <div>
    <form>
      <div className="inner-div">
        {Object.keys(formData).map((key) => (
          <div className="input" key={key}>
            <label htmlFor={key}></label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder="skill"
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </form>
  </div>
);

export default TechForm;
