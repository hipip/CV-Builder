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
  const { fullName, email, phoneNumber, address, imgUrl } = personalDetails;
  return (
    <div id="resume">
      <div
        className="resume-personal-details"
        style={{ backgroundColor: color }}
      >
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div>
          <p id="fullname">{fullName}</p>
          <div className="another-container">
            <PersonalDetailsItem
              value={email}
              iconName={faEnvelope}
              key="email"
            />
            <PersonalDetailsItem
              value={phoneNumber}
              iconName={faPhone}
              key="phone-number"
            />
            <PersonalDetailsItem
              value={address}
              iconName={faLocationDot}
              key="address"
            />
          </div>
        </div>
      </div>
      <div className="resume-education-section">
        <h2 className="resume-education-section-title" style={{ color: color }}>
          Education
        </h2>
        {education.map((edu, idx) => (
          <>
            <ResumeEduItem edu={edu} idx={idx} color={color} key={edu.id} />
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
