import { useState, useEffect } from "react";
import "../styles/ProjectForm.css";

function ProjectForm({
  formData,
  handleChange,
  handleAddJob,
  handleDeleteJob,
  handleAddField,
  handleDeleteField,
}) {
  // console.log(formData);
  const forms = Object.keys(formData);
  // console.log(forms);

  const [index, setIndex] = useState(0);
  const hasPrev = index > 0;
  const hasNext = index < forms.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (hasNext) setIndex(index + 1);
  };

  // Update index when a job is added or deleted
  // Update index when forms length changes
  useEffect(() => {
    if (forms.length === 0) {
      setIndex(0);
    } else if (index >= forms.length) {
      setIndex(forms.length - 1);
    }
  }, [forms.length, index]);

  return (
    <>
      <div className="header">
        <h2>{`Project ${index + 1}`}</h2>
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
        <button onClick={handleAddJob}>Add Project</button>
        <button
          onClick={() => handleDeleteJob(forms[index])}
          disabled={index === 0}
        >
          Delete Project
        </button>
      </div>

      <div>
        {forms.map((jobKey, idx) => (
          <div
            key={jobKey}
            style={{ display: index === idx ? "block" : "none" }}
          >
            <DynamicForm
              formData={formData[jobKey]}
              jobKey={jobKey}
              handleChange={handleChange}
              handleAddField={() =>
                handleAddField("project", jobKey, "bulletPoint")
              }
              handleDeleteField={(key) =>
                // handleDeleteField("complex", "language", key)
                handleDeleteField("project", jobKey, key, "bulletPoint")
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

function DynamicForm({
  formData,
  jobKey,
  handleChange,
  handleAddField,
  handleDeleteField,
}) {
  // console.log(formData);
  return (
    <>
      <form className="projectForm">
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor={`${jobKey}_name`}>Name</label>
            <input
              type="text"
              id={`${jobKey}_name`}
              name="name"
              placeholder="Project Name"
              value={formData.name}
              onChange={handleChange("project", jobKey)}
            />
          </div>
          <div className="label-input">
            <label htmlFor={`${jobKey}_techStack`}>Tech Stack</label>
            <input
              type="text"
              id={`${jobKey}_techStack`}
              name="techStack"
              placeholder="Tech Stack"
              value={formData.techStack}
              onChange={handleChange("project", jobKey)}
            />
          </div>
        </div>
      </form>
      <form>
        <div className="inner-div">
          {Object.keys(formData.bulletPoint).map((key) => (
            <div className="input" key={key}>
              <label htmlFor={key}></label>
              <input
                type="text"
                id={key}
                name={key}
                placeholder="Key Achievement"
                value={formData.bulletPoint[key]}
                onChange={handleChange("project", jobKey, "bulletPoint")}
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
    </>
  );
}

export default ProjectForm;
