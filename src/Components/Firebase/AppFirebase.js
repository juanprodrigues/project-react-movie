import React, { useEffect } from "react";
import Auth from "./Auth";
import { app } from "./fb";
import Home from "./Home";

function AppFirebase() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
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
