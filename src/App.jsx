import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";

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
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      location: "",
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
    </>
  );
}

export default App;
