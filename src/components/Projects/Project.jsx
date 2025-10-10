import "./Projects.scss";

function Project({ image, title, description, link }) {
  return (
    <>
      <article className="project mb-5">
        <h1 className="project-title">{title}</h1>
        <img
          onClick={() => window.open(link, "_blank")}
          src={image}
          alt={title}
        />
        <h2 className="project-context mb-4 mt-4">Contexte</h2>
        <p>{description}</p>
        <button onClick={() => window.open(link, "_blank")}>{link}</button>
      </article>
    </>
  );
}

export default Project;
