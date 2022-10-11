import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import RoutesApp from "./Routes/RoutesApp";
import { ContextoBackground } from "./Contexto/ContextoBackground";
// export const AppContextO= React.createContext("ligth");
function App() {
  const [appTheme, setappTheme] = useState(
    "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"
  );
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
   //if(appTheme!="https://image.tmdb.org/t/p/w185_and_h278_bestv2/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"){
    // console.log("estoy dentro de una pelicula")
    // si funca
    // delete styles.header.backgroundImage
    // console.log(styles)
    // styles.header.backgroundColor="rgb(8 15 40 / 68%)" 


   //}

  return (
    <div style={styles.header}>
      <ContextoBackground.Provider value={{ appTheme, setappTheme }}>
        <RoutesApp />
      </ContextoBackground.Provider>
    </div>
  );
}

export default App;
