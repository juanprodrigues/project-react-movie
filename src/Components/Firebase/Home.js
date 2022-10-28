import React from "react";
import { app } from "./fb";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="container" style={{ paddingBottom: "53%" }}>
      <h1>Bienvenido, sesión iniciada.....</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
