import { useState } from "react";
import SectionItem from "./SectionItem";

export default function AddExperience({ setModeNormal, addExperienceFunc }) {
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [location, setlocation] = useState("");
  const [description, setDescription] = useState("");

  const experiencObj = {
    companyName,
    role,
    startDate,
    endDate,
    location,
    description,
  };

  return (
    <>
      <SectionItem
        htmlFor="companyName"
        label="Company Name"
        placeHolder="enter company's name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <SectionItem
        htmlFor="role"
        label="Role"
        placeHolder="what was you role in the company"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <SectionItem
        htmlFor="startDate"
        label="Start Date"
        placeHolder="Enter your start date at the company"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <SectionItem
        htmlFor="endDate"
        label="End Date"
        placeHolder="Enter your end date at the company"
        value={endDate}
        onChange={(e) => setendDate(e.target.value)}
      />
      <SectionItem
        htmlFor="location"
        label="Location"
        placeHolder="Enter your the location of the company"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      />
      <SectionItem
        htmlFor="description"
        label="Description"
        placeHolder="Enter a description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <button
          className="special-btn"
          id="add-experience-btn"
          onClick={() => {
            addExperienceFunc(experiencObj);
            setModeNormal();
          }}
        >
          Add
        </button>
        <button
          className="special-btn"
          id="cancel-add-experience-btn"
          onClick={setModeNormal}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
