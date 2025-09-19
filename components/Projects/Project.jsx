import "./Projects.scss";

function Project({image, title, description, link}) {
  return (
    <>
     <div className="project">
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p>{description}</p>
        <p>{link}</p>
      </div>
      
    </>
  );
}

export default Project;
