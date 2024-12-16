import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume({ personalDetails, education, experience }) {
  const { fullName, email, phoneNumber, address } = personalDetails;
  return (
    <div id="resume">
      <div className="resume-personal-details">
        <p id="fullname">{fullName}</p>
        <div className="another-container">
          <div className="personal-details-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{email}</p>
          </div>
          <div className="personal-details-item">
            <FontAwesomeIcon icon={faPhone} />
            <p>{phoneNumber}</p>
          </div>
          <div className="personal-details-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
