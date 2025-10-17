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
        <h2 className="project-context mb-4 mt-4">Contexte</h2>
        <div className="project-description">
          <p>Situation et enjeux du projet : {description.context}</p>
          <p>Buts à atteindre et problématiques à résoudre : {description.goal}</p>
          <p>Technologies et outils utilisés : {description.stack}</p>
          <p>Apprentissages et défis relevés : {description.skills}</p>
          <p>Livrables et métriques de réussite : {description.results}</p>
          <p>Points d'optimisation identifiés : {description.improvement}</p>
        </div>
        <button onClick={() => window.open(link, "_blank")}>{link}</button>
      </article>
    </>
  );
}

export default Project;
