import { useState } from "react";
import SectionItem from "./SectionItem";

export default function AddSkill({ setModeNormal, addSkillFunc }) {
  const [name, setName] = useState("");
  const [mastery, setMastery] = useState("");
  return (
    <>
      <SectionItem
        htmlFor="skill-name"
        label="Skill Name"
        placeHolder="enter the name of a language or a technology"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SectionItem
        htmlFor="skill-mastery"
        label="Skill Mastery"
        placeHolder="enter a percentage of the skill's mastert"
        value={mastery}
        type="number"
        onChange={(e) => setMastery(e.target.value)}
      />
      <div>
        <button
          className="special-btn"
          id="confirm-add-skill-btn"
          onClick={() => {
            if (name !== "") {
              addSkillFunc({ name, mastery });
              setModeNormal();
            }
          }}
        >
          Add
        </button>
        <button
          className="special-btn"
          id="cancel-add-skill-btn"
          onClick={setModeNormal}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
