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
  (e = { target: { name: '', value: '' } }) => {
    const { name, value } = e.target;
    console.log(`FormName: ${formName}, Degree: ${degree}, Category: ${category}`);
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
          <TechForm formData={formData.tech} handleChange={handleFormChange} />
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
