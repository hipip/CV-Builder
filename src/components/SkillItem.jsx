import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillItem({ skill, deleteSkillFunc, setModeEdit }) {
  return (
    <div className="skill-item">
      <h3 onClick={setModeEdit}>
        {skill.name} {skill.mastery}%
      </h3>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => deleteSkillFunc(skill.id)}
        className="delete-item-btn"
      />
    </div>
  );
}
