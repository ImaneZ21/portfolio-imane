import "./icons.scss"

function Icons({logos }) {
  return (
    <div>
      {logos.map((logo) => (
        <img src={logo} alt={logo} className="icons-logo" />
      ))}
    </div>
  );
}

export default Icons;
