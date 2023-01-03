import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RoutesApp from "./Routes/RoutesApp";
import { ContextoBackground } from "./Contexto/ContextoBackground";
import { ContextoCarrito } from "./Contexto/ContextoCarrito";
function App() {
  // const [appTheme, setappTheme] = useState(
  //   "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"
  // );
  const [appTheme, setappTheme] = useState(
    "https://i.ibb.co/qgNk8Cv/fondo.png"
  );
  const [appCarrito, setappCarrito] = useState(
   []
  );

  // <a href="https://ibb.co/bvszVFk"><img src="https://i.ibb.co/qgNk8Cv/fondo.png" alt="fondo" border="0"></a>
  // ContextoBackground
  // if(appTheme!=="https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"){
  //   setappTheme("https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg")
  // }
  // const numeroPadre ="https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg";

  const styles = {
    header: {
      backgroundImage: "url(" + appTheme + ")",
      // backgroundColor:"#141a32",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      width: "100%",
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      color: "white",
      backdropFilter: "blur(8px)",
    },
  };

  return (
    <div style={styles.header}>
      <ContextoBackground.Provider value={{ appTheme, setappTheme }}>
      <ContextoCarrito.Provider value={{ appCarrito, setappCarrito }} >
        <RoutesApp />
      </ContextoCarrito.Provider>
      </ContextoBackground.Provider>
    </div>
  );
}

export default App;
