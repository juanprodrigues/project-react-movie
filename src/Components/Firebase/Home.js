import React, { useContext, useEffect, useState } from "react";
import { app } from "./fb";
import { getWebsites } from "../Firebase/api";
import { ContextoUser } from "../../Contexto/ContextoUser";
import { Link } from "react-router-dom";
import "./estilosLogin.css";


const Home = () => {
  const ctx = useContext(ContextoUser);
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  const [moviesID, setmoviesID] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites(ctx.appUser.email);
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data() });

    });
    setmoviesID(docs);
  
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="container" style={{ paddingBottom: "53%" }}>
      <h1>Bienvenido, sesión iniciada.....</h1>
      
      <h2>{moviesID?"Revise su carrito ya que tiene contenido.":""}</h2>
      <br />
      <h2>

      Historial:
      </h2>

      <div  className="container">
      {moviesID.map((link) => (
        <div className="col-md-4" key={link.id}>
          <Link
            className="link-historial"
            to={`/detalles/${link.id}`}
          >
            <p> {link.title}</p>
          </Link>
        </div>
      ))}

      </div>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
