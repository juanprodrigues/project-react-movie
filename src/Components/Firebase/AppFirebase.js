import React, { useContext, useEffect } from "react";
import { ContextoUser } from "../../Contexto/ContextoUser";
import Auth from "./Auth";
import { app } from "./fb";
import Home from "./Home";

function AppFirebase() {
  const ctx = useContext(ContextoUser);
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      ctx.setappUser(usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return <>
  <div className="fondoLogin">
  {usuario ? <Home /> : <Auth setUsuario={setUsuario} />}

  </div>
  </>;
}

export default AppFirebase;
