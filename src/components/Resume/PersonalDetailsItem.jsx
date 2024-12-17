import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PersonalDetailsItem({ iconName, value }) {
  return (
    <div className="personal-details-item">
      <FontAwesomeIcon icon={iconName} />
      <p>{value}</p>
    </div>
  );
}
