import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import EducationItem from "./EducationItem";
import SectionItem from "./SectionItem";
import AddEducation from "./AddEducation";

export default function EducationForm({
  education,
  addEducFunc,
  deleteEducFunc,
  editEducFunc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("normal"); // to check if we're in edit more
  const [toEdit, setToEdit] = useState(null);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <section id="education-section" className="section">
      <button className="section-btn" onClick={toggleIsOpen}>
        <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
        <h2 className="section-title">Education</h2>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="caret-icon"
        />
      </button>
      {isOpen && mode === "normal" && (
        <div className="section-items">
          {education.map((educ) => (
            <EducationItem
              educ={educ}
              key={educ.id}
              id={educ.id}
              onClick={(e) => {
                setMode("edit");
                setToEdit(
                  education.find((edu) => edu.id === +e.currentTarget.id)
                );
              }}
              deleteEduc={deleteEducFunc}
            />
          ))}
          <button
            className="special-btn"
            id="add-education-btn"
            onClick={() => {
              setMode("add");
            }}
          >
            Add Education
          </button>
        </div>
      )}
      {mode === "add" && (
        <div className="section-items">
          <AddEducation
            addEducFunc={addEducFunc}
            setModeNormal={() => setMode("normal")}
          />
        </div>
      )}
      {isOpen && mode === "edit" && (
        <div className="section-items">
          <h3>Edit mode</h3>
          <SectionItem
            htmlFor="school"
            label="School"
            placeHolder="enter school or university name"
            value={toEdit.school}
            onChange={(e) => {
              setToEdit({ ...toEdit, school: e.target.value });
              editEducFunc({ ...toEdit, school: e.target.value });
            }}
          />
          <SectionItem
            htmlFor="degree"
            label="Degree"
            placeHolder="enter degree name"
            value={toEdit.degree}
            onChange={(e) => {
              setToEdit({ ...toEdit, school: e.target.value });
              editEducFunc({ ...toEdit, school: e.target.value });
            }}
          />
          <SectionItem
            htmlFor="startDate"
            label="Start Date"
            placeHolder="enter the starting date"
            value={toEdit.startDate}
            onChange={(e) => {
              setToEdit({ ...toEdit, school: e.target.value });
              editEducFunc({ ...toEdit, school: e.target.value });
            }}
          />
          <SectionItem
            htmlFor="endDate"
            label="End Date"
            placeHolder="enter the end date"
            value={toEdit.endDate}
            onChange={(e) => {
              setToEdit({ ...toEdit, school: e.target.value });
              editEducFunc({ ...toEdit, school: e.target.value });
            }}
          />
          <button
            className="special-btn"
            id="cancel-edit-education-btn"
            onClick={() => {
              setMode("normal");
              setToEdit(null);
            }}
          >
            Return
          </button>
        </div>
      )}
    </section>
  );
}
