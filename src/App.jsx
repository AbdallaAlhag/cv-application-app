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

const App = () => {
  const [currentForm, setCurrentForm] = useState("personal");
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
      address: "",
      summary: "",
    },
    link: {
      website: "",
      websiteText: "",
      linkedin: "",
      linkedinText: "",
      github: "",
      githubText: "",
    },
    etc: {
      certificate: "",
      skills: "",
      interest: "",
    },
    education: {
      degree1: {
        university: "",
        degree: "",
        graduation: "",
        other: "",
      },
      degree2: {
        university: "",
        degree: "",
        graduation: "",
        other: "",
      },
    },
    tech: {
      complex: {
        language: {
          language_1: "",
          language_2: "",
          language_3: "",
          language_4: "",
        },
        external: {
          external_1: "",
          external_2: "",
          external_3: "",
          external_4: "",
        },
        tool: {
          tool_1: "",
          tool_2: "",
          tool_3: "",
          tool_4: "",
        },
      },
      simple: {
        skill_1: "",
        skill_2: "",
        skill_3: "",
        skill_4: "",
      },
    },
    work: {
      job_1: {
        name: "",
        title: "",
        duration: "",
        address: "",
        bulletPoint: {
          bulletPoint_1: "",
          bulletPoint_2: "",
          bulletPoint_3: "",
          bulletPoint_4: "",
        },
      },
      job_2: {
        name: "",
        title: "",
        duration: "",
        address: "",
        bulletPoint: {
          bulletPoint_1: "",
          bulletPoint_2: "",
          bulletPoint_3: "",
          bulletPoint_4: "",
        },
      },
    },
    project: {
      project_1: {
        name: "",
        techStack: "",
        bulletPoint: {
          bulletPoint_1: "",
          bulletPoint_2: "",
          bulletPoint_3: "",
          bulletPoint_4: "",
        },
      },
      project_2: {
        name: "",
        techStack: "",
        bulletPoint: {
          bulletPoint_1: "",
          bulletPoint_2: "",
          bulletPoint_3: "",
          bulletPoint_4: "",
        },
      },
    },
  });

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
  const handleAddJob = () => {
    setFormData((prevData) => {
      const newJobKey = `job_${Object.keys(prevData.work).length + 1}`;
      return {
        ...prevData,
        work: {
          ...prevData.work,
          [newJobKey]: {
            name: "",
            title: "",
            duration: "",
            address: "",
            bulletPoint: {
              bullet_1: "",
              bullet_2: "",
              bullet_3: "",
              bullet_4: "",
            },
          },
        },
      };
    });
  };

  const handleDeleteJob = (jobKey) => {
    setFormData((prevData) => {
      const updatedWork = { ...prevData.work };
      delete updatedWork[jobKey];
      return {
        ...prevData,
        work: updatedWork,
      };
    });
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
            handleAddJob={handleAddJob}
            handleDeleteJob={handleDeleteJob}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
        );
      case "project":
        return (
          <ProjectForm
            formData={formData.project}
            handleChange={handleFormChange}
            handleAddJob={handleAddJob}
            handleDeleteJob={handleDeleteJob}
            handleAddField={handleAddField}
            handleDeleteField={handleDeleteField}
          />
        );
      default:
        return <PersonalForm />;
    }
  };

  return (
    <div className="app">
      <div className="side-bar">
        <Navigation setForm={setCurrentForm} />
      </div>
      <div className="form-container">{renderForm()}</div>
      <div className="livePage-container">
        <LivePage data={formData}></LivePage>
      </div>
    </div>
  );
};

export default App;
