import "./Projects.scss";

function Project({ image, title, description, link }) {
  return (
    <>
      <article className="project mb-5">
        <h1 className="project-title">{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <button onClick={() => window.open(link, "_blank")}>{link}</button>
      </article>
    </>
  );
}

export default Project;
