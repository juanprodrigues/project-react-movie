import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import Peliculas from "../Components/Header/Peliculas";
import Carrito from "../Components/Header/Carrito";
import Registrate from "../Components/Header/Registrate";
import { Home } from "../Components/Main/Home";
import Detalles from "../Components/Carts/Detalles";
import Error from "../Components/Utils/Error";
import AppFirebase from "../Components/Firebase/AppFirebase";
import Generos from "../Components/Header/Generos";
import Test from "./Test";

const RoutesApp = () => {
  return (
    <div>
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
            element={<AppFirebase />}
          />
          <Route path="/carrito" caseSensitive={false} element={<Carrito />} />
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
          <Route path="genero/:id" element={<Generos />}></Route>

          <Route path="search/:name" element={<Test />}></Route>

          {/* en elcaso que no se encuentre redireciona a un 404 */}
          <Route
            path="*"
            // caseSensitive={false}
            element={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesApp;
