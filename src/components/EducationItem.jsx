import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EducationItem({ educ, id, onClick, deleteEduc }) {
  return (
    <button className="education-item" id={id}>
      <h3 onClick={onClick}>{educ.school}</h3>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteEduc(id)} />
    </button>
  );
}
