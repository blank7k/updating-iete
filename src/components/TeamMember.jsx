const TeamMember = ({ name, image }) => {
  const circleSize = "160px";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "15px",
  };

  const circleStyle = {
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    backgroundColor: "#FF0000",
    boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const nameStyle = {
    marginTop: "12px",
    fontSize: "14px",
    color: "white",
    fontFamily: "monospace",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}></div>
      <p style={nameStyle}>{name}</p>
    </div>
  );
};

export default TeamMember;