import "./Skills.scss";

function Skill({ title, description, logo }) {
  return (
    <>
        <div className="skill mb-3">
          <img src={logo} alt={title} />
          <p className="mb-4">{title}</p>
          <p className="mb-4">{description}</p>
        </div>
    </>
  );
}

export default Skill;
