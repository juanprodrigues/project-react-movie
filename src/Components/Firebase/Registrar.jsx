import React from "react";

const Registrar = ({changeAuthMode,submitHandler,errorFirebase}) => {
  return (
    <div className="Auth-form-container">
      <form onSubmit={submitHandler} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrate</h3>
          <div className="text-center">
            Ya estas registrado?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Ingresar
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              htmlFor="emailField"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              htmlFor="passwordField"
              type="password"
              id="passwordField"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label> Repeat Password</label>
            <input
              htmlFor="passwordField"
              type="password"
              id="passwordField"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrate
            </button>
            <div style={{color:"red"}}>
              {errorFirebase}
            </div>
          </div>
        </div>
        
      </form>
      
    </div>
  );
};

export default Registrar;
