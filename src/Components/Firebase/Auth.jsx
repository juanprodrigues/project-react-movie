import React, { useContext, useState } from "react";
import { ContextoUser } from "../../Contexto/ContextoUser";
import "./estilosLogin.css";
import { app } from "./fb";
import Ingresar from "./Ingresar";
import Registrar from "./Registrar";

const Auth = (props) => {
  const ctx = useContext(ContextoUser);
  let [authMode, setAuthMode] = useState(true);
  const [errorFirebase, setErrorFirebase] = useState("");
  //--------------------------Firebase--------------------------------------------------------
  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        props.setUsuario(usuarioFirebase);
      })
      .catch((e) => {
        let cadena = e.message.split(":");
        let cadena1 = cadena[1].split("(");
        setErrorFirebase(cadena1[0]);
      });
  };
  function alertCorreo() {
    alert("este correo ya exsite");
  }
  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
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
    const passwordConfirmation = e.target[2].value;

    if (authMode === false) {
      if (correo === "" && passwordConfirmation === "" && password === "") {
        setErrorFirebase("Correo and password are empty.");
      } else if (correo === "") {
        setErrorFirebase("Correo is Empty.");
      } else if (passwordConfirmation === "" || password === "") {
        setErrorFirebase("The passwords is empty.");
      } else if (passwordConfirmation !== password) {
        setErrorFirebase("The passwords entered do not match.");
      } else {
        crearUsuario(correo, password);
        
      }
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
        errorFirebase={errorFirebase}
      />
    </>
  );
};
export default Auth;
