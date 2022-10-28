import React from "react";

const Ingresar = ({submitHandler,changeAuthMode}) => {
  return (
    <div className="Auth-form-container">
      <form onSubmit={submitHandler} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Ingresar</h3>
          <div className="text-center">
            No estas registrado aun?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Registrate
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              htmlFor="emailField"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              htmlFor="passwordField"
              type="password"
              id="passwordField"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Ingresar;
