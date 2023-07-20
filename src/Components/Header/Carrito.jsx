import React, { useContext, useEffect, useState } from "react";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import fondo from "./../../assets/fondo.png";
import "./misEstilos.css";
import { getWebsites } from "../Firebase/api";

import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { ContextoUser } from "../../Contexto/ContextoUser";
import Tabla from "./Tabla";

const Carrito = () => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);
  const ctxCarrito = useContext(ContextoCarrito);
  //preguntar si esta logeado y si li esta , llenar el contexto con las pelicular de la base,
  const ctxUser = useContext(ContextoUser);

  const [moviesID, setmoviesID] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getWebsites(ctxUser.appUser.email);
    let docs = [];
    querySnapshot.forEach((doc) => {
 
      docs.push({ ...doc.data() });
    });
    setmoviesID(docs);
  };

  useEffect(() => {
    getLinks();
  }, []);

  let carroRender = [];
  if (moviesID[0] !== undefined) {
    ctxCarrito.setappCarrito(moviesID);
  }
  carroRender = ctxCarrito.appCarrito;

  let total = 0;
  for (let i = 0; i < ctxCarrito.appCarrito.length; i++) {
    total = total + ctxCarrito.appCarrito[i].popularity;
  }

  return (
    <div style={{ padding: "0 0 100% 0" }}>
      <Tabla total={total} Carrito={carroRender} />
    </div>
  );
};

export default Carrito;
