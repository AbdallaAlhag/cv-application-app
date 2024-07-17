import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PersonalForm from "./components/PersonalForm";
import LinkForm from "./components/LinkForm";
import EtcForm from "./components/EtcForm";
import LivePage from "./components/LivePage";
import EducationForm from "./components/EducationForm";
import TechForm from "./components/TechForm";
import WorkForm from "./components/WorkForm";
import ProjectForm from "./components/ProjectForm";
import PDFPreview from "./components/PDFPreview";
import { dataEmpty, dataFilled } from "./data";

const App = () => {
  // Page State
  const [currentForm, setCurrentForm] = useState("personal");
  // Empty/Filled data state
  const [currentData, setCurrentData] = useState("fill");
  // Form State
  const [formData, setFormData] = useState(dataFilled);
  // live Preview state
  const [isLive, setIsLive] = useState(false);

  // Preview and download state
  const [isPreview, setIsPreview] = useState(false);
  // Fill button State
  const [isFilled, setIsFilled] = useState(true); // Initial state is true for "Fill"

  const toggleFill = () => {
    setIsFilled((prevIsFilled) => !prevIsFilled);
  };

  const handleFormChange =
    (formName, degree = null, category = null) =>
    (e = { target: { name: "", value: "" } }) => {
      const { name, value } = e.target;
      // console.log("wtf");
      // console.log(
      //   `FormName: ${formName}, Degree: ${degree}, Category: ${category}`
      // );
      // console.log(`Name: ${name}, Value: ${value}`);

      setFormData((prevData) => {
        if (degree && category) {
          return {
            ...prevData,
            [formName]: {
              ...prevData[formName],
              [degree]: {
                ...prevData[formName][degree],
                [category]: {
                  ...prevData[formName][degree][category],
                  [name]: value,
                },
              },
            },
          };
        } else if (degree) {
          return {
            ...prevData,
            [formName]: {
              ...prevData[formName],
              [degree]: {
                ...prevData[formName][degree],
                [name]: value,
              },
            },
          };
        } else {
          return {
            ...prevData,
            [formName]: {
              ...prevData[formName],
              [name]: value,
            },
          };
        }
      });
    };

  const handleAddField = (formType, category, subCategory) => {
    setFormData((prevData) => {
      let keys, keyNumbers, maxKey, newKey;

      if (category) {
        if (subCategory) {
          keys = Object.keys(prevData[formType][category][subCategory]);
          keyNumbers = keys.map((key) => parseInt(key.split("_")[1], 10));
          maxKey = Math.max(0, ...keyNumbers);
          newKey = `${subCategory}_${maxKey + 1}`;

          return {
            ...prevData,
            [formType]: {
              ...prevData[formType],
              [category]: {
                ...prevData[formType][category],
                [subCategory]: {
                  ...prevData[formType][category][subCategory],
                  [newKey]: "", // or your desired default value
                },
              },
            },
          };
        } else {
          keys = Object.keys(prevData[formType][category]);
          keyNumbers = keys.map((key) => parseInt(key.split("_")[1], 10));
          maxKey = Math.max(0, ...keyNumbers);
          newKey = `${category}_${maxKey + 1}`;

          return {
            ...prevData,
            [formType]: {
              ...prevData[formType],
              [category]: {
                ...prevData[formType][category],
                [newKey]: "", // or your desired default value
              },
            },
          };
        }
      } else {
        keys = Object.keys(prevData[formType]);
        keyNumbers = keys.map((key) => parseInt(key.split("_")[1], 10));
        maxKey = Math.max(0, ...keyNumbers);
        newKey = `${formType}_${maxKey + 1}`;

        return {
          ...prevData,
          [formType]: {
            ...prevData[formType],
            [newKey]: "", // or your desired default value
          },
        };
      }
    });
  };

  const handleDeleteField = (formType, category, fieldKey, subCategory) => {
    setFormData((prevData) => {
      if (category) {
        if (subCategory) {
          const updatedSubCategory = {
            ...prevData[formType][category][subCategory],
          };
          delete updatedSubCategory[fieldKey];
          return {
            ...prevData,
            [formType]: {
              ...prevData[formType],
              [category]: {
                ...prevData[formType][category],
                [subCategory]: updatedSubCategory,
              },
            },
          };
        } else {
          const updatedCategory = { ...prevData[formType][category] };
          delete updatedCategory[fieldKey];
          return {
            ...prevData,
            [formType]: {
              ...prevData[formType],
              [category]: updatedCategory,
            },
          };
        }
      } else {
        const updatedFormType = { ...prevData[formType] };
        delete updatedFormType[fieldKey];
        return {
          ...prevData,
          [formType]: updatedFormType,
        };
      }
    });
  };

  const handleAddItem = (section) => {
    return () => {
      setFormData((prevData) => {
        const newItemKey = `${section}_${
          Object.keys(prevData[section]).length + 1
        }`;
        if (section === "work") {
          return {
            ...prevData,
            [section]: {
              ...prevData[section],
              [newItemKey]: {
                name: "",
                title: "", // Add specific fields for 'work'
                duration: "", // Add specific fields for 'work'
                address: "", // Add specific fields for 'work'
                bulletPoint: {
                  bullet_1: "",
                  bullet_2: "",
                  bullet_3: "",
                  bullet_4: "",
                },
              },
            },
          };
        } else {
          return {
            ...prevData,
            [section]: {
              ...prevData[section],
              [newItemKey]: {
                name: "",
                techStack: "", // Add specific fields for 'project'
                bulletPoint: {
                  bullet_1: "",
                  bullet_2: "",
                  bullet_3: "",
                  bullet_4: "",
                },
              },
            },
          };
        }
      });
    };
  };

  const handleDeleteItem = (section, itemKey) => {
    setFormData((prevData) => {
      const updatedSection = { ...prevData[section] };
      delete updatedSection[itemKey];
      return {
        ...prevData,
        [section]: updatedSection,
      };
    });
  };

  const changeData = () => {
    if (currentData === "fill") {
      setCurrentData("empty");
      setFormData(dataEmpty);
    } else {
      setCurrentData("fill");
      setFormData(dataFilled);
    }
  };

  const changePage = () => {
    setIsPreview(!isPreview);
  };

  const toggleVisibility = () => {
    setIsLive(!isLive);
  };

  const renderForm = () => {
    switch (currentForm) {
      case "personal":
        return (
          <PersonalForm
            formData={formData.personal}
            handleChange={handleFormChange("personal")}
          />
        );
      case "link":
        return (
          <LinkForm
            formData={formData.link}
            handleChange={handleFormChange("link")}
          />
        );
      case "etc":
        return (
          <EtcForm
            formData={formData.link}
            handleChange={handleFormChange("etc")}
          />
        );
      case "education":
        return (
          <EducationForm
            formData={formData.education}
            handleChange={handleFormChange}
          />
        );
      case "tech":
        return (
          <TechForm
            formData={formData.tech}
            handleChange={handleFormChange}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
        );
      case "work":
        return (
          <WorkForm
            formData={formData.work}
            handleChange={handleFormChange}
            handleAddItem={handleAddItem}
            handleDeleteItem={handleDeleteItem}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
        );
      case "project":
        return (
          <ProjectForm
            formData={formData.project}
            handleChange={handleFormChange}
            handleAddItem={handleAddItem}
            handleDeleteItem={handleDeleteItem}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
        );
      default:
        return <PersonalForm />;
    }
  };

  return (
    <>
      <div className={!isPreview ? "app" : "app hidden"}>
        <div className="side-bar">
          <Navigation setForm={setCurrentForm} />
          <div className="helper-button">
            <button className="btn-53" onClick={toggleVisibility}>
              <div className="original">Button</div>
              <div className="letters">
                <span>B</span>
                <span>U</span>
                <span>T</span>
                <span>T</span>
                <span>O</span>
                <span>N</span>
              </div>
            </button>

            {/* <button onClick={toggleVisibility}>editor only/live preview</button> */}
            <button className="btn-17" onClick={changePage}>
              <span className="text-container">
                <span className="text">Download</span>
              </span>
            </button>
            {/* <button onClick={changePage}>preview pdf and download/back</button> */}

            <button
              className="btn-12"
              onClick={() => {
                toggleFill();
                changeData();
              }}
            >
              <span>{isFilled ? "Clear" : "Fill"}</span>
            </button>
            {/* <button onClick={changeData}>clear/fill</button> */}
          </div>
        </div>
        <div className="form-container">{renderForm()}</div>
        <div
          className={
            !isLive ? "livePage-container" : "livePage-container hidden"
          }
        >
          <LivePage data={formData}></LivePage>
        </div>
      </div>
      <div className={isPreview ? "container" : "container hidden"}>
        {/* <button onClick={changePage}>change back</button> */}
        <div className="helper-button">
          <button className="btn-17" onClick={changePage}>
            <span className="text-container">
              <span className="text">Edit</span>
            </span>
          </button>
        </div>
        <PDFPreview data={formData} />
      </div>
    </>
  );
};

export default App;
