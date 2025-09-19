import "./Projects.scss";
import Datas from "../../data/projects.json";
import Project from "./Project.jsx";


function Projects() {
  return (
    <>
      <section id="projects">
        {Datas.map((data) => (
          <Project
            key={data.id}
            image={data.image}
            title={data.title}
            id={data.id}
            description={data.description}
            link={data.link}
          />
        ))}
      </section>
    </>
  );
}

export default Projects;
