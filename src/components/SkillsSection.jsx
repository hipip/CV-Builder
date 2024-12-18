import {
  faCaretDown,
  faCaretUp,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SkillItem from "./SkillItem";
import AddSkill from "./AddSkill";

export default function SkillsSection({
  skills,
  deleteSkillFunc,
  addSkillFunc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("normal");

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <section id="skills-section" className="section">
        <button className="section-btn" onClick={toggleIsOpen}>
          <FontAwesomeIcon icon={faLaptopCode} className="section-icon" />
          <h2 className="section-title">Skills</h2>
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="caret-icon"
          />
        </button>
        {isOpen && mode === "normal" && (
          <div className="section-items">
            {skills.map((skill) => (
              <SkillItem
                skill={skill}
                key={skill.id}
                deleteSkillFunc={deleteSkillFunc}
              />
            ))}
            <button
              className="special-btn"
              id="add-skill-btn"
              onClick={() => setMode("add")}
            >
              Add Skill
            </button>
          </div>
        )}
        {isOpen && mode === "add" && (
          <div className="section-items">
            <AddSkill
              setModeNormal={() => setMode("normal")}
              addSkillFunc={addSkillFunc}
            />
          </div>
        )}
      </section>
    </>
  );
}
