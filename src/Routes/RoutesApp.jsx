import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import Peliculas from "../Components/Header/Peliculas";
import Ingresar from "../Components/Header/Ingresar";
import Carrito from "../Components/Header/Carrito";
import Registrate from "../Components/Header/Registrate";
import { Home } from "../Components/Main/Home";
import Detalles from "../Components/Carts/Detalles";
import Error from "../Components/Utils/Error";
import { ConnectedRouter } from "react-router-redux";

// export const history = createHistory();
// history.listen((location, action) => {
//   window.scrollTo(0, 0);
// });
const RoutesApp = () => {
  return (
    <div>
      {/* <ConnectedRouter history={history}> */}
        <Router>
          <Header />
          <Routes>
            <Route
              path="/peliculas"
              caseSensitive={false}
              element={<Peliculas />}
            />
            <Route
              path="/ingresar"
              caseSensitive={false}
              element={<Ingresar />}
            />
            <Route
              path="/carrito"
              caseSensitive={false}
              element={<Carrito />}
            />
            <Route
              path="/registrate"
              caseSensitive={false}
              element={<Registrate />}
            />

            <Route
              path="/"
              // caseSensitive={false}
              element={<Home />}
            />
            <Route path="detalles/:id" element={<Detalles />}></Route>
            {/* en elcaso que no se encuentre redireciona a un 404 */}
            <Route
              path="*"
              // caseSensitive={false}
              element={<Error />}
            />
          </Routes>
        </Router>
      {/* </ConnectedRouter> */}
    </div>
  );
};

export default RoutesApp;
