import {
  faCaretDown,
  faCaretUp,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SkillItem from "./SkillItem";
import AddSkill from "./AddSkill";
import SectionItem from "./SectionItem";

export default function SkillsSection({
  skills,
  deleteSkillFunc,
  addSkillFunc,
  editSkillFunc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("normal");
  const [toEdit, setToEdit] = useState(null);

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
                setModeEdit={() => {
                  setMode("edit");
                  setToEdit(skills.find((sk) => sk.id === skill.id));
                }}
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
        {isOpen && mode === "edit" && (
          <>
            <h3>Edit Mode</h3>
            <SectionItem
              htmlFor="skill-name"
              label="Skill Name"
              placeHolder="enter the name of a technology or framework"
              value={toEdit.name}
              onChange={(e) => {
                setToEdit({ ...toEdit, name: e.target.value });
                editSkillFunc({ ...toEdit, name: e.target.value });
              }}
            />
            <SectionItem
              htmlFor="skill-mastery"
              label="Skill Mastery"
              placeHolder="enter a percentage of your mastery of the skill"
              value={toEdit.mastery}
              type="number"
              onChange={(e) => {
                setToEdit({ ...toEdit, mastery: e.target.value });
                editSkillFunc({ ...toEdit, mastery: e.target.value });
              }}
            />
            <button
              className="special-btn"
              id="return-to-skills-btn"
              onClick={() => {
                setMode("normal");
                setToEdit(null);
              }}
            >
              Save & Return
            </button>
          </>
        )}
      </section>
    </>
  );
}
