import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillItem({ skill, deleteSkillFunc }) {
  return (
    <div className="skill-item">
      <h3>
        {skill.name} {skill.mastery}%
      </h3>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => deleteSkillFunc(skill.id)}
      />
    </div>
  );
}
