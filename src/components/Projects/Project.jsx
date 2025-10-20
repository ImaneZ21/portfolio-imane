import Icons from "../Icons/Icons";
import "./Projects.scss";

function Project({ image, title, description, link, logos }) {
  return (
    <>
      <article className="project mb-5">
        <h1 className="project-title">{title}</h1>
        <img
          onClick={() => window.open(link, "_blank")}
          src={image}
          alt={title}
          className="project-image"
        />
        <Icons logos={logos} />
        <div className="project-description mt-4">
          <p><strong>Situation et enjeux du projet :</strong> {description.context}</p>
          <p><strong>Buts à atteindre et problématiques à résoudre :</strong> {description.goal}</p>
          <p><strong> Technologies et outils utilisés : </strong> {description.stack}</p>
          <p><strong>Apprentissages et défis relevés :</strong> {description.skills}</p>
          <p><strong>Livrables et métriques de réussite :</strong> {description.results}</p>
          <p><strong>Points d'optimisation identifiés :</strong> {description.improvement}</p>
        </div>
        <button onClick={() => window.open(link, "_blank")}>Consulter le projet</button>
      </article>
    </>
  );
}

export default Project;
