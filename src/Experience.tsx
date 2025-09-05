// Experience.tsx
import { FaMapMarkerAlt, FaBuilding, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

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
    <div className="experience-card">
      {/* timeline accent */}
      <div className="experience-accent" aria-hidden />

      {/* header */}
      <div className="experience-top">
        <div className="experience-titleblock">
          <h2 className="experience-title">{title}</h2>
          <div className="experience-tags">
            <span className="xp-tag">
              <FaBuilding className="xp-icon" /> {company}
            </span>
            <span className="xp-tag">
              <FaMapMarkerAlt className="xp-icon" /> {location}
            </span>
          </div>
        </div>

        <div className="xp-dates">
          <FaCalendarAlt className="xp-icon" /> {dates}
        </div>
      </div>

      {/* divider */}
      <div className="xp-divider" />

      {/* bullets */}
      <ul className="experience-list">
        {bullets.map((b, i) => (
          <li key={i} className="xp-item">
            <FaCheckCircle className="xp-bullet" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;