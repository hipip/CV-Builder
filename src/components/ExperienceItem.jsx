import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceItem({
  exp,
  id,
  onClick,
  deleteExperienceFunc,
}) {
  return (
    <button className="experience-item" id={id}>
      <h3 onClick={onClick}>{exp.companyName}</h3>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => {
          deleteExperienceFunc(id);
        }}
        className="delete-item-btn"
      />
    </button>
  );
}
