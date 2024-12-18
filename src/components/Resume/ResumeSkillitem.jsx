export default function ResumeSkillitem({ skill, color }) {
  return (
    <div className="resume-skill-item">
      <p>{skill.name}</p>

      <div className="resume-skill-container">
        <div
          className="resume-skill-mastery"
          style={{
            width: `${+skill.mastery}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
