import { useState } from "react";
import Navigation from "./components/Navigation";
import PersonalForm from "./components/PersonalForm";
import LinkForm from "./components/LinkForm";
import EtcForm from "./components/EtcForm";
import "./App.css";
import LivePage from "./components/LivePage";
import EducationForm from "./components/EducationForm";

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
        university: '',
        degree: '',
        graduation: '',
        other: '',
      },
      degree2: {
        university: '',
        degree: '',
        graduation: '',
        other: '',
      },
    },
  });


  const handleFormChange = (formName, degree = null) => (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (degree) {
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
