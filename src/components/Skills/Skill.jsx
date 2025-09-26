import "./Skills.scss";

function Skill({ title, description }) {
  return (
    <>
      <section id="skills">
        <div className="skill">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

export default Skill;
