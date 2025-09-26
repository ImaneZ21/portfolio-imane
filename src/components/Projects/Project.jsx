import "./Projects.scss";

function Project({ image, title, description, link }) {
  return (
    <>
      <div className="project mb-5">
        <h2 className="project-title">{title}</h2>
        <img src={image} alt={title} />
        <h3>{description}</h3>
        <a href="{link}" target="_blank">
          {link}
        </a>
      </div>
    </>
  );
}

export default Project;
