// Experience.tsx
interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

function Experience(props: ExperienceProps) {
  const { title, company, location, dates, bullets } = props;

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">{title}</h1>
        <div className="experience-meta">
          <span className="experience-company">{company}</span>
          <span className="experience-location"> — {location}</span>
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