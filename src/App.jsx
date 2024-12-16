import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Resume from "./components/Resume";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Boutana Youcef",
    email: "bt.youcef.dz@gmail.com",
    phoneNumber: "+213558642150",
    address: "Jijel, Jijel, Jijel, Algeria",
  });

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

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

  const editExperience = (newExp) => {
    setExperience([
      ...experience.filter((exp) => exp.id !== newExp.id),
      newExp,
    ]);
  };

  return (
    <>
      <h1 className="main-title">CV Builder</h1>
      <div id="main">
        <div className="sections-container">
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
            editExperienceFunc={editExperience}
          />
        </div>
        <Resume
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
      </div>
    </>
  );
}

export default App;
