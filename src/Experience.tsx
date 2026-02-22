interface ExperienceProps {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

function Experience(props: ExperienceProps) {
  const { title, company, dates, bullets } = props;

  return (
    <div className="experience-container">
      <div className="experience-header">
        <div className="experience-main-info">
          <h1 className="experience-title">{title}</h1>
          <span className="experience-company">| {company}</span>
        </div>
        <div className="experience-dates">{dates}</div>
      </div>

      <ul className="experience-bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;