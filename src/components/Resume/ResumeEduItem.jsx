export default function ResumeEduItem({ color, edu }) {
  return (
    <div className="resume-education-item" key={edu.id}>
      <p className="resume-education-date" style={{ color: color }}>
        {edu.startDate} - {edu.endDate}
      </p>
      <p className="resume-education-degree">{edu.degree}</p>
      <p className="resume-education-school">{edu.school}</p>
    </div>
  );
}
