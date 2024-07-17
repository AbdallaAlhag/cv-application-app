import { useState, useEffect } from "react";
import "../styles/WorkForm.css";

function WorkForm({
  formData,
  handleChange,
  handleAddItem,
  handleDeleteItem,
  handleAddField,
  handleDeleteField,
}) {
  // console.log(formData);
  const forms = Object.keys(formData);
  console.log(forms);

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
        <h2>{`Job ${index + 1}`}</h2>
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
        <button onClick={handleAddItem("work")}>Add Job</button>{" "}
        <button
          onClick={() => handleDeleteItem("work", forms[index])}
          disabled={index === 0}
        >
          Delete Job
        </button>
      </div>

      <div>
        {forms.map((jobKey, idx) => (
          <div
            key={jobKey}
            style={{ display: index === idx ? "block" : "none" }}
          >
            {/* {console.log(jobKey)} */}
            <DynamicForm
              formData={formData[jobKey]}
              jobKey={jobKey}
              handleChange={handleChange}
              handleAddField={() =>
                handleAddField("work", jobKey, "bulletPoint")
              }
              handleDeleteField={(key) =>
                // handleDeleteField("complex", "language", key)
                handleDeleteField("work", jobKey, key, "bulletPoint")
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
      <form className="workForm">
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor={`${jobKey}_name`}>Name</label>
            <input
              type="text"
              id={`${jobKey}_name`}
              name="name"
              placeholder="Company Name"
              value={formData.name}
              onChange={handleChange("work", jobKey)}
            />
          </div>
          <div className="label-input">
            <label htmlFor={`${jobKey}_title`}>Title</label>
            <input
              type="text"
              id={`${jobKey}_title`}
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange("work", jobKey)}
            />
          </div>
        </div>
        <div className="inner-div">
          <div className="label-input">
            <label htmlFor={`${jobKey}_duration`}>Duration</label>
            <input
              type="text"
              id={`${jobKey}_duration`}
              name="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleChange("work", jobKey)}
            />
          </div>
          <div className="label-input">
            <label htmlFor={`${jobKey}_address`}>Address</label>
            <input
              type="text"
              id={`${jobKey}_address`}
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange("work", jobKey)}
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
                onChange={handleChange("work", jobKey, "bulletPoint")}
              />
              <button
                type="button"
                onClick={() => {
                  // handleDeleteField(jobKey,'bulletPoint',key);
                  // handleDeleteField("work", jobKey, key, "bulletPoint");
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
            // handleAddField(jobKey,'bulletPoint');
            // handleAddField("work", jobKey, "bulletPoint");
            handleAddField();
          }}
        >
          Add More
        </button>
      </form>
    </>
  );
}

export default WorkForm;
