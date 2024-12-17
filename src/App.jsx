import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Resume from "./components/Resume/Resume";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Boutana Youcef",
    email: "bt.youcef.dz@gmail.com",
    phoneNumber: "+213558642150",
    address: "Jijel, Jijel, Jijel, Algeria",
    imgUrl:
      "https://avatars.githubusercontent.com/u/112562455?s=400&u=11259509ad4f5238064ce4f3167208446975e927",
  });

  const [education, setEducation] = useState([
    {
      school: "University Of Jijel",
      degree: "Bachelor's in Computer Science",
      startDate: "09/2019",
      endDate: "09/2022",
    },
    {
      school: "University Of Jijel",
      degree: "Masters's in AI",
      startDate: "09/2024",
      endDate: "present",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 0,
      companyName: "fiverr",
      role: "front-end dev freelancer",
      startDate: 2020,
      endDate: 2023,
      location: "cloud",
      description:
        "Lorem ipsum dolor sit numquam, dolorem nostrum consequuntur minima odio expedita veritatis? Velit, asperiores. Blanditiis cupiditate deleniti, atque pariatur, neque obcaecati quos iusto aliquam recusandae saepe autem natus? Ipsa?",
    },
    {
      id: 1,
      companyName: "freelancer.org",
      role: "front-end dev",
      startDate: 2023,
      endDate: "present",
      location: "cloud",
      description:
        "Lorem nostrum consequuntur minima odio expedita veritatis? Velit, asperiores. Blanditiis cupiditate deleniti, atque pariatur, neque obcaecati quos iusto aliquam recusandae saepe autem natus? Ipsa?",
    },
  ]);

  const [mainColor, setMainColor] = useState("#1f0066");

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
          color={mainColor}
        />
      </div>
    </>
  );
}

export default App;
