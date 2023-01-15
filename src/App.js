import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RoutesApp from "./Routes/RoutesApp";
import { ContextoBackground } from "./Contexto/ContextoBackground";
import { ContextoCarrito } from "./Contexto/ContextoCarrito";
import { ContextoUser } from "./Contexto/ContextoUser";

function App() {

  const [appTheme, setappTheme] = useState(
    "https://i.ibb.co/qgNk8Cv/fondo.png"
  );
  const [appCarrito, setappCarrito] = useState([]);
  const [appUser, setappUser] = useState(false);

  const styles = {
    header: {
      backgroundImage: "url(" + appTheme + ")",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      width: "100%",
      color: "white",
      backdropFilter: "blur(8px)",
    },
  };

  return (
    <div style={styles.header}>
      <ContextoUser.Provider value={{ appUser, setappUser }}>
        <ContextoBackground.Provider value={{ appTheme, setappTheme }}>
          <ContextoCarrito.Provider value={{ appCarrito, setappCarrito }}>
            <RoutesApp />
          </ContextoCarrito.Provider>
        </ContextoBackground.Provider>
      </ContextoUser.Provider>
    </div>
  );
}

export default App;
