import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWieght: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{__html: msg}}></p> {/* Con esto poner inyectar html en jxs ¡no es una buena práctica!*/}
    </div>
  );
};

export default Message;
