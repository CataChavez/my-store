import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { storeLogin } from "../../store/login/actions";
import { useHistory } from "react-router";


const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password:""
  });
  
  const dispatch = useDispatch()
  const history = useHistory()

  const handlerInputChange = async (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handlerSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(storeLogin(form));
    },
    [dispatch, form]
  )

  const handlerView = () => {
    history.push('/owner')
  }

  return (
    <div className="container">
    <div className="row justify-content-around p-5">
      <div className="col-md-6 p-2">
        <div className="card card-body">
          <form noValidate autoComplete="off" onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">Mail emprendimiento</label>
              <input
              id="email"
              name="email" 
              className="form-control"
              placeholder="contacto@manolospizza.com"
              onChange={handlerInputChange}
              value={form.email}
              type="email"
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="abc123"
                className="form-control"
                onChange={handlerInputChange}
                value={form.password}  
              />
            </div>
            <div >
              <button
              onClick={handlerView}
              id="buttonSubmit" 
              type="submit" 
              className="btn btn-primary"
              >
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

export default LoginForm;