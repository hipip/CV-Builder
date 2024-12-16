import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceItem({ exp, id, deleteExperienceFunc }) {
  return (
    <button className="experience-item" id={id}>
      <h3>{exp.companyName}</h3>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => {
          deleteExperienceFunc(id);
        }}
      />
    </button>
  );
}
