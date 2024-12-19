export default function ResumeEduItem({ color, edu }) {
  const { startDate, endDate } = edu;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();
  return (
    <div className="resume-education-item" key={edu.id}>
      <p className="resume-education-date" style={{ color: color }}>
        {startYear} - {endYear}
      </p>
      <p className="resume-education-degree">{edu.degree}</p>
      <p className="resume-education-school">
        <em>{edu.school}</em>
      </p>
    </div>
  );
}
