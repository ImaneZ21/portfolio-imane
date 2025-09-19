import "./Title.scss";
import image from "../../src/assets/image.png";

function Title() {
  return (
    <div className="title d-flex">
        <h1>DEVELOPPEUSE WEB FULL STACK</h1>
        <img src={image} alt="Illustration développeuse web"></img>
    </div>
  );
}

export default Title;