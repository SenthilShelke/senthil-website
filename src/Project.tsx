import PropTypes from "prop-types";

interface ProjectProps {
  description: string;
  image: string;
  reverse: boolean;
  link: string;
  language: string;
  title: string;
}

function Project(props: ProjectProps) {
  const { description, image, reverse, link, language, title } = props;

  return (
    <div
      className="project-container"
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div>
        <h1 className="title">{title}</h1>
        <p className="project-description">{description}</p>
        <div className="project-extra">
          <p className="project-language">Language: {language}</p>
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          > Visit GitHub</a>
        </div>
      </div>
      <img className="project-image" src={image} alt="Project"></img>
    </div>
  );
}

export default Project;
