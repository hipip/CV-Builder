import { useState } from "react";
import SectionItem from "./SectionItem";

export default function AddEducation({ addEducFunc, setModeNormal }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const educ = { school, degree, startDate, endDate };

  return (
    <>
      <SectionItem
        htmlFor="school"
        label="School"
        placeHolder="Enter school name"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <SectionItem
        htmlFor="degree"
        label="Degree"
        placeHolder="Enter degree or diploma name"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <SectionItem
        htmlFor="startDate"
        label="Start Date"
        placeHolder="Enter start date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <SectionItem
        htmlFor="endDate"
        label="End Date"
        placeHolder="Enter end date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div>
        <button
          className="special-btn"
          id="add-educ-btn"
          onClick={() => {
            addEducFunc(educ);
            setModeNormal();
          }}
        >
          Add
        </button>
        <button
          className="special-btn"
          id="cancel-add-educ-btn"
          onClick={setModeNormal}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
