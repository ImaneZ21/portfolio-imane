import "./Skills.scss";
import Datas from "../../data/skills.json";
import Skill from "./skill.jsx";

function Skills() {
  return (
    <>
      <section id="skills">
        <div className="skills d-flex">
          <h1> Mes Compétences</h1>
          {Datas.map((data) => (
            <Skill
              key={data.id}
              title={data.title}
              id={data.id}
              description={data.description}
              logo={data.logo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
