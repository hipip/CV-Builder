import { useState } from "react";
import {
  faCaretDown,
  faCaretUp,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceItem from "./ExperienceItem";
import AddExperience from "./AddExperience";

export default function ExperienceSection({
  experience,
  addExperienceFunc,
  deleteExperienceFunc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("normal");
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
      </section>
    </>
  );
}
