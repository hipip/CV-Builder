import { useState } from "react";
import {
  faCaretDown,
  faCaretUp,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceItem from "./ExperienceItem";
import AddExperience from "./AddExperience";
import SectionItem from "./SectionItem";

export default function ExperienceSection({
  experience,
  addExperienceFunc,
  deleteExperienceFunc,
  editExperienceFunc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("normal");
  const [toEdit, setToEdit] = useState(null);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <section id="experience-section" className="section">
        <button className="section-btn" onClick={toggleIsOpen}>
          <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
          <h2 className="section-title">Experience</h2>
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="caret-icon"
          />
        </button>
        {isOpen && mode === "normal" && (
          <div className="section-items">
            {experience.map((exp) => (
              <ExperienceItem
                exp={exp}
                key={exp.id}
                id={exp.id}
                onClick={(e) => {
                  setMode("edit");
                  setToEdit(
                    experience.find(
                      (expe) => expe.id === e.currentTarget.parentElement.id
                    )
                  );
                }}
                deleteExperienceFunc={deleteExperienceFunc}
              />
            ))}
            <button
              className="special-btn"
              id="add-experience-btn"
              onClick={() => setMode("add")}
            >
              Add Experience
            </button>
          </div>
        )}
        {isOpen && mode === "add" && (
          <div className="section-items">
            <AddExperience
              setModeNormal={() => setMode("normal")}
              addExperienceFunc={addExperienceFunc}
            />
          </div>
        )}
        {isOpen && mode === "edit" && (
          <div className="section-items">
            <h3>Edit Mode</h3>
            <SectionItem
              htmlFor="companyName"
              label="Company Name"
              placeHolder="enter your company's name"
              value={toEdit.companyName}
              onChange={(e) => {
                setToEdit({ ...toEdit, companyName: e.target.value });
                editExperienceFunc({ ...toEdit, companyName: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="role"
              label="Role"
              placeHolder="enter your role"
              value={toEdit.role}
              onChange={(e) => {
                setToEdit({ ...toEdit, role: e.target.value });
                editExperienceFunc({ ...toEdit, role: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="startDate"
              label="Start Date"
              placeHolder="enter your start date"
              value={toEdit.startDate}
              onChange={(e) => {
                setToEdit({ ...toEdit, startDate: e.target.value });
                editExperienceFunc({ ...toEdit, startDate: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="endDate"
              label="End Date"
              placeHolder="enter your end date"
              value={toEdit.endDate}
              onChange={(e) => {
                setToEdit({ ...toEdit, endDate: e.target.value });
                editExperienceFunc({ ...toEdit, endDate: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="location"
              label="Location"
              placeHolder="enter company's location"
              value={toEdit.location}
              onChange={(e) => {
                setToEdit({ ...toEdit, location: e.target.value });
                editExperienceFunc({ ...toEdit, location: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="description"
              label="Description"
              placeHolder="enter a short description"
              value={toEdit.description}
              onChange={(e) => {
                setToEdit({ ...toEdit, description: e.target.value });
                editExperienceFunc({ ...toEdit, description: e.target.value });
              }}
            />
            <button
              className="special-btn"
              id="return-to-education-btn"
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
    </>
  );
}
