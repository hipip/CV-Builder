export default function ResumeExperienceItem({ exp, color }) {
  const { companyName, role, startDate, endDate, location, description } = exp;
  return (
    <div className="resume-experience-item">
      <p className="role-and-company" style={{ color: color }}>
        {role} @ {companyName}
      </p>

      <p className="experience-date-and-location">
        {startDate} - {endDate} in {location}
      </p>

      <p className="experience-description">{description}</p>
    </div>
  );
}
