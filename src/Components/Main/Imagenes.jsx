import React, { useContext } from "react";

const Imagenes = (props) => {

  return (
    <div>
      <img className="d-block w-100" src={props.direcion} alt="Second slide" />
    </div>
  );
};

export default Imagenes;
