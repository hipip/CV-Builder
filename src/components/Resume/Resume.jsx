import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PersonalDetailsItem from "./PersonalDetailsItem";
import ResumeEduItem from "./ResumeEduItem";

export default function Resume({
  personalDetails,
  education,
  experience,
  color,
}) {
  const { fullName, email, phoneNumber, address } = personalDetails;
  return (
    <div id="resume">
      <div
        className="resume-personal-details"
        style={{ backgroundColor: color }}
      >
        <p id="fullname">{fullName}</p>
        <div className="another-container">
          <PersonalDetailsItem value={email} iconName={faEnvelope} />
          <PersonalDetailsItem value={phoneNumber} iconName={faPhone} />
          <PersonalDetailsItem value={address} iconName={faLocationDot} />
        </div>
      </div>
      <div className="resume-education-section">
        <h2 className="resume-education-section-title" style={{ color: color }}>
          Education
        </h2>
        {education.map((edu, idx) => (
          <>
            <ResumeEduItem edu={edu} idx={idx} color={color} />
            {idx !== education.length - 1 && (
              <hr
                className="resume-education-line-break"
                style={{ backgroundColor: color }}
              ></hr>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
