export default function ResumeExperienceItem({ exp, color }) {
  const { companyName, role, startDate, endDate, location, description } = exp;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();
  return (
    <div className="resume-experience-item">
      <p className="resume-experience-date" style={{ color: color }}>
        {startYear} - {endYear}
      </p>
      <p className="resume-experience-role">
        {role} @ {companyName}
      </p>

      <p className="resume-experience--location">{location}</p>

      <p className="resume-experience-description">{description}</p>
    </div>
  );
}
