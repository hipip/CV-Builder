export default function ResumeExperienceItem({ exp, color }) {
  const { companyName, role, startDate, endDate, location, description } = exp;
  return (
    <div className="resume-experience-item">
      <p className="resume-experience-date" style={{ color: color }}>
        {startDate} - {endDate}
      </p>
      <p className="resume-experience-role">{role}</p>

      <p className="resume-experience--location">{location}</p>

      <p className="resume-experience-description">{description}</p>
    </div>
  );
}
