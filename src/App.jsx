import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PersonalForm from "./components/PersonalForm";
import LinkForm from "./components/LinkForm";
import EtcForm from "./components/EtcForm";
import LivePage from "./components/LivePage";
import EducationForm from "./components/EducationForm";
import TechForm from "./components/TechForm";

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
  });

  const handleFormChange =
    (formName, degree = null, category = null) =>
    (e = { target: { name: "", value: "" } }) => {
      const { name, value } = e.target;
      console.log("wtf");
      console.log(
        `FormName: ${formName}, Degree: ${degree}, Category: ${category}`
      );
      console.log(`Name: ${name}, Value: ${value}`);

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

  // const handleAddField = () => {
  //   const newKey = `skill_${Object.keys(formData.tech.simple).length + 1}`;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     tech: {
  //       ...prevData.tech,
  //       simple: {
  //         ...prevData.tech.simple,
  //         [newKey]: "", // or your desired default value
  //       },
  //     },
  //   }));
  // };
  const handleAddField = (formType, category) => {
    setFormData((prevData) => {
      if (category) {
        const keys = Object.keys(prevData.tech[formType][category]);
        const keyNumbers = keys.map((key) => parseInt(key.split("_")[1], 10));
        const maxKey = Math.max(0, ...keyNumbers);
        const newKey = `${category}_${maxKey + 1}`;
        return {
          ...prevData,
          tech: {
            ...prevData.tech,
            [formType]: {
              ...prevData.tech[formType],
              [category]: {
                ...prevData.tech[formType][category],
                [newKey]: "", // or your desired default value
              },
            },
          },
        };
      } else {
        const keys = Object.keys(prevData.tech[formType]);
        const keyNumbers = keys.map((key) => parseInt(key.split("_")[1], 10));
        const maxKey = Math.max(0, ...keyNumbers);
        const newKey = `${formType}_${maxKey + 1}`;
        return {
          ...prevData,
          tech: {
            ...prevData.tech,
            [formType]: {
              ...prevData.tech[formType],
              [newKey]: "", // or your desired default value
            },
          },
        };
      }
    });
  };

  // const handleDeleteField = (fieldKey) => {
  //   setFormData((prevData) => {
  //     // Make a copy of the simple object
  //     const updatedSimple = { ...prevData.tech.simple };

  //     // Delete the fieldKey from updatedSimple
  //     delete updatedSimple[fieldKey];

  //     // Return updated state with simple updated
  //     return {
  //       ...prevData,
  //       tech: {
  //         ...prevData.tech,
  //         simple: updatedSimple,
  //       },
  //     };
  //   });
  // };

  const handleDeleteField = (formType, category, fieldKey) => {
    setFormData((prevData) => {
      if (category) {
        const updatedCategory = { ...prevData.tech[formType][category] };
        delete updatedCategory[fieldKey];
        return {
          ...prevData,
          tech: {
            ...prevData.tech,
            [formType]: {
              ...prevData.tech[formType],
              [category]: updatedCategory,
            },
          },
        };
      } else {
        const updatedFormType = { ...prevData.tech[formType] };
        delete updatedFormType[fieldKey];
        return {
          ...prevData,
          tech: {
            ...prevData.tech,
            [formType]: updatedFormType,
          },
        };
      }
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
