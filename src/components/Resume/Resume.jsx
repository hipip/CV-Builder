import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PersonalDetailsItem from "./PersonalDetailsItem";
import ResumeEduItem from "./ResumeEduItem";
import React from "react";
import ResumeExperienceItem from "./ResumeExperienceItem";

export default function Resume({
  personalDetails,
  education,
  experience,
  color,
}) {
  const { fullName, email, phoneNumber, address, imgUrl } = personalDetails;
  return (
    <div id="resume">
      <div className="resume-education-section">
        <div>
          <h2
            className="resume-education-section-title"
            style={{ color: color }}
          >
            Education
          </h2>
          <hr className="line-break" style={{ backgroundColor: color }}></hr>
        </div>

        {education.map((edu, idx) => (
          <>
            <ResumeEduItem edu={edu} idx={idx} color={color} key={edu.id} />
          </>
        ))}
      </div>
      <div className="resume-personal-details-section">
        <img className="profile-pic" src={imgUrl} alt="a profile picture"></img>
        <div className="another-container">
          <p id="fullname" style={{ color: color }}>
            {fullName}
          </p>
          <PersonalDetailsItem
            value={phoneNumber}
            iconName={faPhone}
            key="phone-number"
          />
          <PersonalDetailsItem
            value={email}
            iconName={faEnvelope}
            key="email"
          />
          <PersonalDetailsItem
            value={address}
            iconName={faLocationDot}
            key="address"
          />
        </div>
      </div>
      <div className="resume-experience-section">
        <div>
          <h2
            className="resume-experience-section-title"
            style={{ color: color }}
          >
            Experience
          </h2>
          <hr className="line-break" style={{ backgroundColor: color }}></hr>
        </div>
        {experience.map((exp) => (
          <>
            <ResumeExperienceItem exp={exp} color={color} key={exp.id} />
          </>
        ))}
      </div>
    </div>
  );
}
