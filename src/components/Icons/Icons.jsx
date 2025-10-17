function Icons({logos }) {
  return (
    <div>
      {logos.map((logo) => (
        <img src={logo} alt={logo} />
      ))}
    </div>
  );
}

export default Icons;
