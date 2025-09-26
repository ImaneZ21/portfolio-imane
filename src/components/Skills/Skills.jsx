import "./Skills.scss";
import Datas from "../../data/skill.json";
import Skill from "./skill.jsx";

function Skills() {
   return (
    <>
      <section id="projects">
        {Datas.map((data) => (
          <Skill
            key={data.id}
            title={data.title}
            id={data.id}
            description={data.description}
          />
        ))}
      </section>
    </>
  );
}

export default Skills;
