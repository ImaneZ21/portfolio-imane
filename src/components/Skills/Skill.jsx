import Icons from "../Icons/Icons";
import "./Skills.scss";

function Skill({ title, description, logos }) {
  return (
    <>
      <article className="skill mb-3">
        <Icons logos={logos} />
        <p className="mb-4">{title}</p>
        <p className="mb-4">{description}</p>
      </article>
    </>
  );
}

export default Skill;
