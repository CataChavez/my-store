import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";


const LoginStore = () => {
  const [storeMail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory("/")


  const handlerOnSubmit = (event) => {

  }

  return (
    <div className="container">
    <div className="row justify-content-around p-5">
      <div className="col-md-8 p-2">
        <div className="card card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Mail emprendimiento</label>
              <input 
              type="text" 
              className="form-control" 
              onChange={event => setMail(event.target.value)}
              value={storeMail}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={event => setPassword(event.target.value)}
                value={password}  
              />
              <div id="emailHelp" className="form-text">
                No compartiremos tu email con nadie.
              </div>
            </div>
            <div >
              <button onClick={handlerOnSubmit} type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>

  );
};

export default LoginStore;
