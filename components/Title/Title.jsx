import "./Title.scss";
import image from "../../src/assets/image.png";

function Title() {
  return (
       <div className="title d-flex">
        <h1>DEVELOPPEUSE WEB FULL STACK</h1>
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"           
          alt="Illustration développeuse web"
        />
    </div>
  );
}

export default Title;