import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([
    {
      id: 0,
      companyName: "Algebra Tec",
      role: "Front-end Developer",
      startDate: "",
      endDate: "",
      location: "Jijel Algeria",
      description: "",
    },
  ]);

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value });
  };

  const addEducation = (newEduc) => {
    setEducation([...education, { ...newEduc, id: education.length }]);
  };

  const deleteEduc = (id) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  const editEduc = (newEduc) => {
    setEducation([...education.filter((e) => e.id !== newEduc.id), newEduc]);
  };

  const addExperience = (newExp) => {
    setExperience([...experience, { ...newExp, id: experience.length }]);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  return (
    <>
      <h1 className="main-title">CV Builder</h1>
      <PersonalDetailsSection
        personalDetails={personalDetails}
        handleChange={handlePersonalDetailsChange}
      />
      <EducationSection
        education={education}
        addEducFunc={addEducation}
        deleteEducFunc={deleteEduc}
        editEducFunc={editEduc}
      />
      <ExperienceSection
        experience={experience}
        addExperienceFunc={addExperience}
        deleteExperienceFunc={deleteExperience}
      />
    </>
  );
}

export default App;
