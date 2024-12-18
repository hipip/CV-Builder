import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Resume from "./components/Resume/Resume";
import html2pdf from "html2pdf.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import SkillsSection from "./components/SkillsSection";

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
      id: nanoid(),
      school: "University Of Jijel",
      degree: "Bachelor's in Computer Science",
      startDate: "2019",
      endDate: "2022",
    },
    {
      id: nanoid(),
      school: "University Of Jijel",
      degree: "Masters's in AI",
      startDate: "2024",
      endDate: "present",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: nanoid(),
      companyName: "fiverr",
      role: "front-end dev freelancer",
      startDate: 2020,
      endDate: 2023,
      location: "cloud",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi dolorum hic dolorem eveniet. Odio consequuntur veniam quas accusamus quia.",
    },
    {
      id: nanoid(),
      companyName: "freelancer.org",
      role: "front-end dev",
      startDate: 2023,
      endDate: "present",
      location: "cloud",
      description:
        "Lorem nostrum consequuntur minima odio expedita veritatis? Velit, asperiores. Blanditiis cupiditate deleniti, atque pariatur, neque obcaecati quos iusto aliquam recusandae saepe autem natus? Ipsa?",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: nanoid(),
      name: "HTML",
      mastery: 100,
    },
    {
      id: nanoid(),
      name: "CSS",
      mastery: 70,
    },
    {
      id: nanoid(),
      name: "JS",
      mastery: 60,
    },
    {
      id: nanoid(),
      name: "Python",
      mastery: 70,
    },
    {
      id: nanoid(),
      name: "React",
      mastery: 40,
    },
  ]);

  const [mainColor, setMainColor] = useState("#7f2633");

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value });
  };

  const addEducation = (newEduc) => {
    setEducation([...education, { ...newEduc, id: nanoid() }]);
  };

  const deleteEduc = (id) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  const editEduc = (newEduc) => {
    setEducation([...education.filter((e) => e.id !== newEduc.id), newEduc]);
  };

  const addExperience = (newExp) => {
    setExperience([...experience, { ...newExp, id: nanoid() }]);
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

  const addSkill = (newSkill) => {
    setSkills([...skills, { ...newSkill, id: nanoid() }]);
  };

  const deleteSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId));
  };

  const downloadPDF = () => {
    var opt = {
      margin: 0,
      filename: `${personalDetails.fullName.split(" ").join("-")}-resume.pdf`,
      image: { type: "jpg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "cm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(document.querySelector("#resume")).save();
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
          <SkillsSection
            skills={skills}
            deleteSkillFunc={deleteSkill}
            addSkillFunc={addSkill}
          />
          <div className="main-color-section">
            <label htmlFor="main-color-inp">Main Color</label>
            <input
              type="color"
              value={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
              id="main-color-inp"
            />
          </div>
          <button
            className="special-btn"
            id="download-button"
            onClick={downloadPDF}
          >
            <FontAwesomeIcon icon={faDownload} />
            Download PDF
          </button>
        </div>
        <Resume
          personalDetails={personalDetails}
          education={education}
          experience={experience}
          skills={skills}
          color={mainColor}
        />
      </div>
    </>
  );
}

export default App;
