import { useState } from "react";

const TechForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => {
  const [activeForm, setActiveForm] = useState("complex");

  const toggleForm = () => {
    setActiveForm(activeForm === "complex" ? "simple" : "complex");
  };

  return (
    <div>
      <h1>Technical Skills</h1>
      <button onClick={toggleForm}>Toggle Simple/Complex</button>
      {activeForm === "complex" && (
        <ComplexForm
          formData={formData.complex}
          handleChange={handleChange}
          handleAddField={handleAddField}
          handleDeleteField={handleDeleteField}
        />
      )}
      {activeForm === "simple" && (
        <SimpleForm
          formData={formData.simple}
          handleChange={handleChange}
          handleAddField={handleAddField}
          handleDeleteField={handleDeleteField}
        />
      )}
    </div>
  );
};

const ComplexForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => {
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
          handleAddField={() => handleAddField("tech", "complex", "language")}
          handleDeleteField={(key) =>
            // handleDeleteField("complex", "language", key)
            handleDeleteField("tech", "complex", key, "language")
          }
        />
      )}
      {index === 1 && (
        <ExternalForm
          formData={formData.external}
          handleChange={handleChange("tech", "complex", "external")}
          handleAddField={() => handleAddField("tech", "complex", "external")}
          handleDeleteField={(key) =>
            // handleDeleteField("complex", "external", key)
            handleDeleteField("tech", "complex", key, "external")
          }
        />
      )}
      {index === 2 && (
        <ToolForm
          formData={formData.tool}
          handleChange={handleChange("tech", "complex", "tool")}
          handleAddField={() => handleAddField("tech", "complex", "tool")}
          handleDeleteField={(key) =>
            handleDeleteField("tech", "complex", key, "tool")
          }
        />
      )}
    </>
  );
};

const LanguageForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => (
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
            <button
              type="button"
              onClick={() => {
                handleDeleteField(key);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          handleAddField();
        }}
      >
        Add More
      </button>
    </form>
  </div>
);

const ExternalForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => (
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
            <button
              type="button"
              onClick={() => {
                handleDeleteField(key);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          handleAddField();
        }}
      >
        Add More
      </button>
    </form>
  </div>
);

const ToolForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => (
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
            <button
              type="button"
              onClick={() => {
                handleDeleteField(key);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          handleAddField();
        }}
      >
        Add More
      </button>
    </form>
  </div>
);

const SimpleForm = ({
  formData,
  handleChange,
  handleAddField,
  handleDeleteField,
}) => (
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
            <button
              type="button"
              onClick={() => {
                // handleDeleteField("simple", null, key);
                handleDeleteField("tech", "simple", key, null);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          // handleAddField("simple", null);
          handleAddField("tech", "simple", null);
        }}
      >
        Add More
      </button>
    </form>
  </div>
);

export default TechForm;
