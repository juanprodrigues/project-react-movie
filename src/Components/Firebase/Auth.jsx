import React, { useState } from "react";
import "./estilosLogin.css";
import { app } from "./fb";
import Ingresar from "./Ingresar";
import Registrar from "./Registrar";

const Auth = (props) => {
  console.log(props.setUsuario);
  let [authMode, setAuthMode] = useState(true);
  //--------------------------Firebase--------------------------------------------------------
  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      })
      .catch(() => {
        //mostrar algo que represente que el inicio fallo
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target[0].value;
    const password = e.target[1].value;

    if (authMode === false) {
      crearUsuario(correo, password);
    }

    if (authMode === true) {
      iniciarSesion(correo, password);
    }
  };
  //------------------------------------------------------------------------------------------
  const changeAuthMode = () => {
    setAuthMode(authMode === true ? false : true);
  };

  if (authMode === true) {
    return (
      <>
        <Ingresar
          submitHandler={submitHandler}
          changeAuthMode={changeAuthMode}
        />
      </>
    );
  }

  return (
    <>
      <Registrar
        changeAuthMode={changeAuthMode}
        submitHandler={submitHandler}
      />
    </>
  );
};
export default Auth;
