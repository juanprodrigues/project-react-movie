import React, { useContext } from "react";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import fondo from "./../../assets/fondo.png";
const Ingresar = () => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);
  return (
    <div style={{ padding: "0 0 100% 0" }}>
      <h1 className="text-center">Ingresar</h1>
    </div>
  );
};

export default Ingresar;
